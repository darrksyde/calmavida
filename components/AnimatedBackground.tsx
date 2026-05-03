'use client';

import { motion } from 'motion/react';

interface AnimatedBackgroundProps {
  scrollPhase: number;
  isMobile: boolean;
}

export default function AnimatedBackground({ scrollPhase, isMobile }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex items-center justify-center overflow-hidden">
      <motion.div
         initial={{ y: '120vh', width: isMobile ? '380px' : '500px', height: isMobile ? '380px' : '500px', borderRadius: '50%', backgroundColor: '#D3AE8D' }}
         animate={
            scrollPhase === 0 ? { y: '120vh', width: isMobile ? '380px' : '500px', height: isMobile ? '380px' : '500px', borderRadius: '50%', backgroundColor: '#D3AE8D' } :
            scrollPhase === 1 ? { y: '0vh', width: isMobile ? '380px' : '500px', height: isMobile ? '380px' : '500px', borderRadius: '50%', backgroundColor: '#D3AE8D' } :
            scrollPhase === 5 ? { y: 0, width: '100vw', height: '100vh', borderRadius: '0%', backgroundColor: '#bed6df' } :
            { y: 0, width: '100vw', height: '100vh', borderRadius: '0%', backgroundColor: '#DBCEBE' }
         }
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="absolute shadow-2xl relative"
      >
         {/* Grid Overlay for Phase 2, 3, 4 - fades in */}
         <motion.div 
            animate={{ opacity: (scrollPhase >= 2 && scrollPhase < 5) ? 0.3 : 0 }}
            transition={{ duration: 0.5, delay: scrollPhase >= 2 ? 0.6 : 0 }}
            className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_2px,transparent_2px)] [background-size:40px_40px]"
         />
      </motion.div>
    </div>
  );
}
