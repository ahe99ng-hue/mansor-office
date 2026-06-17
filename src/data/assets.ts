import { AssetType, TelemetryLog, JourneyStep, CaseStudy } from '../types';

export const ASSET_CLASSES: AssetType[] = [
  {
    id: "land",
    title: "Strategic Land Reserves",
    tagline: "Vast growth-anchored parcels.",
    description: "Securing primary transport corridors and industrial development path-of-growth vectors. We source off-market, unencumbered land with secure zoning rights and direct highway, rail, or municipal infrastructure linkages.",
    category: "Land",
    metrics: [
      { label: "Minimum Allotment", value: "50,000 SQM" },
      { label: "Growth Vector Ratio", value: "3.4:1 path-growth" },
      { label: "Infrastructure Proximity", value: "< 2.5 km" }
    ],
    highlights: [
      "Secured master-planning pre-approvals",
      "Sovereign infrastructure corridor linkages",
      "Discreet parcel consolidation options",
      "Strategic logistics hubs integration"
    ],
    lucrativeYield: "12.4% Asset appreciation path"
  },
  {
    id: "cold-storage",
    title: "Industrial Cold Storage Infrastructure",
    tagline: "Sub-zero precision logistics.",
    description: "Highly automated temperature-controlled storage assets supporting critical pharmaceutical, dairy, and food security supply lines. Designed for extreme climate resilience with dedicated sub-station grid loops.",
    category: "Cold Storage",
    metrics: [
      { label: "Thermal Capacity", value: "-28°C to +4°C continuous" },
      { label: "Automation Index", value: "94% robotic retrieval" },
      { label: "Sovereign Tenant Tenure", value: "15-Year Triple Net (NNN)" }
    ],
    highlights: [
      "Dual-circuit backup generator grids",
      "Custom multi-temperature zone configurations",
      "Direct seaport and dryport runway links",
      "LEED Silver certified structures"
    ],
    lucrativeYield: "8.6% Base NNN yield rate"
  },
  {
    id: "agriculture",
    title: "High-Yield Agricultural Estates",
    tagline: "Sustainable production, sovereign security.",
    description: "Active high-yield agricultural estates utilizing modern aquifer-optimized irrigation structures. Anchored in organic olive, date, and citrus cultivation with secure multi-decade water usage guarantees.",
    category: "Agriculture",
    metrics: [
      { label: "Arable Area Covered", value: "200 Hectares" },
      { label: "Aquifer Draw-down Efficiency", value: "+38% vs regional baseline" },
      { label: "Productive Tree Stocks", value: "45,000+ mature trees" }
    ],
    highlights: [
      "Smart moisture sensors tracking active wells",
      "Multi-decade sovereign export contracts",
      "State-of-the-art biological soil enhancement",
      "Turnkey operational management team"
    ],
    lucrativeYield: "9.2% Agricultural yield index"
  }
];

export const TELEMETRY_FEED: TelemetryLog[] = [
  { id: "1", timestamp: "04:22:15", topic: "SOVEREIGN ESCROW", payload: "Discreet escrow funds cleared for Al-Kharj sector expansion", level: "secured" },
  { id: "2", timestamp: "04:19:02", topic: "KAEC COLD MODULE D", payload: "Core temperature stabilized at -24.2°C; compressor health 99.4%", level: "operational" },
  { id: "3", timestamp: "04:15:33", topic: "AL-JAWF WATER TABLE", payload: "Aquifer telemetry registers normal pressure; optimal crop intake", level: "operational" },
  { id: "4", timestamp: "04:08:44", topic: "DUE DILIGENCE RUN", payload: "Title deed validation completed for Core Lot #4928 - clear", level: "secured" },
  { id: "5", timestamp: "03:59:12", topic: "INVESTMENT CLEARING", payload: "Discreet advisory notification dispatched to HNW syndicate", level: "notified" },
  { id: "6", timestamp: "03:52:00", topic: "SOLAR FARM OVERLAY", payload: "Net-zero battery array outputting 4.2MW peak, cold store self-sufficient", level: "operational" }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: "01",
    phase: "Consultation",
    title: "Private Portfolio Alignment",
    description: "A private consultation to map your family office's capital allocation targets, risk thresholds, and timeline horizons. We construct an investment parameters blueprint.",
    details: ["Discreet NDA onboarding", "Sector preference mapping", "Yield vs liquidity sizing", "Sovereign contract alignment"]
  },
  {
    stepNumber: "02",
    phase: "Site Selection",
    title: "Asset Curation & Drone Feasibility",
    description: "We narrow down our off-market directory to 3 prime opportunities. You receive private drone flyovers, physical land composition telemetry, and location analyses.",
    details: ["High-resolution aerial surveys", "Soil & aquifer diagnostics", "Zoning and expansion forecasts", "Provisional site access protocols"]
  },
  {
    stepNumber: "03",
    phase: "Due Diligence",
    title: "Discreet Underwriting & Audit",
    description: "Rigorous legal and engineering audit. We check title clearances, environment impacts, local tenant records, and future infrastructure plans.",
    details: ["Triple-net (NNN) contract audits", "Sovereign master-plan zoning checks", "Environmental and hydraulic audits", "Corporate structure validation"]
  },
  {
    stepNumber: "04",
    phase: "Negotiation",
    title: "Discreet Terms Structuring",
    description: "Structuring the deal to secure favorable yields, inflation-linked rental escalations, and strong liquidation rights. We represent you with absolute transparency and anonymity.",
    details: ["Discreet corporate representations", "Inflation indexing clauses", "Performance-based escrow payouts", "First-right of refusal option clauses"]
  },
  {
    stepNumber: "05",
    phase: "Closing",
    title: "Ownership Transition & Escrow Clearance",
    description: "Executing precise title dead changes in coordination with dedicated sovereign ministries and local banks. Your brand preserves absolute anonymity from beginning to end.",
    details: ["Direct sovereign ministry sign-offs", "Immediate cash-flow routing checks", "Comprehensive asset onboarding", "Discreet post-investment advisory"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "project-coldstore",
    badge: "Real Project",
    title: "Automated Cold-Chain Port Core",
    location: "King Abdullah Economic City Metro (KAEC)",
    scope: "Industrial Cold Storage Infrastructure Development",
    description: "We successfully brokered and co-underwrote a 24,000 SQM high-bay automated sub-zero logistics facility. Designed for extreme climate thermal containment, currently leased to a major pharmaceutical logistics conglomerate on a 15-year triple-net contract.",
    metrics: [
      { label: "Asset Size", value: "24,000 SQM" },
      { label: "Contract Term", value: "15 Years (NNN)" },
      { label: "Net Yield Profile", value: "8.9% Annually" },
      { label: "Carbon Offset", value: "32% via Solar Co-Gen" }
    ]
  },
  {
    id: "project-agriculture",
    badge: "Concept",
    title: "Al-Jawf Sustainable Olive Compound",
    location: "Al-Jawf Agricultural Valley",
    scope: "Smart Agriculture Estate Strategic Expansion",
    description: "Proposed 200-Hectare expansion of a high-yield super-dense olive cultivar estate. Features integrated deep well smart water management, sub-soil precise hydration telemetry, and an on-site solar-powered milling and bottling facility representing high-margin premium yields.",
    metrics: [
      { label: "Projected Area", value: "2,000,000 SQM" },
      { label: "Water Saving Index", value: "+42% efficiency" },
      { label: "Olive Oil Output", value: "120,000 Liters/Yr" },
      { label: "Underwriting Yield", value: "10.4% Target IRR" }
    ]
  }
];
