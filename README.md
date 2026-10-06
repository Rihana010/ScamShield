# 🛡️ ScamShield — AI Cyber Fraud & Phishing Detection Engine

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side-10B981)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**ScamShield** is a production-grade, forensic-heuristic security platform designed to evaluate suspicious SMS alerts, extortion call transcripts (*"Digital Arrest"*), bank OTP traps, job lure schemes, and malicious URLs in real time.

Designed with a modern **Sonivale Spatial Aesthetic** (Clean White primary theme + seamless Deep Midnight Violet Dark Mode toggle), ScamShield operates 100% client-side to guarantee zero data collection and instant response times.

---

## ✨ Features & Capabilities

- 🔍 **Interactive Risk Checker**: Paste raw text, SMS, phone transcripts, or URLs to run instant heuristic threat scoring (0-100) with detailed red flag explanations.
- ⚡ **Preset Sample Cases**: One-click verification for *Digital Arrest Call Scripts*, *Bank OTP SMS*, *Fake Courier Links*, *YouTube Task Scams*, and *Legitimate Bank SMS*.
- 🌓 **Dual Theme Engine (Sonivale Style)**:
  - **Light Mode (Default)**: Off-white canvas (`#fcfcfd`) with soft violet ambient radial aura.
  - **Dark Mode**: Deep Midnight Violet theme (`#090a10` / `#131124`) toggled via a glass navbar pill button.
- 📊 **"BY THE NUMBERS" & Features Toolkit**: Displays real-time heuristic metrics, rule vectors, and technical capabilities.
- 🎯 **Evaluated Cyber Safety Quiz**: Interactive 3-question quiz providing instant post-submission correctness feedback, green/red highlight badges, and detailed safety explanations for wrong choices.
- 🚨 **Emergency Cyber Crime Helpline**: Direct access to National Helpline **1930** and [cybercrime.gov.in](https://cybercrime.gov.in).
- 🔒 **100% Privacy Preservation**: All processing occurs locally in browser RAM using client-side JavaScript regex and string parsing algorithms. No data is ever logged to servers.

---

## 🧠 Heuristic Detection Engine Architecture

The detection module (`src/utils/detectionEngine.js`) evaluates input text against 50+ threat patterns across 6 categories:

$$\text{Threat Score} = \min\left(100, \sum w_i \cdot R_i\right)$$

| Category | Description | Sample Triggers / Heuristics | Weight |
| :--- | :--- | :--- | :--- |
| **Urgency & Threat** | Extortion & pressure tactics | `"within 24 hours"`, `"account suspended"`, `"Digital Arrest"`, `"CBI / Police"` | High (12-25) |
| **Sensitive Demands** | Banking & identity credential traps | `"OTP"`, `"UPI PIN"`, `"Aadhaar"`, `"transfer to safe account"` | Critical (18-25) |
| **Impersonation** | Authority & brand forgery | `"Customs Officer"`, `"FedEx"`, `"SBI NetBanking"`, `"TRAI"` | High (15-22) |
| **Lure Schemes** | Low-effort high-pay lures | `"like YouTube videos"`, `"guaranteed 100% returns"`, `"instant loan"` | Medium (16-22) |
| **URL Anomalies** | Link obfuscation & domain tricks | `bit.ly`, `tinyurl`, raw IP addresses (`192.168.x.x`), `.xyz` TLDs, typosquatting (`arnazon`) | Critical (15-30) |
| **Channel Anomalies** | Informal media for official claims | WhatsApp/Skype video calls for legal warrants, foreign dial codes (`+92`, `+84`) | Critical (18-20) |

---

## 📂 Repository Structure

```
ScamShield/
├── public/
│   └── hero_glass_shield.jpg   # 3D spatial glass visual asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Floating glass header with Dark Mode toggle
│   │   ├── HeroSection.jsx     # Sonivale display headline & orbiting alert pills
│   │   ├── CheckerSection.jsx  # Interactive risk engine & dynamic result card
│   │   ├── StatsSection.jsx    # "BY THE NUMBERS" stat counter & feature cards
│   │   ├── HowItWorks.jsx      # 4-stage pipeline visualization
│   │   ├── CommonScams.jsx     # Cybercrime pattern catalog & script inspector
│   │   ├── AwarenessTips.jsx   # Safety guide & evaluated interactive quiz
│   │   └── Footer.jsx          # Official helpline info & giant brand wordmark
│   ├── context/
│   │   └── ThemeContext.jsx    # React Context provider for Light/Dark mode
│   ├── utils/
│   │   ├── detectionEngine.js  # Core rule-based forensic analysis module
│   │   └── scamExamples.js     # Preset test cases for quick verification
│   ├── App.jsx                 # Master application layout
│   ├── index.css               # Tailwind CSS v4 directives & custom tokens
│   └── main.jsx                # React root entrypoint
├── index.html                  # SEO tags & Google Fonts (Outfit, Plus Jakarta Sans)
├── postcss.config.js           # PostCSS setup for Tailwind v4
├── vite.config.js              # Vite bundler configuration
└── package.json                # Dependencies & script commands
```

---

## 🚀 Quickstart & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) `v18.0.0` or higher
- `npm` `v9.0.0` or higher

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ScamShield.git
   cd ScamShield
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` or `http://127.0.0.1:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📤 How to Push to GitHub

Follow these simple terminal commands to upload this codebase to your GitHub repository:

```bash
# 1. Initialize Git repository (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit changes
git commit -m "Initial commit: Complete ScamShield AI Web Application"

# 4. Create a main branch
git branch -M main

# 5. Link your GitHub repository URL
git remote add origin https://github.com/your-username/ScamShield.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🎓 Academic Defense & Project Viva Guide

When presenting ScamShield for academic evaluation or project defense:

1. **Stateless Privacy Paradigm**: Explain that conventional security scanners transmit sensitive user messages to cloud servers. ScamShield performs all regular expression matching and URL parsing locally inside the browser DOM.
2. **Multi-Vector Risk Aggregation**: Highlight how the algorithm prevents false positives by requiring cumulative evidence across urgency, identity demands, and domain obfuscation before marking a message as High Risk.
3. **Addressing Modern Extortion ("Digital Arrest")**: Explain how ScamShield addresses the rising threat of video call extortion by flagging non-disconnect demands and illegal package claims.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
