
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ViewMode } from './types';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MarketsPage from './pages/MarketsPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';
import AnnotationLayer from './components/AnnotationLayer';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DESKTOP);
  const [showAnnotations, setShowAnnotations] = useState<boolean>(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
        {/* Wireframe Controls Bar - Hidden in final prototype but essential for wireframe review */}
        <div className="bg-gray-800 text-white p-2 flex justify-between items-center text-xs sticky top-0 z-50">
          <div className="flex gap-4 items-center">
            <span className="font-bold opacity-75 uppercase tracking-widest">Wireframe Controller</span>
            <div className="flex bg-gray-700 rounded p-1">
              <button
                onClick={() => setViewMode(ViewMode.DESKTOP)}
                className={`px-3 py-1 rounded transition ${viewMode === ViewMode.DESKTOP ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
              >
                Desktop
              </button>
              <button
                onClick={() => setViewMode(ViewMode.MOBILE)}
                className={`px-3 py-1 rounded transition ${viewMode === ViewMode.MOBILE ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
              >
                Mobile
              </button>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAnnotations}
                onChange={(e) => setShowAnnotations(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              Show Annotations
            </label>
          </div>
          <div className="italic text-gray-400">
            Interactive Prototype (Grayscale Enterprise Mode)
          </div>
        </div>

        {/* Viewport Emulator */}
        <div className={`flex-1 flex justify-center p-4 lg:p-10 transition-all duration-300 ${viewMode === ViewMode.MOBILE ? 'bg-gray-200' : ''}`}>
          <div
            className={`bg-white shadow-2xl overflow-hidden relative transition-all duration-500 flex flex-col ${viewMode === ViewMode.MOBILE
                ? 'w-[375px] max-w-full h-[812px] rounded-[3rem] border-[8px] border-gray-900 ring-4 ring-gray-400'
                : 'w-full max-w-6xl min-h-screen'
              }`}
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-white">
              <Navigation viewMode={viewMode} />

              <main className="relative">
                <Routes>
                  <Route path="/" element={<HomePage viewMode={viewMode} />} />
                  <Route path="/about" element={<AboutPage viewMode={viewMode} />} />
                  <Route path="/services" element={<ServicesPage viewMode={viewMode} />} />
                  <Route path="/markets" element={<MarketsPage viewMode={viewMode} />} />
                  <Route path="/contact" element={<ContactPage viewMode={viewMode} />} />
                </Routes>

                {showAnnotations && <AnnotationLayer viewMode={viewMode} />}
              </main>

              <Footer viewMode={viewMode} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

const Footer: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => (
  <footer className="bg-gray-100 border-t border-gray-200 py-12 px-8">
    <div className={`grid ${viewMode === ViewMode.MOBILE ? 'grid-cols-1 gap-8' : 'grid-cols-4 gap-12'} max-w-5xl mx-auto`}>
      <div className="col-span-1 lg:col-span-1">
        <div className="h-8 w-32 bg-gray-300 mb-4"></div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Enterprise B2B Food & Beverage Distribution. Global supply chain and compliance expertise.
        </p>
      </div>
      <div className="col-span-1">
        <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-400">Navigation</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/markets">Markets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-400">Services</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Market Entry</li>
          <li>Regulatory Compliance</li>
          <li>Supply Chain</li>
          <li>Brand Strategy</li>
        </ul>
      </div>
      <div className="col-span-1">
        <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-gray-400">Corporate</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Headquarters: London, UK</p>
          <p>Tel: +44 20 7946 0000</p>
          <p>Email: business@enterprise-dist.com</p>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
      &copy; 2024 F&B Distribution Enterprise. For evaluation purposes only.
    </div>
  </footer>
);

export default App;
