'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Phase5SectionProps {
  scrollPhase: number;
}

export default function Phase5Section({ scrollPhase }: Phase5SectionProps) {
  return (
    <div className={`fixed inset-0 z-35 flex flex-col items-center justify-start pt-[15vh] lg:pt-[20vh] pb-[5vh] ${scrollPhase === 5 ? 'pointer-events-auto' : 'pointer-events-none'}`}>
       {/* Phase 5 text */}
       <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={scrollPhase === 5 ? { y: 0, opacity: 1 } : scrollPhase > 5 ? { y: -50, opacity: 0 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: scrollPhase === 5 ? 0.4 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[800px] px-4 z-10"
       >
          <h2 className="font-playfair text-[36px] sm:text-[48px] lg:text-[64px] text-[#2f3c36] mb-4">Try CalmaVida Risk Free.</h2>
          <p className="font-dm-sans text-[16px] sm:text-[18px] lg:text-[20px] text-[#2f3c36]/90 mb-8 max-w-[650px] leading-[1.4]">
            We believe in the natural power of CalmaVida. If you&#39;re not completely satisfied within 60 days, get your money back. No questions asked.
          </p>
          <button className="px-8 py-3 rounded-full border-[1.5px] border-[#2f3c36] text-[#2f3c36] font-dm-sans text-[16px] flex items-center gap-2 hover:bg-[#2f3c36] hover:text-white transition-colors shadow-sm">
            Buy CalmaVida now <ArrowUpRight className="w-5 h-5" />
          </button>
       </motion.div>

       {/* Cloud at the bottom */}
       <motion.div
          initial={{ y: '20vh', opacity: 0 }}
          animate={scrollPhase === 5 ? { y: 0, opacity: 1 } : { y: '20vh', opacity: 0 }}
          transition={{ duration: 0.8, delay: scrollPhase === 5 ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 w-full h-[45vh] lg:h-[55vh] pointer-events-none z-0"
       >
          <Image src="/cloud.png" alt="Clouds" fill className="object-cover object-bottom opacity-90" />
       </motion.div>
    </div>
  );
}
