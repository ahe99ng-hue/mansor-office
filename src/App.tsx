import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Eye, Settings, X, Lock, CheckCircle, RefreshCcw, Landmark, PhoneCall } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveFeatures from './components/InteractiveFeatures';
import ProtocolStack from './components/ProtocolStack';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import { uiTranslations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("جاري تأسيس رابط الاتصال الآمن والمغلق...");
  const [ownerNumber, setOwnerNumber] = useState("201050009121"); // Pre-filled premium WA Egypt contact number
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Set document direction and language code dynamically
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Cinematic preloader cycle
  useEffect(() => {
    const stepsEn = [
      "Establishing secure liaison linkage...",
      "Encrypting sovereign transport vectors...",
      "Verifying client escrow registries...",
      "Mansour Office secured. Link authorized."
    ];
    const stepsAr = [
      "جاري تأسيس رابط الاتصال الآمن والمغلق...",
      "جاري تشفير مسارات النقل السيادية...",
      "جاري التحقق من أمانة ووساطة الحسابات المشتركة...",
      "تم تأمين الاتصال بمكتب منصور. مصرح بالدخول."
    ];

    const currentSequence = lang === 'ar' ? stepsAr : stepsEn;
    setLoadingText(currentSequence[0]);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < currentSequence.length) {
        setLoadingText(currentSequence[currentStep]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [lang, loading]);

  const handleTestNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsOpen(false);
  };

  const t = uiTranslations[lang];

  return (
    <div className={`relative min-h-screen bg-obsidian text-ivory selection:bg-champagne selection:text-obsidian overflow-x-hidden ${lang === 'ar' ? 'font-sans' : 'font-sans'}`}>
      
      {/* 0. High-End CSS Noise Overlay */}
      <div className="noise-overlay" />

      {/* 1. Cinematic Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#09090D] z-50 flex flex-col justify-center items-center p-6 text-center"
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Premium pulsating gold ring */}
              <div className="relative w-20 h-20 rounded-full border border-champagne/30 flex items-center justify-center p-4">
                <span className="font-serif text-3xl text-champagne tracking-widest font-bold">M</span>
                <span className="absolute inset-0 rounded-full border-t border-champagne animate-spin" />
                <span className="absolute -inset-2.5 rounded-full border border-dashed border-champagne/10 animate-[spin_30s_linear_infinite]" />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <h2 className="font-serif text-ivory tracking-[0.2em] text-md uppercase">مكتب منصور</h2>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-champagne font-bold">
                  Mansour Office
                </span>
              </div>

              {/* Status checklist text ticker */}
              <div className="flex items-center gap-3 bg-champagne/5 border border-champagne/15 px-4.5 py-2 rounded-2xl mt-4 min-w-[280px] justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse-slow" />
                <span className="font-mono text-[10px] text-champagne/80 tracking-widest uppercase">
                  {loadingText}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Site Structure */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Floating Island Navigation bar */}
          <Navbar ownerNumber={ownerNumber} lang={lang} onLangChange={setLang} />

          {/* Full-bleed editorial Hero */}
          <Hero ownerNumber={ownerNumber} lang={lang} />

          {/* Diagnostic Shuffler, Telemetry typewriter, Milestone Scheduler */}
          <InteractiveFeatures lang={lang} />

          {/* Card-Stacking Sticky Protocol */}
          <ProtocolStack lang={lang} />

          {/* Editorial Case Studies & Investor Calculator */}
          <CaseStudies lang={lang} />

          {/* Weighted Footer */}
          <Footer ownerNumber={ownerNumber} lang={lang} />
        </motion.div>
      )}

      {/* 3. Floating Administrative Client Setting Panel (Edge Key) */}
      {!loading && (
        <>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-40 w-11 h-11 rounded-full bg-obsidian border border-champagne/30 text-champagne hover:border-champagne flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105`}
            title={lang === 'ar' ? "تهيئة الإعدادات الخاصة" : "Configure liaison variables"}
          >
            <Settings className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
          </button>

          <AnimatePresence>
            {settingsOpen && (
              <motion.div
                initial={{ opacity: 0, x: lang === 'ar' ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: lang === 'ar' ? -100 : 100 }}
                className={`fixed ${lang === 'ar' ? 'left-6' : 'right-6'} bottom-20 z-40 w-80 bg-[#2A2A35]/90 border border-champagne/20 backdrop-blur-lg rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}
              >
                <div className="flex items-center justify-between border-b border-champagne/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-champagne" />
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-ivory">
                      {lang === 'ar' ? "قفل الإعدادات والمحاكاة" : "VAULT CONFIGURATION"}
                    </span>
                  </div>
                  <button onClick={() => setSettingsOpen(false)} className="text-ivory/60 hover:text-champagne transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="font-sans text-[10px] text-ivory/50 leading-relaxed mb-4">
                  {lang === 'ar' ? "تعديل المتغيرات ومسار الاتصال الفوري بنظام تجربة مكتب منصور مباشرة." : "Adjust active variables of the AI Studio mockup template directly."}
                </p>

                <form onSubmit={handleTestNumberSubmit} className="flex flex-col gap-4">
                  {/* WhatsApp contact alignment field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">
                      {lang === 'ar' ? "مفتاح اتصال الواتساب (مباشر)" : "Liaison Phone (WA Direct)"}
                    </label>
                    <input
                      type="text"
                      value={ownerNumber}
                      onChange={(e) => {
                        let val = e.target.value.replace(/[^0-9]/g, '');
                        if (val.startsWith('01')) {
                          val = '20' + val.substring(1);
                        }
                        setOwnerNumber(val);
                      }}
                      placeholder="e.g. 201050009121"
                      className="bg-obsidian border border-champagne/15 text-ivory rounded-xl py-2 px-3 focus:outline-none focus:border-champagne text-xs font-mono"
                    />
                    <span className="font-sans text-[8px] text-ivory/40">
                      {lang === 'ar' ? "يغير هذا الرقم مسار اتجاه كافة أزرار الاتصال والمراسلة مباشرة." : "Changes the recipient link across all buttons."}
                    </span>
                  </div>

                  {/* Aesthetic feedback */}
                  <div className="bg-champagne/5 rounded-xl p-3 border border-champagne/10 flex flex-col gap-1.5 text-[9px]">
                    <div className="flex items-center gap-1 text-champagne font-bold uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      {lang === 'ar' ? "التهيئة نشطة بالكامل" : "Configuration Active"}
                    </div>
                    <span className="font-mono text-ivory/60 leading-normal">
                      {lang === 'ar' ? (
                        <>
                          الوضع: كوزميك لوكس (افتراضي)<br />
                          تكامل المؤشرات: محمي بالكامل<br />
                          قنوات التغذية: بث حي متصل
                        </>
                      ) : (
                        <>
                          Preset: Midnight Luxe (Fixed)<br />
                          Interactive Tickers: Secured<br />
                          Telemetry Stream: Operational
                        </>
                      )}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-champagne hover:bg-champagne/90 text-obsidian text-[10px] font-sans font-bold uppercase tracking-wider py-2.5 rounded-xl transition-colors text-center"
                  >
                    {lang === 'ar' ? "تطبيق وحفظ التعديلات" : "Apply Variables"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

    </div>
  );
}
