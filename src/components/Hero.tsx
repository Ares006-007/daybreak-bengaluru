import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { Sparkles, ArrowDown, Calendar, MapPin, Zap, Flame, Terminal, Code2 } from 'lucide-react';
import { sound } from '../utils/sound';
import skylineStripImg from '../assets/bengaluru-skyline-strip.png';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Live Countdown to New Year's Eve 2026-12-31 17:00 IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.eventStartIso).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Event has started or fallback mockup values
        setTimeLeft({ days: 41, hours: 16, minutes: 28, seconds: 45 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    sound.playClick();
    const element = document.querySelector('#manifesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-0 md:pt-36 overflow-hidden bg-halftone-subtle border-b-4 border-ink-950">
      {/* Decorative Background Sunrise Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-gradient-to-b from-daybreak-sunny/35 via-daybreak-orange/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-daybreak-sunny text-ink-950 border-2 border-ink-950 rounded-full font-mono text-xs md:text-sm font-black tracking-wider shadow-brutal uppercase">
            <Flame className="w-3.5 h-3.5 text-daybreak-dragon fill-daybreak-dragon" />
            <span>SHIPIT TEENS PRESENTS</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-daybreak-pink text-white border-2 border-ink-950 rounded-full font-mono text-xs md:text-sm font-bold tracking-wider shadow-brutal uppercase">
            <Sparkles className="w-3.5 h-3.5 text-daybreak-sunny" />
            <span>THE NEW YEAR EDITION</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cream-50 text-ink-900 border-2 border-ink-950 rounded-full font-mono text-xs font-semibold shadow-xs">
            <Terminal className="w-3 h-3 text-daybreak-dragon" />
            <span>[ 24-HOUR TEEN HACKATHON ]</span>
          </div>
        </div>

        {/* Hero Title & Visual Centerpiece */}
        <div className="relative text-center my-4 md:my-8">
          {/* Animated Sunrise Arc behind Heading */}
          <div className="relative inline-block w-full max-w-4xl mx-auto">
            {/* Sunrise Arc SVG Illustration */}
            <div className="absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 w-72 md:w-[480px] -z-10 opacity-90 pointer-events-none">
              <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Sun Radiance Rays */}
                <g stroke="#FFAA47" strokeWidth="3" strokeLinecap="round" opacity="0.8">
                  <line x1="150" y1="10" x2="150" y2="28" />
                  <line x1="100" y1="25" x2="112" y2="40" />
                  <line x1="200" y1="25" x2="188" y2="40" />
                  <line x1="55" y1="60" x2="72" y2="72" />
                  <line x1="245" y1="60" x2="228" y2="72" />
                </g>

                {/* Semicircular Glowing Sun */}
                <path
                  d="M 50 150 A 100 100 0 0 1 250 150 Z"
                  fill="url(#hero-sun-gradient)"
                />

                {/* Sky Aqua & Magenta Rim */}
                <path
                  d="M 30 150 A 120 120 0 0 1 270 150"
                  stroke="#2DDFFF"
                  strokeWidth="4"
                  strokeDasharray="8 6"
                />

                <defs>
                  <linearGradient id="hero-sun-gradient" x1="150" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F5F474" />
                    <stop offset="35%" stopColor="#FFAA47" />
                    <stop offset="75%" stopColor="#F54D28" />
                    <stop offset="100%" stopColor="#E33CC7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Main Monumental DAYBREAK Heading */}
            <h1 className="font-title font-black italic tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ink-950 leading-none select-none relative">
              <span className="relative inline-block drop-shadow-[5px_5px_0px_#FFAA47]">
                DAYBREAK
              </span>
            </h1>

            {/* Core Tagline Pill directly under heading */}
            <div className="mt-2 md:mt-3 inline-block">
              <span className="px-4 py-1.5 bg-ink-950 text-daybreak-sunny font-mono font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase rounded-lg border-2 border-daybreak-sunny shadow-brutal">
                ⚡ MAKE IT BEFORE SUNRISE ⚡
              </span>
            </div>
          </div>

          {/* Supporting Tagline & Copy */}
          <div className="max-w-2xl mx-auto mt-6 px-4">
            <p className="font-display font-bold text-xl md:text-2xl text-ink-900 tracking-tight">
              "{EVENT_DETAILS.heroPunchline}"
            </p>
            <p className="mt-2 text-sm md:text-base text-ink-700 font-sans leading-relaxed">
              {EVENT_DETAILS.heroDescription}
            </p>
          </div>
        </div>

        {/* Central Event Coordinates & Live Countdown Card */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Event Key Stats Card */}
          <div className="p-6 md:p-8 bg-cream-50 border-3 border-ink-950 rounded-3xl shadow-brutal-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="text-xs font-mono font-bold text-daybreak-pink flex items-center gap-1.5 uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-daybreak-pink" />
                <span>OFFICIAL EVENT COORDINATES</span>
              </div>
              <span className="text-xs font-mono font-bold text-ink-muted">BENGALURU • 24 HOURS NON-STOP</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {/* Date */}
              <div className="p-4 bg-cream-200/70 border-2 border-ink-950 rounded-2xl">
                <div className="flex items-center gap-2 text-daybreak-dragon font-mono text-xs font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>DATES</span>
                </div>
                <div className="mt-1 font-display font-bold text-ink-950 text-base md:text-lg">
                  Dec 31 – Jan 1
                </div>
                <div className="text-xs font-mono text-ink-muted">New Year's Eve</div>
              </div>

              {/* Location */}
              <div className="p-4 bg-cream-200/70 border-2 border-ink-950 rounded-2xl">
                <div className="flex items-center gap-2 text-daybreak-pink font-mono text-xs font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>LOCATION</span>
                </div>
                <div className="mt-1 font-display font-bold text-ink-950 text-base md:text-lg">
                  Bengaluru, IN
                </div>
                <div className="text-xs font-mono text-ink-muted">Innovation Hub</div>
              </div>

              {/* Duration */}
              <div className="p-4 bg-cream-200/70 border-2 border-ink-950 rounded-2xl">
                <div className="flex items-center gap-2 text-daybreak-orange font-mono text-xs font-bold">
                  <Zap className="w-4 h-4" />
                  <span>DURATION</span>
                </div>
                <div className="mt-1 font-display font-bold text-ink-950 text-base md:text-lg">
                  24 Hours
                </div>
                <div className="text-xs font-mono text-ink-muted">Sunset to Sunrise</div>
              </div>
            </div>

            {/* Live Countdown Clock */}
            <div className="mt-6 pt-5 border-t-2 border-ink-950/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-ink-muted uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-daybreak-dragon animate-ping"></span>
                  COUNTDOWN TO HACKATHON KICKOFF
                </span>
                <span className="text-xs font-mono text-daybreak-pink font-bold">IST (UTC+5:30)</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
                <div className="bg-ink-950 text-daybreak-sunny p-3 sm:p-4 rounded-2xl border border-ink-800">
                  <span className="font-mono font-black text-2xl sm:text-3xl md:text-4xl block">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-cream-300">DAYS</span>
                </div>
                <div className="bg-ink-950 text-daybreak-sunny p-3 sm:p-4 rounded-2xl border border-ink-800">
                  <span className="font-mono font-black text-2xl sm:text-3xl md:text-4xl block">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-cream-300">HOURS</span>
                </div>
                <div className="bg-ink-950 text-daybreak-sunny p-3 sm:p-4 rounded-2xl border border-ink-800">
                  <span className="font-mono font-black text-2xl sm:text-3xl md:text-4xl block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-cream-300">MINS</span>
                </div>
                <div className="bg-ink-950 text-daybreak-aqua p-3 sm:p-4 rounded-2xl border border-ink-800">
                  <span className="font-mono font-black text-2xl sm:text-3xl md:text-4xl block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-cream-300">SECS</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  sound.playChime();
                  onOpenRegister();
                }}
                className="w-full sm:w-auto px-8 py-4 bg-daybreak-orange hover:bg-daybreak-dragon text-ink-950 hover:text-white font-display font-extrabold text-base tracking-wide rounded-2xl border-2 border-ink-950 shadow-brutal-lg transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none group cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Register Now</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>

              <button
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-cream-100 hover:bg-cream-200 text-ink-950 font-display font-bold text-base tracking-wide rounded-2xl border-2 border-ink-950 shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Daybreak</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Bengaluru Dawn Skyline Horizon Strip */}
      <div className="w-full mt-14 pt-6 border-t-2 border-ink-950/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono text-ink-muted mb-3">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-daybreak-dragon animate-pulse"></span>
            SKYLINE: BENGALURU 12.9716° N, 77.5946° E
          </span>
          <span className="font-bold text-daybreak-dragon tracking-wider">SUNRISE AT 06:45 AM</span>
        </div>

        {/* Edge-to-edge skyline illustration fitting full screen width */}
        <div className="w-full relative flex justify-center items-end overflow-hidden leading-none">
          <img
            src={skylineStripImg}
            alt="Bengaluru Sunrise Skyline - Vidhana Soudha & Innovation Hub"
            className="w-full h-auto min-h-[140px] max-h-[300px] sm:max-h-[360px] md:max-h-[420px] object-cover sm:object-fill md:object-cover object-bottom select-none pointer-events-none drop-shadow-sm transition-transform duration-300 hover:scale-[1.005]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
