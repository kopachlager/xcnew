import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is X-Scheduler really free to use?",
    answer: "Yes! X-Scheduler is 100% open-source and free. We are supported by our community sponsors and enterprise contributors, allowing us to keep the core tool accessible to everyone."
  },
  {
    question: "Does X-Scheduler support multiple team members?",
    answer: "Since the tool is free, there are no seat limits. You can invite your entire team and manage permissions through our role-based access control system."
  },
  {
    question: "Can I auto-retweet my best performing posts?",
    answer: "Absolutely. Our 'Evergreen' feature allows you to flag high-performing content. You can set rules to automatically retweet these posts after a set duration (e.g., 6 months) if they meet specific engagement criteria."
  },
  {
    question: "How does the AI caption writer work?",
    answer: "Our AI is fine-tuned on viral tweets. You provide a topic or a link, and it generates 5-10 variations of hooks and threads. It learns your tone over time to sound exactly like you."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">Everything you need to know about the product.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index ? 'shadow-lg shadow-gray-200/50 ring-1 ring-gray-100' : 'hover:bg-white hover:shadow-sm'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-brand-orange' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-brand-orange text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                  {openIndex === index ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-500 font-medium">
                Still have questions? <a href="#" className="text-brand-orange hover:text-brand-black transition-colors underline decoration-brand-orange/30 underline-offset-4">Chat with our community</a>
            </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;