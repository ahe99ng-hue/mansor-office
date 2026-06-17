import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldCheck, TrendingUp, Compass, ArrowRight, ArrowLeft } from 'lucide-react';
import { uiTranslations } from '../data/translations';

interface HeroProps {
  ownerNumber: string;
  lang: 'en' | 'ar';
}

export default function Hero({ ownerNumber, lang }: HeroProps) {
  const [index, setIndex] = useState(0);

  const t = uiTranslations[lang]?.hero || uiTranslations['en'].hero;
  const tPillars = uiTranslations[lang]?.pillars || uiTranslations['en'].pillars;

  const HERO_COMBINATIONS = [
    { noun: t.tagline1, precision: t.precision1 },
    { noun: t.tagline2, precision: t.precision2 },
    { noun: t.tagline3, precision: t.precision3 }
  ];

  // Rotate content every 5 seconds for a cinematic, living digital face
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_COMBINATIONS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [HERO_COMBINATIONS.length]);

  const valueProps = [
    {
      icon: <Compass className="w-5 h-5 text-champagne" />,
      title: tPillars.p1Title,
      desc: tPillars.p1Desc
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-champagne" />,
      title: tPillars.p2Title,
      desc: tPillars.p2Desc
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-champagne" />,
      title: tPillars.p3Title,
      desc: tPillars.p3Desc
    }
  ];

  const waUrl = `https://wa.me/${ownerNumber}?text=${lang === 'ar' ? 'مرحبا%20مكتب%20منصور%20أنا%20مهتم%20بالاستثمار%20الخاص' : "Hi%20Mansour%20Office%20I'm%20interested"}`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-obsidian text-ivory pt-28 pb-16 px-4 md:px-8">
      {/* Background Vector Map & Orbital Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large golden abstract orbit halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-champagne/[0.03] animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-champagne/[0.05] border-dashed animate-[spin_80s_linear_infinite_reverse]" />
        
        {/* Soft glowing ambient spots */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-champagne/[0.04] rounded-full filter blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-champagne/[0.03] rounded-full filter blur-[100px] mix-blend-screen" />

        {/* Dynamic coordinate crosshairs for architectural feel */}
        <div className="absolute inset-x-0 top-1/4 h-[1px] bg-champagne/[0.05] flex justify-between px-12">
          <span className="font-mono text-[9px] text-champagne/20 -mt-3">LAT 24.7136° N</span>
          <span className="font-mono text-[9px] text-champagne/20 -mt-3">LNG 46.6753° E</span>
        </div>
        <div className="absolute inset-y-0 left-1/4 w-[1px] bg-champagne/[0.03]" />
        <div className="absolute inset-y-0 right-1/4 w-[1px] bg-champagne/[0.03]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center mt-6">
        
        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-3 mb-6 rtl:space-x-reverse"
        >
          <span className="h-[1px] w-12 bg-champagne/50"></span>
          <span className="font-mono text-champagne text-[11px] uppercase tracking-[0.25em]">
            {t.badge}
          </span>
          <span className="h-[1px] w-12 bg-champagne/50"></span>
        </motion.div>

        {/* Brand Luxury Golden Embrossed Emblem Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-64 h-36 md:w-80 md:h-44 rounded-2xl overflow-hidden border border-champagne/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] mb-8 group"
        >
          <img
            src="/src/assets/images/mansour_logo_1781670923456.jpg"
            alt="Mansour Office Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none transition-all duration-700 group-hover:scale-[1.03]"
          />
          {/* Ambient inner soft glowing frame */}
          <div className="absolute inset-0 border border-champagne/10 pointer-events-none rounded-2xl" />
          <div className="absolute -inset-0.5 rounded-2xl bg-champagne/10 blur opacity-30 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none z-0" />
        </motion.div>

        {/* Dynamic Architectural Serif Headline Slider */}
        <div className="min-h-[140px] cursor-default md:min-h-[180px] w-full flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${index}`}
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -25, filter: "blur(4px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-2 max-w-5xl"
            >
              <h1 className="font-sans text-xs md:text-sm uppercase tracking-[0.35em] text-champagne/80 font-bold">
                {HERO_COMBINATIONS[index]?.noun}
              </h1>
              <span className="font-serif italic text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-tight tracking-normal block px-4">
                {HERO_COMBINATIONS[index]?.precision}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Philosophy Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-ivory/60 font-sans text-xs md:text-sm max-w-xl mx-auto mt-6 tracking-wide leading-relaxed font-light"
        >
          {lang === 'ar' ? (
            <>
              معظم خدمات الوساطة تولي اهتمامها لـ: <span className="text-ivory line-through decoration-champagne decoration-2">العمولات والمبيعات السريعة</span>. <br />
              نهجنا وهدفنا الأساسي هو: <span className="text-champagne font-semibold underline underline-offset-4 decoration-1 font-serif">استدامة ونماء الأصول للأجيال القادمة</span>.
            </>
          ) : (
            <>
              Most brokerages focus on: <span className="text-ivory line-through decoration-champagne decoration-2">{t.contrastLine1}</span>. <br />
              We focus on: <span className="text-champagne font-semibold underline underline-offset-4 decoration-1">{t.contrastLine2}</span>.
            </>
          )}
        </motion.p>

        {/* Action Button CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <div className="group relative inline-block">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-3 bg-champagne hover:bg-champagne/95 text-obsidian font-sans text-xs uppercase tracking-[0.2em] font-bold px-10 py-5 rounded-[2rem] transition-all duration-300"
            >
              {t.buttonCTA}
              {lang === 'ar' ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              )}
            </a>
            {/* Immersive radial golden glow */}
            <div className="absolute inset-x-0 -bottom-1 h-12 bg-champagne blur-xl opacity-25 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none z-0 rounded-[2rem]" />
          </div>
        </motion.div>
      </div>

      {/* Core Value Pillars - Sleek Bento row in bottom page portion */}
      <div className="relative z-10 max-w-7xl w-full mt-24">
        <div id="assets" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-champagne/15 pt-12">
          {valueProps.map((prop, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              key={prop.title}
              className="flex flex-col gap-4 p-6 rounded-[2rem] bg-gradient-to-b from-champagne/[0.02] to-transparent border border-champagne/[0.05] hover:border-champagne/20 hover:bg-champagne/[0.04] transition-all duration-300 text-right rtl:text-right ltr:text-left"
            >
              <div className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center bg-obsidian self-start">
                {prop.icon}
              </div>
              <h2 className="font-sans text-sm tracking-wider uppercase font-semibold text-ivory">
                {prop.title}
              </h2>
              <p className="font-sans text-xs text-ivory/60 leading-relaxed font-light">
                {prop.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Down arrow indicator scroll trigger anchor */}
      <div className="absolute bottom-6 flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-champagne/40">{t.exploreLabel}</span>
        <ChevronDown className="w-4 h-4 text-champagne/60 animate-bounce" />
      </div>
    </section>
  );
}
