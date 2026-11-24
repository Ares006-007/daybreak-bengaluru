import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  dark?: boolean;
}

export const DaybreakLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  dark = false,
}) => {
  // Event Mark (Icon / Favicon / Sunrise Rays)
  if (variant === 'mark') {
    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-9 h-9',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    }[size];

    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} ${className} transition-transform hover:scale-105 duration-200`}
      >
        {/* Radiating Rays */}
        <line x1="24" y1="4" x2="24" y2="10" stroke="#FFAA47" strokeWidth="3" strokeLinecap="round" />
        <line x1="12" y1="9" x2="16" y2="14" stroke="#FFAA47" strokeWidth="3" strokeLinecap="round" />
        <line x1="36" y1="9" x2="32" y2="14" stroke="#FFAA47" strokeWidth="3" strokeLinecap="round" />
        <line x1="5" y1="20" x2="11" y2="22" stroke="#FFAA47" strokeWidth="3" strokeLinecap="round" />
        <line x1="43" y1="20" x2="37" y2="22" stroke="#FFAA47" strokeWidth="3" strokeLinecap="round" />
        
        {/* Sun Semicircle */}
        <path
          d="M12 32C12 25.3726 17.3726 20 24 20C30.6274 20 36 25.3726 36 32H12Z"
          fill="url(#mark-sun-grad)"
        />

        {/* Horizon Bar */}
        <path d="M4 35H44" stroke={dark ? "#FFAA47" : "#140E24"} strokeWidth="3.5" strokeLinecap="round" />

        <defs>
          <linearGradient id="mark-sun-grad" x1="24" y1="20" x2="24" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5F474" />
            <stop offset="60%" stopColor="#FFAA47" />
            <stop offset="100%" stopColor="#F54D28" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Full & Compact Logo
  const textFill = dark ? '#FFFFFF' : '#140E24';
  const heightClass = {
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 font-display select-none ${className}`}>
      <svg
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto overflow-visible`}
      >
        <defs>
          {/* Multi-layered Sunrise gradient matching design sheet */}
          <linearGradient id="sun-arc-grad" x1="190" y1="0" x2="260" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5F474" />
            <stop offset="35%" stopColor="#FFAA47" />
            <stop offset="70%" stopColor="#F54D28" />
            <stop offset="100%" stopColor="#E33CC7" />
          </linearGradient>
          
          <linearGradient id="sky-arc-grad" x1="170" y1="10" x2="280" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2DDFFF" />
            <stop offset="100%" stopColor="#E33CC7" />
          </linearGradient>
        </defs>

        {/* Sunrise Arc over the BREAK letters */}
        <g className="transition-transform duration-300 hover:scale-105 origin-center">
          {/* Aqua Sky accent */}
          <path
            d="M 160 38 Q 220 -8 285 28"
            stroke="url(#sky-arc-grad)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* Glowing Sun Semicircle */}
          <path
            d="M 180 36 A 40 40 0 0 1 264 36 Z"
            fill="url(#sun-arc-grad)"
          />
          {/* Sun Rays */}
          <line x1="222" y1="2" x2="222" y2="9" stroke="#F5F474" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="200" y1="6" x2="204" y2="12" stroke="#F5F474" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="244" y1="6" x2="240" y2="12" stroke="#F5F474" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* DAYBREAK Text in Custom Bold Italic Brutalist Letterforms */}
        <text
          x="4"
          y="64"
          fontFamily="'Unbounded', 'Space Grotesk', sans-serif"
          fontSize="48"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="-0.03em"
          fill={textFill}
        >
          DAYBREAK
        </text>

        {/* Subtitle tag if in full mode */}
        {variant === 'full' && (
          <g transform="translate(10, 75)">
            <rect x="0" y="-8" width="168" height="13" rx="3" fill="#E33CC7" />
            <text
              x="5"
              y="2"
              fontFamily="'IBM Plex Mono', monospace"
              fontSize="8"
              fontWeight="700"
              letterSpacing="0.08em"
              fill="#FFFFFF"
            >
              THE NEW YEAR EDITION
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
