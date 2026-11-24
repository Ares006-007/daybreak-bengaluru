export type MascotMood = 'neutral' | 'happy' | 'excited' | 'laugh' | 'curious' | 'thinking' | 'surprised' | 'confused' | 'focused' | 'tired' | 'overwhelmed' | 'idea';

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  phase: 'checkin' | 'kickoff' | 'midnight' | 'night' | 'dawn' | 'finale';
  phaseLabel: string;
  description: string;
  location?: string;
  tag: string;
  iconName: string;
}

export interface TrackItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  examples: string[];
  iconBg: string;
  accentColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'logistics' | 'teams' | 'building';
}

export interface AttendeeBadgeData {
  name: string;
  handle: string;
  track: string;
  role: string;
  lanyardColor: string;
}
