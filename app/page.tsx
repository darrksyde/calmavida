'use client';

import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

// Components
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import Phase2Section from '@/components/sections/Phase2Section';
import Phase3Section from '@/components/sections/Phase3Section';
import Phase4Section from '@/components/sections/Phase4Section';
import Phase5Section from '@/components/sections/Phase5Section';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollControls from '@/components/ScrollControls';

const PillBottleScene = dynamic(() => import('@/components/PillBottleScene'), {
  ssr: false,
});

export default function Home() {
  const [scrollPhase, setScrollPhase] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    let isThrottled = false;

    const handleNextPhase = () => {
      setScrollPhase((p) => Math.min(5, p + 1));
    };

    const handlePrevPhase = () => {
      setScrollPhase((p) => Math.max(0, p - 1));
    };

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      if (Math.abs(e.deltaY) < 30) return;
      
      isThrottled = true;
      if (e.deltaY > 0) handleNextPhase();
      else handlePrevPhase();
      
      setTimeout(() => { isThrottled = false; }, 1000);
    };
    
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isThrottled) return;
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        isThrottled = true;
        handleNextPhase();
        touchStartY = touchEndY;
        setTimeout(() => { isThrottled = false; }, 1000);
      } else if (touchEndY - touchStartY > 50) {
        isThrottled = true;
        handlePrevPhase();
        touchStartY = touchEndY;
        setTimeout(() => { isThrottled = false; }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden bg-[#eaf4f8]">
      
      <Navigation />
      <HeroSection scrollPhase={scrollPhase} />
      
      <AnimatedBackground scrollPhase={scrollPhase} isMobile={isMobile} />
      
      <Phase2Section scrollPhase={scrollPhase} />
      <Phase3Section scrollPhase={scrollPhase} />
      <Phase4Section scrollPhase={scrollPhase} />
      <Phase5Section scrollPhase={scrollPhase} />

      {/* The 3D Pill Bottle */}
      <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center overflow-hidden">
        <motion.div
           initial={{ y: '120vh', scale: 1.1, x: 0, rotateZ: 0 }}
           animate={
              scrollPhase === 0 ? { y: '120vh', scale: isMobile ? 0.9 : 1.0, x: 0, rotateZ: 0 } :
              scrollPhase === 1 ? { y: 0, scale: isMobile ? 0.95 : 1.0, x: 0, rotateZ: 0 } :
              scrollPhase === 2 ? { y: isMobile ? '28vh' : '5vh', scale: isMobile ? 0.9 : 0.8, x: isMobile ? '15vw' : '-15vw', rotateZ: 0 } :
              scrollPhase === 3 ? { y: isMobile ? '32vh' : '30vh', scale: isMobile ? 0.9 : 0.8, x: isMobile ? '-15vw' : '20vw', rotateZ: 0 } :
              scrollPhase === 4 ? { y: isMobile ? '10vh' : '15vh', scale: isMobile ? 1.0 : 1.2, x: isMobile ? '-30vw' : '-28vw', rotateZ: 405 } :
              { y: isMobile ? '55vh' : '65vh', scale: isMobile ? 1.4 : 1.5, x: 0, rotateZ: 720 }
           }
           transition={{ duration: 0.9, delay: scrollPhase === 1 ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
           className={`absolute w-[650px] h-[650px] flex items-center justify-center ${scrollPhase > 0 ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
           <PillBottleScene phase={scrollPhase} />
        </motion.div>
      </div>

      <ScrollControls scrollPhase={scrollPhase} setScrollPhase={setScrollPhase} />

    </main>
  );
}
