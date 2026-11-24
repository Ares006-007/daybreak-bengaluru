import React, { useState } from 'react';
import { Sparkles, QrCode, Tag, Check, Download, RefreshCw, UserCheck } from 'lucide-react';
import { sound } from '../utils/sound';

export const BadgeGenerator: React.FC = () => {
  const [name, setName] = useState('Alex Rivera');
  const [handle, setHandle] = useState('@alexbuilds');
  const [track, setTrack] = useState('Open Projects');
  const [role, setRole] = useState('Builder / Hacker');
  const [lanyardColor, setLanyardColor] = useState('#E33CC7'); // Tech Pink default
  const [badgeSide, setBadgeSide] = useState<'front' | 'back'>('front');

  const lanyards = [
    { label: 'Tech Pink', color: '#E33CC7' },
    { label: 'Psychedelic Aqua', color: '#2DDFFF' },
    { label: 'Dragon Fire', color: '#F54D28' },
    { label: 'Sunny Yellow', color: '#F5F474' },
    { label: 'Ink Violet', color: '#140E24' },
  ];

  return (
    <section id="badge" className="py-20 md:py-28 bg-cream-100 border-b-4 border-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-sunny text-ink-950 border-2 border-ink-950 rounded-lg text-xs font-mono font-black shadow-xs mb-3">
            <Tag className="w-3.5 h-3.5 text-daybreak-dragon" />
            <span>INTERACTIVE EVENT BADGE (v1.0)</span>
          </div>

          <h2 className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-ink-950 tracking-tight leading-tight">
            Claim Your Badge.<br />
            <span className="text-daybreak-pink">Own Your Build.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink-700 font-sans leading-relaxed">
            Every accepted hacker receives an official engraved Daybreak v1.0 credential badge at check-in. Customize your pass now to see how you'll enter the lab on December 31st!
          </p>
        </div>

        {/* Studio Grid: Controls Left, Live Badge Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Badge Customizer Form (6 cols) */}
          <div className="lg:col-span-6 bg-cream-50 border-3 border-ink-950 rounded-3xl p-6 sm:p-8 shadow-brutal-lg">
            <h3 className="font-display font-bold text-xl text-ink-950 mb-5 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-daybreak-dragon" />
              <span>Badge Customizer Controls</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                  Full Name / Builder Handle:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-cream-100 border-2 border-ink-950 rounded-xl font-display font-bold text-ink-950 text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  maxLength={24}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    GitHub / Social Handle:
                  </label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-cream-100 border-2 border-ink-950 rounded-xl font-mono text-sm text-ink-950 focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                    maxLength={18}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    Primary Track:
                  </label>
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full px-4 py-2.5 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm font-semibold text-ink-950 focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  >
                    <option value="Open Projects">Open Projects</option>
                    <option value="Hardware Hacks">Hardware Hacks</option>
                    <option value="Demo Day & Showcase">Demo Day & Showcase</option>
                  </select>
                </div>
              </div>

              {/* Lanyard Color Picker */}
              <div>
                <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-2">
                  Lanyard Strap Color:
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  {lanyards.map((l) => (
                    <button
                      key={l.label}
                      onClick={() => {
                        sound.playClick();
                        setLanyardColor(l.color);
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-ink-950 text-xs font-mono font-bold transition-all ${
                        lanyardColor === l.color
                          ? 'ring-2 ring-ink-950 shadow-brutal -translate-y-0.5'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: l.color, color: l.color === '#F5F474' || l.color === '#2DDFFF' ? '#140E24' : '#FFFFFF' }}
                    >
                      {lanyardColor === l.color && <Check className="w-3 h-3" />}
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Flip Badge Button */}
              <div className="pt-4 border-t border-ink-950/20 flex items-center justify-between">
                <button
                  onClick={() => {
                    sound.playClick();
                    setBadgeSide(badgeSide === 'front' ? 'back' : 'front');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cream-200 hover:bg-cream-300 text-ink-950 font-mono text-xs font-bold rounded-xl border-2 border-ink-950 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Flip to {badgeSide === 'front' ? 'Back View' : 'Front View'}</span>
                </button>

                <span className="text-xs font-mono text-ink-muted">
                  Pass ID: DB-2027-BLR
                </span>
              </div>
            </div>
          </div>

          {/* Live Badge Preview Graphic (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-4">
            {/* Lanyard Top Strap Loop */}
            <div className="flex flex-col items-center mb-[-8px] z-10">
              <div
                className="w-10 h-14 border-2 border-ink-950 rounded-t-lg shadow-sm"
                style={{ backgroundColor: lanyardColor }}
              ></div>
              {/* Metallic Clip Hook */}
              <div className="w-7 h-5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 border-2 border-ink-950 rounded-sm"></div>
            </div>

            {/* The Badge Card Body */}
            <div
              className={`w-72 sm:w-80 h-[430px] rounded-3xl border-4 border-ink-950 p-6 flex flex-col justify-between shadow-brutal-xl transition-all duration-300 relative overflow-hidden select-none ${
                badgeSide === 'front' ? 'bg-cream-50' : 'bg-ink-950 text-white'
              }`}
            >
              {/* Top Lanyard Slot Cutout */}
              <div className="w-14 h-2 bg-ink-950 rounded-full mx-auto -mt-2 mb-3"></div>

              {badgeSide === 'front' ? (
                /* Front Side */
                <>
                  <div>
                    {/* Header: ShipIt Teens */}
                    <div className="flex items-center justify-between pb-3 border-b border-ink-950/20">
                      <div className="font-mono text-xs font-black text-ink-950 flex items-center gap-1">
                        <span>ShipIt Teens</span>
                        <span className="text-daybreak-pink font-bold">&gt;</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-ink-muted">
                        BLR • DEC 31
                      </span>
                    </div>

                    {/* Badge Main Title */}
                    <div className="mt-4 text-center">
                      <div className="font-title font-black italic text-3xl text-ink-950 tracking-tighter leading-none">
                        DAYBREAK
                      </div>
                      <div className="inline-block px-2.5 py-0.5 bg-daybreak-pink text-white font-mono text-[9px] font-bold rounded mt-1">
                        THE NEW YEAR EDITION
                      </div>
                    </div>

                    {/* Role Pill */}
                    <div className="mt-4 flex justify-center">
                      <div className="px-4 py-1 bg-daybreak-aqua text-ink-950 border-2 border-ink-950 rounded-full font-mono text-xs font-black tracking-wider uppercase shadow-xs">
                        ATTENDEE
                      </div>
                    </div>
                  </div>

                  {/* Hacker Details */}
                  <div className="my-auto py-2 text-center">
                    <div className="font-title font-black text-2xl text-ink-950 truncate">
                      {name || 'Your Name'}
                    </div>
                    <div className="font-mono text-xs font-bold text-daybreak-dragon mt-0.5">
                      {handle || '@handle'}
                    </div>
                    <div className="text-[11px] font-mono text-ink-muted mt-1 uppercase">
                      Track: {track}
                    </div>
                  </div>

                  {/* Bottom Sunrise Horizon Arc */}
                  <div className="pt-2 border-t border-ink-950/20 flex flex-col items-center">
                    <div className="w-full flex items-center justify-center">
                      <div className="w-28 h-7 bg-gradient-to-t from-daybreak-dragon via-daybreak-orange to-daybreak-sunny rounded-t-full border-t-2 border-x-2 border-ink-950"></div>
                    </div>
                    <div className="text-[9px] font-mono font-bold text-ink-muted mt-1">
                      24-HOUR TEEN HACKATHON
                    </div>
                  </div>
                </>
              ) : (
                /* Back Side */
                <>
                  <div className="text-center pt-2">
                    {/* Sunrise Rays Semicircle */}
                    <div className="w-16 h-8 mx-auto bg-daybreak-sunny rounded-t-full border-t-2 border-x-2 border-white/40"></div>
                    <div className="font-mono text-[10px] text-daybreak-sunny font-bold tracking-widest mt-1 uppercase">
                      MAKE IT BEFORE SUNRISE
                    </div>
                  </div>

                  {/* Checkered Colorful Racing Bars (from Design Sheet) */}
                  <div className="my-auto py-2 flex flex-col gap-1.5 items-center">
                    <div className="flex gap-1.5">
                      <div className="w-6 h-6 bg-daybreak-aqua rounded-sm border border-white/20"></div>
                      <div className="w-6 h-6 bg-daybreak-pink rounded-sm border border-white/20"></div>
                      <div className="w-6 h-6 bg-daybreak-sunny rounded-sm border border-white/20"></div>
                      <div className="w-6 h-6 bg-daybreak-orange rounded-sm border border-white/20"></div>
                    </div>
                    <div className="flex gap-1.5 ml-4">
                      <div className="w-6 h-6 bg-daybreak-dragon rounded-sm border border-white/20"></div>
                      <div className="w-6 h-6 bg-daybreak-aqua rounded-sm border border-white/20"></div>
                      <div className="w-6 h-6 bg-daybreak-pink rounded-sm border border-white/20"></div>
                    </div>
                  </div>

                  {/* QR Code & Verify */}
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                    <div className="p-1.5 bg-white rounded-lg">
                      <QrCode className="w-10 h-10 text-ink-950" />
                    </div>
                    <div className="text-right font-mono text-[10px] text-cream-300">
                      <div className="font-bold text-white">ShipIt Teens &gt;</div>
                      <div className="text-daybreak-sunny">VERIFIED ENTRY</div>
                      <div className="text-cream-400">ID: #042</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
