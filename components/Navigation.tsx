
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ViewMode } from '../types';

const Navigation: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Markets', path: '/markets' },
    { label: 'Contact', path: '/contact' },
  ];

  const isMobile = viewMode === ViewMode.MOBILE;

  if (isMobile) {
    return (
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="h-6 w-24 bg-gray-300"></div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-900"></div>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-8 py-4 border-b border-gray-100 font-medium ${
                  location.pathname === item.path ? 'text-gray-900 bg-gray-50' : 'text-gray-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-10">
        <Link to="/" className="h-8 w-40 bg-gray-300"></Link>
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path ? 'text-gray-900 underline underline-offset-8 decoration-2' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <Link to="/contact" className="bg-gray-900 text-white px-6 py-2.5 text-sm font-semibold rounded hover:bg-gray-800 transition">
        Get in Touch
      </Link>
    </header>
  );
};

export default Navigation;
