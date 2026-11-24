import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Flame, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface FinalCtaProps {
  onOpenRegister: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenRegister }) => {
  const handleJoinClick = () => {
    sound.playChime();

    // Fire Confetti Cannon
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2DDFFF', '#F5F474', '#E33CC7', '#FFAA47', '#F54D28'],
      });
    } catch {
      // Ignore if confetti fails
    }

    onOpenRegister();
  };

  return (
    <section className="py-24 md:py-36 bg-ink-950 text-white border-b-4 border-ink-950 relative overflow-hidden">
      {/* Background Sunrise Radial Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[350px] md:h-[500px] bg-gradient-to-t from-daybreak-orange/30 via-daybreak-pink/20 to-transparent rounded-t-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-daybreak-sunny text-ink-950 font-mono text-xs sm:text-sm font-black rounded-full border-2 border-white shadow-brutal mb-6 uppercase">
          <Flame className="w-4 h-4 text-daybreak-dragon fill-daybreak-dragon" />
          <span>DECEMBER 31 – JANUARY 1 · BENGALURU</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-title font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-none text-white max-w-5xl mx-auto">
          DON'T JUST COUNT DOWN.<br />
          <span className="text-daybreak-sunny drop-shadow-[4px_4px_0px_#F54D28]">
            BUILD SOMETHING.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-lg sm:text-2xl text-cream-200 font-display font-semibold max-w-2xl mx-auto">
          Your new year deserves a better beginning.
        </p>

        {/* Primary Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleJoinClick}
            className="w-full sm:w-auto px-8 py-5 bg-daybreak-orange hover:bg-daybreak-dragon text-ink-950 hover:text-white font-title font-black text-xl sm:text-2xl tracking-wide rounded-2xl border-3 border-white shadow-brutal-xl transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>JOIN DAYBREAK</span>
            <Sparkles className="w-6 h-6 text-white group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <p className="mt-4 font-mono text-xs text-cream-400">
          Admission is 100% free • Limited to 150 teen hackers • All food, drinks & hardware provided
        </p>
      </div>
    </section>
  );
};
