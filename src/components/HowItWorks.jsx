import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Cpu, Gauge, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Input Text or URL',
      icon: FileSearch,
      description: 'Copy suspicious SMS, WhatsApp message, extortion call transcript, or link into the detector.',
    },
    {
      step: '02',
      title: 'Heuristic NLP Scan',
      icon: Cpu,
      description: 'ScamShield checks 50+ threat patterns across urgency cues, brand typosquatting, and obfuscated URLs.',
    },
    {
      step: '03',
      title: 'Multi-Vector Scoring',
      icon: Gauge,
      description: 'Computes normalized threat risk weights from 0 (Safe) to 100 (Critical Extortion / Phishing).',
    },
    {
      step: '04',
      title: 'Actionable Report',
      icon: ShieldCheck,
      description: 'Provides a clear plain-English safety verdict alongside specific red flags and immediate defensive action steps.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            TOOLKIT & PIPELINE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-sans">
            Features & Pipeline
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
            A transparent 4-stage client-side pipeline built for speed, privacy, and forensic clarity.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between relative group sonivale-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-purple-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black font-mono text-zinc-300 dark:text-zinc-700 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      [{item.step}]
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
