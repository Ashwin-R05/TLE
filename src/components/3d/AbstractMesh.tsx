import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const AbstractMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const { pointer } = useThree();

  // Subtle clean particle field
  const particleCount = 100;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color('#3B82F6'); // Royal Blue
    const colorB = new THREE.Color('#6366F1'); // Indigo

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = colorA.clone().lerp(colorB, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth subtle rotation
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.x += delta * 0.08;

    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.1;
      outerWireRef.current.rotation.z += delta * 0.05;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.12;
    }

    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
      coreRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.06;
    }

    // Gentle cursor parallax
    const targetX = (pointer.x * Math.PI) / 10;
    const targetY = (-pointer.y * Math.PI) / 10;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.04);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX + state.clock.elapsedTime * 0.1, 0.04);
  });

  return (
    <group ref={meshRef}>
      {/* Outer Elegant Wireframe */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#60A5FA"
          wireframe
          transparent
          opacity={0.35}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Axis Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <torusGeometry args={[1.45, 0.015, 16, 64]} />
        <meshBasicMaterial color="#818CF8" transparent opacity={0.6} />
      </mesh>

      {/* Inner Smooth Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#3B82F6"
          roughness={0.15}
          metalness={0.9}
          emissive="#2563EB"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Ambient Particle Dust */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
