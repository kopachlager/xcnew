import React from 'react';
import { Shield, Globe, Cpu, Layers, BarChart3, Clock, Share2, RefreshCw } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
             <div className="h-px w-8 bg-brand-orange"></div>
             <span className="text-xs font-bold tracking-widest text-brand-orange uppercase">Features</span>
             <div className="h-px w-8 bg-brand-orange"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-6">
            Everything you need to <br/>
            <span className="text-brand-orange">dominate the feed.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            We've stripped away the clutter to build the most efficient scheduling engine on the market. Pure performance, zero fluff.
          </p>
        </div>

        {/* Bento Grid Container - Mimicking Stats.tsx Style */}
        <div className="bg-gray-50 p-4 rounded-[2.5rem] mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Large Card: Smart Queue */}
                <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:border-brand-orange/20 transition-colors">
                    <div className="flex-1">
                        <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                            <Clock size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Queue</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Stop guessing when to post. Our algorithm analyzes millions of data points to determine the exact millisecond your specific audience is most active.
                        </p>
                    </div>
                    {/* Visual element representing time/queue */}
                    <div className="w-full md:w-64 h-48 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent"></div>
                        <div className="flex flex-col gap-3 w-40">
                             <div className="h-8 bg-white rounded-lg shadow-sm w-full flex items-center px-3 gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                             </div>
                             <div className="h-8 bg-white rounded-lg shadow-sm w-[90%] self-end opacity-60 flex items-center px-3 gap-2">
                                <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                             </div>
                             <div className="h-8 bg-white rounded-lg shadow-sm w-full opacity-30 flex items-center px-3 gap-2">
                                <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Card: Cross Platform */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 group hover:border-brand-orange/20 transition-colors">
                     <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-brand-black group-hover:text-white transition-colors duration-500">
                        <Share2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Platform Sync</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Draft once, publish everywhere. Auto-format for X, Threads, LinkedIn, and Instagram.
                    </p>
                </div>

                {/* Card: Deep Analytics - Dark Mode Style */}
                <div className="bg-brand-black p-8 rounded-[2rem] text-white flex flex-col justify-between group overflow-hidden relative">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                            <BarChart3 size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Deep Analytics</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Real-time conversion tracking and growth attribution.
                        </p>
                    </div>
                     <div className="absolute -bottom-4 -right-4 text-white/5 transform rotate-[-15deg]">
                        <BarChart3 size={150} />
                     </div>
                </div>

                 {/* Card: AI Assist */}
                 <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row-reverse items-center gap-8 group hover:border-brand-orange/20 transition-colors">
                    <div className="flex-1">
                        <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                            <Cpu size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Assist</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Stuck on a hook? Let our fine-tuned models generate viral-ready variations of your core idea instantly. It learns your tone over time.
                        </p>
                    </div>
                    <div className="w-full md:w-64 h-48 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden flex items-center justify-center p-6">
                        <div className="w-full space-y-3">
                             <div className="flex gap-2">
                                 <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex-shrink-0"></div>
                                 <div className="p-3 bg-white rounded-r-xl rounded-bl-xl shadow-sm text-xs text-gray-400 w-full">
                                    Generate 3 variations...
                                 </div>
                             </div>
                             <div className="flex gap-2 flex-row-reverse">
                                 <div className="w-8 h-8 rounded-full bg-brand-orange flex-shrink-0"></div>
                                 <div className="p-3 bg-brand-orange/10 rounded-l-xl rounded-br-xl text-xs text-brand-orange font-medium w-full">
                                    Here are 3 options based on...
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Standard Cards */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 group hover:border-brand-orange/20 transition-colors">
                     <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-brand-black group-hover:text-white transition-colors duration-500">
                        <Shield size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Account Safety</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Built-in rate limiting and human-like posting patterns to keep your account safe from shadowbans.
                    </p>
                </div>

                 <div className="bg-white p-8 rounded-[2rem] border border-gray-100 group hover:border-brand-orange/20 transition-colors">
                     <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-brand-black group-hover:text-white transition-colors duration-500">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Global Scheduling</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Manage timezones effortlessly for international audiences.
                    </p>
                </div>
                
                 <div className="bg-white p-8 rounded-[2rem] border border-gray-100 group hover:border-brand-orange/20 transition-colors">
                     <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-brand-black group-hover:text-white transition-colors duration-500">
                        <Layers size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Thread Composer</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Auto-split long text into perfectly threaded posts.
                    </p>
                </div>

            </div>
        </div>

        {/* Feature Highlight Section */}
        <div className="relative rounded-[3rem] overflow-hidden bg-brand-orange text-white">
           <div className="absolute top-0 right-0 p-12 opacity-10">
               <RefreshCw size={300} />
           </div>
           
           <div className="relative z-10 p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/10">
                    Coming Soon
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Automation Workflows</h3>
                  <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                    Set up "If This Then That" style rules. Automatically retweet your best posts after 6 months, or auto-plug your newsletter when a tweet hits 100 likes.
                  </p>
                  <button className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold hover:bg-brand-black hover:text-white transition-colors">
                    Join Waitlist
                  </button>
               </div>
               
               {/* Illustration Placeholder */}
               <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 h-64 flex items-center justify-center">
                   <div className="flex items-center gap-4 text-2xl font-bold opacity-80">
                      <span>If</span>
                      <div className="px-4 py-2 bg-white/20 rounded-lg">100 Likes</div>
                      <span>Then</span>
                      <div className="px-4 py-2 bg-white/20 rounded-lg">Plug Newsletter</div>
                   </div>
               </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;