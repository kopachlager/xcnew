import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Users, FileText, CheckCircle, TrendingUp, ArrowUpRight } from 'lucide-react';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
  { name: 'Mon', visitors: 240 },
  { name: 'Tue', visitors: 300 },
  { name: 'Wed', visitors: 280 },
  { name: 'Thu', visitors: 450 },
  { name: 'Fri', visitors: 390 },
  { name: 'Sat', visitors: 480 },
  { name: 'Sun', visitors: 354 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-2xl">
             <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-8 bg-brand-orange"></div>
                <span className="text-xs font-bold tracking-widest text-brand-orange uppercase">Open Metrics</span>
                <div className="h-px w-8 bg-brand-orange"></div>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-tight">
                Transparency is our <br/>core feature.
             </h2>
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="bg-gray-50 p-4 rounded-[2.5rem] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Main Chart Panel */}
            <div className="lg:col-span-8 bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col min-h-[400px]">
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Live Visitors</p>
                    </div>
                    <p className="text-5xl font-bold text-gray-900 tracking-tighter">354</p>
                 </div>
                 <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                    <TrendingUp size={14} />
                    <span>+12%</span>
                 </div>
              </div>
              
              <div className="flex-grow w-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF5500" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#FF5500" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9CA3AF', fontSize: 12, fontWeight: 500}} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9CA3AF', fontSize: 12}} 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: '1px solid #E5E7EB', 
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05)',
                        padding: '12px'
                      }}
                      cursor={{ stroke: '#FF5500', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="visitors" 
                      stroke="#FF5500" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorVisitors)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Column Stats */}
            <div className="lg:col-span-4 flex flex-col gap-4">
               
               {/* Active Users Card */}
               <div className="flex-1 bg-brand-black p-8 rounded-[2rem] text-white flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Users size={100} />
                  </div>
                  <div className="relative z-10">
                     <p className="text-sm font-medium text-gray-400 mb-2">Active Users</p>
                     <p className="text-4xl font-bold tracking-tight">14</p>
                  </div>
                  <div className="relative z-10 mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
                     <ArrowUpRight size={16} className="text-brand-orange" />
                     <span className="text-white">2 new</span> this week
                  </div>
               </div>

               {/* Split Row */}
               <div className="flex-1 grid grid-cols-2 gap-4">
                   {/* Total Posts */}
                   <div className="bg-white p-6 rounded-[2rem] border border-gray-100 flex flex-col justify-center items-center text-center">
                      <div className="mb-3 p-3 bg-gray-50 rounded-2xl text-gray-900">
                         <FileText size={24} strokeWidth={1.5} />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">10k+</p>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Scheduled</p>
                   </div>

                   {/* Posts Published */}
                   <div className="bg-white p-6 rounded-[2rem] border border-gray-100 flex flex-col justify-center items-center text-center">
                      <div className="mb-3 p-3 bg-green-50 rounded-2xl text-green-600">
                         <CheckCircle size={24} strokeWidth={1.5} />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">99.9%</p>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Uptime</p>
                   </div>
               </div>

            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
             We build in public. Live data from our own production database.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;