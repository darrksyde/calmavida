import Image from 'next/image';
import { ArrowUpRight, Leaf, Pill, Award } from 'lucide-react';

interface HeroSectionProps {
  scrollPhase: number;
}

export default function HeroSection({ scrollPhase }: HeroSectionProps) {
  return (
    <>
      {/* Background Image (Phase 0) */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${scrollPhase >= 2 ? 'opacity-0' : 'opacity-100'}`}>
        <Image 
          src="/Heroimage.png" 
          alt="CalmaVida Background" 
          fill 
          priority
          className="object-cover object-[70%_bottom] md:object-center"
        />
      </div>

      {/* Main Content (Phase 0) */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-4 lg:pt-12 pb-24 min-h-[calc(100vh-120px)] flex flex-col justify-start lg:justify-center transition-opacity duration-700 ${scrollPhase > 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start max-w-[540px] text-[#0d222b] lg:pt-10 mx-auto lg:mx-0 w-full text-center lg:text-left">
            <div className="flex items-center gap-2 sm:gap-3 border border-[#162A31]/20 rounded-full pr-4 sm:pr-6 pl-1 py-1 mb-6 lg:mb-8 backdrop-blur-md bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-max max-w-full">
              <div className="flex relative shrink-0">
                <Image src="/people%20badge.png" alt="Happy Customers" width={76} height={32} className="h-6 sm:h-9 w-auto rounded-full object-contain" />
              </div>
              <span className="text-[10px] sm:text-[14px] font-medium tracking-tight text-[#162A31] truncate whitespace-normal leading-tight mx-1">
                Trusted by over <strong className="font-bold">500k</strong> happy customers<span className="hidden sm:inline"> across Latin America.</span>
              </span>
            </div>

            <h1 className="font-playfair text-[38px] min-[370px]:text-[42px] sm:text-6xl lg:text-[72px] leading-[1.1] font-bold mb-4 sm:mb-6 tracking-tight text-[#182C35]">
              Rediscover Your<br />Inner Balance
            </h1>

            <p className="font-playfair text-[15px] sm:text-[18px] text-[#223942] mb-8 sm:mb-10 max-w-[480px] leading-[1.4] sm:leading-[1.6]">
              Formulated with Andean botanicals, CalmaVida™ promotes relaxation, relieves tension, and supports emotional well-being without side effects
            </p>

            <button className="flex items-center justify-center gap-3 bg-white text-[#182C35] rounded-full px-6 py-3 sm:px-8 sm:py-4 text-[15px] sm:text-[17px] font-bold hover:bg-[#f8f9fa] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 w-auto">
              Experience the Calm
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#182C35] stroke-[2.5]" />
            </button>
          </div>

          {/* Right Column / Stats Cards */}
          <div className="relative hidden w-[600px] lg:flex lg:flex-col h-[500px]">
             
             {/* Top Card */}
             <div className="absolute top-[35px] left-[-30px]">
               <div className="flex items-center gap-4 bg-white/40 backdrop-blur-2xl border border-white/60 py-3.5 px-4 pr-10 rounded-3xl shadow-2xl rounded-bl-[40px] rounded-tl-[40px]">
                 <div className="rounded-full bg-white/80 border border-green-500 w-[52px] h-[52px] flex items-center justify-center shrink-0 shadow-sm">
                   <Leaf className="text-green-600 w-6 h-6 stroke-[2]" />
                 </div>
                 <div className="flex flex-col text-[#182C35]">
                   <span className="text-[13px] font-medium opacity-90 leading-tight mb-0.5">Formulated with</span>
                   <strong className="text-[20px] font-bold leading-tight tracking-tight">100% natural</strong>
                   <span className="text-[13px] font-medium opacity-90 leading-tight mt-0.5">Andean-sourced botanical</span>
                 </div>
               </div>
             </div>

             {/* Bottom Cards Wrapper */}
             <div className="absolute bottom-[20px] left-[50px] max-w-[340px]">
                <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-5 rounded-[28px] shadow-2xl flex flex-wrap gap-2.5">
                  <div className="bg-[#f0f4f7]/90 backdrop-blur-md px-4 py-2 rounded-full text-[14px] font-medium text-[#182C35]">
                    99% satisfaction rate
                  </div>
                  <div className="bg-[#f0f4f7]/90 backdrop-blur-md px-4 py-2 rounded-full text-[14px] font-medium text-[#182C35]">
                    All Natural
                  </div>
                  <div className="bg-[#f0f4f7]/90 backdrop-blur-md px-4 py-2 rounded-full text-[14px] font-medium text-[#182C35] flex items-center gap-2">
                    Backed by 5+ clinical studies
                    <div className="bg-green-100 rounded-full p-1">
                      <Pill className="w-[14px] h-[14px] text-green-600 stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="bg-[#f0f4f7]/90 backdrop-blur-md px-4 py-2 rounded-full text-[14px] font-medium text-[#182C35] flex items-center gap-2 w-full">
                    <div className="bg-green-100 rounded-full p-1 border border-green-200">
                      <Award className="w-[14px] h-[14px] text-green-600 stroke-[2.5]" />
                    </div>
                    Leading drug for stress relief
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
}
