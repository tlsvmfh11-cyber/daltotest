import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          고민은 시간만 늦출 뿐입니다.
        </h2>
        <p className="text-slate-300 text-lg mb-10">
          부담 없이 연락 주세요. 상황이 좋지 않으면 <br className="md:hidden" />
          <span className="text-red-400 font-bold">"오늘은 오지 마시라"</span>고 말씀드립니다.<br/>
          확실할 때만 모시겠습니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:01000000000" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg shadow-blue-900/50">
            전화로 견적 확인하기
          </a>
          <a href="#" className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg shadow-yellow-400/20">
            카톡으로 편하게 묻기
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;