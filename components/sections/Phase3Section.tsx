'use client';
import Image from 'next/image';

import { motion } from 'motion/react';

interface Phase3SectionProps {
  scrollPhase: number;
}

export default function Phase3Section({ scrollPhase }: Phase3SectionProps) {
  return (
    <div className={`fixed inset-0 z-25 flex flex-col items-center justify-center ${scrollPhase === 3 ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 relative h-full flex flex-col lg:flex-row items-center justify-between pointer-events-none">
        
        {/* Left Text */}
        <div className="w-full lg:w-[50%] max-w-[600px] flex flex-col justify-start lg:justify-center mt-32 lg:mt-0 lg:pr-8 pb-12 lg:pb-0 z-10 pointer-events-auto lg:pl-[4%]">
           <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={scrollPhase === 3 ? { y: 0, opacity: 1 } : scrollPhase > 3 ? { y: -50, opacity: 0 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: scrollPhase === 3 ? 0.6 : 0, ease: [0.16, 1, 0.3, 1] }}
           >
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full border-[1.2px] border-[#2f3c36] shrink-0" />
                <h2 className="font-playfair text-[16px] sm:text-[18px] tracking-widest text-[#2f3c36] uppercase italic whitespace-nowrap">Clinically Perfected</h2>
                <div className="h-[1px] bg-[#2f3c36] w-12 sm:flex-1 ml-2 sm:ml-4 opacity-30" />
              </div>
              <p className="font-dm-sans text-[22px] sm:text-[24px] leading-[1.3] sm:leading-[1.4] text-[#2f3c36] content-start sm:pr-8">
                Our ingredients undergo advanced extraction processes, ensuring purity, potency, and consistency.
              </p>
           </motion.div>
        </div>

        {/* Right Images */}
        <div className="hidden lg:flex relative w-full lg:w-[50%] xl:w-[55%] h-full items-center justify-center gap-6 lg:gap-8 xl:gap-12 shrink-0 pointer-events-auto">
          <motion.div
            initial={{ y: '100vh', opacity: 0 }}
            animate={scrollPhase === 3 ? { y: '10vh', opacity: 1 } : scrollPhase > 3 ? { y: '-100vh', opacity: 0 } : { y: '100vh', opacity: 0 }}
            transition={{ duration: 0.8, delay: scrollPhase === 3 ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[230px] shrink-0 h-[650px] rounded-[115px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-[#dbe4d5]"
          >
            <Image src="/Scientist 2.png" alt="Scientist" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ y: '100vh', opacity: 0 }}
            animate={scrollPhase === 3 ? { y: '-10vh', opacity: 1 } : scrollPhase > 3 ? { y: '-100vh', opacity: 0 } : { y: '100vh', opacity: 0 }}
            transition={{ duration: 0.8, delay: scrollPhase === 3 ? 0.4 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[230px] shrink-0 h-[650px] rounded-[115px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-[#af6e4d]"
          >
            <Image src="/Scientist 1.png" alt="Scientist" fill className="object-cover" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
