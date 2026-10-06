import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertOctagon, ShieldAlert, PhoneCall, CreditCard, 
  Package, Briefcase, DollarSign, Monitor, CornerDownRight, Check
} from 'lucide-react';

export default function CommonScams() {
  const [activeScamId, setActiveScamId] = useState('digital-arrest');

  const SCAM_PATTERNS = [
    {
      id: 'digital-arrest',
      title: 'Digital Arrest & Law Impersonation',
      icon: PhoneCall,
      riskLevel: 'HIGH',
      badgeColor: 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-900',
      summary: 'Scammers impersonate CBI, Police, TRAI, or Customs officers over Skype or WhatsApp video calls, falsely claiming a legal warrant or seized illegal parcel.',
      exampleQuote: '"This is Inspector Cyber Cell. A package with 5 passports and illegal narcotics was seized under your name. Stay on video camera or face immediate arrest."',
      redFlags: [
        'Demand to stay on video camera without disconnecting ("Digital Arrest")',
        'Threats of immediate home raid by law enforcement',
        'Request to transfer funds to a "Government RBI Safe Account" for verification',
        'Official notices issued over Skype or WhatsApp video calls instead of written legal summons'
      ],
      prevention: 'Hang up immediately. Government & Police agencies NEVER conduct judicial proceedings via video calls or demand money transfers over the phone.'
    },
    {
      id: 'bank-kyc',
      title: 'Bank & e-KYC Account Lock',
      icon: CreditCard,
      riskLevel: 'HIGH',
      badgeColor: 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-900',
      summary: 'SMS claiming your bank account or SIM card will be blocked within 24 hours unless you click an unverified link to update e-KYC.',
      exampleQuote: '"URGENT: Your SBI account is suspended due to pending KYC. Click http://sbi-update.xyz to verify card details & OTP now."',
      redFlags: [
        'Artificial 24-hour deadline creating panic',
        'Links pointing to strange domains (e.g., .xyz, .site instead of official .com/.in)',
        'Form asking for ATM PIN, CVV, NetBanking Password, or OTP'
      ],
      prevention: 'Banks never send SMS links for KYC updates. Always log in directly through your official banking app or contact your branch.'
    },
    {
      id: 'courier-customs',
      title: 'Fake Courier & Customs Duty',
      icon: Package,
      riskLevel: 'MEDIUM',
      badgeColor: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900',
      summary: 'Fake messages claiming an international package from FedEx, DHL, or India Post is held due to pending customs duty or wrong address.',
      exampleQuote: '"FedEx Alert: Parcel #88192 delivery failed due to address error & ₹1,499 customs fee. Pay via http://bit.ly/courier-pay."',
      redFlags: [
        'Uses shortened URLs (bit.ly, tinyurl) hiding destination domain',
        'Small fee demand (₹500 - ₹2,000) to lower victim suspicion',
        'Unsolicited package notice when you haven’t ordered international items'
      ],
      prevention: 'Verify tracking numbers directly on the official courier website (e.g. fedex.com). Never pay delivery fees via SMS links.'
    },
    {
      id: 'task-job',
      title: 'YouTube Like & Telegram Job',
      icon: Briefcase,
      riskLevel: 'HIGH',
      badgeColor: 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-900',
      summary: 'WhatsApp job offers promising ₹3,000–₹8,000 daily for liking YouTube videos, eventually coercing victims into depositing money into crypto schemes.',
      exampleQuote: '"Earn ₹5,000 daily working from home! Simply like 3 YouTube videos and get instant ₹500 payout on Telegram."',
      redFlags: [
        'Unsolicited WhatsApp job messages from international numbers (+92, +84)',
        'Unrealistic pay for minimal effort (liking videos or rating Google maps)',
        'Demands victim to invest money to unlock higher tier payouts'
      ],
      prevention: 'Legitimate companies never pay employees to artificially boost YouTube likes or demand deposits for job tasks.'
    },
    {
      id: 'loan-app',
      title: 'Instant Loan App Blackmail',
      icon: DollarSign,
      riskLevel: 'HIGH',
      badgeColor: 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-900',
      summary: 'Unauthorized mobile loan apps offering instant loans without paperwork, then stealing phone contacts and morphing photos for extortion.',
      exampleQuote: '"Pre-approved loan of ₹50,000 credited instantly! Download app now. Failure to repay in 7 days will result in contact harassment."',
      redFlags: [
        'App requests permissions to access entire contact list, gallery, and SMS',
        'Exorbitant processing fees deducted upfront',
        'Short 7-day repayment window followed by threatening calls'
      ],
      prevention: 'Only take loans from RBI-registered banks and NBFCs. Never download loan APK files outside official app stores.'
    },
    {
      id: 'tech-support',
      title: 'Tech Support & Remote Access',
      icon: Monitor,
      riskLevel: 'MEDIUM',
      badgeColor: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900',
      summary: 'Fake browser popups claiming your computer is infected with viruses, directing you to call a fake Microsoft/Apple support number.',
      exampleQuote: '"CRITICAL VIRUS WARNING: Windows Defender detected Trojan virus. Call Microsoft Support immediately at 1-800-XXX-XXXX."',
      redFlags: [
        'Full-screen browser lockup with loud alert sounds',
        'Demand to install remote desktop access tools like AnyDesk or TeamViewer',
        'Request for payment to clean non-existent system threats'
      ],
      prevention: 'Close browser via Task Manager. Tech giants never post phone numbers in browser error popups demanding money.'
    }
  ];

  const activeScam = SCAM_PATTERNS.find(s => s.id === activeScamId) || SCAM_PATTERNS[0];

  return (
    <section id="scam-patterns" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-900 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-3 shadow-xs">
            <AlertOctagon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Cybercrime Modus Operandi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-sans">
            Common Scam Patterns
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Real-world extortion scripts, red flag indicators, and defensive actions.
          </p>
        </div>

        {/* Master-Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Selector */}
          <div className="lg:col-span-5 space-y-3">
            {SCAM_PATTERNS.map((scam) => {
              const IconComp = scam.icon;
              const isActive = scam.id === activeScamId;
              return (
                <button
                  key={scam.id}
                  onClick={() => setActiveScamId(scam.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-white dark:bg-[#131124] shadow-md border-zinc-300 dark:border-purple-600 scale-[1.01]'
                      : 'bg-white/60 dark:bg-[#131124]/50 hover:bg-white dark:hover:bg-[#131124] border-zinc-200/80 dark:border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                      isActive ? 'bg-zinc-900 dark:bg-purple-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isActive ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-zinc-300'}`}>
                        {scam.title}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        {scam.summary}
                      </p>
                    </div>
                  </div>
                  
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase shrink-0 ${scam.badgeColor}`}>
                    {scam.riskLevel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detail Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeScam.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/90 dark:border-zinc-800 shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Threat Profile
                  </span>
                  <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-0.5">
                    {activeScam.title}
                  </h3>
                </div>

                <span className={`px-3 py-1 text-xs font-extrabold rounded-full border uppercase ${activeScam.badgeColor}`}>
                  {activeScam.riskLevel} THREAT
                </span>
              </div>

              {/* Summary */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                {activeScam.summary}
              </p>

              {/* Script Quote */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 mb-6">
                <p className="text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Typical Scam Script Quote:</span>
                </p>
                <p className="text-xs italic text-amber-950 dark:text-amber-100 font-mono leading-relaxed">
                  {activeScam.exampleQuote}
                </p>
              </div>

              {/* Red Flags List */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Critical Red Flags:
                </h4>
                <div className="space-y-2">
                  {activeScam.redFlags.map((flag, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-800 dark:text-zinc-200">
                      <CornerDownRight className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                      <span>{flag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention Advice */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 text-xs">
                <p className="font-bold text-emerald-900 dark:text-emerald-200 mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Defensive Action:</span>
                </p>
                <p className="text-emerald-950 dark:text-emerald-100 leading-relaxed">
                  {activeScam.prevention}
                </p>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
