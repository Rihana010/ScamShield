/**
 * ScamShield Core Detection Engine
 * Academic & Forensic-grade Heuristic & Rule-Based Scam Detection Module
 * 
 * Performs multi-layered analysis on suspicious messages, phone call transcripts,
 * SMS notifications, and web URLs.
 */

// 1. DANGEROUS / URGENCY PATTERNS
const URGENCY_PATTERNS = [
  { regex: /act (now|immediately|fast|today)/i, score: 12, label: 'Immediate Action Demand', category: 'Urgency' },
  { regex: /within (24|12|2|1|48) (hours|hrs|mins|minutes)/i, score: 15, label: 'Strict Time Limit Restriction', category: 'Urgency' },
  { regex: /(account|card|sim|connection|service) (will be|has been|is) (suspended|blocked|terminated|deactivated|frozen|cancelled)/i, score: 18, label: 'Account Suspension Threat', category: 'Urgency' },
  { regex: /(legal action|arrest warrant|court order|police case|fir registered|narcotics dept|cyber cell|cbi|ed investigation)/i, score: 25, label: 'Legal or Law Enforcement Threat (Digital Arrest Indicator)', category: 'Urgency' },
  { regex: /(do not (hang up|disconnect)|stay on (call|camera|skype|video))/i, score: 25, label: 'Coercive Call Isolation (Digital Arrest Technique)', category: 'Urgency' },
  { regex: /(urgent|final warning|immediate attention|last chance)/i, score: 10, label: 'High-Pressure Language', category: 'Urgency' },
];

// 2. FINANCIAL & SENSITIVE CREDENTIAL REQUESTS
const SENSITIVE_INFO_PATTERNS = [
  { regex: /\b(otp|one time password|verification code)\b/i, score: 25, label: 'OTP / Verification Code Request', category: 'Sensitive Request' },
  { regex: /\b(pin|cvv|atm pin|upi pin|password)\b/i, score: 25, label: 'Banking Credential / PIN Request', category: 'Sensitive Request' },
  { regex: /\b(aadhaar|pan card|passport|ssn|social security)\b/i, score: 18, label: 'National ID / Sensitive Identity Document Request', category: 'Sensitive Request' },
  { regex: /(transfer|deposit|pay) (money|funds|amount|fine|bail|security deposit|clearance fee)/i, score: 22, label: 'Direct Fund Transfer / Deposit Demand', category: 'Sensitive Request' },
  { regex: /(safe account|rbp account|government account|reserve account)/i, score: 25, label: 'Coerced Transfer to "Safe" Account (Classic Scam Pattern)', category: 'Sensitive Request' },
  { regex: /(claim refund|tax refund|cashback|bonus credit)/i, score: 15, label: 'Financial Bait / Unsolicited Refund Offer', category: 'Sensitive Request' },
];

// 3. IMPERSONATION PATTERNS
const IMPERSONATION_PATTERNS = [
  { regex: /(cbi|crime branch|cyber crime|police department|trai|customs officer|narcotics bureau|ed bureau)/i, score: 22, label: 'Law Enforcement / Government Impersonation', category: 'Impersonation' },
  { regex: /(fedex|bluedart|dhl|courier|customs package|parcel held|seized package)/i, score: 20, label: 'Courier / Customs Impersonation', category: 'Impersonation' },
  { regex: /(sbi|hdfc|icici|axis bank|rbi|reserve bank|central bank)/i, score: 18, label: 'Financial Institution Impersonation', category: 'Impersonation' },
  { regex: /(telecom authority|sim verification|e-kyc|kyc expired|kyc update)/i, score: 18, label: 'Telecom / KYC Verification Scam', category: 'Impersonation' },
  { regex: /(amazon|flipkart|netflix|apple support|microsoft support)/i, score: 15, label: 'Tech / E-Commerce Brand Impersonation', category: 'Impersonation' },
];

// 4. TOO-GOOD-TO-BE-TRUE & SCHEME OFFERS
const OFFERS_PATTERNS = [
  { regex: /(won|winner|lottery|lucky draw|prize money|congratulations you have won)/i, score: 22, label: 'Unsolicited Lottery / Prize Claim', category: 'Lure Scheme' },
  { regex: /(like youtube videos|part-time job|earn ₹\d+|daily income ₹\d+|work from home)/i, score: 20, label: 'Task-Based Work-From-Home Scam', category: 'Lure Scheme' },
  { regex: /(guaranteed return|100% risk free|double your money|crypto investment opportunity)/i, score: 22, label: 'Fraudulent Investment Scheme', category: 'Lure Scheme' },
  { regex: /(instant loan|no documentation|pre-approved loan|loan sanctioned)/i, score: 16, label: 'Unverified Instant Loan Trap', category: 'Lure Scheme' },
];

