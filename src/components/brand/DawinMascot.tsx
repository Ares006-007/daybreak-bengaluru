import React, { useState } from 'react';
import { MascotMood } from '../../types';
import { DAWIN_MOODS } from '../../data/eventData';
import { sound } from '../../utils/sound';

interface DawinMascotProps {
  mood?: MascotMood;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  showDialogue?: boolean;
  customDialogue?: string;
  className?: string;
  showBody?: boolean;
  onMoodChange?: (newMood: MascotMood) => void;
}

// Official DAWIN palette from design sheet
const DW = {
  dark: '#1E1E1E',
  cream: '#F5F1E8',
  orange: '#FF7A00',
  gold: '#FFC94D',
  blueGrey: '#4F6D9A',
  purple: '#6A4C93',
  screenBg: '#1E1E1E',
  screenGlow: '#FF7A00',
};

export const DawinMascot: React.FC<DawinMascotProps> = ({
  mood = 'happy',
  size = 'md',
  interactive = true,
  showDialogue = false,
  customDialogue,
  className = '',
  showBody = true,
  onMoodChange,
}) => {
  const [currentMood, setCurrentMood] = useState<MascotMood>(mood);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWobbling, setIsWobbling] = useState(false);

  React.useEffect(() => {
    setCurrentMood(mood);
  }, [mood]);

  // Periodic blink
  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4200);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleMascotClick = () => {
    if (!interactive) return;
    sound.playDawinBleep();
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 500);

    const moods: MascotMood[] = ['neutral', 'happy', 'excited', 'laugh', 'curious', 'thinking', 'surprised', 'confused', 'focused', 'tired', 'overwhelmed', 'idea'];
    const nextIdx = (moods.indexOf(currentMood) + 1) % moods.length;
    const nextMood = moods[nextIdx];
    setCurrentMood(nextMood);
    if (onMoodChange) onMoodChange(nextMood);
  };

  const moodData = DAWIN_MOODS[currentMood] || DAWIN_MOODS.happy;

  const scale = { sm: 0.5, md: 0.75, lg: 1, xl: 1.25 }[size];
  const containerW = Math.round(220 * scale);

  // ─── Expression faces (orange glow on dark screen, matching design sheet) ───
  const renderFace = () => {
    const eyeColor = DW.orange;
    const goldColor = DW.gold;

    if (isBlinking) {
      return (
        <g>
          <line x1="28" y1="38" x2="42" y2="38" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="58" y1="38" x2="72" y2="38" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    }

    switch (currentMood) {
      case 'neutral':
        return (
          <g>
            {/* Flat horizontal eyes */}
            <line x1="28" y1="35" x2="42" y2="35" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="35" x2="72" y2="35" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
            {/* Flat mouth */}
            <line x1="38" y1="52" x2="62" y2="52" stroke={eyeColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );

      case 'happy':
        return (
          <g>
            {/* Upward arcs for eyes (^  ^) */}
            <path d="M28 38 Q35 28 42 38" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M58 38 Q65 28 72 38" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Smile curve */}
            <path d="M36 50 Q50 60 64 50" stroke={eyeColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        );

      case 'excited':
        return (
          <g>
            {/* Star eyes */}
            <text x="30" y="41" fill={goldColor} fontSize="16" fontWeight="900" fontFamily="monospace">★</text>
            <text x="58" y="41" fill={goldColor} fontSize="16" fontWeight="900" fontFamily="monospace">★</text>
            {/* Wide open grin */}
            <path d="M34 48 Q50 62 66 48" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Exclamation sparks */}
            <line x1="20" y1="25" x2="16" y2="20" stroke={goldColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="80" y1="25" x2="84" y2="20" stroke={goldColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        );

      case 'laugh':
        return (
          <g>
            {/* Squinted eyes (>  <) */}
            <path d="M28 32 L35 38 L28 44" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M72 32 L65 38 L72 44" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* Wide open mouth */}
            <path d="M34 48 Q50 64 66 48" stroke={eyeColor} strokeWidth="2.5" fill={eyeColor} opacity="0.3" strokeLinecap="round" />
            <text x="40" y="57" fill={eyeColor} fontSize="8" fontFamily="monospace" fontWeight="700">HA</text>
          </g>
        );

      case 'curious':
        return (
          <g>
            {/* Questioning eyes — one bigger */}
            <circle cx="35" cy="35" r="7" stroke={eyeColor} strokeWidth="2.5" fill="none" />
            <circle cx="35" cy="35" r="2.5" fill={eyeColor} />
            <circle cx="65" cy="33" r="8.5" stroke={eyeColor} strokeWidth="2.5" fill="none" />
            <circle cx="65" cy="33" r="3" fill={eyeColor} />
            {/* Tilted mouth */}
            <path d="M40 52 Q50 56 60 50" stroke={eyeColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Question mark above */}
            <text x="72" y="22" fill={goldColor} fontSize="12" fontWeight="900" fontFamily="monospace">?</text>
          </g>
        );

      case 'thinking':
        return (
          <g>
            {/* Dot eyes (•  •) */}
            <circle cx="35" cy="36" r="4" fill={eyeColor} />
            <circle cx="65" cy="36" r="4" fill={eyeColor} />
            {/* Small flat mouth */}
            <line x1="43" y1="52" x2="57" y2="52" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" />
            {/* Thought bubble dots */}
            <circle cx="78" cy="28" r="2" fill={DW.blueGrey} opacity="0.7" />
            <circle cx="83" cy="22" r="3" fill={DW.blueGrey} opacity="0.5" />
            <circle cx="88" cy="15" r="4" fill={DW.blueGrey} opacity="0.3" />
          </g>
        );

      case 'surprised':
        return (
          <g>
            {/* Big round eyes (O  O) */}
            <circle cx="35" cy="35" r="9" stroke={eyeColor} strokeWidth="3" fill="none" />
            <circle cx="35" cy="35" r="3.5" fill={eyeColor} />
            <circle cx="65" cy="35" r="9" stroke={eyeColor} strokeWidth="3" fill="none" />
            <circle cx="65" cy="35" r="3.5" fill={eyeColor} />
            {/* Round O mouth */}
            <circle cx="50" cy="54" r="6" stroke={eyeColor} strokeWidth="2.5" fill="none" />
          </g>
        );

      case 'confused':
        return (
          <g>
            {/* Asymmetric: ? eye and ! eye */}
            <text x="27" y="42" fill={eyeColor} fontSize="18" fontWeight="900" fontFamily="monospace">?</text>
            <text x="60" y="42" fill={eyeColor} fontSize="18" fontWeight="900" fontFamily="monospace">!</text>
            {/* Wavy confused mouth */}
            <path d="M36 52 Q42 48 48 52 Q54 56 60 52" stroke={eyeColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        );

      case 'focused':
        return (
          <g>
            {/* Code bracket eyes </> */}
            <text x="24" y="42" fill={eyeColor} fontSize="14" fontWeight="900" fontFamily="monospace">&lt;/&gt;</text>
            <text x="54" y="42" fill={goldColor} fontSize="14" fontWeight="900" fontFamily="monospace">&lt;/&gt;</text>
            {/* Determined mouth */}
            <rect x="38" y="50" width="24" height="4" rx="2" fill={eyeColor} opacity="0.8" />
            {/* Progress bar */}
            <rect x="28" y="62" width="44" height="3" rx="1.5" fill={DW.dark} stroke={eyeColor} strokeWidth="0.5" />
            <rect x="28" y="62" width="36" height="3" rx="1.5" fill={eyeColor} opacity="0.9" />
          </g>
        );

      case 'tired':
        return (
          <g>
            {/* Droopy half-closed eyes */}
            <line x1="28" y1="38" x2="42" y2="38" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="38" x2="72" y2="38" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M28 36 L42 36" stroke={eyeColor} strokeWidth="1" opacity="0.4" />
            <path d="M58 36 L72 36" stroke={eyeColor} strokeWidth="1" opacity="0.4" />
            {/* Droopy mouth */}
            <line x1="40" y1="52" x2="60" y2="54" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            {/* Zzz */}
            <text x="72" y="22" fill={DW.blueGrey} fontSize="10" fontWeight="900" fontFamily="monospace" opacity="0.8">Z</text>
            <text x="78" y="16" fill={DW.blueGrey} fontSize="8" fontWeight="900" fontFamily="monospace" opacity="0.6">z</text>
            <text x="82" y="12" fill={DW.blueGrey} fontSize="6" fontWeight="900" fontFamily="monospace" opacity="0.4">z</text>
          </g>
        );

      case 'overwhelmed':
        return (
          <g>
            {/* X X eyes */}
            <g transform="translate(35,36)">
              <line x1="-5" y1="-5" x2="5" y2="5" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
              <line x1="5" y1="-5" x2="-5" y2="5" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
            </g>
            <g transform="translate(65,36)">
              <line x1="-5" y1="-5" x2="5" y2="5" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
              <line x1="5" y1="-5" x2="-5" y2="5" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
            </g>
            {/* Wavy overwhelmed mouth */}
            <path d="M34 52 Q40 48 46 52 Q52 56 58 52 Q64 48 66 52" stroke={eyeColor} strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Swirl above head */}
            <path d="M48 10 Q44 6 48 2 Q52 -2 56 2 Q60 6 56 10" stroke={DW.purple} strokeWidth="1.5" fill="none" opacity="0.6" />
          </g>
        );

      case 'idea':
        return (
          <g>
            {/* Wide alert eyes with sparkle */}
            <circle cx="35" cy="36" r="6" stroke={goldColor} strokeWidth="3" fill="none" />
            <circle cx="35" cy="36" r="2" fill={goldColor} />
            <circle cx="65" cy="36" r="6" stroke={goldColor} strokeWidth="3" fill="none" />
            <circle cx="65" cy="36" r="2" fill={goldColor} />
            {/* Excited grin */}
            <path d="M34 50 Q50 62 66 50" stroke={goldColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Lightbulb / Crown above */}
            <circle cx="50" cy="6" r="6" fill={goldColor} opacity="0.9" />
            <line x1="50" y1="12" x2="50" y2="16" stroke={goldColor} strokeWidth="2" strokeLinecap="round" />
            {/* Radiating lines */}
            <line x1="42" y1="4" x2="38" y2="0" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <line x1="58" y1="4" x2="62" y2="0" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <line x1="50" y1="0" x2="50" y2="-4" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          </g>
        );

      default:
        return (
          <g>
            <path d="M28 38 Q35 28 42 38" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M58 38 Q65 28 72 38" stroke={eyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M36 50 Q50 60 64 50" stroke={eyeColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        );
    }
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none group ${className}`}
      style={{ maxWidth: containerW }}
    >
      {/* Speech Bubble */}
      {(showDialogue || customDialogue) && (
        <div
          className={`mb-3 px-3 py-2 bg-[#F5F1E8] text-[#1E1E1E] border-2 border-[#1E1E1E] shadow-brutal rounded-xl text-xs font-mono font-bold leading-tight relative transition-all duration-300 max-w-[260px] text-center ${
            isWobbling ? 'scale-105' : ''
          }`}
        >
          {customDialogue || moodData.dialogue}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] border-t-[#1E1E1E]"></div>
          <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[4px] border-x-transparent border-t-[6px] border-t-[#F5F1E8]"></div>
        </div>
      )}

      {/* DAWIN Full Character SVG */}
      <div
        onClick={handleMascotClick}
        className={`relative cursor-pointer transition-all duration-300 ${
          isWobbling ? 'rotate-3 scale-105' : 'hover:-translate-y-1'
        }`}
        title="I am DAWIN! Click me to change my mood."
      >
        <svg
          viewBox={showBody ? "0 -10 100 180" : "0 -10 100 85"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: containerW, height: 'auto' }}
          className="overflow-visible"
        >
          {/* ── Antennas ── */}
          {/* Left antenna */}
          <line x1="35" y1="2" x2="22" y2="-8" stroke={DW.dark} strokeWidth="3" strokeLinecap="round"
            className="transition-transform origin-bottom duration-300 group-hover:-rotate-6" />
          <circle cx="22" cy="-8" r="4" fill={DW.orange} stroke={DW.dark} strokeWidth="2" />

          {/* Right antenna */}
          <line x1="65" y1="2" x2="78" y2="-8" stroke={DW.dark} strokeWidth="3" strokeLinecap="round"
            className="transition-transform origin-bottom duration-300 group-hover:rotate-6" />
          <circle cx="78" cy="-8" r="4" fill={DW.gold} stroke={DW.dark} strokeWidth="2" />

          {/* ── CRT Monitor Head ── */}
          {/* Head outer shell (rounded box, cream/grey tones) */}
          <rect x="10" y="0" width="80" height="68" rx="12" ry="12"
            fill={DW.cream} stroke={DW.dark} strokeWidth="3.5" />

          {/* Top handle ridge */}
          <rect x="38" y="2" width="24" height="4" rx="2" fill={DW.dark} opacity="0.15" />

          {/* Screen bezel (inner dark area) */}
          <rect x="16" y="10" width="62" height="50" rx="8" ry="8"
            fill={DW.screenBg} stroke={DW.dark} strokeWidth="2" />

          {/* CRT glass reflection */}
          <ellipse cx="28" cy="17" rx="8" ry="3" fill="white" opacity="0.08" transform="rotate(-12 28 17)" />

          {/* Sunrise motif at bottom of screen */}
          <path d="M22 56 A 28 28 0 0 1 72 56 Z" fill={DW.orange} opacity="0.12" />
          <path d="M30 58 A 20 20 0 0 1 64 58" stroke={DW.orange} strokeWidth="1.5" fill="none" opacity="0.3" />
          {/* Sun rays peaking */}
          <line x1="47" y1="52" x2="47" y2="48" stroke={DW.gold} strokeWidth="1" opacity="0.25" strokeLinecap="round" />
          <line x1="40" y1="54" x2="37" y2="50" stroke={DW.gold} strokeWidth="1" opacity="0.2" strokeLinecap="round" />
          <line x1="54" y1="54" x2="57" y2="50" stroke={DW.gold} strokeWidth="1" opacity="0.2" strokeLinecap="round" />

          {/* ── Face Expression (rendered dynamically) ── */}
          {renderFace()}

          {/* Screen status indicator dot */}
          <circle cx="73" cy="14" r="2" fill={DW.orange} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Right side bezel knob */}
          <circle cx="84" cy="30" r="4" fill={DW.dark} stroke={DW.cream} strokeWidth="1.5" />
          <line x1="84" y1="27" x2="84" y2="33" stroke={DW.orange} strokeWidth="1" strokeLinecap="round" />

          <circle cx="84" cy="44" r="3.5" fill={DW.dark} stroke={DW.cream} strokeWidth="1.5" />
          <line x1="84" y1="41.5" x2="84" y2="46.5" stroke={DW.blueGrey} strokeWidth="1" strokeLinecap="round" />

          {/* Speaker grille slots on right bezel */}
          <line x1="82" y1="56" x2="88" y2="56" stroke={DW.dark} strokeWidth="1" opacity="0.3" />
          <line x1="82" y1="59" x2="88" y2="59" stroke={DW.dark} strokeWidth="1" opacity="0.3" />
          <line x1="82" y1="62" x2="88" y2="62" stroke={DW.dark} strokeWidth="1" opacity="0.3" />

          {showBody && (
            <>
              {/* ── Neck / connector ── */}
              <rect x="40" y="68" width="20" height="8" rx="2" fill={DW.dark} opacity="0.85" />

              {/* ── BODY: Cream oversized hoodie ── */}
              <path d="M18 76 Q18 74 22 74 L78 74 Q82 74 82 76 L86 130 Q86 134 82 134 L18 134 Q14 134 14 130 Z"
                fill={DW.cream} stroke={DW.dark} strokeWidth="3" />

              {/* Hoodie collar / neckline */}
              <path d="M34 74 Q50 82 66 74" stroke={DW.dark} strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* ── Orange X marking on chest (key design detail) ── */}
              <g transform="translate(50,100)">
                <line x1="-10" y1="-10" x2="10" y2="10" stroke={DW.orange} strokeWidth="4" strokeLinecap="round" />
                <line x1="10" y1="-10" x2="-10" y2="10" stroke={DW.orange} strokeWidth="4" strokeLinecap="round" />
              </g>

              {/* Hoodie pocket line */}
              <path d="M30 115 Q50 120 70 115" stroke={DW.dark} strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round" />

              {/* Left arm (sleeve) */}
              <path d="M18 80 L6 100 Q4 104 8 106 L14 108 L22 90" fill={DW.cream} stroke={DW.dark} strokeWidth="2.5" />

              {/* Right arm (sleeve) */}
              <path d="M82 80 L94 100 Q96 104 92 106 L86 108 L78 90" fill={DW.cream} stroke={DW.dark} strokeWidth="2.5" />

              {/* Star / sunrise patch on left sleeve */}
              <circle cx="12" cy="96" r="4" fill={DW.gold} stroke={DW.dark} strokeWidth="1" opacity="0.8" />
              <line x1="12" y1="93" x2="12" y2="91" stroke={DW.orange} strokeWidth="1" strokeLinecap="round" opacity="0.6" />

              {/* ── LEGS: Dark cargo pants ── */}
              {/* Left leg */}
              <rect x="22" y="132" width="22" height="28" rx="4" fill={DW.dark} stroke={DW.dark} strokeWidth="2" />
              {/* Right leg */}
              <rect x="56" y="132" width="22" height="28" rx="4" fill={DW.dark} stroke={DW.dark} strokeWidth="2" />

              {/* Cargo pocket detail */}
              <rect x="26" y="140" width="10" height="6" rx="1" fill="none" stroke={DW.cream} strokeWidth="1" opacity="0.25" />
              <rect x="62" y="140" width="10" height="6" rx="1" fill="none" stroke={DW.cream} strokeWidth="1" opacity="0.25" />

              {/* ── SHOES: Chunky sneakers ── */}
              <path d="M18 158 L48 158 Q50 158 50 162 L50 166 Q50 168 48 168 L16 168 Q14 168 14 166 L14 162 Q14 160 18 158 Z"
                fill={DW.cream} stroke={DW.dark} strokeWidth="2" />
              <line x1="18" y1="162" x2="46" y2="162" stroke={DW.orange} strokeWidth="1.5" opacity="0.6" />

              <path d="M52 158 L82 158 Q86 158 86 162 L86 166 Q86 168 84 168 L52 168 Q50 168 50 166 L50 162 Q50 158 52 158 Z"
                fill={DW.cream} stroke={DW.dark} strokeWidth="2" />
              <line x1="54" y1="162" x2="82" y2="162" stroke={DW.orange} strokeWidth="1.5" opacity="0.6" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
