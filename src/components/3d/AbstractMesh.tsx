import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const AbstractMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const { pointer } = useThree();

  // Generate lightweight particle cloud
  const particleCount = 120;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color('#00F0FF');
    const colorB = new THREE.Color('#8B5CF6');

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 1.5;
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
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x += delta * 0.1;

    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.15;
      outerWireRef.current.rotation.z += delta * 0.08;
    }

    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
      coreRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
    }

    // Gentle cursor parallax tilt
    const targetX = (pointer.x * Math.PI) / 8;
    const targetY = (-pointer.y * Math.PI) / 8;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX + state.clock.elapsedTime * 0.15, 0.05);
  });

  return (
    <group ref={meshRef}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshStandardMaterial
          color="#00F0FF"
          wireframe
          transparent
          opacity={0.35}
          roughness={0.2}
          metalness={0.8}
          emissive="#00F0FF"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Second inner geometric ring */}
      <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[1.3, 0.02, 16, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[1.5, 0.015, 16, 64]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.4} />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.1}
          metalness={0.9}
          emissive="#8B5CF6"
          emissiveIntensity={0.6}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting Particle Network Points */}
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
          size={0.06}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
