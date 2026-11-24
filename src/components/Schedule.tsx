import React, { useState } from 'react';
import { SCHEDULE } from '../data/eventData';
import { ScheduleItem } from '../types';
import {
  Clock,
  Sparkles,
  Flame,
  BadgeCheck,
  Megaphone,
  Users,
  Utensils,
  Cpu,
  Coffee,
  Sunrise,
  GitCommit,
  MonitorPlay,
  Trophy,
  Filter,
} from 'lucide-react';
import { sound } from '../utils/sound';

export const Schedule: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'BadgeCheck':
        return <BadgeCheck className="w-5 h-5 text-daybreak-dragon" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-daybreak-pink" />;
      case 'Users':
        return <Users className="w-5 h-5 text-daybreak-aqua" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-daybreak-orange" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-daybreak-sunny" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-daybreak-pink" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-daybreak-aqua" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-daybreak-orange" />;
      case 'Sunrise':
        return <Sunrise className="w-5 h-5 text-daybreak-sunny" />;
      case 'GitCommit':
        return <GitCommit className="w-5 h-5 text-daybreak-dragon" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-5 h-5 text-daybreak-pink" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-daybreak-sunny" />;
      default:
        return <Clock className="w-5 h-5 text-daybreak-orange" />;
    }
  };

  const filteredSchedule = selectedPhase === 'all'
    ? SCHEDULE
    : SCHEDULE.filter(item => {
        if (selectedPhase === 'kickoff') return item.phase === 'checkin' || item.phase === 'kickoff';
        if (selectedPhase === 'night') return item.phase === 'midnight' || item.phase === 'night';
        if (selectedPhase === 'dawn') return item.phase === 'dawn' || item.phase === 'finale';
        return true;
      });

  return (
    <section id="schedule" className="py-20 md:py-28 bg-cream-100 border-b-4 border-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-sunny text-ink-950 border-2 border-ink-950 rounded-lg text-xs font-mono font-black shadow-xs mb-3">
              <Clock className="w-3.5 h-3.5 text-daybreak-dragon" />
              <span>THE 24-HOUR JOURNEY</span>
            </div>
            <h2 className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-ink-950 tracking-tight leading-tight">
              From Sunset<br />
              <span className="text-daybreak-dragon">To Daybreak.</span>
            </h2>
          </div>

          <div className="p-3 bg-cream-50 border-2 border-ink-950 rounded-xl shadow-xs max-w-sm">
            <span className="text-[11px] font-mono text-ink-muted leading-tight block">
              📌 <strong>Notice:</strong> Times are tentative schedules designed for planning. Official final timings will be synced via Discord.
            </span>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono font-bold text-ink-muted mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            FILTER:
          </span>

          {[
            { id: 'all', label: 'All 24 Hours' },
            { id: 'kickoff', label: 'Phase 1: Check-in & Kickoff' },
            { id: 'night', label: 'Phase 2: Midnight & Overnight Lab' },
            { id: 'dawn', label: 'Phase 3: Sunrise & Demos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sound.playClick();
                setSelectedPhase(tab.id);
              }}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border-2 border-ink-950 transition-all ${
                selectedPhase === tab.id
                  ? 'bg-ink-950 text-daybreak-sunny shadow-brutal -translate-y-0.5'
                  : 'bg-cream-50 text-ink-900 hover:bg-cream-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visual Timeline Cards */}
        <div className="relative border-l-4 border-ink-950 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-6">
          {filteredSchedule.map((item: ScheduleItem, index: number) => (
            <div
              key={item.id}
              className="relative group transition-all duration-200"
            >
              {/* Timeline Dot on the Vertical Line */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-6 h-6 rounded-full bg-cream-50 border-3 border-ink-950 flex items-center justify-center group-hover:scale-125 group-hover:bg-daybreak-orange transition-all">
                <div className="w-2 h-2 rounded-full bg-ink-950"></div>
              </div>

              {/* Schedule Item Card */}
              <div className="bg-cream-50 border-3 border-ink-950 rounded-2xl p-5 sm:p-6 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-daybreak-sunny text-ink-950 font-mono text-xs font-black rounded border border-ink-950">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-mono text-daybreak-dragon font-bold uppercase">
                      {item.phaseLabel}
                    </span>
                  </div>

                  <span className="self-start sm:self-auto px-2.5 py-0.5 bg-cream-200 text-ink-950 font-mono text-xs font-bold rounded-full border border-ink-950/30">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cream-200 border-2 border-ink-950 rounded-xl shrink-0 mt-0.5">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h4 className="font-title font-black text-xl text-ink-950 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
