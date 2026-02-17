
import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; centered?: boolean }> = ({ children, subtitle, centered }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{children}</h2>
    {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

export const PageHero: React.FC<{ title: string; subtitle: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <section className={`bg-gray-50 border-b border-gray-200 py-20 px-8 ${centered ? 'text-center' : ''}`}>
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{title}</h1>
      <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>
    </div>
  </section>
);

export const PlaceholderImage: React.FC<{ className?: string }> = ({ className = "w-full h-48" }) => (
  <div className={`${className} placeholder-box rounded border border-gray-200 shadow-sm`}></div>
);

export const Button: React.FC<{ children: React.ReactNode; primary?: boolean; className?: string; onClick?: () => void }> = ({ children, primary, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-3 rounded font-semibold transition-all text-sm tracking-wide ${
    primary 
      ? 'bg-gray-900 text-white hover:bg-gray-800' 
      : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100'
  } ${className}`}>
    {children}
  </button>
);
