export interface AssetType {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Land' | 'Cold Storage' | 'Agriculture';
  metrics: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  lucrativeYield: string;
}

export interface TelemetryLog {
  id: string;
  timestamp: string;
  topic: string;
  payload: string;
  level: 'operational' | 'secured' | 'notified';
}

export interface JourneyStep {
  stepNumber: string;
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  badge: 'Real Project' | 'Concept';
  title: string;
  location: string;
  scope: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}
