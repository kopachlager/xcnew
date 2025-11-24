import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-brand-black font-bold" : "text-gray-500 font-medium hover:text-brand-orange";
  };

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Use a timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById('features');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('features');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-brand-black text-white p-1.5 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
            <X size={18} strokeWidth={3} />
          </div>
          <span className="text-base font-bold tracking-tight text-gray-900">X-Scheduler</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
           <Link to="/" className={`text-sm transition-colors ${isActive('/')}`}>Home</Link>
           <a href="#features" onClick={scrollToFeatures} className="text-sm font-medium text-gray-500 hover:text-brand-orange transition-colors">Features</a>
           <Link to="/blog" className={`text-sm transition-colors ${isActive('/blog')}`}>Blog</Link>
           <Link to="/contact" className={`text-sm transition-colors ${isActive('/contact')}`}>Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Log in
          </Link>
          <Link to="/signup" className="bg-brand-black text-white px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 border border-transparent active:scale-95">
            Sign up free
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;