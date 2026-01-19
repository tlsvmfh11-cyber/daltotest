import React from 'react';
import { Phone, MessageCircle, AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-200 text-sm font-medium mb-4">
          <AlertCircle size={16} />
          <span>솔직하게 말씀드리고, 확실할 때만 모십니다</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
          가격 덤탱이, 내상, 사이즈 걱정...<br />
          <span className="text-blue-400">이제 그만하셔도 됩니다.</span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
          과장된 홍보에 지치셨나요?<br className="md:hidden"/>
          현실적인 가격과 상황, 있는 그대로 브리핑합니다.<br />
          담당이 끝까지 책임지는 구조, 강남 달토입니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full max-w-md mx-auto">
          <a href="tel:01000000000" className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-slate-900/50">
            <Phone size={20} />
            지금 통화하기
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-yellow-400/20">
            <MessageCircle size={20} />
            카톡으로 물어보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;