// 5. SUSPICIOUS URL & TECHNICAL ANOMALIES
const KNOWN_SHORTENERS = ['bit.ly', 'tinyurl.com', 'is.gd', 'cutt.ly', 'rb.gy', 't.co', 'shorturl.at', 'ow.ly', 'tiny.cc'];
const HIGH_RISK_TLDS = ['.xyz', '.top', '.tk', '.ml', '.ga', '.cf', '.gq', '.site', '.online', '.club', '.work', '.vip', '.icu', '.buzz', '.fit', '.cfd'];
const BRAND_TYPOS = [
  { target: 'amazon', fakes: ['arnazon', 'amaz0n', 'amazn', 'amz-security'] },
  { target: 'paypal', fakes: ['paypaI', 'paypa1', 'pay-pal', 'paypaii'] },
  { target: 'google', fakes: ['g00gle', 'googl3', 'gogle', 'goog-le'] },
  { target: 'sbi', fakes: ['sbi-kyc', 'sbi-update', 'onlinesbi-verify', 'sbi-net'] },
  { target: 'hdfc', fakes: ['hdfc-bank-net', 'hdfc-kyc', 'hdfc-verify'] },
  { target: 'icici', fakes: ['icici-login', 'icici-update', 'icicibank-net'] },
];

/**
 * Main analyze function
 * @param {string} text - User input text or URL
 * @returns {object} Standardized risk analysis object
 */
