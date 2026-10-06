import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Link, Lock, ArrowRight } from 'lucide-react';

export default function StatsSection() {
  const scrollToChecker = () => {
    const el = document.getElementById('checker');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-[#0c0d16] border-t border-b border-zinc-200/60 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BY THE NUMBERS Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-6">
            BY THE NUMBERS
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <p className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                50<span className="text-purple-600 dark:text-purple-400">+</span>
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-2">
                Heuristic Threat Rules
              </p>
            </div>

            <div>
              <p className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                100<span className="text-purple-600 dark:text-purple-400">%</span>
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-2">
                Client-Side Privacy
              </p>
            </div>

            <div>
              <p className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                0<span className="text-purple-600 dark:text-purple-400">ms</span>
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-2">
                Data Server Latency
              </p>
            </div>

            <div>
              <p className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                4.9<span className="text-purple-600 dark:text-purple-400">/5</span>
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-2">
                Forensic Reliability
              </p>
            </div>
          </div>
        </div>

        {/* 3 Sonivale Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between sonivale-card">
            <div>
              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-4">
                Digital Arrest & Coercion
              </h3>

              {/* Sonivale Preview Widget */}
              <div className="p-4 rounded-2xl bg-zinc-900 dark:bg-[#090a10] text-white mb-5 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-1.5 text-rose-400 font-mono font-bold">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    COERCION FLAG
                  </span>
                  <span className="bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold">
                    CRITICAL
                  </span>
                </div>
                <p className="text-xs italic text-zinc-300 font-mono">
                  "Do not disconnect camera. Transfer ₹1.5L security deposit immediately..."
                </p>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Detects coercive video call demands, fake police warrants, and illegal parcel threats.
              </p>
            </div>

            <button
              onClick={scrollToChecker}
              className="text-xs font-bold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
            >
              <span>Test Case Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between sonivale-card">
            <div>
              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-4">
                Typosquatting & Fake Links
              </h3>

              {/* Sonivale Preview Widget */}
              <div className="p-4 rounded-2xl bg-zinc-900 dark:bg-[#090a10] text-white mb-5 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-1.5 text-amber-400 font-mono font-bold">
                    <Link className="w-3.5 h-3.5" />
                    DOMAIN ANOMALY
                  </span>
                  <span className="bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold">
                    SUSPICIOUS
                  </span>
                </div>
                <p className="text-xs font-mono text-amber-300">
                  http://arnazon-reward.xyz/login
                </p>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Identifies obfuscated shorteners, raw IP hostnames, and character typosquatting.
              </p>
            </div>

            <button
              onClick={scrollToChecker}
              className="text-xs font-bold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
            >
              <span>Verify Link</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between sonivale-card">
            <div>
              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-4">
                OTP & Credential Traps
              </h3>

              {/* Sonivale Preview Widget */}
              <div className="p-4 rounded-2xl bg-zinc-900 dark:bg-[#090a10] text-white mb-5 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-1.5 text-purple-400 font-mono font-bold">
                    <Lock className="w-3.5 h-3.5" />
                    CREDENTIAL RISK
                  </span>
                  <span className="bg-purple-950 text-purple-300 px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold">
                    PROTECTED
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-mono">
                  "Enter NetBanking password & OTP to unblock account..."
                </p>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Prevents unauthorized disclosure of banking credentials, OTPs, and Aadhaar numbers.
              </p>
            </div>

            <button
              onClick={scrollToChecker}
              className="text-xs font-bold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
            >
              <span>Scan SMS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
