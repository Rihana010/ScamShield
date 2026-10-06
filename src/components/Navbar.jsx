import React, { useState } from 'react';
import { Shield, ChevronRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('checker');
  const { darkMode, toggleDarkMode } = useTheme();

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Pill */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white/90 dark:bg-[#131124]/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-lg px-4 py-2 rounded-full flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-purple-600 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-zinc-900 dark:text-white font-sans">
            Scam<span className="text-purple-600 dark:text-purple-400 font-normal">Shield</span>
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            v2.4
          </span>
        </div>

        {/* Centered Floating Nav Pill (Sonivale style) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-[#131124]/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-lg px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">
          <button
            onClick={() => scrollToSection('checker')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeSection === 'checker'
                ? 'bg-zinc-900 dark:bg-purple-600 text-white font-semibold shadow-sm'
                : 'hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            }`}
          >
            Risk Checker
          </button>

          <button
            onClick={() => scrollToSection('how-it-works')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeSection === 'how-it-works'
                ? 'bg-zinc-900 dark:bg-purple-600 text-white font-semibold shadow-sm'
                : 'hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            }`}
          >
            Pipeline
          </button>

          <button
            onClick={() => scrollToSection('scam-patterns')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeSection === 'scam-patterns'
                ? 'bg-zinc-900 dark:bg-purple-600 text-white font-semibold shadow-sm'
                : 'hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            }`}
          >
            Scam Catalog
          </button>

          <button
            onClick={() => scrollToSection('awareness-tips')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeSection === 'awareness-tips'
                ? 'bg-zinc-900 dark:bg-purple-600 text-white font-semibold shadow-sm'
                : 'hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            }`}
          >
            Safety Guide
          </button>
        </nav>

        {/* Right Actions: Dark Mode Toggle + Check Button */}
        <div className="flex items-center gap-2">
          {/* Neat Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="btn-press w-9 h-9 rounded-full bg-white/90 dark:bg-[#131124]/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-md flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:scale-105 transition-all cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('checker')}
            className="btn-press px-5 py-2 text-xs font-semibold rounded-full bg-zinc-900 dark:bg-purple-600 hover:bg-zinc-800 dark:hover:bg-purple-500 text-white shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Scan Risk</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

      </div>
    </header>
  );
}
