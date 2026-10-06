import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, ShieldCheck, AlertTriangle, CheckCircle, 
  Search, RefreshCw, Copy, Check, CornerDownRight, 
  AlertOctagon, Info, Zap, Sparkles
} from 'lucide-react';
import { analyzeScam } from '../utils/detectionEngine';
import { SAMPLE_CASES } from '../utils/scamExamples';

export default function CheckerSection() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const analysisSteps = [
    'Ingesting text & structure tokens...',
    'Scanning for urgency & coercion tactics...',
    'Analyzing domain shorteners & typosquatting...',
    'Evaluating financial & identity risk weights...',
    'Compiling spatial forensic risk report...'
  ];

  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    setAnalysisStep(0);
    setResult(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < analysisSteps.length) {
        setAnalysisStep(step);
      } else {
        clearInterval(interval);
        const res = analyzeScam(inputText);
        setResult(res);
        setIsAnalyzing(false);
      }
    }, 220);
  };

  const handleSelectSample = (sample) => {
    setInputText(sample.text);
    setResult(null);
  };

  const handleClear = () => {
    setInputText('');
    setResult(null);
  };

  const handleCopyReport = () => {
    if (!result) return;
    const reportText = `[ScamShield Forensic Analysis Report]
Date: ${new Date().toLocaleString()}
Risk Level: ${result.riskLevel} (Score: ${result.score}/100)
Verdict: ${result.verdictSummary}

Detected Red Flags (${result.redFlags.length}):
${result.redFlags.map(f => `- [${f.severity.toUpperCase()}] ${f.title}: ${f.description}`).join('\n')}

Recommended Actions:
${result.recommendations.map(r => `• ${r}`).join('\n')}

Analyzed via ScamShield Client-Side Security Engine.`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="checker" className="py-20 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Interactive Risk Scanner</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-sans">
            Paste & Analyze Threat
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Input suspicious SMS, extortion call script, or web link to run real-time heuristic scoring.
          </p>
        </div>

        {/* Sonivale Clean Checker Card */}
        <div className="bg-white dark:bg-[#131124] border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden transition-colors">
          
          {/* Preset Sample Pills Bar */}
          <div className="mb-5 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2.5">
              Preset Sample Scenarios:
            </p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_CASES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className="btn-press px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-900 dark:hover:bg-purple-600 hover:text-white text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
                >
                  {sample.title}
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div className="relative mb-5">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste SMS, WhatsApp call script, email header, or link here... (e.g. 'Your SBI netbanking is blocked. Verify KYC at http://sbi-kyc.xyz...')"
              rows={5}
              className="w-full bg-zinc-50/80 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 focus:border-purple-600 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/10 rounded-2xl p-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 resize-none transition-all outline-none"
            />
            
            <div className="flex items-center justify-between mt-2 text-xs text-zinc-500 dark:text-zinc-400 px-1">
              <span>{inputText.length} characters</span>
              {inputText.length > 0 && (
                <button
                  onClick={handleClear}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Clear text
                </button>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block">
              Privacy: Client-side processing only. Zero server logging.
            </p>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !inputText.trim()}
              className={`btn-press w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                isAnalyzing || !inputText.trim()
                  ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
                  : 'bg-zinc-900 dark:bg-purple-600 hover:bg-zinc-800 dark:hover:bg-purple-500 text-white shadow-md'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Evaluating Heuristics...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Run Risk Scan</span>
                </>
              )}
            </button>
          </div>

          {/* Progress State */}
          {isAnalyzing && (
            <div className="mt-6 p-5 rounded-2xl bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-600 dark:text-purple-400" />
                  {analysisSteps[analysisStep]}
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-bold">
                  {Math.round(((analysisStep + 1) / analysisSteps.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600 dark:bg-purple-400 transition-all duration-300 ease-out"
                  style={{ width: `${((analysisStep + 1) / analysisSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Result Card Reveal */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800"
              >
                {/* Result Header Banner */}
                <div
                  className={`p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 shadow-xs ${
                    result.riskLevel === 'HIGH'
                      ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-200'
                      : result.riskLevel === 'MEDIUM'
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900 text-amber-950 dark:text-amber-200'
                      : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        result.riskLevel === 'HIGH'
                          ? 'bg-rose-100 dark:bg-rose-900/60 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300'
                          : result.riskLevel === 'MEDIUM'
                          ? 'bg-amber-100 dark:bg-amber-900/60 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                          : 'bg-emerald-100 dark:bg-emerald-900/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                      }`}
                    >
                      {result.riskLevel === 'HIGH' ? (
                        <ShieldAlert className="w-6 h-6" />
                      ) : result.riskLevel === 'MEDIUM' ? (
                        <AlertTriangle className="w-6 h-6" />
                      ) : (
                        <ShieldCheck className="w-6 h-6" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider border ${
                            result.riskLevel === 'HIGH'
                              ? 'bg-rose-200/80 dark:bg-rose-950 text-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                              : result.riskLevel === 'MEDIUM'
                              ? 'bg-amber-200/80 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800'
                              : 'bg-emerald-200/80 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                          }`}
                        >
                          {result.riskLevel} RISK THREAT
                        </span>
                      </div>
                      <p className="text-base font-bold text-zinc-900 dark:text-white">
                        {result.verdictSummary}
                      </p>
                    </div>
                  </div>

                  {/* Score Gauge */}
                  <div className="flex items-center gap-4 bg-white dark:bg-[#090a10] p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shrink-0">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Risk Score
                      </p>
                      <p
                        className={`text-2xl font-black font-mono ${
                          result.riskLevel === 'HIGH'
                            ? 'text-rose-600 dark:text-rose-400'
                            : result.riskLevel === 'MEDIUM'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        {result.score}<span className="text-xs text-zinc-400">/100</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-scores */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="p-3.5 bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 rounded-xl">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">Urgency</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-white">{Math.round(result.categoryScores.urgency)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500" style={{ width: `${result.categoryScores.urgency}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 rounded-xl">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">Sensitive Info</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-white">{Math.round(result.categoryScores.sensitivity)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: `${result.categoryScores.sensitivity}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 rounded-xl">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">Impersonation</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-white">{Math.round(result.categoryScores.impersonation)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${result.categoryScores.impersonation}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 rounded-xl">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">URL Risk</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-white">{Math.round(result.categoryScores.urlSafety)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500" style={{ width: `${result.categoryScores.urlSafety}%` }} />
                    </div>
                  </div>
                </div>

                {/* Red Flags Grid */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4 text-amber-500" />
                    <span>Detected Red Flags ({result.redFlags.length})</span>
                  </h4>

                  {result.redFlags.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {result.redFlags.map((flag, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                              <CornerDownRight className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                              {flag.title}
                            </span>
                            <span
                              className={`px-2 py-0.5 text-[10px] font-extrabold rounded-full uppercase ${
                                flag.severity === 'critical'
                                  ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                                  : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                              }`}
                            >
                              {flag.severity}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {flag.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>No suspicious red flags detected.</span>
                    </div>
                  )}
                </div>

                {/* Recommendations */}
                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#090a10] border border-zinc-200 dark:border-zinc-800 mb-6">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Recommended Immediate Actions</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Copy Button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleCopyReport}
                    className="btn-press px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-purple-600 hover:bg-zinc-800 dark:hover:bg-purple-500 text-white text-xs font-semibold shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Report Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-300" />
                        <span>Copy Analysis Report</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
