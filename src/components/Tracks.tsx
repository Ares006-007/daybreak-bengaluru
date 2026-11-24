import React, { useState } from 'react';
import { TRACKS } from '../data/eventData';
import { Code2, Cpu, Presentation, Sparkles, ArrowRight, Lightbulb, Check } from 'lucide-react';
import { sound } from '../utils/sound';

export const Tracks: React.FC = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(TRACKS[0].id);

  const selectedTrack = TRACKS.find(t => t.id === selectedTrackId) || TRACKS[0];

  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'open-projects':
        return <Code2 className="w-6 h-6 text-ink-950" />;
      case 'hardware-hacks':
        return <Cpu className="w-6 h-6 text-ink-950" />;
      case 'demo-day':
        return <Presentation className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-ink-950" />;
    }
  };

  return (
    <section id="tracks" className="py-20 md:py-28 bg-cream-50 border-b-4 border-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-aqua text-ink-950 border-2 border-ink-950 rounded-lg text-xs font-mono font-black shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-daybreak-dragon" />
              <span>CHOOSE YOUR ARENA</span>
            </div>
            <h2 className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-ink-950 tracking-tight leading-tight">
              Three Main Tracks.<br />
              <span className="text-daybreak-pink">Infinite Possibilities.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-ink-700 font-sans">
            Pick a primary lane or blend software and hardware together. There are no rigid restrictions—build what excites you most.
          </p>
        </div>

        {/* 3 Main Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TRACKS.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <div
                key={track.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedTrackId(track.id);
                }}
                className={`cursor-pointer p-6 rounded-3xl border-3 border-ink-950 transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-cream-100 shadow-brutal-xl -translate-y-2 ring-2 ring-daybreak-dragon'
                    : 'bg-cream-50 hover:bg-cream-100 shadow-brutal hover:-translate-y-1'
                }`}
              >
                {/* Active Indicator Strip */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-2 bg-daybreak-dragon"></div>
                )}

                <div>
                  {/* Track Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl border-2 border-ink-950 flex items-center justify-center shadow-xs ${
                        track.id === 'open-projects'
                          ? 'bg-daybreak-orange'
                          : track.id === 'hardware-hacks'
                          ? 'bg-daybreak-aqua'
                          : 'bg-daybreak-pink'
                      }`}
                    >
                      {getTrackIcon(track.id)}
                    </div>

                    <span className="font-mono text-xs font-bold text-ink-muted">
                      TRACK #{track.id === 'open-projects' ? '01' : track.id === 'hardware-hacks' ? '02' : '03'}
                    </span>
                  </div>

                  <h3 className="font-title font-black text-xl sm:text-2xl text-ink-950 tracking-tight mb-2">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono font-bold text-daybreak-dragon mb-3">
                    {track.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Select button / indicator */}
                <div className="mt-6 pt-4 border-t border-ink-950/20 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-ink-950">
                    {isSelected ? 'VIEWING DETAILS' : 'CLICK TO EXPLORE'}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border border-ink-950 flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-daybreak-dragon text-white' : 'bg-cream-200 text-ink-950'
                    }`}
                  >
                    →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspector for Selected Track */}
        <div className="bg-ink-950 text-white border-3 border-ink-950 rounded-3xl p-6 sm:p-8 md:p-10 shadow-brutal-xl relative overflow-hidden">
          {/* Subtle Halftone pattern & glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-daybreak-dragon/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Track Specs */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-sunny text-ink-950 font-mono text-xs font-black rounded mb-3">
                <span>IN-DEPTH FOCUS</span>
              </div>
              <h4 className="font-title font-black text-3xl sm:text-4xl text-daybreak-sunny tracking-tight mb-3">
                {selectedTrack.title}
              </h4>
              <p className="text-sm sm:text-base text-cream-200 font-sans leading-relaxed mb-6">
                {selectedTrack.description}
              </p>

              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold text-daybreak-aqua uppercase tracking-wider">
                  CORE CATEGORIES & CAPABILITIES:
                </div>
                {selectedTrack.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-cream-100 font-mono">
                    <Check className="w-4 h-4 text-daybreak-aqua shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Project Prompts & Spark Ideas */}
            <div className="lg:col-span-6 bg-ink-900 border-2 border-ink-800 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 text-daybreak-orange font-mono text-xs font-bold mb-4 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>PROJECT INSPIRATIONS & STARTER IDEAS:</span>
              </div>

              <div className="space-y-3">
                {selectedTrack.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-ink-950 border border-ink-700 rounded-xl flex items-center justify-between text-xs sm:text-sm font-sans text-cream-100 group hover:border-daybreak-sunny transition-colors"
                  >
                    <span className="font-medium">"{ex}"</span>
                    <span className="text-[10px] font-mono text-daybreak-sunny bg-ink-900 px-2 py-0.5 rounded border border-ink-800">
                      IDEA #{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-ink-800 flex items-center justify-between text-xs font-mono text-cream-300">
                <span>Ready to build this?</span>
                <span className="text-daybreak-sunny font-bold">Mentors on site 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
