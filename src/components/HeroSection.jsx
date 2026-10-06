import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';

export default function HeroSection() {
  const scrollToChecker = () => {
    const el = document.getElementById('checker');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-transparent">
      
      {/* Central Sonivale Soft Violet Radial Aura (Image 1 reference) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] sonivale-glow-light dark:sonivale-glow-dark rounded-full blur-3xl pointer-events-none transition-colors" />

      {/* Thin Concentric Orbit Rings (Image 1 reference) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-200/40 dark:border-purple-900/30 rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-purple-100/30 dark:border-purple-900/20 rounded-full pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#131124] border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-8 shadow-sm"
        >
          <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          <span>Stateless AI Cyber Defense Engine</span>
        </motion.div>

        {/* Sonivale Headline (Image 1 style) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto font-sans"
        >
          Every scam, detected. <br />
          <span className="text-purple-600 dark:text-purple-400">Every threat, exposed.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-10 max-w-xl mx-auto"
        >
          ScamShield rethinks how cyber fraud is analyzed. Ingest suspicious SMS, extortion call transcripts, or links and let heuristic AI score risks instantly.
        </motion.p>

        {/* Action Pill Buttons (Sonivale style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-3 mb-16"
        >
          <button
            onClick={scrollToHowItWorks}
            className="btn-press px-6 py-3 rounded-full bg-white dark:bg-[#131124] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>See how it works</span>
          </button>
          
          <button
            onClick={scrollToChecker}
            className="btn-press px-7 py-3 rounded-full bg-zinc-900 dark:bg-purple-600 hover:bg-zinc-800 dark:hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Run Risk Scan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Floating Testimonial/Alert Pills Orbiting around center (Image 1 style) */}
        <div className="relative max-w-4xl mx-auto h-[160px] hidden md:block pointer-events-none">
          
          {/* Orbit Pill 1 - Top Left */}
          <div className="absolute top-0 left-4 bg-white/90 dark:bg-[#131124]/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 p-3 rounded-2xl shadow-md text-left text-xs max-w-xs animate-pulse">
            <p className="font-semibold text-zinc-900 dark:text-white">Digital Arrest Call Script</p>
            <p className="text-[11px] text-rose-600 dark:text-rose-400 font-mono font-medium">Flagged as 95% High Risk</p>
          </div>

          {/* Orbit Pill 2 - Top Right */}
          <div className="absolute top-2 right-4 bg-white/90 dark:bg-[#131124]/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 p-3 rounded-2xl shadow-md text-left text-xs max-w-xs">
            <p className="font-semibold text-zinc-900 dark:text-white">Fake FedEx Customs Link</p>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 font-mono font-medium">Typosquatting link unwrapped</p>
          </div>

          {/* Orbit Pill 3 - Bottom Center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#131124]/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 px-4 py-2 rounded-full shadow-md text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Zero Data Server Logs • 100% Client Memory Processing</span>
          </div>

        </div>

      </div>
    </section>
  );
}
