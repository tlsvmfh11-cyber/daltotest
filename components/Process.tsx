import React from 'react';
import { ProcessStepType } from '../types';

const Process: React.FC = () => {
  const steps: ProcessStepType[] = [
    { step: 1, title: "문의 및 예약", description: "전화/카톡으로 인원과 시간을 알려주시면 현재 상황과 견적을 안내해 드립니다." },
    { step: 2, title: "입장 및 안내", description: "도착 시 담당이 마중 나가며, 룸으로 안내 후 기본 세팅을 도와드립니다." },
    { step: 3, title: "브리핑 및 초이스", description: "담당의 솔직한 브리핑 후, 취향에 맞춰 초이스를 진행합니다. (강요 없음)" },
    { step: 4, title: "이용 및 케어", description: "술자리가 즐겁도록 중간중간 필요한 부분을 체크하고 케어합니다." },
    { step: 5, title: "깔끔한 마무리", description: "추가 비용 요구 없이, 기분 좋게 귀가하실 수 있도록 배웅합니다." },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          이용 시스템 안내
        </h2>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Side */}
                <div className="flex-1 text-center md:text-right">
                  <div className={`p-6 rounded-xl bg-slate-700 border border-slate-600 shadow-lg ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-2">STEP {item.step}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>

                {/* Number Circle in Middle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center shrink-0">
                  <span className="font-bold text-white">{item.step}</span>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">* 모든 과정에서 절대 압박이나 강요는 없습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;