import React from 'react';
import { motion } from 'motion/react';
import { LOCALIZED_JOURNEY_STEPS, uiTranslations } from '../data/translations';
import { ShieldCheck, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';

interface ProtocolProps {
  lang: 'en' | 'ar';
}

export default function ProtocolStack({ lang }: ProtocolProps) {
  const t = uiTranslations[lang]?.protocol || uiTranslations['en'].protocol;
  const steps = LOCALIZED_JOURNEY_STEPS;

  return (
    <section className="relative bg-obsidian py-24 md:py-32 px-4 md:px-8 border-t border-champagne/15" id="protocol">
      <div className="max-w-7xl mx-auto">
        
        {/* Double Column layout for Sticky Stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Title and Navigation Indicator */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col gap-6 text-right rtl:text-right ltr:text-left">
            <div>
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

            {/* Steps Progress Indicator (Adapts border-l versus border-r on RTL) */}
            <div className="flex flex-col gap-4 mt-6 border-l rtl:border-l-0 rtl:border-r border-champagne/10 pl-6 rtl:pr-6 rtl:pl-0">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <span className="font-mono text-[10px] text-champagne tracking-wider group-hover:text-champagne font-bold">
                    {lang === 'ar' ? `المرحلة ${step.stepNumber}` : `STAGE ${step.stepNumber}`}
                  </span>
                  <span className="h-[1px] w-6 bg-champagne/25 group-hover:w-10 transition-all duration-300" />
                  <span className="font-sans text-[11px] text-ivory/45 group-hover:text-ivory transition-colors">
                    {step.phase[lang]}
                  </span>
                </div>
              ))}
            </div>

            {/* Professional Stamp */}
            <div className="mt-8 p-4 rounded-xl bg-champagne/5 border border-champagne/10 flex items-start gap-3 max-w-xs self-start rtl:self-start ltr:self-start">
              <ShieldCheck className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 text-right rtl:text-right ltr:text-left">
                <span className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold">{t.assuranceTitle}</span>
                <span className="font-sans text-[10px] text-ivory/60 leading-normal">
                  {t.assuranceDesc}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Stacking Cards */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-20">
            {steps.map((step, idx) => {
              // Configure incremental top stick offsets so they stack elegantly
              const topOffsetClass = `lg:sticky lg:top-[9rem]`;

              return (
                <div
                  key={step.stepNumber}
                  className={`${topOffsetClass} w-full rounded-[2.5rem] bg-[#2A2A35]/40 backdrop-blur-md border border-champagne/15 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-champagne/45 transition-all duration-500`}
                  style={{
                    // Incremental translateY to show stacked edges
                    transform: `translateY(${idx * 4}px)`,
                    zIndex: idx + 10,
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-champagne/10 pb-6 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-champagne bg-champagne/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                        {lang === 'ar' ? `المرحلة ${step.stepNumber}` : `Stage ${step.stepNumber}`}
                      </span>
                      <span className="text-xs font-mono text-ivory/40">/ {step.phase[lang]}</span>
                    </div>
                    <span className="font-serif italic text-3xl md:text-4xl text-champagne/30">
                      /{step.stepNumber}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-right rtl:text-right ltr:text-left">
                    {/* Primary Step Description */}
                    <div className="md:col-span-7 flex flex-col gap-4">
                      <h3 className="font-serif text-2xl text-ivory font-light leading-snug">
                        {step.title[lang]}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-ivory/60 leading-relaxed font-light">
                        {step.description[lang]}
                      </p>
                    </div>

                    {/* Operational Details Checklist */}
                    <div className="md:col-span-5 flex flex-col gap-3.5 bg-obsidian/40 p-5 rounded-2xl border border-champagne/5">
                      <span className="font-mono text-[9px] text-champagne tracking-widest uppercase font-bold block mb-1">
                        {t.checklistTitle}
                      </span>
                      <div className="flex flex-col gap-2.5">
                        {step.details[lang].map((detail, dIdx) => (
                           <div key={dIdx} className="flex items-start gap-2 text-right rtl:text-right ltr:text-left">
                            <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                            <span className="font-sans text-[11px] text-ivory/80 font-normal leading-tight">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
