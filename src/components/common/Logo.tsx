import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top-Left Polygon (T) */}
      <polygon points="30,36 56,36 34,76 28,63 41,46 24,46" />
      {/* Bottom-Right Polygon (L - 180deg symmetric counterpart) */}
      <polygon points="70,64 44,64 66,24 72,37 59,54 76,54" />
    </svg>
  );
};

export default Logo;
