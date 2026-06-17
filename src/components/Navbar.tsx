import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';
import { uiTranslations } from '../data/translations';

interface NavbarProps {
  ownerNumber: string;
  lang: 'en' | 'ar';
  onLangChange: (lang: 'en' | 'ar') => void;
}

export default function Navbar({ ownerNumber, lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = uiTranslations[lang]?.nav || uiTranslations['en'].nav;

  const menuItems = [
    { name: t.portfolio, href: "#assets" },
    { name: t.protocol, href: "#protocol" },
    { name: t.caseStudies, href: "#case-studies" }
  ];

  const waUrl = `https://wa.me/${ownerNumber}?text=${lang === 'ar' ? 'مرحبا%20مكتب%20منصور%20أنا%20مهتم%20بالاستثمار%20الخاص' : "Hi%20Mansour%20Office%20I'm%20interested"}`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 pt-6 md:px-8 transition-all duration-500">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto max-w-7xl transition-all duration-500 ${
            scrolled 
              ? 'bg-obsidian/85 backdrop-blur-md border border-champagne/20 py-3 shadow-[0_12px_40px_-12px_rgba(13,13,18,0.7)] rounded-[2rem] px-6' 
              : 'bg-transparent py-4 border border-transparent px-2'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Part */}
            <a href="#" className="flex items-center gap-4 group">
              <div className="h-8 w-[2px] bg-champagne transition-all duration-300 group-hover:h-9"></div>
              <span className="font-sans text-base md:text-xl font-semibold tracking-tight text-ivory flex items-center">
                مكتب منصور 
                <span className="mx-2 opacity-30 text-champagne">|</span> 
                <span className="font-serif italic font-light tracking-wide text-champagne">Mansour Office</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-xs font-semibold tracking-wider text-ivory/70 hover:text-champagne transition-colors duration-200 uppercase relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-champagne group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Connection Status dot + Language + Private Enquiry CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Specialized Language switcher toggle button */}
              <button
                onClick={() => onLangChange(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-1.5 font-sans text-[11px] font-bold tracking-widest text-ivory hover:text-champagne transition-all duration-300 border border-champagne/15 hover:border-champagne/45 bg-champagne/5 rounded-full px-4 py-1.5 cursor-pointer uppercase"
                title={lang === 'ar' ? "Switch to English" : "التحويل للغة العربية"}
              >
                <span className={lang === 'ar' ? 'text-champagne font-black' : 'opacity-40'}>عربي</span>
                <span className="opacity-25 text-champagne">|</span>
                <span className={lang === 'en' ? 'text-champagne font-black' : 'opacity-40'}>EN</span>
              </button>

              <div className="flex items-center gap-2 px-3 py-1 bg-champagne/5 rounded-full border border-champagne/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-mono text-[9px] text-champagne tracking-widest uppercase">{t.discreetChannel}</span>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] font-bold tracking-widest text-[#0D0D12] bg-champagne hover:bg-champagne/90 transition-all duration-300 rounded-full px-6 py-2 uppercase flex items-center gap-2 shadow-[0_4px_20px_rgba(201,168,76,0.15)]"
              >
                {t.investPrivately}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            {/* Mobile Actions Toggler */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Language switcher flag indicator */}
              <button
                onClick={() => onLangChange(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-1 font-sans text-[10px] font-bold tracking-wider text-ivory border border-champagne/20 bg-champagne/5 rounded-full px-2.5 py-1 uppercase"
              >
                <span className={lang === 'ar' ? 'text-champagne font-bold' : 'opacity-40'}>عربي</span>
                <span className="opacity-20 text-champagne">|</span>
                <span className={lang === 'en' ? 'text-champagne font-bold' : 'opacity-40'}>EN</span>
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] font-bold tracking-widest text-[#0D0D12] bg-champagne px-4.5 py-1.5 rounded-full uppercase text-xs"
              >
                {t.investButton}
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-ivory/80 hover:text-champagne transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Backdrop & Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-lg flex flex-col justify-between p-8 pt-28"
          >
            <div className="flex flex-col gap-8">
              <span className="font-mono text-[10px] text-champagne tracking-[0.3em] uppercase">{t.privateNav}</span>
              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ x: lang === 'ar' ? 30 : -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl font-light text-ivory hover:text-champagne transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-champagne/10 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-champagne" />
                <span className="font-mono text-[10px] text-ivory/60 tracking-wider">
                  {lang === 'ar' ? "تم التحقق من تفعيل التخليص السيادي النشط" : "Secure Escrow Clearance Active"}
                </span>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center font-sans text-xs font-bold tracking-widest text-[#0D0D12] bg-champagne py-4 rounded-full uppercase block"
              >
                {lang === 'ar' ? "استفسر بخصوص صفقات الأصول هاتفياً" : "Invest Privately via WA"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
