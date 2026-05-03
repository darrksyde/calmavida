import Image from 'next/image';
import { Globe, ArrowUpRight, Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between gap-2 sm:gap-4">
      <div className="flex items-center mr-auto">
        <Image src="/Calma%20Vida%20Logonew.png" alt="Calma Vida" width={160} height={40} className="w-[100px] h-auto sm:w-[160px] object-contain" priority />
      </div>
      
      <div className="hidden lg:flex items-center justify-center flex-1 gap-8 text-white text-[15px] font-medium tracking-wide">
        <a href="#" className="hover:text-white/80 transition-colors">About Us</a>
        <a href="#" className="hover:text-white/80 transition-colors">Our Process</a>
        <a href="#" className="hover:text-white/80 transition-colors">Connect with us</a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 ml-auto">
        <div className="flex items-center border border-white/40 rounded-full p-1 sm:px-1.5 sm:py-1 backdrop-blur-md bg-white/10 text-white text-[10px] sm:text-sm">
          <div className="flex items-center pl-1 pr-2 sm:pl-2 sm:pr-3 opacity-90">
            <Globe className="w-[1rem] h-[1rem] mr-2 hidden sm:block" />
            <Globe className="w-3 h-3 mr-1 sm:hidden" />
            <span className="hidden sm:inline">Esp</span>
          </div>
          <div className="border border-white/60 rounded-full px-2 py-1 sm:px-4 sm:py-1.5 bg-white/20 font-medium">
            Eng
          </div>
        </div>
        <button className="hidden sm:flex items-center gap-2 border border-white/50 rounded-full px-6 py-2.5 backdrop-blur-md bg-white/20 text-white text-sm font-semibold hover:bg-white/30 transition-all whitespace-nowrap">
          Buy CalmaVida now
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </button>
        <button className="lg:hidden text-white flex items-center justify-center">
          <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
    </nav>
  );
}
