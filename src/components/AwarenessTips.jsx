import React, { useState } from 'react';
import { 
  Phone, CheckCircle2, XCircle, 
  HelpCircle, ExternalLink, RefreshCcw, Info
} from 'lucide-react';

export default function AwarenessTips() {
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const quizQuestions = [
    {
      id: 'q1',
      question: 'A caller claiming to be a Cyber Police officer demands you stay on a Skype video call under "Digital Arrest". What should you do?',
      options: [
        { text: 'Transfer funds immediately to a safe account to prove innocence', correct: false },
        { text: 'Disconnect immediately & verify via official Cyber Crime helpline (1930)', correct: true },
        { text: 'Show your Aadhaar card on camera to clear your name', correct: false }
      ],
      explanation: 'Official Police or CBI officers NEVER issue warrants or conduct judicial proceedings over Skype/WhatsApp video calls, nor do they ask for fund transfers.'
    },
    {
      id: 'q2',
      question: 'SMS alert: "Your bank account is blocked. Update e-KYC within 24h at http://sbi-kyc-verify.xyz". What is the safest action?',
      options: [
        { text: 'Click the link and enter your OTP to restore access quickly', correct: false },
        { text: 'Ignore the link, open your official banking app directly, or call the card back number', correct: true },
        { text: 'Reply to the SMS asking for clarification', correct: false }
      ],
      explanation: 'Banks never send SMS links with 24h deadlines to update KYC. Strange extensions like .xyz are classic typosquatting phishing traps.'
    },
    {
      id: 'q3',
      question: 'Someone offers ₹5,000 daily for liking YouTube videos if you pay a ₹500 entry deposit. Is this safe?',
      options: [
        { text: 'Safe, because YouTubers buy likes and views', correct: false },
        { text: 'Scam: Legitimate employers never charge fees or pay for fake video likes', correct: true },
        { text: 'Safe if they send screenshot proof on Telegram', correct: false }
      ],
      explanation: 'Task-based YouTube like schemes are widespread fraud traps designed to harvest upfront entry fees and force crypto deposits.'
    }
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (quizSubmitted) return; // Prevent changing after submission
    setAnswers({ ...answers, [qId]: optionIdx });
  };

  const handleEvaluateQuiz = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      const selected = answers[q.id];
      if (selected !== undefined && q.options[selected]?.correct) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setQuizScore(0);
    setQuizSubmitted(false);
  };

  return (
    <section id="awareness-tips" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Helpline Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/90 dark:border-zinc-800 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900 mb-1 inline-block">
                Emergency Response
              </span>
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
                Fallen Victim to Financial Cyber Fraud?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                Immediately report financial cyber incidents within the golden hour to freeze stolen funds.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="btn-press px-6 py-3 rounded-full bg-zinc-900 dark:bg-purple-600 hover:bg-zinc-800 dark:hover:bg-purple-500 text-white text-xs font-bold shadow-md flex items-center gap-2 justify-center w-full sm:w-auto cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline 1930</span>
            </a>
            
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press px-5 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold border border-zinc-200 dark:border-zinc-700 flex items-center gap-2 justify-center w-full sm:w-auto cursor-pointer"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            Cyber Safety Hygiene
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-sans">
            Safety Rules & Interactive Quiz
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Test your cyber threat preparedness and learn key safety rules.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Rules Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-purple-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                01
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                  Never Share OTPs or UPI PINs
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  UPI PIN is ONLY required to send money out, NEVER to receive money or refunds. Bank officials will never request OTPs.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-purple-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                02
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                  Verify Authorities via Official Channels
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  If someone claims to be from Police, TRAI, or FedEx, hang up and call official helpline numbers directly.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-purple-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                03
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                  Inspect Website Domains Carefully
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Check address bar for typos like <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-zinc-900 dark:text-zinc-200 font-mono">arnazon.com</code> or <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-zinc-900 dark:text-zinc-200 font-mono">sbi-update.xyz</code>.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-purple-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                04
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                  "Digital Arrest" is a Complete Hoax
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Supreme Court & Police guidelines state legal warrants are never served over WhatsApp video or Skype calls.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Quiz with Detailed Post-Submission Feedback */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#131124] border border-zinc-200/80 dark:border-zinc-800 shadow-lg h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Cyber Readiness Quiz</span>
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    {quizSubmitted ? 'Evaluated Feedback' : 'Select Choices'}
                  </span>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, qIdx) => {
                    const selectedOpt = answers[q.id];
                    const isUserCorrect = selectedOpt !== undefined && q.options[selectedOpt]?.correct;

                    return (
                      <div key={q.id} className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-zinc-900 dark:text-white">
                            {qIdx + 1}. {q.question}
                          </p>

                          {/* Post-submission correctness badge */}
                          {quizSubmitted && (
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase shrink-0 flex items-center gap-1 ${
                              isUserCorrect
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
                                : 'bg-rose-100 text-rose-800 border border-rose-300 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800'
                            }`}>
                              {isUserCorrect ? (
                                <>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                  <span>CORRECT</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                                  <span>INCORRECT</span>
                                </>
                              )}
                            </span>
                          )}
                        </div>

                        {/* Options */}
                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedOpt === optIdx;
                            const isCorrectAnswer = opt.correct;

                            let optionStyle = 'bg-zinc-50/80 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300';
                            
                            if (quizSubmitted) {
                              if (isSelected && isCorrectAnswer) {
                                // User selected correct answer
                                optionStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                              } else if (isSelected && !isCorrectAnswer) {
                                // User selected WRONG answer
                                optionStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-semibold';
                              } else if (!isSelected && isCorrectAnswer) {
                                // Correct answer user missed
                                optionStyle = 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 italic';
                              }
                            } else if (isSelected) {
                              optionStyle = 'bg-zinc-900 dark:bg-purple-600 text-white font-semibold shadow-xs border-zinc-900 dark:border-purple-600';
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                disabled={quizSubmitted}
                                className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between border ${
                                  quizSubmitted ? 'cursor-default' : 'cursor-pointer'
                                } ${optionStyle}`}
                              >
                                <span>{opt.text}</span>
                                {quizSubmitted && isSelected && isCorrectAnswer && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                )}
                                {quizSubmitted && isSelected && !isCorrectAnswer && (
                                  <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
                                )}
                                {quizSubmitted && !isSelected && isCorrectAnswer && (
                                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                                    (Correct Option)
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Post-submission explanation box if wrong */}
                        {quizSubmitted && !isUserCorrect && (
                          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2 mt-1">
                            <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold">Why it's wrong: </span>
                              <span>{q.explanation}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit & Reset Bar */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                {!quizSubmitted ? (
                  <button
                    onClick={handleEvaluateQuiz}
                    disabled={Object.keys(answers).length < quizQuestions.length}
                    className={`btn-press px-6 py-2.5 rounded-full font-semibold text-xs transition-all ${
                      Object.keys(answers).length < quizQuestions.length
                        ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
                        : 'bg-zinc-900 dark:bg-purple-600 hover:bg-zinc-800 dark:hover:bg-purple-500 text-white shadow-md cursor-pointer'
                    }`}
                  >
                    Submit & Evaluate Quiz
                  </button>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">Your Score:</span>
                      <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-bold ${
                        quizScore === quizQuestions.length
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800'
                          : 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800'
                      }`}>
                        {quizScore} / {quizQuestions.length} Correct
                      </span>
                    </div>

                    <button
                      onClick={handleResetQuiz}
                      className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
                    >
                      <RefreshCcw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
