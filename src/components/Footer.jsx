import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#07080d] border-t border-zinc-200/80 dark:border-zinc-800/80 py-16 text-zinc-600 dark:text-zinc-400 text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Sonivale Brand Wordmark (Image 4 reference) */}
        <div className="mb-12 pb-10 border-b border-zinc-200 dark:border-zinc-800/80">
          <h2 className="text-5xl sm:text-8xl font-black tracking-tighter text-purple-600/15 dark:text-purple-400/15 uppercase font-sans select-none pointer-events-none">
            SCAMSHIELD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-200 dark:border-zinc-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-purple-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-white font-sans">
                Scam<span className="text-purple-600 dark:text-purple-400 font-normal">Shield</span>
              </span>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed max-w-md">
              Stateless heuristic threat analysis platform engineered to detect phishing SMS alerts, extortion call scripts, digital arrest coercion, and deceptive web links.
            </p>

            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
              Engine Version: v2.4-sonivale • Processing: 100% Client-Side
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">
              System Modules
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>
                <button onClick={() => scrollToSection('checker')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Risk Level Checker
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Detection Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('scam-patterns')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Common Scam Database
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('awareness-tips')} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Cyber Safety Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Official Cyber Helpline Info */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">
              Official Reporting
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              National Cyber Crime Reporting Portal:
            </p>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline block font-mono text-xs font-bold"
            >
              cybercrime.gov.in
            </a>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-1">
              National Helpline: <span className="text-rose-600 dark:text-rose-400 font-extrabold font-mono">1930</span>
            </p>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed text-center sm:text-left">
            Educational & Forensic Platform. ScamShield provides rule-based heuristic risk profiling and does not replace official law enforcement advice.
          </p>

          <button
            onClick={scrollToTop}
            className="btn-press px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5 shrink-0 cursor-pointer text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
}
