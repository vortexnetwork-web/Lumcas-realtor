import React from 'react';

interface LumcasLogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: 'purple' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LumcasLogo: React.FC<LumcasLogoProps> = ({
  className = '',
  showWordmark = true,
  variant = 'purple',
  size = 'md',
}) => {
  const colorMap = {
    purple: '#9333ea',
    white: '#fcfcfc',
    dark: '#17171d',
  };

  const currentColor = colorMap[variant] || colorMap.purple;

  const sizeClasses = {
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <svg
        viewBox="0 0 480 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto shrink-0 transition-transform duration-300`}
        aria-hidden="true"
      >
        {/* Modern Skyscraper Towers rising on the right */}
        {/* Tower 1 (Leftmost skyscraper) */}
        <path
          d="M305 130L348 85V240L305 258V130Z"
          fill={currentColor}
        />
        {/* Window slits on Tower 1 */}
        <rect x="317" y="160" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="317" y="180" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="317" y="200" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="317" y="220" width="8" height="12" rx="1" fill="#ffffff" />

        {/* Tower 2 (Center highest skyscraper) */}
        <path
          d="M352 25L388 20V260L352 245V25Z"
          fill={currentColor}
        />
        {/* Window slits on Tower 2 */}
        <rect x="363" y="100" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="363" y="120" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="363" y="140" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="363" y="160" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="363" y="180" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="363" y="200" width="8" height="12" rx="1" fill="#ffffff" />

        {/* Tower 3 (Sub-tower connected) */}
        <path
          d="M392 90L432 108V270H392V90Z"
          fill={currentColor}
        />
        <rect x="404" y="140" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="404" y="160" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="404" y="180" width="8" height="12" rx="1" fill="#ffffff" />
        <rect x="404" y="200" width="8" height="12" rx="1" fill="#ffffff" />

        {/* Tower 4 (Rightmost angular wing) */}
        <path
          d="M435 150L465 170V270H435V150Z"
          fill={currentColor}
        />

        {/* Residential Gabled Roof 1 (Left Major Roof) */}
        <path
          d="M15 270L150 155L285 270H245L150 188L55 270H15Z"
          fill={currentColor}
        />
        {/* Left House Windows (4-pane grid) */}
        <rect x="135" y="228" width="12" height="12" rx="1.5" fill={currentColor} />
        <rect x="153" y="228" width="12" height="12" rx="1.5" fill={currentColor} />
        <rect x="135" y="246" width="12" height="12" rx="1.5" fill={currentColor} />
        <rect x="153" y="246" width="12" height="12" rx="1.5" fill={currentColor} />

        {/* Residential Gabled Roof 2 (Right Overlapping Roof) */}
        <path
          d="M230 270L300 210L370 270H335L300 238L265 270H230Z"
          fill={currentColor}
        />
        {/* Right House Windows (2-pane grid) */}
        <rect x="290" y="245" width="10" height="10" rx="1.5" fill={currentColor} />
        <rect x="306" y="245" width="10" height="10" rx="1.5" fill={currentColor} />

        {/* LUMCAS Wordmark inside SVG */}
        <text
          x="240"
          y="355"
          textAnchor="middle"
          fill={currentColor}
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="48"
          letterSpacing="18"
        >
          LUMCAS
        </text>
      </svg>

      {showWordmark && (
        <span className="sr-only">LUMCAS Realtor & Properties Ltd</span>
      )}
    </div>
  );
};
