import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCALIZED_CASE_STUDIES, uiTranslations } from '../data/translations';
import { Shield, Sparkles, Building, Landmark, Calculator, ArrowUpRight, DollarSign, Percent } from 'lucide-react';

interface CaseStudiesProps {
  lang: 'en' | 'ar';
}

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const t = uiTranslations[lang]?.caseStudies || uiTranslations['en'].caseStudies;
  const list = LOCALIZED_CASE_STUDIES;
  
  const [selectedProject, setSelectedProject] = useState<string>("project-coldstore");
  const activeStudy = list.find(c => c.id === selectedProject) || list[0];

  // ROI Calculator state
  const [calcAsset, setCalcAsset] = useState<'coldstore' | 'agri'>('coldstore');
  const [capital, setCapital] = useState<number>(5000000); // 5 Million active capital baseline

  const activeYield = calcAsset === 'coldstore' ? 0.089 : 0.104; // 8.9% vs 10.4%
  const annualPayout = capital * activeYield;
  const fiveYearValue = capital * Math.pow(1 + activeYield, 5);

  const formatEGP = (value: number) => {
    const formattedNum = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US', {
      maximumFractionDigits: 0
    }).format(value);
    
    return lang === 'ar' ? `${formattedNum} ج.م` : `${formattedNum} EGP`;
  };

  return (
    <section className="relative bg-obsidian py-24 md:py-32 px-4 md:px-8 border-t border-champagne/15" id="case-studies">
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-champagne/[0.02] rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="font-mono text-[10px] text-champagne tracking-[0.3em] uppercase block mb-3">
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light max-w-2xl leading-tight tracking-tight">
            {t.title} <br />
            <span className="italic font-normal text-champagne">{t.titleAccent}</span>
          </h2>
          <div className="w-12 h-[1px] bg-champagne/30 mt-6" />
        </div>

        {/* Case Studies Brocade Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {list.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedProject(study.id)}
              className={`px-5 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 border cursor-pointer ${
                selectedProject === study.id
                  ? 'border-champagne bg-champagne/5 text-champagne shadow-[0_4px_20px_rgba(201,168,76,0.15)]'
                  : 'border-champagne/10 text-ivory/50 hover:text-ivory hover:border-champagne/30'
              }`}
            >
              {study.title[lang]} ({study.badge === 'Real Project' ? t.realProject : t.concept})
            </button>
          ))}
        </div>

        {/* Showcase Canvas Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedProject}-${lang}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#2A2A35]/30 border border-[#FAF8F5]/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-right rtl:text-right ltr:text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Primary Copy Information */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-3 justify-start">
                  <span className={`font-mono text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
                    activeStudy.badge === 'Real Project' ? 'bg-amber-400/10 text-amber-400' : 'bg-blue-400/10 text-blue-400'
                  }`}>
                    {activeStudy.badge === 'Real Project' ? t.realProject : t.concept}
                  </span>
                  <span className="font-mono text-xs text-champagne">{activeStudy.location[lang]}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[9px] text-ivory/40 uppercase tracking-widest">{activeStudy.scope[lang]}</span>
                  <h3 className="font-serif italic text-3xl md:text-5xl text-ivory font-light leading-snug tracking-tight">
                    {activeStudy.title[lang]}
                  </h3>
                </div>

                <p className="font-sans text-xs md:text-sm text-ivory/60 leading-relaxed font-light">
                  {activeStudy.description[lang]}
                </p>

                {/* Secure Badge stamp */}
                <div className="border-t border-champagne/10 pt-6 mt-4 flex items-center gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-slate-900/60 flex items-center justify-center border border-champagne/10">
                    <Shield className="w-4 h-4 text-champagne" />
                  </div>
                  <span className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">
                    {t.secureStamp}
                  </span>
                </div>
              </div>

              {/* Statistics Panel Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
                {activeStudy.metrics.map((m, idx) => (
                  <div key={idx} className="bg-obsidian/60 p-5 rounded-2xl border border-champagne/[0.08] hover:border-champagne/20 transition-all duration-300">
                    <span className="font-mono text-[8px] text-champagne tracking-widest uppercase block mb-1">
                      {m.label[lang]}
                    </span>
                    <span className="font-serif text-lg md:text-2xl text-ivory font-light leading-none">
                      {m.value[lang]}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic ROI Simulator Section */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto rounded-[2.5rem] bg-[#2A2A35]/30 border border-[#FAF8F5]/10 backdrop-blur-md p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] text-right rtl:text-right ltr:text-left">
          <div className="flex items-center gap-2.5 mb-8">
            <Calculator className="w-5 h-5 text-champagne" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-ivory">{t.titleCalibrator}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="flex flex-col gap-6">
              {/* Selector */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">{t.optionLabel}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcAsset('coldstore')}
                    className={`py-3 px-2 rounded-xl font-sans text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                      calcAsset === 'coldstore'
                        ? 'bg-champagne text-obsidian font-bold'
                        : 'bg-obsidian/50 text-ivory/50 border border-champagne/10 hover:border-champagne/20'
                    }`}
                  >
                    {lang === 'ar' ? "بنية مستودع تبريد (٨.٩٪)" : "Cold-Chain Asset (8.9%)"}
                  </button>
                  <button
                    onClick={() => setCalcAsset('agri')}
                    className={`py-3 px-2 rounded-xl font-sans text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                      calcAsset === 'agri'
                        ? 'bg-champagne text-obsidian font-bold'
                        : 'bg-obsidian/50 text-ivory/50 border border-champagne/10 hover:border-champagne/20'
                    }`}
                  >
                    {lang === 'ar' ? "مشروع مجمع زراعي (١٠.٤٪)" : "Smart Ag Estate (10.4%)"}
                  </button>
                </div>
              </div>

              {/* Slider widget */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">{t.allocationLabel}</label>
                  <span className="font-mono text-xs text-ivory font-bold">{formatEGP(capital)}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="100000000"
                  step="1000000"
                  value={capital}
                  onChange={(e) => setCapital(Number(e.target.value))}
                  className="w-full h-1 bg-champagne/20 rounded-lg appearance-none cursor-pointer accent-champagne"
                />
                <div className="flex justify-between text-[8px] font-mono text-ivory/40 uppercase tracking-widest mt-1">
                  <span>{lang === 'ar' ? "الحد الأدنى: ٢ مليون ج.م" : "Min: 2M EGP"}</span>
                  <span>{lang === 'ar' ? "الحد الأعلى: ١٠٠ مليون ج.م" : "Max: 100M EGP"}</span>
                </div>
              </div>
            </div>

            {/* Simulated Live Outputs with custom colors */}
            <div className="bg-[#09090D] border border-champagne/15 rounded-2xl p-6 flex flex-col gap-5 justify-between">
              <div>
                <span className="font-mono text-[8px] text-champagne tracking-widest uppercase block mb-1">{t.payoutLabel}</span>
                <span className="font-serif italic text-2xl md:text-3xl text-emerald-400 font-normal">{formatEGP(annualPayout)}</span>
                <span className="font-mono text-[8px] text-ivory/40 uppercase block mt-1">{t.payoutDesc}</span>
              </div>

              <div className="border-t border-champagne/10 pt-4">
                <span className="font-mono text-[8px] text-champagne tracking-widest uppercase block mb-1">{t.compoundedLabel}</span>
                <span className="font-serif text-lg md:text-xl text-ivory font-light">{formatEGP(fiveYearValue)}</span>
                <span className="font-mono text-[8px] text-ivory/40 uppercase block mt-1">{t.compoundedDesc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
