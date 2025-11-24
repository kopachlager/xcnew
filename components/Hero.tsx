import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, BarChart3, Clock, CheckCircle, TrendingUp, Calendar, Image as ImageIcon, MessageCircle, MoreHorizontal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-32 pb-12 md:pt-48 md:pb-32 flex flex-col items-center justify-start overflow-hidden bg-white"
    >
      {/* Background Texture - Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      {/* Background Gradient Fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white pointer-events-none z-10"></div>

      {/* Main Content */}
      <div className="w-full max-w-full flex flex-col items-center text-center relative z-20">
        
        {/* Text Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mb-16">
          
          {/* Top Badge */}
          <div className="mb-8 opacity-0 animate-slide-in">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200/50 bg-white/80 backdrop-blur-md shadow-sm cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-orange">v2.0 Open Source</span>
              </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-brand-black tracking-tighter leading-[0.95] mb-6 opacity-0 animate-slide-in [animation-delay:100ms] relative z-10 drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-black via-brand-black to-gray-500 inline-block pb-2">
              Schedule smarter.
            </span>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-black via-brand-black to-gray-500 relative inline-block pb-2">
                 Grow faster.
              </span>
              <span className="text-brand-orange relative inline-block pb-2">
                Stay Free.
              </span>
            </div>
          </h1>
          
          <p className="max-w-xl text-lg text-gray-500 font-medium mb-10 opacity-0 animate-slide-in [animation-delay:200ms]">
            The open-source standard for high-performance content teams. <br className="hidden md:block"/> No credit card required.
          </p>

          <div className="flex items-center gap-4 opacity-0 animate-slide-in [animation-delay:300ms]">
             <button className="bg-brand-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-brand-black/20 hover:shadow-2xl hover:-translate-y-1">
                Start Scheduling
             </button>
          </div>

        </div>

        {/* Marquee Section - Positioned Below Buttons, Full Opacity, Straight Line */}
        <div className="w-full overflow-hidden opacity-0 animate-fade-in [animation-delay:400ms] py-6 relative group">
            {/* Gradient Masks for Marquee Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

            <div className="flex gap-8 animate-marquee w-max pl-4">
                {/* Set 1 */}
                <CardsSet />
                {/* Set 2 - Duplicate for loop */}
                <CardsSet />
                {/* Set 3 - Extra buffer for wide screens */}
                <CardsSet />
                {/* Set 4 - Extra buffer for ultra-wide screens */}
                <CardsSet />
            </div>
        </div>

      </div>
    </section>
  );
};

const CardsSet = () => (
    <div className="flex gap-8 items-center">
        
        {/* Card 1: Composer Draft */}
        <div className="w-72 h-64 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col justify-between">
            <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0"></div>
                <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                <MoreHorizontal size={16} className="ml-auto text-gray-300" />
            </div>
            <div className="space-y-3 flex-grow pt-4">
                <div className="h-2 w-full bg-gray-50 rounded-full"></div>
                <div className="h-2 w-[85%] bg-gray-50 rounded-full"></div>
                <div className="h-2 w-[90%] bg-gray-50 rounded-full"></div>
                <div className="h-2 w-[60%] bg-gray-50 rounded-full"></div>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50">
                <div className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300"><ImageIcon size={14}/></div>
                <div className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300"><BarChart3 size={14}/></div>
                <div className="ml-auto px-4 py-1.5 bg-brand-black text-white text-xs font-bold rounded-full">Post</div>
            </div>
        </div>

        {/* Card 2: Analytics Vertical */}
        <div className="w-64 h-64 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col justify-between">
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase">Growth</span>
                <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+24%</span>
             </div>
             <div className="flex items-end gap-2 h-full pb-2">
                <div className="w-full bg-brand-orange/10 rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-brand-orange/20 rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-brand-orange/40 rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-brand-orange rounded-t-sm h-[80%] shadow-lg shadow-brand-orange/20"></div>
                <div className="w-full bg-brand-orange/30 rounded-t-sm h-[50%]"></div>
             </div>
             <div className="space-y-1 border-t border-gray-50 pt-3">
                 <p className="text-2xl font-bold text-gray-900">12.4k</p>
                 <p className="text-xs text-gray-400">New followers</p>
             </div>
        </div>

        {/* Card 3: Square Calendar Date */}
        <div className="w-64 h-64 bg-brand-black rounded-[2rem] shadow-xl p-6 flex flex-col items-center justify-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                 <Calendar size={80} />
             </div>
             <span className="text-brand-orange font-bold text-lg mb-2">OCT</span>
             <span className="text-7xl font-bold tracking-tighter">24</span>
             <div className="mt-4 flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
             </div>
        </div>

        {/* Card 4: Platform Icons Box */}
        <div className="w-72 h-64 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col items-center justify-center gap-6">
             <div className="flex items-center gap-6">
                 <div className="p-4 bg-gray-50 rounded-2xl text-gray-900 shadow-sm">
                    <Twitter size={32} fill="currentColor" className="text-gray-900"/>
                 </div>
                 <div className="h-12 w-px bg-gray-100"></div>
                 <div className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 shadow-sm">
                    <Linkedin size={32} />
                 </div>
             </div>
             <div className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 shadow-sm">
                <Instagram size={32} />
             </div>
        </div>

        {/* Card 5: Success Notification Box */}
        <div className="w-72 h-64 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col items-center justify-center text-center gap-4 border-b-4 border-b-green-500">
             <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
                <CheckCircle size={32} />
             </div>
             <div>
                <p className="font-bold text-gray-900 text-lg">Published</p>
                <p className="text-sm text-gray-400 mt-1">Thread successfully posted to X</p>
             </div>
        </div>

    </div>
);

export default Hero;