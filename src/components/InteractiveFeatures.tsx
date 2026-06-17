import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCALIZED_ASSETS, LOCALIZED_LIVE_LOGS, uiTranslations } from '../data/translations';
import { Shield, Sparkles, Terminal, Calendar, ArrowRight, Layers, Eye, RefreshCw } from 'lucide-react';

interface InteractiveFeaturesProps {
  lang: 'en' | 'ar';
}

export default function InteractiveFeatures({ lang }: InteractiveFeaturesProps) {
  const t = uiTranslations[lang]?.features || uiTranslations['en'].features;

  // 1. Diagnostic Shuffler State
  const [activeTab, setActiveTab] = useState<string>("land");
  const activeAsset = LOCALIZED_ASSETS.find(a => a.id === activeTab) || LOCALIZED_ASSETS[0];

  // 2. Telemetry Typewriter State
  const [telemetry, setTelemetry] = useState<{ id: string; timestamp: string; topic: string; payload: string; level: 'operational' | 'secured' | 'notified' }[]>([]);
  const [isLive, setIsLive] = useState(true);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // 3. Cursor Protocol Scheduler State
  const [schedulerHover, setSchedulerHover] = useState<number | null>(null);

  // Initialize and update logs
  useEffect(() => {
    const rawLogs = LOCALIZED_LIVE_LOGS[lang] || LOCALIZED_LIVE_LOGS['ar'];
    const topics = lang === 'ar' ? ["المسح السيادي", "منسوب المياه", "مسح الأقمار", "تراخيص الإفراغ", "مكتب منصور"] : ["SOVEREIGN ESCROW", "AQUIFER DEPTH", "SATELLITE SURVEY", "LEED REZONING", "DISCREET INTAKE"];
    
    // Seed initial 3 logs
    const initialLogs = Array.from({ length: 4 }).map((_, i) => {
      const timeOffset = new Date(Date.now() - (4 - i) * 10000);
      return {
        id: `init-${i}`,
        timestamp: timeOffset.toTimeString().split(' ')[0],
        topic: topics[i % topics.length],
        payload: rawLogs[i % rawLogs.length],
        level: (i % 3 === 0 ? 'secured' : i % 3 === 1 ? 'notified' : 'operational') as 'operational' | 'secured' | 'notified'
      };
    });
    setTelemetry(initialLogs);

    if (!isLive) return;

    const interval = setInterval(() => {
      const randomTopics = lang === 'ar' 
        ? ["الحساب البنكي الأمني", "عقدة الآبار الذكية", "إحداثيات المسيرة", "تأشير التجميد اللوجستي", "التدقيق المالي"] 
        : ["CAPITAL ESCROW", "AQUIFER DEPTH", "SATELLITE SURVEY", "LEED REZONING", "DISCREET INTAKE"];
      
      const randomPayloads = LOCALIZED_LIVE_LOGS[lang] || LOCALIZED_LIVE_LOGS['ar'];
      const randomLevels: ('operational' | 'secured' | 'notified')[] = ['operational', 'secured', 'notified'];
      
      const newLog = {
        id: Date.now().toString(),
        timestamp: new Date().toTimeString().split(' ')[0],
        topic: randomTopics[Math.floor(Math.random() * randomTopics.length)],
        payload: randomPayloads[Math.floor(Math.random() * randomPayloads.length)],
        level: randomLevels[Math.floor(Math.random() * randomLevels.length)]
      };

      setTelemetry(prev => {
        const updated = [...prev.slice(1), newLog];
        return updated;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isLive, lang]);

  // Autoscroll terminal container without scrolling the global viewport
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [telemetry]);

  const timelineMilestones = lang === 'ar' ? [
    { id: 1, label: "الحيازة", step: "01", period: "فوري والمباشرة" },
    { id: 2, label: "المعاينة والتأكيد", step: "03", period: "خلال ٥ أيام" },
    { id: 3, label: "الإفراغ والتنفيذ", step: "05", period: "عند الإغلاق" }
  ] : [
    { id: 1, label: "Acquire", step: "01", period: "Immediate" },
    { id: 2, label: "Review", step: "03", period: "5 Days" },
    { id: 3, label: "Execute", step: "05", period: "Closing" }
  ];

  const getTooltipDesc = (idx: number) => {
    if (idx === 0) return t.stageTooltip1;
    if (idx === 1) return t.stageTooltip2;
    return t.stageTooltip3;
  };

  return (
    <section className="relative bg-obsidian py-24 md:py-32 px-4 md:px-8 border-t border-champagne/15" id="features">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-40 ambient-glow-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 text-right rtl:text-right ltr:text-left">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] text-champagne tracking-[0.3em] uppercase block mb-3">
              {t.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight tracking-tight">
              {t.title} <br />
              <span className="italic font-normal text-champagne">{t.titleAccent}</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-ivory/60 max-w-sm tracking-wide leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        {/* Triple Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Diagnostic Shuffler (Takes 7 columns of grid) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-[2rem] bg-[#2A2A35]/30 border border-[#FAF8F5]/10 backdrop-blur-md shadow-[0_12px_45px_-8px_rgba(201,168,76,0.02)] text-right rtl:text-right ltr:text-left">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-champagne" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-ivory">{t.titleShuffler}</span>
                </div>
                <span className="font-mono text-[10px] text-champagne tracking-widest bg-champagne/10 px-2.5 py-0.5 rounded-full uppercase self-start sm:self-auto">
                  {t.shufflerBadge}
                </span>
              </div>

              {/* Shuffling Button Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 bg-obsidian/60 p-1.5 rounded-2xl border border-champagne/[0.08]">
                {LOCALIZED_ASSETS.map((asset) => (
                  <button
                    key={asset.id}
                    onClick={() => setActiveTab(asset.id)}
                    className={`px-4 py-2.5 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex-1 min-w-[120px] ${
                      activeTab === asset.id
                        ? 'bg-champagne text-obsidian shadow-[0_4px_12px_rgba(201,168,76,0.2)]'
                        : 'text-ivory/60 hover:text-ivory hover:bg-champagne/5'
                    }`}
                  >
                    {asset.category === 'Land' ? (lang === 'ar' ? 'أراضي' : 'Land') : asset.category === 'Cold Storage' ? (lang === 'ar' ? 'مستودعات تبريد' : 'Cold Storage') : (lang === 'ar' ? 'أصول زراعية' : 'Agriculture')}
                  </button>
                ))}
              </div>

              {/* Active Asset Info display with beautiful entry animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${lang}`}
                  initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                >
                  {/* Text Details */}
                  <div className="flex flex-col gap-4 text-right rtl:text-right ltr:text-left">
                    <span className="font-mono text-[9px] text-champagne tracking-[0.2em] uppercase font-bold">
                      {activeAsset.lucrativeYield[lang]}
                    </span>
                    <h3 className="font-serif italic text-2xl text-ivory font-light leading-snug">
                      {activeAsset.title[lang]}
                    </h3>
                    <p className="font-sans text-xs text-ivory/60 leading-relaxed font-light">
                      {activeAsset.description[lang]}
                    </p>

                    <ul className="flex flex-col gap-2 mt-2 self-start rtl:self-start ltr:self-start text-right rtl:text-right ltr:text-left">
                      {activeAsset.highlights[lang].map((h, i) => (
                        <li key={i} className="flex items-center gap-2 font-sans text-xs text-ivory/80 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne block flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Built-in Custom SVG Blueprint (No random images, pure premium architecture) */}
                  <div className="w-full h-56 rounded-2xl bg-obsidian border border-champagne/15 flex flex-col justify-between p-4 relative overflow-hidden group">
                    {/* SVG Blueprint Overlay */}
                    {activeTab === 'land' && (
                      <svg className="absolute inset-0 w-full h-full text-champagne/20 pointer-events-none p-4" viewBox="0 0 100 100">
                        {/* Contour Lines */}
                        <path d="M 0 10 Q 30 20 50 15 T 100 25" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 2" />
                        <path d="M 0 35 Q 25 30 60 45 T 100 40" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 2" />
                        <path d="M 0 65 Q 40 55 70 75 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />
                        {/* Plotted parcel vector */}
                        <polygon points="25,30 75,25 85,70 30,80" fill="rgba(201,168,76,0.05)" stroke="currentColor" strokeWidth="0.75" />
                        <circle cx="25" cy="30" r="1.5" fill="#C9A84C" />
                        <circle cx="75" cy="25" r="1.5" fill="#C9A84C" />
                        <circle cx="85" cy="70" r="1.5" fill="#C9A84C" />
                        <circle cx="30" cy="80" r="1.5" fill="#C9A84C" />
                        <line x1="25" y1="30" x2="55" y2="525" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" />
                        {/* Survey stats corner */}
                        <text x="5" y="90" fill="#C9A84C" fontSize="35%" fontFamily="monospace" textAnchor="start">UTM ZONE 38N • CLS: SECURED</text>
                        <text x="5" y="95" fill="#FAF8F5" opacity="0.6" fontSize="2.5" fontFamily="monospace">SEC. 49-A • BOUNDARY VERIFIED</text>
                      </svg>
                    )}

                    {activeTab === 'cold-storage' && (
                      <svg className="absolute inset-0 w-full h-full text-champagne/20 pointer-events-none p-4" viewBox="0 0 100 100">
                        {/* Rack schemas */}
                        <rect x="10" y="15" width="22" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="38" y="15" width="22" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="66" y="15" width="22" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        
                        {/* Pallet slots */}
                        <line x1="10" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="0.25" />
                        <line x1="10" y1="45" x2="32" y2="45" stroke="currentColor" strokeWidth="0.25" />
                        <line x1="10" y1="60" x2="32" y2="60" stroke="currentColor" strokeWidth="0.25" />
                        
                        <line x1="38" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.25" />
                        <line x1="38" y1="45" x2="60" y2="45" stroke="currentColor" strokeWidth="0.25" />
                        <line x1="38" y1="60" x2="60" y2="60" stroke="currentColor" strokeWidth="0.25" />

                        {/* Temperature Flow vectors */}
                        <path d="M 50 5 Q 50 40 40 50" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 2" />
                        
                        {/* Telemetry metadata */}
                        <text x="5" y="90" fill="#C9A84C" fontSize="3" fontFamily="monospace">TEMP: -24.2°C • CRYO STATUS: OPTIMAL</text>
                        <text x="5" y="95" fill="#FAF8F5" opacity="0.6" fontSize="2.5" fontFamily="monospace">ZONE C DUAL COMPRESSORS ONLINE</text>
                      </svg>
                    )}

                    {activeTab === 'agriculture' && (
                      <svg className="absolute inset-0 w-full h-full text-champagne/20 pointer-events-none p-4" viewBox="0 0 100 100">
                        {/* Irrigation Pivot Circles */}
                        <circle cx="50" cy="45" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
                        <circle cx="50" cy="45" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="45" r="15" fill="none" stroke="currentColor" strokeWidth="0.4" />
                        
                        {/* Radial Division lines */}
                        <line x1="50" y1="10" x2="50" y2="80" stroke="currentColor" strokeWidth="0.3" />
                        <line x1="15" y1="45" x2="85" y2="45" stroke="currentColor" strokeWidth="0.3" />
                        
                        {/* Smart node highlights */}
                        <circle cx="40" cy="35" r="1" fill="#C9A84C" />
                        <circle cx="50" cy="20" r="1" fill="#C9A84C" />
                        <circle cx="68" cy="45" r="1" fill="#C9A84C" />
                        
                        {/* Hydration indices text */}
                        <text x="5" y="90" fill="#C9A84C" fontSize="3" fontFamily="monospace">AQUIFER DEPTH: 164M • WATER INDX: EXCELLENT</text>
                        <text x="5" y="95" fill="#FAF8F5" opacity="0.6" fontSize="2.5" fontFamily="monospace">PIVOT SYSTEM B ACTIVE SEED MATRIX</text>
                      </svg>
                    )}

                    <div className="z-10 bg-obsidian/75 backdrop-blur-sm self-end rounded-lg p-2.5 w-full border border-champagne/10 flex items-center justify-between">
                      <span className="font-mono text-[9px] text-ivory/80 uppercase">{t.blueprintTitle}</span>
                      <span className="font-mono text-[9px] text-champagne font-bold uppercase tracking-widest flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {t.liveView}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom active metrics bar inside card 1 */}
            <div className="border-t border-champagne/10 pt-6 mt-8 grid grid-cols-3 gap-2">
              {activeAsset.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col text-right rtl:text-right ltr:text-left">
                  <span className="font-mono text-[8px] text-champagne tracking-widest uppercase">{m.label[lang]}</span>
                  <span className="font-serif text-xs md:text-sm text-ivory font-light mt-1">{m.value[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Layout: Holds Card 2 (Telemetry Typewriter) & Card 3 (Cursor Scheduler) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between text-right rtl:text-right ltr:text-left">
            
            {/* Card 2: Telemetry Typewriter */}
            <div className="flex-1 p-6 rounded-[2rem] bg-[#2A2A35]/30 border border-[#FAF8F5]/10 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-champagne animate-pulse-slow" />
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-ivory">{t.titleTypewriter}</span>
                  </div>
                  <button 
                    onClick={() => setIsLive(!isLive)}
                    className="flex items-center gap-1 font-mono text-[8px] text-champagne border border-champagne/20 bg-champagne/5 hover:border-champagne rounded-full px-2.5 py-0.5 transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-2.5 h-2.5 ${isLive ? 'animate-spin' : ''}`} />
                    {isLive ? t.streamActive : t.streamPaused}
                  </button>
                </div>
                <p className="font-sans text-[11px] text-ivory/60 tracking-wide mb-4 leading-relaxed font-light">
                  {t.typewriterDesc}
                </p>

                {/* Simulated Ticker Terminal Container */}
                <div ref={terminalContainerRef} className="bg-[#09090D] border border-champagne/15 rounded-xl p-4 font-mono text-[10px] text-emerald-400 h-44 overflow-y-auto flex flex-col gap-2 relative text-left ltr:text-left rtl:text-right" dir="ltr">
                  {telemetry.map((log) => (
                    <div key={log.id} className="flex items-start gap-1">
                      <span className="text-champagne/50 flex-shrink-0">[{log.timestamp}]</span>
                      <span className={`font-bold uppercase flex-shrink-0 ${
                        log.level === 'secured' ? 'text-amber-400' : log.level === 'notified' ? 'text-blue-400' : 'text-emerald-400'
                      }`}>
                        {log.topic}:
                      </span>
                      <span className="text-ivory/80 flex-1 break-words">{log.payload}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typed Status Highlight bar */}
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-champagne/5 pt-3">
                <span className="font-mono text-[8px] text-champagne uppercase">{t.signalIn}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
            </div>

            {/* Card 3: Cursor Protocol Scheduler */}
            <div className="p-6 rounded-[2rem] bg-[#2A2A35]/30 border border-[#FAF8F5]/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-champagne" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-ivory">{lang === 'ar' ? '٠٣ / مجدول الحيازة والمراحل' : '03 / Protocol Scheduler'}</span>
                </div>
                <span className="font-sans text-[9px] text-champagne font-bold uppercase tracking-widest">{t.timelineFlow}</span>
              </div>
              <p className="font-sans text-[11px] text-ivory/60 tracking-wide mb-6 leading-relaxed font-light">
                {t.timelineDesc}
              </p>

              {/* Interactive Milestone timeline road */}
              <div className="flex items-center justify-between relative py-4 rtl:flex-row-reverse">
                {/* Horizontal progress path */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-champagne/15 z-0" />

                {timelineMilestones.map((m, idx) => (
                  <div
                    key={m.id}
                    onMouseEnter={() => setSchedulerHover(idx)}
                    onMouseLeave={() => setSchedulerHover(null)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                  >
                    {/* Circle Node indicator */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      schedulerHover === idx 
                        ? 'bg-champagne border-champagne text-obsidian scale-110 shadow-[0_4px_12px_rgba(201,168,76,0.35)]' 
                        : 'bg-obsidian border-champagne/30 text-champagne group-hover:border-champagne'
                    }`}>
                      <span className="font-mono text-[10px] font-bold">{m.step}</span>
                    </div>
                    
                    <span className="font-sans text-[10px] text-ivory/90 font-semibold uppercase mt-2.5">
                      {m.label}
                    </span>
                    <span className="font-mono text-[8px] text-champagne tracking-widest uppercase mt-0.5">
                      {m.period}
                    </span>

                    {/* Pop-up tooltip indicator description */}
                    <AnimatePresence>
                      {schedulerHover === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute bottom-12 w-36 bg-obsidian border border-champagne/30 rounded-xl p-2.5 text-center shadow-xl pointer-events-none text-right rtl:text-right ltr:text-left z-20"
                        >
                          <span className="font-mono text-[8px] text-champagne uppercase block border-b border-champagne/10 pb-1 mb-1 font-bold text-center">
                            {lang === 'ar' ? `البروتوكول ${m.step}` : `Stage ${m.step} Protocol`}
                          </span>
                          <span className="font-sans text-[9px] text-ivory/80 leading-normal block">
                            {getTooltipDesc(idx)}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
