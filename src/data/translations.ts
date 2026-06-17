export interface TranslationSet {
  nav: {
    portfolio: string;
    protocol: string;
    caseStudies: string;
    discreetChannel: string;
    investPrivately: string;
    investButton: string;
    privateNav: string;
  };
  hero: {
    badge: string;
    tagline1: string;
    precision1: string;
    tagline2: string;
    precision2: string;
    tagline3: string;
    precision3: string;
    contrastLine1: string;
    contrastLine2: string;
    buttonCTA: string;
    exploreLabel: string;
  };
  pillars: {
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  features: {
    badge: string;
    title: string;
    titleAccent: string;
    desc: string;
    blueprintTitle: string;
    liveView: string;
    titleShuffler: string;
    shufflerBadge: string;
    titleTypewriter: string;
    typewriterDesc: string;
    streamActive: string;
    streamPaused: string;
    signalIn: string;
    timelineFlow: string;
    timelineDesc: string;
    stageTooltip1: string;
    stageTooltip2: string;
    stageTooltip3: string;
  };
  protocol: {
    badge: string;
    title: string;
    titleAccent: string;
    desc: string;
    assuranceTitle: string;
    assuranceDesc: string;
    checklistTitle: string;
    stage: string;
  };
  caseStudies: {
    badge: string;
    title: string;
    titleAccent: string;
    realProject: string;
    concept: string;
    titleCalibrator: string;
    calibratorDesc: string;
    allocationLabel: string;
    optionLabel: string;
    minLabel: string;
    maxLabel: string;
    payoutLabel: string;
    payoutDesc: string;
    compoundedLabel: string;
    compoundedDesc: string;
    secureStamp: string;
  };
  footer: {
    status: string;
    aboutTitle: string;
    aboutDesc: string;
    hubsTitle: string;
    clockTitle: string;
    clockSync: string;
    disclaimer: string;
    copyright: string;
  };
}

export const uiTranslations: Record<'en' | 'ar', TranslationSet> = {
  en: {
    nav: {
      portfolio: "Strategic Assets",
      protocol: "The Protocol",
      caseStudies: "Case Studies",
      discreetChannel: "discreet channel",
      investPrivately: "Invest Privately",
      investButton: "Invest",
      privateNav: "Private Navigation"
    },
    hero: {
      badge: "Boutique Investment Asset Escrow",
      tagline1: "Sovereign Capital meets",
      precision1: "Generational Prosperity.",
      tagline2: "Prime Arable Land meets",
      precision2: "Predictable Sovereignty.",
      tagline3: "Cold storage infrastructure meets",
      precision3: "Uncompromising Yield.",
      contrastLine1: "fast commissions",
      contrastLine2: "long-term asset prosperity",
      buttonCTA: "Invest Privately",
      exploreLabel: "explore assets"
    },
    pillars: {
      p1Title: "Strategic Assets",
      p1Desc: "Hand-picked opportunities in large-scale agriculture and industrial storage.",
      p2Title: "Proven Growth",
      p2Desc: "A track record of sustaining value and delivering long-term wealth.",
      p3Title: "Exclusive Brokerage",
      p3Desc: "Professional, transparent, and discreet facilitation of high-stakes deals."
    },
    features: {
      badge: "EXCLUSIVE CAPABILITIES",
      title: "Interactive Investment",
      titleAccent: "Atelier Platforms",
      desc: "We provide our investors with diagnostic tools to verify site layouts, track sub-zero temperatures, and view legal protocol timelines directly.",
      blueprintTitle: "Architectural Vector Map",
      liveView: "LIVE VIEW",
      titleShuffler: "01 / Asset Diagnostic Shuffler",
      shufflerBadge: "Off-Market Database",
      titleTypewriter: "02 / Telemetry Typewriter",
      typewriterDesc: "Direct encrypted operational log of active client transactions and secure facility sensors.",
      streamActive: "FEED: LIVE",
      streamPaused: "FEED: PAUSED",
      signalIn: "Incoming Security Signal",
      timelineFlow: "TIMELINE FLOW",
      timelineDesc: "Hover over the target milestones of our confidential asset procurement workflow.",
      stageTooltip1: "Private onboarding & mandate alignment",
      stageTooltip2: "Rigorous hydraulic & legal checklist audits",
      stageTooltip3: "Secure sovereign escrow funds dispatch"
    },
    protocol: {
      badge: "REGULATORY ROADMAP",
      title: "The Acquisition",
      titleAccent: "Protocol",
      desc: "We govern every asset transaction through a strict 5-stage sovereign process, protecting buyer anonymity and mitigating contract risks.",
      assuranceTitle: "discreet assurance",
      assuranceDesc: "All contracts structured with first-class escrow isolation & full NDAs.",
      checklistTitle: "Operational Checklist",
      stage: "STAGE"
    },
    caseStudies: {
      badge: "VERIFIED OUTCOMES",
      title: "Discreetly Executed",
      titleAccent: "Asset Cases",
      realProject: "Real Project",
      concept: "Concept",
      titleCalibrator: "CONFIDENTIAL ROI CALIBRATOR",
      calibratorDesc: "Adjust variables to simulate return metrics across off-market structured options.",
      allocationLabel: "Investable Capital Allocation (EGP)",
      optionLabel: "Asset Underwriting Option",
      minLabel: "Min: 2M EGP",
      maxLabel: "Max: 100M EGP",
      payoutLabel: "Estimated Annual Cash Payout",
      payoutDesc: "Inflation-indexed Net Cash Return",
      compoundedLabel: "5-Year Cumulative Compounded Assets",
      compoundedDesc: "Assumes standard annual yield recapitalization",
      secureStamp: "VERIFIED SOVEREIGN TITLE REGISTERED"
    },
    footer: {
      status: "System Operational — Investment Secure",
      aboutTitle: "About the atelier",
      aboutDesc: "Mansour Office works as a trusted partner to Sovereign Funds, family offices, and HNWIs, facilitating opaque real estate purchases in Land, Agriculture, and Temperature-Controlled Logistics.",
      hubsTitle: "Liaison Hubs",
      clockTitle: "Alexandria, Egypt (EET)",
      clockSync: "ALEXANDRIA SERVERS SYNCHRONIZED",
      disclaimer: "Confidentiality notice: All offerings are presented subject to direct buyer underwriting validation and execution of active non-disclosure agreements. Registration is subject to sovereign regulatory compliance protocols.",
      copyright: "Mansour Office. Discreetly Preserved."
    }
  },
  ar: {
    nav: {
      portfolio: "الأصول الاستراتيجية",
      protocol: "بروتوكول الاستحواذ",
      caseStudies: "دراسات الحالة",
      discreetChannel: "قناة مشفرة آمنة",
      investPrivately: "استثمر بخصوصية",
      investButton: "استثمار",
      privateNav: "نظام التنقل العاِئلي"
    },
    hero: {
      badge: "أمانة وساطة الأصول الاستثمارية النخبوية",
      tagline1: "يلتقي رأس المال السيادي مع",
      precision1: "الريادة والازدهار العابر للأجيال.",
      tagline2: "تلتقي الأراضي الزراعية البكر مع",
      precision2: "السيادة الغذائية المضمونة.",
      tagline3: "تلتقي مستودعات التبريد مع",
      precision3: "العوائد الاستثمارية غير المشروطة.",
      contrastLine1: "العمولات والصفقات السريعة",
      contrastLine2: "النماء الاستثماري واستدامة الأصول للأبد",
      buttonCTA: "استثمر بخصوصية تامة",
      exploreLabel: "استكشف الفرص الاستراتيجية"
    },
    pillars: {
      p1Title: "الأصول الاستراتيجية",
      p1Desc: "فرص منتقاة بعناية فائقة في مجالات الزراعة الكبرى ومستودعات التبريد اللوجستية.",
      p2Title: "نمو مُثبت ومستدام",
      p2Desc: "سجل حافل يعزز قيمة الثروات ويمنح تدفقات مالية مستقرة للأجيال القادمة.",
      p3Title: "وساطة مكتبية حصرية",
      p3Desc: "تسهيل صفقات كبرى بخصوصية مطلقة واحترافية وتوافق تام مع التشريعات."
    },
    features: {
      badge: "قدرات ومميزات استثنائية",
      title: "منصات ووسائل استثمار تفاعلية",
      titleAccent: "تحليلات دقيقة ولحظية",
      desc: "نمنح شركاءنا من المكاتب العائلية أدوات تفاعلية لفحص الأراضي إلكترونياً، وتتبع غرف التجميد وصحة الآبار عبر تكنولوجيا الاستشعار المتقدمة.",
      blueprintTitle: "مخطط بياني هندسي تفاعلي",
      liveView: "البث المباشر",
      titleShuffler: "01 / مستكشف الأصول والفرص الحالية",
      shufflerBadge: "قاعدة بيانات الصفقات غير المعلنة",
      titleTypewriter: "02 / رصد وقراءات التخميد المالي واللوجسيتي",
      typewriterDesc: "سجل عمليات وإشارات مشفرة من غرف العمليات اللوكستية والآبار وحسابات المدفوعات الآمنة.",
      streamActive: "البث: حي ونشط",
      streamPaused: "البث: متوقف موقتاً",
      signalIn: "إشارة أمان واردة مستقرة",
      timelineFlow: "مسار مراحل التنسيق",
      timelineDesc: "مرر مؤشر الفأرة على المحطات الرئيسية لتفاصيل وجدول الاستحواذ الآمن.",
      stageTooltip1: "مرحلة التعارف وتوقيع اتفاقيات عدم الإفصاح المتبادلة",
      stageTooltip2: "الفحص القانوني والتحقق الهيدروليكي وجودة التربة والآبار",
      stageTooltip3: "تخليص الإجراءات السيادية وبدء التدفق المالي للمشروع"
    },
    protocol: {
      badge: "دليل وخطوات التنظيم",
      title: "بروتوكول وآلية",
      titleAccent: "الاستحواذ الرسمي",
      desc: "نخضع كافة تداولاتنا ونقل ملكية الأصول الصامتة لـ 5 مراحل مدروسة تحافظ على سرية وهوية العميل وتدرأ أي مخاطر.",
      assuranceTitle: "الضمانة السيادية والسرية",
      assuranceDesc: "تدار كافة الصفقات بحسابات بنكية وسيطة وحماية تامة للسرية التجارية.",
      checklistTitle: "قائمة مهام العمليات النشطة",
      stage: "المرحلة"
    },
    caseStudies: {
      badge: "دراسات ومشاريع تم تنفيذها",
      title: "حالات استثمارية",
      titleAccent: "انتهت بنجاح",
      realProject: "مشروع حقيقي",
      concept: "دراسة استشرافية",
      titleCalibrator: "حاسبة محاكاة العوائد السرية لشركائنا",
      calibratorDesc: "قم بتوجيه مؤشر رأس المال المستثمر لرصد ومحاكاة الأرباح الصافية وفق مؤشرات الأداء.",
      allocationLabel: "توزيع رأس المال الاستثماري المتاح (بالجنيه المصري)",
      optionLabel: "النموذج الاستثماري المقترح",
      minLabel: "الحد الأدنى: 2 مليون جنيه",
      maxLabel: "الحد الأقصى: 100 مليون جنيه",
      payoutLabel: "عائد النقد السنوي الصافي المقدر",
      payoutDesc: "عبر توزيعات نقدية محمية ومرتبطة بفرص التضخم العقاري",
      compoundedLabel: "إجمالي قيمة الأصول المتراكمة خلال 5 سنوات",
      compoundedDesc: "بافتراض إعادة استثمار المبالغ والأرباح بشكل دوري",
      secureStamp: "تم تسجيل الصكوك السيادية رسمياً للمستثمرين"
    },
    footer: {
      status: "النظام نشط بالكامل - حماية رأس المال مفعّلة والودائع مؤمنة",
      aboutTitle: "عن المكتب الخاص",
      aboutDesc: "يعمل مكتب منصور كشريك استشاري واستثماري موثوق للصناديق السيادية، المكاتب العائلية، وكبار المستثمرين المهتمين باقتناء أراضٍ كبرى استراتيجية وبنى تحتية غذائية بكفاءة وسرية لامتناهية.",
      hubsTitle: "مكاتب وقنوات الاتصال الدولية",
      clockTitle: "توقيت الإسكندرية، مصر",
      clockSync: "خادم الإسكندرية متزامن",
      disclaimer: "إخلاء مسؤولية سرّي: كافة العروض والتحليلات تقدم بدقة وتخضع للاتفاقيات المباشرة والمصادقة السيادية وتوقيع مذكرات السرية المتبادلة مسبقاً قبل المعاينات الفعلية.",
      copyright: "جميع الحقوق محفوظة لصالح مكتب منصور الاستثماري الخاص."
    }
  }
};

export interface LocalizedAsset {
  id: string;
  category: 'Land' | 'Cold Storage' | 'Agriculture';
  title: Record<'en' | 'ar', string>;
  tagline: Record<'en' | 'ar', string>;
  description: Record<'en' | 'ar', string>;
  lucrativeYield: Record<'en' | 'ar', string>;
  highlights: Record<'en' | 'ar', string[]>;
  metrics: {
    label: Record<'en' | 'ar', string>;
    value: Record<'en' | 'ar', string>;
  }[];
}

export const LOCALIZED_ASSETS: LocalizedAsset[] = [
  {
    id: "land",
    category: "Land",
    title: {
      en: "Strategic Land Reserves",
      ar: "المستودعات الأراضية الاستراتيجية"
    },
    tagline: {
      en: "Vast growth-anchored parcels.",
      ar: "مساحات شاسعة في محاور ومسارات النمو السريع للجغرافيا الاستثمارية."
    },
    description: {
      en: "Securing primary transport corridors and industrial development path-of-growth vectors. We source off-market, unencumbered land with secure zoning rights and direct highway, rail, or municipal infrastructure linkages.",
      ar: "تأمين ممرات النقل الاستراتيجية ومحاور البنى التحتية والتوزيع اللوجستي المستقبلي. جميع الأراضي غير معروضة في السوق المفتوح ومصنفة زونينغ صناعي أو استثماري حر."
    },
    lucrativeYield: {
      en: "12.4% Asset appreciation path",
      ar: "مسار نمو وتزايد دفتري يقدر بـ 12.4% سنوياً للأصل"
    },
    highlights: {
      en: [
        "Secured master-planning pre-approvals",
        "Sovereign infrastructure corridor linkages",
        "Discreet parcel consolidation options",
        "Strategic logistics hubs integration"
      ],
      ar: [
        "موافقات مسبقة معتمدة لتطوير الأراضي وتخطيطها",
        "مربوطة مباشرة بشريان ممرات النقل السيادية",
        "خيارات لضم وتوحيد الصكوك الكبرى بمرونة تامة",
        "موقع متماسك مع الخطط والموانئ الجافة والنقل اللوجستي"
      ]
    },
    metrics: [
      {
        label: { en: "Minimum Allotment", ar: "الحد الأدنى للحيازة" },
        value: { en: "50,000 SQM", ar: "٥٠ ألف متر مربع" }
      },
      {
        label: { en: "Growth Vector Ratio", ar: "معامل النمو الجغرافي" },
        value: { en: "3.4:1 path-growth", ar: "٣.٤ ضعف للنمو المستهدف" }
      },
      {
        label: { en: "Infrastructure Proximity", ar: "القرب من البنى التحتية" },
        value: { en: "< 2.5 km", ar: "أقل من ٢.٥ كم" }
      }
    ]
  },
  {
    id: "cold-storage",
    category: "Cold Storage",
    title: {
      en: "Industrial Cold Storage Infrastructure",
      ar: "بنى مستودعات التبريد اللوجستية"
    },
    tagline: {
      en: "Sub-zero precision logistics.",
      ar: "مستودعات تبريد مبرمجة ومتكاملة ومؤتمتة بالكامل عابرة للحدود."
    },
    description: {
      en: "Highly automated temperature-controlled storage assets supporting critical pharmaceutical, dairy, and food security supply lines. Designed for extreme climate resilience with dedicated sub-station grid loops.",
      ar: "مستودعات تبريد معززة بالذكاء الاصطناعي والأتمتة الروبوتية للتحكم بالحرارة لخدمة سلاسل الإمداد الطبية والصناعية والغذائية الكبرى. تصميم يقاوم درجات الحرارة الاستثنائية بكهرباء احتياطية متكاملة."
    },
    lucrativeYield: {
      en: "8.6% Base NNN yield rate",
      ar: "معدل ربح صافي مضمون ومؤمن بنسبة 8.6% بعقد إيجار NNN"
    },
    highlights: {
      en: [
        "Dual-circuit backup generator grids",
        "Custom multi-temperature zone configurations",
        "Direct seaport and dryport runway links",
        "LEED Silver certified structures"
      ],
      ar: [
        "مولدات طاقة موازية ذات تشغيل آلي فوري",
        "توزيع غرف تجميد مرنة متعددة ومريحة للمستأجر",
        "ربط مباشر مع صالات النوانئ والمدرجات والشحن الجاف",
        "حاصل على تصنيف رخص البناء الفضي LEED الصديق للبيئة"
      ]
    },
    metrics: [
      {
        label: { en: "Thermal Capacity", ar: "السعة الحرارية والتشغيلية" },
        value: { en: "-28°C to +4°C continuous", ar: "من ٢٨- م إلى ٤+ م مستمر" }
      },
      {
        label: { en: "Automation Index", ar: "معامل الأتمتة والروبوتكس" },
        value: { en: "94% robotic retrieval", ar: "٩٤٪ استرجاع روبوتي كامل" }
      },
      {
        label: { en: "Sovereign Tenant Tenure", ar: "عمر العقد والتأمين الاستراتيجي" },
        value: { en: "15-Year Triple Net (NNN)", ar: "عقد مدته ١٥ سنة NNN صافي للمالك" }
      }
    ]
  },
  {
    id: "agriculture",
    category: "Agriculture",
    title: {
      en: "High-Yield Agricultural Estates",
      ar: "أصول المشروعات الزراعية عالية الربحية"
    },
    tagline: {
      en: "Sustainable production, sovereign security.",
      ar: "مجمعات زراعية ذكية ممتدة مروية بأنظمة الرصد الهيدروليكي الذكي."
    },
    description: {
      en: "Active high-yield agricultural estates utilizing modern aquifer-optimized irrigation structures. Anchored in organic olive, date, and citrus cultivation with secure multi-decade water usage guarantees.",
      ar: "مجمعات ومزارع متطورة وشاسعة مدعومة بأجهزة قياس استهلاك المياه الجوفية. متخصصة في زراعة الزيتون والنخيل والحمضيات ومربوطة بعقود التصدير والبيع السيادية طويلة الامد."
    },
    lucrativeYield: {
      en: "9.2% Agricultural yield index",
      ar: "معدل ربح وفير وتصاعدي يقارب 9.2% سنوياً للأصول"
    },
    highlights: {
      en: [
        "Smart moisture sensors tracking active wells",
        "Multi-decade sovereign export contracts",
        "State-of-the-art biological soil enhancement",
        "Turnkey operational management team"
      ],
      ar: [
        "أنظمة استشعار ذكية لحظية لرطوبة الجذور وصحة الآبار",
        "عقود واتفاقيات تصدير مضمونة سيادياً لعقود من الزمن",
        "تحسين للتربة بالترسيبات البيولوجية العضوية الممتازة",
        "فريق تشغيلي هندسي وإداري كامل (تسليم مفتاح للمستثمر)"
      ]
    },
    metrics: [
      {
        label: { en: "Arable Area Covered", ar: "المساحات الصالحة والمزروعة" },
        value: { en: "200 Hectares", ar: "٢٠٠ هكتار منتج نشط" }
      },
      {
        label: { en: "Aquifer Efficiency", ar: "كفاءة وترشيد استهلاك المياه" },
        value: { en: "+38% vs regional baseline", ar: "وفر بنسبة ٣٨٪ مقارنة بالمحيط" }
      },
      {
        label: { en: "Productive Tree Stocks", ar: "إجمالي الأشجار المنتجة" },
        value: { en: "45,000+ mature trees", ar: "أكثر من ٤٥ ألف شجرة مثمرة" }
      }
    ]
  }
];

export interface LocalizedJourneyStep {
  stepNumber: string;
  phase: Record<'en' | 'ar', string>;
  title: Record<'en' | 'ar', string>;
  description: Record<'en' | 'ar', string>;
  details: Record<'en' | 'ar', string[]>;
}

export const LOCALIZED_JOURNEY_STEPS: LocalizedJourneyStep[] = [
  {
    stepNumber: "01",
    phase: { en: "Consultation", ar: "الاستشارة والنقاش" },
    title: {
      en: "Private Portfolio Alignment",
      ar: "مواءمة ميزانية وثروة شريكنا"
    },
    description: {
      en: "A private consultation to map your family office's capital allocation targets, risk thresholds, and timeline horizons. We construct an investment parameters blueprint.",
      ar: "جلسة ونقاش صامت ومغلق لمسح وتحديد الحجم المستهدف للاستفادة من السيولة وتطلعات العوائد والجدول الزمني للبدء والصلاحية المطلوبة."
    },
    details: {
      en: ["Discreet NDA onboarding", "Sector preference mapping", "Yield vs liquidity sizing", "Sovereign contract alignment"],
      ar: ["تفعيل فوري لاتفاقية عدم الإفصاح المشددة والمتبادلة", "تحديد الخيارات المفضلة (الزراعية، الصناعية، البنى اللوجستية)", "تحديد نسبة الأرباح المستهدفة في كفة والسيولة في الكفة المقابلة", "دراسة توافق وتواؤم عقود المشروع مع التشريعات المنظمة"]
    }
  },
  {
    stepNumber: "02",
    phase: { en: "Site Selection", ar: "مسح وتعيين الفرص" },
    title: {
      en: "Asset Curation & Drone Feasibility",
      ar: "فلترة الأصول والمسح الجوي الفني"
    },
    description: {
      en: "We narrow down our off-market directory to 3 prime opportunities. You receive private drone flyovers, physical land composition telemetry, and location analyses.",
      ar: "نقوم باصطفاء أصلح وآكد الفرص من نظامنا المغلق لتصل إلى ٣ خيارات فقط. نسدد لك تقريراً هندسياً مدعوماً بلقطات طائرات بدون طيار ومسوحات عمق التربة الجيولوجية."
    },
    details: {
      en: ["High-resolution aerial surveys", "Soil & aquifer diagnostics", "Zoning and expansion forecasts", "Provisional site access protocols"],
      ar: ["مسوحات جوية وصور بالأشعة الحرارية وتحليل التضاريس والخطوط", "كشوف فحص جودة وحجم وقدرة وتدفق المياه في الآبار", "مستشعرات ومعامل الارتطام بالخطط والمخططات العمرانية", "بروتوكولات وترتيب زيارة صامتة ومغلقة للموقع للمستثمر"]
    }
  },
  {
    stepNumber: "03",
    phase: { en: "Due Diligence", ar: "الفحص النافي للجهالة" },
    title: {
      en: "Discreet Underwriting & Audit",
      ar: "المراجعة القانونية والهندسية الدقيقة"
    },
    description: {
      en: "Rigorous legal and engineering audit. We check title clearances, environment impacts, local tenant records, and future infrastructure plans.",
      ar: "عمليات تدقيق شاملة للتحقق من سلامة الصكوك وتاريخ الحيازات، وفحص السجلات البيئية ونزاهة العقود مع أي مستخدمين سابقين."
    },
    details: {
      en: ["Triple-net (NNN) contract audits", "Sovereign master-plan zoning checks", "Environmental and hydraulic audits", "Corporate structure validation"],
      ar: ["فحص العقود والشروط NNN والضمانات البنكية المودعة", "تقصي وتأكيد عدم وجود خدمات أو مرافق مارة بالأرض تخالف المخططات", "كارت فحص هيدروليكي للتربة والآبار ومنسوب ملوحة المياه الجوفية", "صياغة الهياكل والشركات ذات الأغراض الخاصة (SPVs) لكامل الحصص"]
    }
  },
  {
    stepNumber: "04",
    phase: { en: "Negotiation", ar: "المفاوضات والاشتراطات" },
    title: {
      en: "Discreet Terms Structuring",
      ar: "هيكلة البنود وضمانات التدفق"
    },
    description: {
      en: "Structuring the deal to secure favorable yields, inflation-linked rental escalations, and strong liquidation rights. We represent you with absolute transparency and anonymity.",
      ar: "هيكلة البنود بصيغ تحافظ على الأرباح وربط قيم الايجارات مع مؤشرات مستويات التضخم لضمان الفعالية الدائمة، مع تمثيلك بالكامل دون ذكر هويتك."
    },
    details: {
      en: ["Discreet corporate representations", "Inflation indexing clauses", "Performance-based escrow payouts", "First-right of refusal option clauses"],
      ar: ["تمثيل قانوني رفيع لا يشير لهوية المكاتب العائلية المشترية", "شروط ربط التسويات والزيادات الدورية بمؤشرات الغلاء", "صرف أجزاء الدفعات عبر الحسابات البنكية الوسيطة للمحامي مع تقدم الإجراءات", "حق الأولوية والشفعة والتفاوض الإضافي للأراضي المجاورة"]
    }
  },
  {
    stepNumber: "05",
    phase: { en: "Closing", ar: "نقل الحيازة والإفراغ" },
    title: {
      en: "Ownership Transition & Escrow Clearance",
      ar: "سداد المبالغ والإفراغ الرسمي للصكوك"
    },
    description: {
      en: "Executing precise title dead changes in coordination with dedicated sovereign ministries and local banks. Your brand preserves absolute anonymity from beginning to end.",
      ar: "إتمام تفاصيل ونقل الحيازة وإفراغ الصك عبر كتابة العدل والوزارات المعنية والمصارف المحلية المعتمدة. تظل هويتك وعائلتك مخفية تماماً طوال المسار."
    },
    details: {
      en: ["Direct sovereign ministry sign-offs", "Immediate cash-flow routing checks", "Comprehensive asset onboarding", "Discreet post-investment advisory"],
      ar: ["اعتمادات وتوقيعات الجهات الرقابية والسيادية والوزارية المختصة بسلامة الإجراء", "طرق آلية وقنوات استلام الأرباح والتدفقات دورياً", "تنصيب فريق التشغيل وبدء رصد ومتابعةTelemetry", "دعم ما بعد الاستثمار الاستثنائي لمتابعة وتضخيم القيمة"]
    }
  }
];

export interface LocalizedCaseStudy {
  id: string;
  badge: 'Real Project' | 'Concept';
  title: Record<'en' | 'ar', string>;
  location: Record<'en' | 'ar', string>;
  scope: Record<'en' | 'ar', string>;
  description: Record<'en' | 'ar', string>;
  metrics: {
    label: Record<'en' | 'ar', string>;
    value: Record<'en' | 'ar', string>;
  }[];
}

export const LOCALIZED_CASE_STUDIES: LocalizedCaseStudy[] = [
  {
    id: "project-coldstore",
    badge: "Real Project",
    title: {
      en: "Automated Cold-Chain Port Core",
      ar: "مستودع التبريد الآلي فائق الدقة بالميناء اللوجستي"
    },
    location: {
      en: "King Abdullah Economic City Metro (KAEC)",
      ar: "متروبول مدينة الملك عبدالله الاقتصادية (KAEC)"
    },
    scope: {
      en: "Industrial Cold Storage Infrastructure Development",
      ar: "تطوير وضمان بنى التخزين اللوجستي المبردة الكبرى"
    },
    description: {
      en: "We successfully brokered and co-underwrote a 24,000 SQM high-bay automated sub-zero logistics facility. Designed for extreme climate thermal containment, currently leased to a major pharmaceutical logistics conglomerate on a 15-year triple-net contract.",
      ar: "لقد تكلل عملنا بنجاح وساطة واستحواذ مستودع تبريد عملاق بمساحة ٢٤ ألف متر مربع بنظام هاي-باي المؤتمت بالكامل. مصمم بجدير عزل مضاعفة للحفاظ التام على الحرارة في درجات قياسية ومنقاد بعقد ١٥ سنة NNN لشركة لوجيستيات أدوية عملاقة."
    },
    metrics: [
      {
        label: { en: "Asset Size", ar: "مساحة المنشأة ومستودعاتها" },
        value: { en: "24,000 SQM", ar: "٢٤,٠٠٠ م٢ وملاحق إضافية" }
      },
      {
        label: { en: "Contract Term", ar: "عقد الإلزام وصياغة الإيجار" },
        value: { en: "15 Years (NNN)", ar: "١٥ سنة إلزامية (NNN)" }
      },
      {
        label: { en: "Net Yield Profile", ar: "صافي الأرباح السنوية" },
        value: { en: "8.9% Annually", ar: "٨.٩٪ من القيمة دورياً" }
      },
      {
        label: { en: "Carbon Offset", ar: "ترشيد الطاقة وتوليد الشمس" },
        value: { en: "32% via Solar Co-Gen", ar: "٣٢٪ وفر هجين عبر الألواح" }
      }
    ]
  },
  {
    id: "project-agriculture",
    badge: "Concept",
    title: {
      en: "Al-Jawf Sustainable Olive Compound",
      ar: "مشروع الجوف الزراعي المستدام للزيتون"
    },
    location: {
      en: "Al-Jawf Agricultural Valley",
      ar: "سهول ووديان منطقة الجوف الزراعية الكبرى"
    },
    scope: {
      en: "Smart Agriculture Estate Strategic Expansion",
      ar: "تطوير وتأمين مشروعات مجمعات زراعية ذكية"
    },
    description: {
      en: "Proposed 200-Hectare expansion of a high-yield super-dense olive cultivar estate. Features integrated deep well smart water management, sub-soil precise hydration telemetry, and an on-site solar-powered milling and bottling facility representing high-margin premium yields.",
      ar: "خطة وتفاصيل مجمع زراعي ذكي بـ ٢٠٠ هكتار لزراعة وتصنيع الزيتون العضوي فائق الكثافة. يحتوي على بئر مائي ذكي متكامل لقياس المياه ومطحنة حديثة مروية ونظام تعبئة يعمل بالطاقة الشمسية بالكامل لحصد عوائد تصدير فائقة."
    },
    metrics: [
      {
        label: { en: "Projected Area", ar: "المساحات الصالحة الكلية" },
        value: { en: "2,000,000 SQM", ar: "٢,٠٠٠,٠٠٠ متر مربع" }
      },
      {
        label: { en: "Water Saving Index", ar: "كفاءة ونسبة كبح الهدر للآبار" },
        value: { en: "+42% efficiency", ar: "وفر ممتاز يقارب ٤٢٪" }
      },
      {
        label: { en: "Olive Oil Output", ar: "السعة وتصنيع المنتج" },
        value: { en: "120,000 Liters/Yr", ar: "١٢٠ ألف لتر معبأ ممتاز" }
      },
      {
        label: { en: "Underwriting Yield", ar: "متوسط الأرباح المستهدفة" },
        value: { en: "10.4% Target IRR", ar: "١٠.٤٪ معدل العائد المستهدف" }
      }
    ]
  }
];

export const LOCALIZED_LIVE_LOGS: Record<'en' | 'ar', string[]> = {
  en: [
    "100M EGP corporate guarantee verified successfully",
    "Sensor Node AL-49 shows static moisture; water matrix safe",
    "Precision drone flight plot updated for sovereign coordinate",
    "Logistics node HVAC power cycle completed: normal",
    "Discreet buyer mandate recorded; KYC processing"
  ],
  ar: [
    "تم التحقق بنجاح من ضمان بنكي للمشروع بمبلغ ١٠٠ مليون جنيه مصري",
    "عقدة الرصد AL-49 تظهر رطوبة مستقرة؛ منسوب البئر ممتاز",
    "تحديث خط مسار الطائرة المسيرة لإحداثيات الموقع السيادي ديسكريت",
    "تم رصد انتظام درجات التجميد لمستودع التبريد: مستقرة وتعمل",
    "تسجيل رغبة شراء مشفرة وصامتة من مكتب عائلي محلي؛ تدقيق KYC"
  ]
};
