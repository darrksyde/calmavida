'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, useTexture, Detailed } from '@react-three/drei';
import * as THREE from 'three';

const PillBottleLevel = ({ detail, radialSegments, texture }: any) => {
  const points = React.useMemo(() => {
    const path = new THREE.Path();
    // Start slightly off 0 to avoid zero-radius normals issues
    path.moveTo(0.001, 0); 
    path.lineTo(0.7, 0); 
    path.quadraticCurveTo(0.8, 0, 0.8, 0.2); 
    path.lineTo(0.8, 1.9); 
    path.quadraticCurveTo(0.8, 2.2, 0.65, 2.3); 
    path.lineTo(0.65, 2.6); 
    return path.getPoints(detail);
  }, [detail]);

  return (
    <group dispose={null} rotation={[0, Math.PI, 0]}>
      {/* Main Bottle Body with LOD and Frustum Culling */}
      <mesh position={[0, -1.2, 0]} frustumCulled={true}>
        <latheGeometry args={[points, radialSegments]} />
        <meshPhysicalMaterial 
          color="#fdfdfd" 
          roughness={0.15} 
          clearcoat={1} 
          metalness={0.05}
        />
      </mesh>

      {/* Label Sleeve */}
      <mesh position={[0, -0.1, 0]} frustumCulled={true}>
        <cylinderGeometry args={[0.81, 0.81, 1.45, radialSegments]} />
        <meshStandardMaterial 
          map={texture}
          roughness={0.5} 
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* The Cap */}
      <mesh position={[0, 1.4, 0]} frustumCulled={true}>
        <cylinderGeometry args={[0.75, 0.75, 0.6, radialSegments]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.6}
        />
        {/* Cap ridges/details only shown in highest LOD */}
        {radialSegments >= 64 && (
          <group position={[0, -0.2, 0]}>
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} position={[0, i * 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} frustumCulled={true}>
                 <torusGeometry args={[0.75, 0.015, 8, radialSegments]} />
                 <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
              </mesh>
            ))}
          </group>
        )}
      </mesh>
    </group>
  );
};

const PillBottle = ({ phase }: { phase: number }) => {
  const group = useRef<THREE.LOD>(null);
  const baseTexture = useTexture('/label.png');
  const { gl } = useThree();

  const texture = React.useMemo(() => {
    const t = baseTexture.clone();
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.x = 1;
    t.anisotropy = gl.capabilities.getMaxAnisotropy();
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
    return t;
  }, [baseTexture, gl]);

  const targetRotation = phase === 5 ? Math.PI * 9 : phase === 4 ? Math.PI * 7 : phase === 3 ? Math.PI * 5 : phase === 2 ? Math.PI * 3 : Math.PI;

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        delta * 3
      );
    }
  });

  return (
    // Render different geometry detail based on distance from camera
    <Detailed ref={group} distances={[0, 10, 25]} rotation={[0, Math.PI, 0]}>
      <PillBottleLevel detail={40} radialSegments={64} texture={texture} />
      <PillBottleLevel detail={20} radialSegments={32} texture={texture} />
      <PillBottleLevel detail={8} radialSegments={16} texture={texture} />
    </Detailed>
  );
};

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, color: 'red', background: 'white' }}>
          <h1>R3F Error</h1>
          <pre>{this.state.error?.message}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function PillBottleScene({ phase = 0 }: { phase?: number }) {
  return (
    <div className="w-full h-full">
      <ErrorBoundary>
        <Canvas>
          <React.Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0.2, 5.5]} fov={45} />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <Environment preset="city" />

          <PillBottle phase={phase} />
          
        </React.Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
