import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">X-Scheduler</h4>
            <p className="text-gray-500 max-w-sm text-lg font-light">
              The open-source standard for social scheduling. Precision tools for professional creators.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-gray-900">Product</h5>
              <Link to="/features" className="text-gray-500 hover:text-brand-orange transition-colors">Features</Link>
              <Link to="/blog" className="text-gray-500 hover:text-brand-orange transition-colors">Blog</Link>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">Changelog</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-gray-900">Legal</h5>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">Cookies</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-gray-900">Connect</h5>
              <Link to="/contact" className="text-gray-500 hover:text-brand-orange transition-colors">Contact</Link>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">Discord</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {year} XScheduler Inc. All rights reserved.
          </p>

          <a 
            href="#" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-black transition-colors"
          >
            Designed by Tmbrella Studio 
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;