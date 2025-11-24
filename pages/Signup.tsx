import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, User } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden bg-white">
        
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-md px-4 relative z-10 animate-fade-in">
        
        {/* Back Link */}
        <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-black transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </Link>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Create account</h1>
            <p className="text-gray-500 text-sm">Start your 14-day free trial. No credit card required.</p>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
             <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
             </svg>
             <span>Sign up with Google</span>
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-medium tracking-wider">Or register with</span>
            </div>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 ml-1">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all text-sm font-medium" 
                  placeholder="Jane Doe" 
                />
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 ml-1">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all text-sm font-medium" 
                  placeholder="name@company.com" 
                />
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 ml-1">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl outline-none transition-all text-sm font-medium" 
                  placeholder="Create a password" 
                />
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button type="button" className="w-full py-4 bg-brand-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-brand-black/10 mt-2">
               Create Account
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
             <p className="text-gray-500">
               Already have an account? {' '}
               <Link to="/login" className="text-brand-orange font-bold hover:text-brand-black transition-colors">
                 Log in
               </Link>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;