import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tighter mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-gray-500 font-light">
            No hidden fees. No credit card required to start. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Free Tier */}
          <PricingCard 
            title="Starter" 
            price="$0" 
            description="Perfect for individuals just getting started."
            features={["1 Social Account", "10 Scheduled Posts/mo", "Basic Analytics", "7 Days History"]}
          />

          {/* Pro Tier */}
          <PricingCard 
            title="Pro" 
            price="$29" 
            description="For creators growing their personal brand."
            isPopular={true}
            features={["5 Social Accounts", "Unlimited Scheduling", "Advanced Analytics", "AI Caption Writer", "Thread Creator", "Priority Support"]}
          />

          {/* Business Tier */}
          <PricingCard 
            title="Agency" 
            price="$99" 
            description="For teams and agencies managing multiple brands."
            features={["Unlimited Accounts", "Team Collaboration", "Approval Workflows", "White-label Reports", "API Access", "Dedicated Success Manager"]}
          />

        </div>

        <div className="mt-20 text-center">
           <p className="text-gray-500">
             Looking for enterprise solutions? <a href="/contact" className="text-brand-orange font-semibold hover:underline">Contact Sales</a>
           </p>
        </div>

      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, isPopular }) => {
  return (
    <div className={`relative p-8 rounded-[2.5rem] bg-white border flex flex-col ${isPopular ? 'border-brand-orange shadow-2xl shadow-brand-orange/10 z-10 scale-105' : 'border-gray-100 hover:border-gray-200 transition-colors'}`}>
      
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
           <span className="text-4xl font-bold text-gray-900 tracking-tight">{price}</span>
           <span className="text-gray-400 font-medium">/month</span>
        </div>
        <p className="text-gray-500 mt-4 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
             <div className="mt-1 min-w-[18px] h-[18px] rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                <Check size={12} strokeWidth={3} />
             </div>
             <span className="text-gray-600 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${isPopular ? 'bg-brand-black text-white hover:bg-gray-800' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
        Get Started
      </button>

    </div>
  );
};

export default Pricing;