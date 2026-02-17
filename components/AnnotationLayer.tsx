
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ViewMode } from '../types';

const AnnotationLayer: React.FC<{ viewMode: ViewMode }> = ({ viewMode }) => {
  const location = useLocation();
  const path = location.pathname;

  const getAnnotations = () => {
    switch(path) {
      case '/':
        return [
          { top: '15%', left: '5%', text: 'Level 1: Authority. Clear value prop immediately above the fold.' },
          { top: '45%', left: '5%', text: 'Level 2: Capability. Fast-scan service summary blocks.' },
          { top: '75%', left: '5%', text: 'Level 3: Trust. Focus on geographic and compliance reach.' }
        ];
      case '/services':
        return [
          { top: '25%', left: '5%', text: 'Linear scanning. One service per block ensures maximum detail clarity.' },
          { top: '60%', left: '5%', text: 'Benefit-driven text: Focus on the "Outcome" for the enterprise client.' }
        ];
      case '/contact':
        return [
          { top: '30%', left: '5%', text: 'Dual path: Direct contact details for speed, form for structured queries.' }
        ];
      default:
        return [
          { top: '20%', left: '5%', text: 'Enterprise structure: Minimal clutter, prioritized typography.' }
        ];
    }
  };

  if (viewMode === ViewMode.MOBILE) return null; // Hide annotations on mobile preview for clarity

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {getAnnotations().map((note, idx) => (
        <div 
          key={idx} 
          className="absolute bg-yellow-100 border border-yellow-400 text-yellow-900 text-[10px] px-2 py-1.5 rounded shadow-lg max-w-[200px] pointer-events-auto opacity-90 hover:opacity-100 transition"
          style={{ top: note.top, left: note.left }}
        >
          <div className="font-bold mb-1 uppercase text-[8px] opacity-70">UX Annotation</div>
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default AnnotationLayer;
