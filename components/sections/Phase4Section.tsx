'use client';
import Image from 'next/image';

import { motion } from 'motion/react';

interface Phase4SectionProps {
  scrollPhase: number;
}

export default function Phase4Section({ scrollPhase }: Phase4SectionProps) {
  return (
    <div className={`fixed inset-0 z-25 flex flex-col items-center justify-center ${scrollPhase === 4 ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 relative h-full flex flex-col lg:flex-row items-center justify-between pointer-events-none">
        
        {/* Left Images (Scattered People) */}
        <div className="hidden lg:block relative w-full lg:w-[55%] xl:w-[60%] h-full shrink-0 pointer-events-auto overflow-hidden lg:overflow-visible">
          {[
            { src: '/person01.png', size: '10vw', min: '90px', max: '140px', top: '18%', left: '8%', delay: 0.1 },
            { src: '/person02.png', size: '11vw', min: '95px', max: '150px', top: '15%', left: '35%', delay: 0.2 },
            { src: '/person03.png', size: '12vw', min: '100px', max: '160px', top: '32%', left: '50%', delay: 0.3 },
            { src: '/person04.png', size: '14vw', min: '120px', max: '180px', top: '42%', left: '25%', delay: 0.15 },
            { src: '/person05.png', size: '13vw', min: '110px', max: '170px', top: '55%', left: '55%', delay: 0.35 },
            { src: '/person06.png', size: '15vw', min: '130px', max: '190px', top: '70%', left: '10%', delay: 0.25 },
            { src: '/Person 7.png', size: '12vw', min: '100px', max: '160px', top: '65%', left: '35%', delay: 0.4 },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={scrollPhase === 4 ? { scale: 1, opacity: 1, y: 0 } : scrollPhase > 4 ? { scale: 0.8, opacity: 0, y: -50 } : { scale: 0.5, opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: scrollPhase === 4 ? person.delay : 0, ease: [0.16, 1, 0.3, 1] }}
              className="absolute rounded-full overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)] bg-white/20 border-2 border-white/50"
              style={{
                width: `clamp(${person.min}, ${person.size}, ${person.max})`,
                height: `clamp(${person.min}, ${person.size}, ${person.max})`,
                top: person.top,
                left: person.left
              }}
            >
              <Image src={person.src} alt={`Happy Customer ${idx + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-[45%] xl:w-[40%] max-w-[600px] flex flex-col justify-start lg:justify-center mt-32 lg:mt-0 lg:pr-8 pb-12 lg:pb-0 z-10 pointer-events-auto shrink-0">
           <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={scrollPhase === 4 ? { y: 0, opacity: 1 } : scrollPhase > 4 ? { y: -50, opacity: 0 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: scrollPhase === 4 ? 0.6 : 0, ease: [0.16, 1, 0.3, 1] }}
           >
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full border-[1.2px] border-[#2f3c36] shrink-0" />
                <h2 className="font-playfair text-[16px] sm:text-[18px] tracking-widest text-[#2f3c36] uppercase italic whitespace-nowrap">Real results, real people</h2>
                <div className="h-[1px] bg-[#2f3c36] w-12 sm:flex-1 ml-2 sm:ml-4 opacity-30" />
              </div>
              <p className="font-dm-sans text-[22px] sm:text-[24px] leading-[1.3] sm:leading-[1.4] text-[#2f3c36] content-start sm:pr-8">
                Over 50,000 happy customers report reduced stress, better sleep, and enhanced focus within weeks.
              </p>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
