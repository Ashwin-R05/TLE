import React from 'react';

export const FallbackVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] flex items-center justify-center pointer-events-none">
      {/* Background Soft Glow */}
      <div className="absolute w-56 h-56 rounded-full bg-blue-500/10 blur-2xl" />

      {/* Modern Studio Icon Ring */}
      <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-blue-500/20 flex items-center justify-center shadow-lg bg-surface-200/50 backdrop-blur-md">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-indigo-500/30 border-dashed animate-spin-slow flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-md">
            <span className="text-white font-sans font-bold text-sm tracking-wider">TLE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
