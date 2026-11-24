import React, { useState } from 'react';
import { STICKERS } from '../data/eventData';
import { Sparkles, Heart, Sun, Gamepad2, Tv, Terminal, ShoppingBag } from 'lucide-react';
import { sound } from '../utils/sound';

export const StickerWall: React.FC = () => {
  const [clickedSticker, setClickedSticker] = useState<string | null>(null);

  const getStickerIcon = (name?: string) => {
    switch (name) {
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5 fill-current" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  const handleStickerClick = (id: string) => {
    sound.playDawinBleep();
    setClickedSticker(id);
    setTimeout(() => setClickedSticker(null), 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-cream-100 border-b-4 border-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-daybreak-pink text-white border-2 border-ink-950 rounded-lg text-xs font-mono font-bold shadow-xs mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-daybreak-sunny" />
              <span>OFFICIAL MERCH & STICKER PACK</span>
            </div>
            <h3 className="font-title font-black text-2xl sm:text-3xl text-ink-950 tracking-tight">
              Swag You'll Actually Wear.
            </h3>
          </div>
          <span className="text-xs font-mono text-ink-muted">
            Free for all registered & accepted attendees
          </span>
        </div>

        {/* Sticker Pack Row (Inspired directly by Design Sheet Sticker Pack) */}
        <div className="bg-cream-50 border-3 border-ink-950 rounded-3xl p-6 sm:p-8 shadow-brutal-lg">
          <div className="text-xs font-mono font-bold text-daybreak-dragon mb-4 uppercase tracking-wider">
            TAP TO COLLECT STICKERS:
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            {STICKERS.map((stk) => {
              const isClicked = clickedSticker === stk.id;
              return (
                <button
                  key={stk.id}
                  onClick={() => handleStickerClick(stk.id)}
                  className={`px-4 py-2.5 rounded-2xl border-2 border-ink-950 font-mono text-xs font-black shadow-brutal transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isClicked ? 'scale-110 rotate-6 shadow-none' : 'hover:-translate-y-1 hover:rotate-2'
                  }`}
                  style={{ backgroundColor: stk.bg, color: stk.color }}
                >
                  {stk.type === 'icon' && getStickerIcon(stk.icon)}
                  <span>{stk.label}</span>
                  {isClicked && <Sparkles className="w-3.5 h-3.5 animate-spin" />}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-ink-950/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-muted">
            <span>Includes: Daybreak Hoodie • Laptop Decals • Embroidered Hat • Custom Pin</span>
            <span className="font-bold text-ink-950">ShipIt Teens Merch v1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};
