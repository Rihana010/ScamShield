import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CheckerSection from './components/CheckerSection';
import StatsSection from './components/StatsSection';
import HowItWorks from './components/HowItWorks';
import CommonScams from './components/CommonScams';
import AwarenessTips from './components/AwarenessTips';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#090a10] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-purple-500/30 transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <CheckerSection />
          <StatsSection />
          <HowItWorks />
          <CommonScams />
          <AwarenessTips />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
