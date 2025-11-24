import React from 'react';
import { Heart, Plus } from 'lucide-react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Supported by Community</h2>
           <p className="text-gray-500 max-w-2xl">
             X-Scheduler remains free thanks to these amazing contributors. 
             <a href="#" className="ml-2 text-brand-orange font-medium hover:text-brand-black transition-colors underline decoration-brand-orange/30 underline-offset-4">
               Become a sponsor
             </a>
           </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-[2.5rem]">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Platinum Sponsor Slot - Featured */}
            {/* Fixed card - no hover transforms */}
            <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 relative p-8 rounded-3xl bg-brand-orange text-white overflow-hidden flex flex-col justify-between min-h-[240px] shadow-lg shadow-brand-orange/20 border border-transparent">
                {/* Animated Background Heart */}
                <div className="absolute top-0 right-0 p-4 opacity-10 animate-pulse-slow pointer-events-none">
                    <Heart size={120} fill="currentColor" />
                </div>
                
                <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/10">Platinum</div>
                {/* Breathing animation for logo text */}
                <h3 className="text-2xl font-bold animate-[pulse_3s_ease-in-out_infinite]">Your Logo Here</h3>
                </div>
                
                <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-white/90">
                Support development <Plus size={16} />
                </div>
            </div>

            {/* Regular Slots */}
            <SponsorSlot label="Gold Sponsor" />
            <SponsorSlot label="Sponsor" />
            <SponsorSlot label="Sponsor" />
            
            <SponsorSlot label="Sponsor" />
            <SponsorSlot label="Sponsor" />
            <SponsorSlot label="Ko-fi Supporter" />

            </div>
        </div>

      </div>
    </section>
  );
};

const SponsorSlot: React.FC<{label: string}> = ({ label }) => (
  // Completely fixed layout - only color/opacity transitions
  <div className="aspect-square rounded-3xl border border-dashed border-gray-200 hover:border-brand-orange/50 hover:bg-brand-orange/5 transition-colors duration-500 ease-out cursor-pointer flex flex-col items-center justify-center gap-3 group bg-white/50">
    <div className="p-3 bg-gray-50 rounded-full text-gray-300 group-hover:text-brand-orange group-hover:bg-white transition-colors duration-500">
      <Heart size={20} fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Plus size={20} className="group-hover:hidden transition-opacity duration-500" />
    </div>
    <span className="text-sm font-medium text-gray-400 group-hover:text-brand-orange transition-colors duration-500">{label}</span>
  </div>
);

export default Sponsors;