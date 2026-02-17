
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewMode } from '../types';
import { PlaceholderImage, SectionTitle, Button } from '../components/CommonUI';

const HomePage: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const navigate = useNavigate();
  const isMobile = viewMode === ViewMode.MOBILE;

  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. Authority: Hero Section */}
      <section className={`py-20 px-8 lg:py-32 border-b border-gray-100 bg-white`}>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="bg-gray-100 px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
            Import & Export Excellence
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Strategic F&B Distribution <br className="hidden lg:block" /> for Global Growth.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
            We bridge the gap between international brands and local markets through robust supply chain operations, regulatory expertise, and commercial strategy.
          </p>
          <div className={`flex ${isMobile ? 'flex-col w-full px-4' : ''} gap-4`}>
            <Button primary onClick={() => navigate('/contact')}>Start Distribution Partnership</Button>
            <Button onClick={() => navigate('/services')}>Our Capabilities</Button>
          </div>
        </div>
      </section>

      {/* 2. Capability: Key Services Snapshot */}
      <section className="py-20 px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <SectionTitle centered subtitle="End-to-end support from market entry to operational excellence.">
            Comprehensive Enterprise Solutions
          </SectionTitle>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
            {[
              { title: 'Market Entry', desc: 'Strategic analysis and partner sourcing for new territories.' },
              { title: 'Compliance', desc: 'Expert handling of local F&B regulations and certifications.' },
              { title: 'Operations', desc: 'Full-scale logistics, warehousing, and inventory management.' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 border border-gray-200 rounded hover:shadow-md transition">
                <div className="w-12 h-12 bg-gray-200 rounded mb-6"></div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-xs font-bold text-gray-900 uppercase tracking-wider cursor-pointer hover:underline">Learn More &rarr;</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust: Trust Signals */}
      <section className="py-20 px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-12' : 'grid-cols-2 gap-20'} items-center`}>
            <div>
              <SectionTitle>Global Distribution, <br /> Local Authority.</SectionTitle>
              <p className="text-gray-500 leading-relaxed mb-8">
                Operating in over 45 markets across 4 continents, we provide the infrastructure needed to scale food and beverage brands in complex regulatory environments.
              </p>
              <ul className="space-y-4">
                {['20+ Years Expertise', 'ISO & GDPR Compliant', '500+ Active Retail Partners'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <PlaceholderImage className="w-full h-[400px]" />
          </div>
        </div>
      </section>

      {/* 4. Action: Final CTA */}
      <section className="py-24 px-8 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to scale your enterprise?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Connect with our commercial strategy team to discuss your market entry or distribution requirements.
          </p>
          <Button primary className="bg-white text-gray-900 hover:bg-gray-100" onClick={() => navigate('/contact')}>
            Request Corporate Overview
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
