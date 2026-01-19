import React from 'react';
import Hero from './components/Hero';
import Worries from './components/Worries';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20 md:pb-0">
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 h-16 flex items-center justify-center">
        <div className="font-bold text-xl tracking-tighter">
          강남 <span className="text-blue-500">달토</span>
        </div>
      </header>
      
      <main className="pt-16">
        <Hero />
        <Worries />
        <WhyUs />
        <Process />
        <Pricing />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>

      <FloatingCTA />
      
      <footer className="py-8 text-center text-slate-600 text-xs px-4">
        <p>&copy; {new Date().getFullYear()} 강남 달토. All rights reserved.</p>
        <p className="mt-2">본 사이트는 포트폴리오 목적으로 제작된 예시 페이지입니다.</p>
      </footer>
    </div>
  );
};

export default App;