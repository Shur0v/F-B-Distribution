
import React from 'react';
import { ViewMode, ServiceBlock } from '../types';
import { PageHero, SectionTitle, PlaceholderImage } from '../components/CommonUI';

const services: ServiceBlock[] = [
  {
    title: 'Market Entry & Distribution',
    description: 'Complete strategic planning for entering new territories, including competitor analysis, pricing strategy, and initial partner acquisition.',
    benefit: 'Reduce time-to-market by 40% through existing network access.'
  },
  {
    title: 'Regulatory & Compliance',
    description: 'End-to-end management of import licenses, health certificates, labeling laws, and regional safety standards.',
    benefit: 'Zero-risk entry with 100% legal coverage in all operational territories.'
  },
  {
    title: 'Brand Growth & Commercial Strategy',
    description: 'Data-driven marketing support, account management, and strategic retail placements to ensure long-term shelf velocity.',
    benefit: 'Sustainable CAGR growth through active category management.'
  },
  {
    title: 'Supply Chain & Logistics',
    description: 'Temperature-controlled warehousing, last-mile delivery, and real-time inventory tracking optimized for F&B perishables.',
    benefit: 'Minimized spoilage and optimized stock turnover ratios.'
  },
  {
    title: 'Market Intelligence & Insights',
    description: 'Deep-dive analytics on consumer behavior, emerging trends, and channel performance data.',
    benefit: 'Information-first decision making for enterprise stakeholders.'
  },
  {
    title: 'Operational Support',
    description: 'Back-office services including billing, credit management, and customer service for local retail partners.',
    benefit: 'Leaner operations for the brand owner, offloading administrative overhead.'
  }
];

const ServicesPage: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const isMobile = viewMode === ViewMode.MOBILE;

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <PageHero 
        title="Integrated Enterprise Capabilities."
        subtitle="Our services are modular but designed to work as a unified ecosystem for global F&B success."
      />

      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-24">
            {services.map((s, i) => (
              <div key={i} className={`flex ${isMobile ? 'flex-col' : (i % 2 === 0 ? 'flex-row' : 'flex-row-reverse')} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-400 mb-2">Service 0{i + 1}</div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
                  <div className="bg-gray-50 p-4 border-l-4 border-gray-900">
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400 block mb-1">Key Outcome</span>
                    <p className="text-sm font-semibold text-gray-800">{s.benefit}</p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <PlaceholderImage className="w-full h-[300px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Need a custom distribution framework?</h3>
          <p className="text-gray-400 mb-8">
            We work with Fortune 500 F&B companies to design bespoke supply chain architectures.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded font-bold hover:bg-gray-200 transition">
            Speak to a Solutions Architect
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
