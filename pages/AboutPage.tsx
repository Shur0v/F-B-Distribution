
import React from 'react';
import { ViewMode } from '../types';
import { PageHero, SectionTitle, PlaceholderImage } from '../components/CommonUI';

const AboutPage: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const isMobile = viewMode === ViewMode.MOBILE;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <PageHero 
        title="Decades of Distribution Excellence."
        subtitle="We build bridges between international suppliers and demanding regional markets through structured operations and regulatory mastery."
      />

      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-12' : 'grid-cols-2 gap-16'} mb-20`}>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Our Mission</h3>
              <p className="text-xl font-medium text-gray-800 leading-relaxed">
                To eliminate complexity in international F&B trade by providing a transparent, efficient, and growth-oriented distribution ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Our Vision</h3>
              <p className="text-xl font-medium text-gray-800 leading-relaxed">
                Becoming the primary gateway for global food brands seeking sustainable market penetration and operational stability.
              </p>
            </div>
          </div>

          <SectionTitle>Our Core Values</SectionTitle>
          <div className="space-y-12">
            {[
              { title: 'Integrity in Supply', desc: 'We maintain the highest standards of transparency in every link of the supply chain.' },
              { title: 'Regulatory Precision', desc: 'Compliance is not an option; it is our foundation. We manage the complexity so you don’t have to.' },
              { title: 'Commercial Agility', desc: 'We adapt rapidly to market shifts, ensuring our partners always maintain a competitive edge.' },
            ].map((v, i) => (
              <div key={i} className="flex gap-8 items-start border-l-4 border-gray-900 pl-8 py-2">
                <div>
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered>Leadership Philosophy</SectionTitle>
          <div className="bg-white p-12 border border-gray-200 rounded">
            <p className="text-gray-600 italic text-center text-lg leading-relaxed">
              "Enterprise distribution is no longer just about moving crates; it's about moving information, navigating legality, and building long-term commercial trust. We succeed when our partners are invisible in the local market because their brand feels like it's always belonged there."
            </p>
            <div className="mt-8 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <p className="font-bold text-gray-900">Julian Sterling</p>
              <p className="text-sm text-gray-400">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
