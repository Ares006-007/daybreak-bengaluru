import React, { useState } from 'react';
import { Sparkles, Terminal, Flame, ArrowRight, Heart } from 'lucide-react';
import { sound } from '../utils/sound';

export const Manifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'comparison'>('philosophy');

  return (
    <section id="manifesto" className="py-20 md:py-28 bg-cream-50 border-b-4 border-ink-950 relative overflow-hidden">
      {/* Decorative Halftone Border Accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-sunny border-2 border-ink-950 rounded-lg text-xs font-mono font-black text-ink-950 shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-daybreak-dragon" />
              <span>THE DAYBREAK PHILOSOPHY</span>
            </div>
            <h2 className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-ink-950 tracking-tight leading-tight">
              A new year.<br />
              <span className="text-daybreak-dragon underline decoration-daybreak-sunny decoration-wavy decoration-4">
                A new build.
              </span>
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 bg-cream-200 border-2 border-ink-950 rounded-2xl shadow-brutal self-start md:self-auto">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('philosophy');
              }}
              className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'philosophy'
                  ? 'bg-ink-950 text-white shadow-xs'
                  : 'text-ink-900 hover:text-daybreak-dragon'
              }`}
            >
              The Core Story
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('comparison');
              }}
              className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'comparison'
                  ? 'bg-ink-950 text-white shadow-xs'
                  : 'text-ink-900 hover:text-daybreak-dragon'
              }`}
            >
              Wait vs Build
            </button>
          </div>
        </div>

        {/* Content Views */}
        {activeTab === 'philosophy' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Manifesto Manifesto Text (7 cols) */}
            <div className="lg:col-span-7 bg-cream-100 border-3 border-ink-950 rounded-3xl p-6 sm:p-8 md:p-10 shadow-brutal-lg flex flex-col justify-between relative">
              {/* Top Retro Stamp */}
              <div className="absolute -top-3 right-8 bg-daybreak-pink text-white font-mono text-[11px] font-black uppercase px-3 py-1 border-2 border-ink-950 rounded shadow-xs rotate-2">
                ORIGINAL MANIFESTO
              </div>

              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-ink-950 leading-snug">
                  "Most people spend New Year's Eve waiting for the clock to strike twelve."
                </p>

                <div className="my-6 pl-4 border-l-4 border-daybreak-orange">
                  <span className="font-mono font-black text-daybreak-dragon text-lg uppercase tracking-wide block mb-1">
                    WE HAVE A DIFFERENT IDEA.
                  </span>
                  <p className="text-base sm:text-lg text-ink-800 font-sans leading-relaxed">
                    What if you spent those hours creating something? What if the first thing you did this year was build, experiment, collaborate, and bring an idea to life?
                  </p>
                </div>

                <p className="text-base sm:text-lg text-ink-900 font-sans leading-relaxed">
                  Daybreak is not about corporate presentations or resume bullet points. It's an overnight sanctuary for curiosity, raw code, soldered wires, 3 AM synth beats, and teen makers refusing to let a new year begin without building.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-ink-950/20 flex flex-wrap items-center justify-between gap-4">
                <div className="font-title font-black text-xl text-ink-950 italic">
                  WELCOME TO DAYBREAK.
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                  <Flame className="w-4 h-4 text-daybreak-dragon" />
                  <span>ShipIt Teens Community</span>
                </div>
              </div>
            </div>

            {/* Right Side: Visual Vignette / Graphic Highlights (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Highlight 01: Midnight Git Commit */}
              <div className="p-5 bg-ink-950 text-white border-3 border-ink-950 rounded-2xl shadow-brutal flex items-start gap-4">
                <div className="p-2.5 bg-daybreak-pink rounded-xl border border-white/20 text-white shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-daybreak-sunny">
                    COMMIT AT 00:00:01
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mt-0.5">
                    Code While The World Counts Down
                  </h4>
                  <p className="text-xs text-cream-300 mt-1 leading-relaxed">
                    While fireworks burst outside, deploy your first commit of 2027 to production alongside 150+ peers.
                  </p>
                </div>
              </div>

              {/* Highlight 02: Sunrise Demo */}
              <div className="p-5 bg-daybreak-sunny text-ink-950 border-3 border-ink-950 rounded-2xl shadow-brutal flex items-start gap-4">
                <div className="p-2.5 bg-ink-950 rounded-xl border border-ink-950 text-daybreak-sunny shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-daybreak-dragon">
                    DAWN ON THE ROOFTOP
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink-950 mt-0.5">
                    Greet The Sun With A Working Prototype
                  </h4>
                  <p className="text-xs text-ink-800 mt-1 leading-relaxed">
                    Watch the sun rise over the Bengaluru tech horizon knowing you turned an empty canvas into something tangible.
                  </p>
                </div>
              </div>

              {/* Highlight 03: Maker Community */}
              <div className="p-5 bg-daybreak-aqua/30 text-ink-950 border-3 border-ink-950 rounded-2xl shadow-brutal flex items-start gap-4">
                <div className="p-2.5 bg-daybreak-aqua rounded-xl border border-ink-950 text-ink-950 shrink-0">
                  <Heart className="w-5 h-5 fill-ink-950" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-daybreak-pink">
                    ZERO SNOBBERY
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink-950 mt-0.5">
                    By Teens, For Teens
                  </h4>
                  <p className="text-xs text-ink-800 mt-1 leading-relaxed">
                    No suits. No gatekeeping. Just pure builder camaraderie, pizza, soldering fumes, and mutual celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-side comparison: Conventional NYE vs Daybreak */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* The Conventional Way */}
            <div className="p-6 md:p-8 bg-cream-200/80 border-3 border-ink-950/40 rounded-3xl opacity-85">
              <div className="inline-block px-3 py-1 bg-ink-950/10 border border-ink-950/30 rounded font-mono text-xs font-bold text-ink-muted mb-4 uppercase">
                THE CONVENTIONAL NEW YEAR'S EVE
              </div>
              <h3 className="font-display font-bold text-2xl text-ink-700">
                Waiting For The Clock
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-ink-600 font-sans">
                  <span className="w-5 h-5 rounded-full bg-ink-950/10 text-ink-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">✕</span>
                  <span>Stuck in crowded traffic or loud generic house parties</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-600 font-sans">
                  <span className="w-5 h-5 rounded-full bg-ink-950/10 text-ink-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">✕</span>
                  <span>Counting down 10... 9... 8... for 10 seconds of brief noise</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-600 font-sans">
                  <span className="w-5 h-5 rounded-full bg-ink-950/10 text-ink-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">✕</span>
                  <span>Writing vague resolutions that vanish by January 3rd</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-600 font-sans">
                  <span className="w-5 h-5 rounded-full bg-ink-950/10 text-ink-500 flex items-center justify-center font-mono text-xs font-bold shrink-0">✕</span>
                  <span>Waking up at 1 PM feeling identical to the day before</span>
                </li>
              </ul>
            </div>

            {/* The Daybreak Way */}
            <div className="p-6 md:p-8 bg-ink-950 text-white border-3 border-daybreak-sunny rounded-3xl shadow-brutal-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-daybreak-pink/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="inline-block px-3 py-1 bg-daybreak-sunny border border-daybreak-sunny rounded font-mono text-xs font-black text-ink-950 mb-4 uppercase">
                THE DAYBREAK WAY
              </div>
              <h3 className="font-display font-black text-2xl text-daybreak-sunny">
                Building Into The Dawn
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-cream-200 font-sans">
                  <span className="w-5 h-5 rounded-full bg-daybreak-aqua text-ink-950 flex items-center justify-center font-mono text-xs font-bold shrink-0">✓</span>
                  <span>Deep building flow surrounded by 150+ passionate teen makers</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cream-200 font-sans">
                  <span className="w-5 h-5 rounded-full bg-daybreak-aqua text-ink-950 flex items-center justify-center font-mono text-xs font-bold shrink-0">✓</span>
                  <span>Hitting enter on your biggest project commit right at 00:00:01</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cream-200 font-sans">
                  <span className="w-5 h-5 rounded-full bg-daybreak-aqua text-ink-950 flex items-center justify-center font-mono text-xs font-bold shrink-0">✓</span>
                  <span>Instant friendships formed over hardware wiring and late-night debugging</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cream-200 font-sans">
                  <span className="w-5 h-5 rounded-full bg-daybreak-aqua text-ink-950 flex items-center justify-center font-mono text-xs font-bold shrink-0">✓</span>
                  <span>Greeting the first sunrise of 2027 holding a finished, working build</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