export function analyzeScam(text) {
  if (!text || text.trim().length === 0) {
    return null;
  }

  const normalizedText = text.trim();
  let totalScore = 0;
  const redFlags = [];
  const positiveIndicators = [];

  // Category score counters
  let urgencyScore = 0;
  let sensitivityScore = 0;
  let impersonationScore = 0;
  let urlScore = 0;
  let lureScore = 0;

  // 1. Test Urgency Patterns
  URGENCY_PATTERNS.forEach((rule) => {
    if (rule.regex.test(normalizedText)) {
      urgencyScore += rule.score;
      redFlags.push({
        title: rule.label,
        category: rule.category,
        severity: rule.score >= 20 ? 'critical' : 'warning',
        description: `Text matches urgency indicator triggering high pressure tactics.`,
      });
    }
  });

  // 2. Test Sensitive Info Patterns
  SENSITIVE_INFO_PATTERNS.forEach((rule) => {
    if (rule.regex.test(normalizedText)) {
      sensitivityScore += rule.score;
      redFlags.push({
        title: rule.label,
        category: rule.category,
        severity: 'critical',
        description: `Direct request for confidential personal, financial, or security authentication credentials.`,
      });
    }
  });

  // 3. Test Impersonation Patterns
  IMPERSONATION_PATTERNS.forEach((rule) => {
    if (rule.regex.test(normalizedText)) {
      impersonationScore += rule.score;
      redFlags.push({
        title: rule.label,
        category: rule.category,
        severity: rule.score >= 20 ? 'critical' : 'warning',
        description: `Claims affiliation with high-trust institution to manipulate credibility.`,
      });
    }
  });

  // 4. Test Scheme & Offer Patterns
  OFFERS_PATTERNS.forEach((rule) => {
    if (rule.regex.test(normalizedText)) {
      lureScore += rule.score;
      redFlags.push({
        title: rule.label,
        category: rule.category,
        severity: 'warning',
        description: `Presents unrealistic financial returns, prizes, or low-effort high-pay lures.`,
      });
    }
  });

  // 5. URL & Link Analysis
  const urlMatches = normalizedText.match(/(https?:\/\/[^\s]+)/gi) || [];
  if (urlMatches.length > 0) {
    urlMatches.forEach((urlStr) => {
      try {
        const urlObj = new URL(urlStr);
        const hostname = urlObj.hostname.toLowerCase();

        // Check Shortener
        if (KNOWN_SHORTENERS.some((short) => hostname.includes(short))) {
          urlScore += 25;
          redFlags.push({
            title: `Shortened / Obfuscated Link (${hostname})`,
            category: 'URL Risk',
            severity: 'critical',
            description: `URL shorteners hide the real destination, commonly used to bypass security scanners.`,
          });
        }

        // Check Raw IP
        if (/^(\d{1,3}\.){3}\d{1,3}$/.test(hostname)) {
          urlScore += 30;
          redFlags.push({
            title: `Raw IP Address Hostname (${hostname})`,
            category: 'URL Risk',
            severity: 'critical',
            description: `Legitimate institutions never use raw IP addresses for consumer links.`,
          });
        }

        // Check High Risk TLD
        if (HIGH_RISK_TLDS.some((tld) => hostname.endsWith(tld))) {
          urlScore += 22;
          redFlags.push({
            title: `Unusual / High-Risk Domain Extension (${hostname})`,
            category: 'URL Risk',
            severity: 'critical',
            description: `Uses a cheap, low-trust top-level domain frequently associated with automated phishing kits.`,
          });
        }

        // Typosquatting Check
        BRAND_TYPOS.forEach(({ target, fakes }) => {
          fakes.forEach((fake) => {
            if (hostname.includes(fake)) {
              urlScore += 30;
              redFlags.push({
                title: `Brand Impersonation Domain (${hostname})`,
                category: 'URL Risk',
                severity: 'critical',
                description: `Domain mimics legitimate brand "${target.toUpperCase()}" using character tricks (typosquatting).`,
              });
            }
          });
        });

        // Excessive Subdomains
        const subParts = hostname.split('.');
        if (subParts.length > 4) {
          urlScore += 18;
          redFlags.push({
            title: `Excessive Subdomain Nesting (${hostname})`,
            category: 'URL Risk',
            severity: 'warning',
            description: `Deeply nested subdomains are often crafted to mimic official URLs on mobile browser address bars.`,
          });
        }

        // Non-HTTPS
        if (urlObj.protocol === 'http:') {
          urlScore += 15;
          redFlags.push({
            title: `Unencrypted HTTP Connection`,
            category: 'URL Risk',
            severity: 'warning',
            description: `Link does not use SSL/TLS encryption (HTTPS), exposing transmitted data.`,
          });
        }
      } catch (err) {
        // Plain domain string without protocol check
      }
    });
  }

  // 6. Contact Method Anomalies (e.g. WhatsApp for legal notice or foreign dial code for Indian authority)
  if (/(whatsapp|telegram|skype) (call|video|message|notice)/i.test(normalizedText)) {
    impersonationScore += 20;
    redFlags.push({
      title: 'Informal Messaging Platform for Official Notice',
      category: 'Channel Anomaly',
      severity: 'critical',
      description: 'Official police, tax, or banking authorities never issue legal warrants or notices via WhatsApp, Telegram, or Skype.',
    });
  }

  if (/\+(92|84|63|234|94)\s?\d+/i.test(normalizedText)) {
    impersonationScore += 18;
    redFlags.push({
      title: 'Foreign Country Phone Code for Local Authority Claim',
      category: 'Channel Anomaly',
      severity: 'critical',
      description: 'Communication originates from an international dialing code while claiming to represent local domestic authorities.',
    });
  }

  // Calculate Aggregated Score (Capped at 100)
  totalScore = Math.min(100, urgencyScore + sensitivityScore + impersonationScore + urlScore + lureScore);

  // Assess Positive Indicators if score is low
  if (totalScore < 15) {
    if (/https:\/\/[a-z0-9-]+\.(gov|in|com|org|edu)\b/i.test(normalizedText) && !urlMatches.some(u => KNOWN_SHORTENERS.some(s => u.includes(s)))) {
      positiveIndicators.push({
        title: 'Standard Secure Protocol (HTTPS)',
        description: 'Contains standard encrypted link format without known shorteners.',
      });
    }
    if (!/(urgent|act now|suspended|immediately|otp|cvv|arrest)/i.test(normalizedText)) {
      positiveIndicators.push({
        title: 'Absence of Coercive Pressure',
        description: 'Text does not contain high-pressure deadline or punitive threat language.',
      });
    }
    if (positiveIndicators.length === 0) {
      positiveIndicators.push({
        title: 'Clean Text Pattern',
        description: 'No known phishing keywords, credential traps, or suspicious link structures identified.',
      });
    }
  }

  // Determine Risk Level & Verdict
  let riskLevel = 'LOW';
  let verdictSummary = 'This message displays typical safe characteristics with no immediate scam indicators detected.';
  
  if (totalScore >= 70) {
    riskLevel = 'HIGH';
    verdictSummary = 'CRITICAL RISK: Highly likely to be a dangerous scam, phishing attempt, or extortion scheme. Do not click links or share details.';
  } else if (totalScore >= 30) {
    riskLevel = 'MEDIUM';
    verdictSummary = 'SUSPICIOUS: Contains multiple warning signs common in fraudulent messages. Exercise extreme caution and verify independently.';
  }

  // Format Recommendation Steps
  const recommendations = [];
  if (riskLevel === 'HIGH') {
    recommendations.push('Do NOT click any embedded links or open attachments.');
    recommendations.push('Never share OTPs, PINs, passwords, or personal identity numbers.');
    if (redFlags.some(f => f.title.includes('Digital Arrest') || f.title.includes('Law Enforcement'))) {
      recommendations.push('Remember: Police or Enforcement agencies NEVER demand video call isolation or money transfer to "safe accounts".');
    }
    recommendations.push('Report this incident to the National Cyber Crime Portal (cybercrime.gov.in) or call Helpline 1930.');
    recommendations.push('Block the sender number or email immediately.');
  } else if (riskLevel === 'MEDIUM') {
    recommendations.push('Verify the claim directly through the official app or website — never use provided links.');
    recommendations.push('Call the official customer care number listed on your bank card or official website.');
    recommendations.push('Avoid sharing sensitive personal information over SMS or unverified chats.');
  } else {
    recommendations.push('Always maintain standard online security hygiene.');
    recommendations.push('Verify sensitive transactions directly with trusted service providers.');
  }

  return {
    score: totalScore,
    riskLevel,
    verdictSummary,
    redFlags,
    positiveIndicators,
    categoryScores: {
      urgency: Math.min(100, urgencyScore * 2.5),
      sensitivity: Math.min(100, sensitivityScore * 2.5),
      impersonation: Math.min(100, impersonationScore * 2.5),
      urlSafety: Math.min(100, urlScore * 2.5),
    },
    recommendations,
    timestamp: new Date().toISOString(),
  };
}
