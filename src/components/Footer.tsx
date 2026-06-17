import React, { useState, useEffect } from 'react';
import { Shield, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { uiTranslations } from '../data/translations';

interface FooterProps {
  ownerNumber: string;
  lang: 'en' | 'ar';
}

export default function Footer({ ownerNumber, lang }: FooterProps) {
  const [currentTime, setCurrentTime] = useState<string>("");

  const t = uiTranslations[lang]?.footer || uiTranslations['en'].footer;

  useEffect(() => {
    const updateAlexandrianTime = () => {
      const now = new Date();
      try {
        const timeStr = now.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setCurrentTime(timeStr);
      } catch (e) {
        setCurrentTime(now.toLocaleTimeString('en-US', { hour12: true }));
      }
    };
    updateAlexandrianTime();
    const interval = setInterval(updateAlexandrianTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const waUrl = `https://wa.me/${ownerNumber}?text=${lang === 'ar' ? 'مرحبا%20مكتب%20منصور%20أنا%20مهتم%20بالاستثمار%20الخاص' : "Hi%20Mansour%20Office%20I'm%20interested"}`;

  return (
    <footer className="relative bg-obsidian text-ivory border-t border-champagne/15 rounded-t-[3rem] overflow-hidden z-10 pt-16 pb-12 px-6 md:px-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] text-right rtl:text-right ltr:text-left">
      {/* Background vector elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full border border-champagne" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Upper Footer Row: Logo and Operational Status Indicator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-champagne/10 pb-12">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-[2px] bg-champagne"></div>
            <span className="font-sans text-base md:text-xl font-semibold tracking-tight text-ivory flex items-center">
              مكتب منصور 
              <span className="mx-2 opacity-30 text-champagne">|</span> 
              <span className="font-serif italic font-light tracking-wide text-champagne">Mansour Office</span>
            </span>
          </div>

          {/* Core System Status Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 bg-champagne/5 rounded-full border border-champagne/15 inline-flex self-start md:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-champagne tracking-widest uppercase font-bold">
              {t.status}
            </span>
          </div>

        </div>

        {/* Middle Footer Grid: Links, Addresses, and Clock */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-right rtl:text-right ltr:text-left">
          
          {/* Column 1: Editorial Vision (4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">{t.aboutTitle}</span>
            <p className="font-sans text-xs text-ivory/60 leading-relaxed font-light">
              {t.aboutDesc}
            </p>
          </div>

          {/* Column 2: Global Locations (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">{t.hubsTitle}</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div className="flex flex-col font-sans text-ivory/60 font-light leading-normal text-right rtl:text-right ltr:text-left">
                  <span className="font-semibold text-ivory">
                    {lang === 'ar' ? 'الإسكندرية (المقر الرئيسي)' : 'Alexandria (Headquarters)'}
                  </span>
                  <span>
                    {lang === 'ar' ? 'طريق الكورنيش، منطقة كفر عبده' : 'Corniche Road, Kafr Abdu district'}
                  </span>
                  <span>
                    {lang === 'ar' ? 'جمهورية مصر العربية' : 'Arab Republic of Egypt'}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div className="flex flex-col font-sans text-ivory/60 font-light leading-normal text-right rtl:text-right ltr:text-left">
                  <span className="font-semibold text-ivory">
                    {lang === 'ar' ? 'الإسكندرية (مكتب الاتصال والعمليات)' : 'Alexandria (Liaison & Operations)'}
                  </span>
                  <span>
                    {lang === 'ar' ? 'أبراج سان ستيفانو، طريق الجيش' : 'San Stefano Towers, El-Gaish Rd'}
                  </span>
                  <span>
                    {lang === 'ar' ? 'جمهورية مصر العربية' : 'Arab Republic of Egypt'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Live Time (3 columns) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">{t.clockTitle}</span>
            <div className="flex items-center gap-2 bg-obsidian/60 border border-champagne/10 p-4 rounded-xl justify-center">
              <Clock className="w-4 h-4 text-champagne shrink-0" />
              <div className="flex flex-col text-center">
                <span className="font-mono text-xs text-ivory font-bold select-none">{currentTime || "CONNECTING..."}</span>
                <span className="font-mono text-[8px] text-champagne/60 tracking-widest uppercase mt-0.5">{t.clockSync}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer Area: Legal Disclaimer and Copyright */}
        <div className="border-t border-champagne/10 pt-8 mt-4 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[10px] font-sans text-ivory/40 text-right rtl:text-right ltr:text-left">
          
          {/* Legal Disclaimer */}
          <p className="max-w-2xl leading-relaxed font-light text-right rtl:text-right ltr:text-left">
            {t.disclaimer}
          </p>

          {/* Copyright banner */}
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-champagne/60 self-start md:self-auto">
            {t.copyright}
          </span>

        </div>

      </div>
    </footer>
  );
}
