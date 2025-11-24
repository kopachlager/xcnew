import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tighter mb-6">
              Let's talk.
            </h1>
            <p className="text-xl text-gray-500 font-light mb-12">
              Have a question about the product, enterprise integration, or just want to say hello? We're standing by.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-gray-50 rounded-2xl text-gray-900">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-gray-900">Email us</h3>
                    <p className="text-gray-500">hello@xscheduler.com</p>
                    <p className="text-gray-500">support@xscheduler.com</p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-gray-50 rounded-2xl text-gray-900">
                    <MessageSquare size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-gray-900">Live Chat</h3>
                    <p className="text-gray-500">Available Mon-Fri, 9am - 5pm EST.</p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-gray-50 rounded-2xl text-gray-900">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-gray-900">Headquarters</h3>
                    <p className="text-gray-500">123 Innovation Dr.<br/>San Francisco, CA 94103</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
             <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900">First Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all" placeholder="Jane" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all" placeholder="Doe" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-900">Email</label>
                   <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all" placeholder="jane@company.com" />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-900">Message</label>
                   <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all resize-none" placeholder="How can we help?" />
                </div>

                <button type="button" className="w-full py-4 bg-brand-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all">
                   Send Message
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;