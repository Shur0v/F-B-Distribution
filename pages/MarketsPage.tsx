
import React from 'react';
import { ViewMode } from '../types';
import { PageHero, SectionTitle, PlaceholderImage } from '../components/CommonUI';

const MarketsPage: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const isMobile = viewMode === ViewMode.MOBILE;

  const industries = [
    'Specialty Snacks & Confectionery',
    'Premium Beverages (Soft & Alcohol)',
    'Health & Organic Food Systems',
    'Dairy & Temperature-Sensitive Goods',
    'Plant-Based Alternatives',
    'HORECA Bulk Supplies'
  ];

  const regions = [
    { name: 'Western Europe', status: 'Established Hub' },
    { name: 'Middle East (GCC)', status: 'Rapid Expansion' },
    { name: 'South East Asia', status: 'Strategic Logistics' },
    { name: 'North America', status: 'Trade Bridge' }
  ];

  return (
    <div className="animate-in slide-in-from-left-4 duration-500">
      <PageHero 
        title="Global Reach. Local Depth."
        subtitle="We operate where your customers are. Our market intelligence spans across diverse consumer cultures and regulatory landscapes."
      />

      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle centered subtitle="We provide specialized logistics and marketing for diverse food categories.">
            Industry Expertise
          </SectionTitle>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
            {industries.map((ind, i) => (
              <div key={i} className="border border-gray-200 p-8 rounded hover:bg-gray-50 transition cursor-default">
                <div className="w-10 h-10 bg-gray-200 mb-6"></div>
                <h4 className="font-bold text-gray-900">{ind}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-12' : 'grid-cols-2 gap-20'} items-center`}>
            <PlaceholderImage className="w-full h-[400px]" />
            <div>
              <SectionTitle>Geographic Coverage</SectionTitle>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Our infrastructure is strategically placed to minimize lead times and ensure the freshest possible delivery of temperature-sensitive goods.
              </p>
              <div className="space-y-4">
                {regions.map((reg, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="font-bold text-gray-900">{reg.name}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{reg.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketsPage;
