import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
  const reasons = [
    "정찰제 가격 운영, 사전 안내 기준 100% 준수",
    "담당 웨이터가 직접 초이스부터 마무리까지 전 과정 케어",
    "가게 상황이 별로면 '오늘 오지 마시라'고 솔직히 말함",
    "강남권 최대 규모, 하루 출근 인원 확보로 선택폭 넓음",
    "비즈니스 접대 및 1인 혼술 방문에 최적화된 환경"
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-2 block">Why Gangnam Dalto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            왜 강남 달토를<br className="md:hidden" /> 찾으실까요?
          </h2>
        </div>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 p-5 rounded-lg border-l-4 border-blue-500 shadow-md">
              <CheckCircle2 className="text-blue-400 shrink-0" size={24} />
              <p className="text-slate-100 font-medium text-lg">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
          <p className="text-slate-300">
            "화려한 말보다 <strong className="text-white">확실한 내상 방지</strong>를 약속드립니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;