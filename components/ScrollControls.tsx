'use client';

import { ChevronDown } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

interface ScrollControlsProps {
  scrollPhase: number;
  setScrollPhase: Dispatch<SetStateAction<number>>;
}

export default function ScrollControls({ scrollPhase, setScrollPhase }: ScrollControlsProps) {
  return (
    <div 
      onClick={() => setScrollPhase(p => p < 5 ? p + 1 : 0)}
      className={`absolute z-40 flex flex-col items-center cursor-pointer hover:opacity-80 transition-all duration-700 ${scrollPhase >= 2 && scrollPhase < 5 ? 'top-1/2 -translate-y-1/2 right-4 sm:right-10' : 'bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 sm:bottom-10 right-auto md:right-10'}`}
    >
      {scrollPhase >= 2 && scrollPhase < 5 && <ChevronDown className="w-5 h-5 text-black/80 rotate-180 mb-2" />}
      <div className="w-[66px] h-[66px] rounded-full border border-black/15 flex flex-col items-center justify-center bg-transparent backdrop-blur-md shadow-sm transition-transform hover:scale-105 border-[1.5px] border-[#2f3c36]">
        <span className="text-[12px] font-medium text-[#2f3c36] text-center leading-[1.1] tracking-wide">
           {scrollPhase >= 2 && scrollPhase < 5 ? <>Drag to<br />Scroll</> : scrollPhase === 5 ? <>Back to<br />Top</> : <>Scroll<br />down</>}
        </span>
      </div>
      {(scrollPhase < 2 || scrollPhase === 5) && <ChevronDown className={`w-5 h-5 text-[#2f3c36] mt-2 transition-transform ${scrollPhase === 5 ? 'rotate-180' : ''}`} />}
    </div>
  );
}
