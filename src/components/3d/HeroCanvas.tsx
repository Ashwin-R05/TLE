import React, { Suspense, lazy, useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { FallbackVisual } from './FallbackVisual';

const Scene = lazy(() =>
  import('./AbstractMesh').then((mod) => ({ default: mod.AbstractMesh as unknown as React.ComponentType }))
);

const R3FCanvas = lazy(() =>
  import('@react-three/fiber').then((mod) => ({ default: mod.Canvas }))
);

export const HeroCanvas: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Delay mounting of 3D canvas so it doesn't block initial paint
  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const timer = setTimeout(() => setShowCanvas(true), 300);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion, isMobile]);

  // Fallback for reduced motion or mobile
  if (prefersReducedMotion || isMobile || !showCanvas) {
    return <FallbackVisual />;
  }

  return (
    <div className="w-full h-full min-h-[360px] relative">
      <Suspense fallback={<FallbackVisual />}>
        <R3FCanvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#00F0FF" />
          <pointLight position={[-5, -3, 3]} intensity={0.5} color="#8B5CF6" />
          <Scene />
        </R3FCanvas>
      </Suspense>
    </div>
  );
};
