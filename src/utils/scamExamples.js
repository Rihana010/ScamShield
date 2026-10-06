/**
 * Preset test cases for ScamShield verification
 */

export const SAMPLE_CASES = [
  {
    id: 'digital-arrest',
    title: 'Digital Arrest Call Transcript',
    category: 'Fake Law Enforcement',
    type: 'transcript',
    text: `This is Inspector Sharma from Cyber Crime Branch Delhi. A illegal parcel containing 5 passports and 200g MDMA was seized at Mumbai Customs sent under your Aadhaar name. An FIR has been registered. You are put under Digital Arrest immediately. Do not hang up or turn off your Skype camera. You must transfer ₹1,500,000 security deposit to the RBI Safe Account within 2 hours or police will raid your house.`,
  },
  {
    id: 'bank-otp-phishing',
    title: 'Bank Account Blocked SMS',
    category: 'Banking Phishing',
    type: 'sms',
    text: `URGENT ALERT: Your SBI NetBanking account has been SUSPENDED due to incomplete e-KYC verification. Complete your KYC within 24 hours to avoid permanent deactivation. Click here to verify now: http://sbi-kyc-update.xyz/login. Enter your card details and OTP to restore access immediately.`,
  },
  {
    id: 'courier-customs',
    title: 'Fake FedEx / Customs Link',
    category: 'Courier Scam',
    type: 'sms',
    text: `FedEx Notification: Your international shipment #FX-88492 cannot be delivered due to address mismatch & pending customs duty of ₹1,499. Pay immediately via http://bit.ly/fedex-customs-pay or your parcel will be destroyed within 12 hours.`,
  },
  {
    id: 'youtube-task-scam',
    title: 'YouTube Like Job Offer',
    category: 'Job & Investment',
    type: 'whatsapp',
    text: `Hi! I am Priya from Global Media HR. Earn ₹3,000 to ₹8,000 daily by simply liking YouTube videos from home! No experience required. We pay instant bonus of ₹500 directly to your UPI. Reply YES to join our official Telegram group: https://rb.gy/yt-jobs-2026`,
  },
  {
    id: 'legitimate-sms',
    title: 'Legitimate Bank SMS (Safe)',
    category: 'Legitimate',
    type: 'sms',
    text: `Dear Customer, ₹450.00 has been debited from your HDFC Bank A/c ending 4821 on 06-OCT-26 at Star Supermarket via UPI. Total Available Bal: ₹24,150.20. If not done by you, call 18002586161 or visit hdfcbank.com.`,
  },
];
