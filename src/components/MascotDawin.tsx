import React, { useState } from 'react';
import { DawinMascot } from './brand/DawinMascot';
import { MascotMood } from '../types';
import { DAWIN_MOODS, DAWIN_LORE } from '../data/eventData';
import { Sparkles, Terminal, Coffee, Cpu, Music, Radio, Headphones, Backpack } from 'lucide-react';
import { sound } from '../utils/sound';

export const MascotDawin: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MascotMood>('happy');

  const handleMoodSelect = (mood: MascotMood) => {
    sound.playDawinBleep();
    setSelectedMood(mood);
  };

  const survivalKit = [
    { icon: <Coffee className="w-4 h-4 text-[#FF7A00]" />, label: 'Filter Coffee & Chai Station', desc: 'Unlimited fuel to power through 3:00 AM' },
    { icon: <Cpu className="w-4 h-4 text-[#4F6D9A]" />, label: 'Hardware Breadboards & Wires', desc: 'Sensor kits, soldering stations & multimeters' },
    { icon: <Music className="w-4 h-4 text-[#6A4C93]" />, label: 'Lo-Fi & Synthwave Live Stream', desc: 'Chill beats to write clean bug-free algorithms' },
    { icon: <Radio className="w-4 h-4 text-[#FFC94D]" />, label: 'Direct Mentor Frequency', desc: 'Experienced founders roaming the tables all night' },
  ];

  return (
    <section id="dawin" className="py-20 md:py-28 bg-cream-50 border-b-4 border-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7A00] text-white border-2 border-ink-950 rounded-lg text-xs font-mono font-black shadow-xs mb-3">
            <Radio className="w-3.5 h-3.5 text-[#FFC94D] animate-pulse" />
            <span>OFFICIAL DAYBREAK MASCOT</span>
          </div>

          <h2 className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-ink-950 tracking-tight leading-tight">
            YOUR COMPANION<br />
            <span className="text-[#FF7A00]">THROUGH THE NIGHT.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-700 font-sans leading-relaxed">
            Meet <strong>DAWIN</strong> — {DAWIN_LORE.title.toLowerCase()}. {DAWIN_LORE.description}
          </p>
        </div>

        {/* Interactive DAWIN Lab Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Console: Large Interactive DAWIN Showcase (6 cols) */}
          <div className="lg:col-span-6 bg-[#F5F1E8] border-3 border-ink-950 rounded-3xl p-6 sm:p-10 shadow-brutal-xl flex flex-col items-center justify-between relative overflow-hidden">
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between pb-4 border-b-2 border-ink-950/20 mb-6">
              <span className="font-mono text-xs font-bold text-ink-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-ping"></span>
                DAWIN CHARACTER SHEET v1.0
              </span>
              <span className="font-mono text-xs text-[#6A4C93] font-bold uppercase">
                STATE: {DAWIN_MOODS[selectedMood].label}
              </span>
            </div>

            {/* Big Mascot Display */}
            <div className="my-auto py-6">
              <DawinMascot
                size="xl"
                mood={selectedMood}
                interactive={true}
                showDialogue={true}
                showBody={true}
                onMoodChange={(m) => setSelectedMood(m)}
              />
            </div>

            {/* Instruction Footer */}
            <div className="w-full pt-4 border-t-2 border-ink-950/20 text-center font-mono text-xs text-ink-muted">
              Tap DAWIN's screen to cycle through all 12 official expressions
            </div>
          </div>

          {/* Right Console: Mood Selector & Personality (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Mood Switcher Buttons — now 12 canonical expressions */}
            <div className="bg-[#F5F1E8] border-3 border-ink-950 rounded-3xl p-6 shadow-brutal">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-ink-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#FF7A00]" />
                  EXPRESSION SELECTOR
                </span>
                <span className="text-[11px] font-mono text-ink-muted">12 official moods</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {(Object.keys(DAWIN_MOODS) as MascotMood[]).map((m) => {
                  const data = DAWIN_MOODS[m];
                  const isCurrent = selectedMood === m;
                  return (
                    <button
                      key={m}
                      onClick={() => handleMoodSelect(m)}
                      className={`p-2.5 rounded-2xl border-2 border-ink-950 font-mono text-[10px] font-bold transition-all text-left flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-[#1E1E1E] text-[#FF7A00] shadow-brutal -translate-y-1'
                          : 'bg-cream-50 text-ink-950 hover:bg-cream-200'
                      }`}
                    >
                      <span className="text-sm font-black tracking-widest leading-none">{data.eyeArt}</span>
                      <span className="mt-1.5 uppercase font-bold tracking-wider truncate">{data.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DAWIN Personality & Lore Card */}
            <div className="bg-cream-100 border-3 border-ink-950 rounded-3xl p-6 shadow-brutal">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#6A4C93] mb-3 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FF7A00]" />
                LORE / PERSONALITY
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {DAWIN_LORE.traits.map((trait, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#F5F1E8] text-[#1E1E1E] border-2 border-ink-950 rounded-full text-xs font-mono font-bold"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="text-xs font-mono text-ink-muted mb-3 uppercase tracking-wider font-bold">
                ITEMS / PROPS:
              </div>
              <div className="flex flex-wrap gap-2">
                {DAWIN_LORE.props.map((prop, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-cream-200 text-ink-900 border border-ink-950/30 rounded text-[11px] font-mono"
                  >
                    {prop}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-ink-950/15 text-xs font-mono text-ink-muted">
                <span className="font-bold text-ink-950">Typography / Markings:</span>{' '}
                {DAWIN_LORE.markings.join(' · ')}
              </div>
            </div>

            {/* DAWIN's Overnight Survival Kit */}
            <div className="bg-[#1E1E1E] text-white border-3 border-ink-950 rounded-3xl p-6 shadow-brutal">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FFC94D] mb-4 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FFC94D]" />
                DAWIN'S OVERNIGHT LAB SURVIVAL ARSENAL
              </div>

              <div className="space-y-3">
                {survivalKit.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl flex items-start gap-3">
                    <div className="p-2 bg-[#1E1E1E] rounded-lg border border-[#444] shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-[#F5F1E8]">{item.label}</div>
                      <div className="text-xs font-sans text-gray-400 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
