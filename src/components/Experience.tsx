import React, { useState } from 'react';
import { EXPERIENCES } from '../data/eventData';
import { Sparkles, Moon, Users, Cpu, Trophy, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

export const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Moon className="w-6 h-6 text-ink-950" />;
      case 1:
        return <Users className="w-6 h-6 text-ink-950" />;
      case 2:
        return <Cpu className="w-6 h-6 text-white" />;
      case 3:
        return <Trophy className="w-6 h-6 text-ink-950" />;
      default:
        return <Sparkles className="w-6 h-6 text-ink-950" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-cream-100 border-b-4 border-ink-950 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-pink text-white border-2 border-ink-950 rounded-lg text-xs font-mono font-bold shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-daybreak-sunny" />
            <span>WHAT PARTICIPANTS EXPERIENCE</span>
          </div>

          <h2 className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-ink-950 tracking-tight leading-tight">
            Four Chapters.<br />
            <span className="text-daybreak-orange">One Unforgettable Night.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-700 font-sans leading-relaxed">
            From the afternoon doors opening to the golden Bengaluru sunrise, Daybreak is engineered to be the most memorable 24 hours of your maker journey.
          </p>
        </div>

        {/* 4 Asymmetrical / Expressive Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.number}
              onMouseEnter={() => {
                setHoveredCard(idx);
                sound.playClick();
              }}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-cream-50 border-3 border-ink-950 rounded-3xl p-6 sm:p-8 shadow-brutal-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-3 border-b-2 border-ink-950"
                style={{ backgroundColor: exp.color }}
              ></div>

              <div>
                {/* Header Row: Badge & Index Number */}
                <div className="flex items-center justify-between mb-5 pt-2">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 border-2 border-ink-950 rounded-full font-mono text-xs font-black tracking-wider uppercase shadow-xs"
                    style={{ backgroundColor: exp.color, color: exp.textColor }}
                  >
                    <span>{exp.badge}</span>
                  </div>

                  <span className="font-title font-black text-3xl text-ink-950/20 group-hover:text-ink-950 transition-colors">
                    {exp.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-title font-black text-2xl sm:text-3xl text-ink-950 tracking-tight mb-1">
                  {exp.title}
                </h3>
                <div className="text-sm font-mono font-bold text-daybreak-dragon mb-4">
                  {exp.tagline}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-ink-700 font-sans leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Perks List */}
              <div className="pt-4 border-t-2 border-ink-950/15">
                <div className="text-xs font-mono font-bold text-ink-muted mb-2.5 uppercase tracking-wider">
                  WHAT'S INCLUDED:
                </div>
                <div className="space-y-2">
                  {exp.perks.map((perk, perkIdx) => (
                    <div key={perkIdx} className="flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-ink-900">
                      <CheckCircle2 className="w-4 h-4 text-daybreak-dragon shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
