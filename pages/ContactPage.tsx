
import React from 'react';
import { ViewMode } from '../types';
import { PageHero, Button } from '../components/CommonUI';

const ContactPage: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const isMobile = viewMode === ViewMode.MOBILE;

  return (
    <div className="animate-in zoom-in-95 duration-500">
      <PageHero 
        title="Let's Discuss Your Growth Strategy."
        subtitle="Whether you're looking for a new distributor or seeking market entry advice, our enterprise team is ready to assist."
      />

      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-16' : 'grid-cols-2 gap-24'}`}>
            {/* Left: Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Regional Headquarters</h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">United Kingdom</h4>
                  <p className="text-gray-800 leading-relaxed">
                    124 Commercial Way<br />
                    Mayfair, London W1J 7JX<br />
                    T: +44 20 7946 0000<br />
                    E: uk.office@enterprise-dist.com
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">Middle East</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Business Bay, Tower B, Level 44<br />
                    Dubai, UAE<br />
                    T: +971 4 555 0000<br />
                    E: me.office@enterprise-dist.com
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Typical response time for enterprise queries: <strong>24-48 Business Hours</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded shadow-sm">
              <h3 className="text-xl font-bold mb-6">Partnership Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Company Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition" placeholder="Acme F&B Corp" />
                </div>
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Contact Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Professional Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Primary Market of Interest</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none appearance-none">
                    <option>Select a Region...</option>
                    <option>Western Europe</option>
                    <option>Middle East (GCC)</option>
                    <option>South East Asia</option>
                    <option>North America</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Brief</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none" placeholder="How can we support your expansion?"></textarea>
                </div>
                <Button primary className="w-full py-4">Submit Official Inquiry</Button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">
                  Secured & GDPR Compliant Data Handling
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
