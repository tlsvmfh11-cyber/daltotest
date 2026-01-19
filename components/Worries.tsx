import React from 'react';
import { DollarSign, UserX, Ghost, Ban } from 'lucide-react';

const Worries: React.FC = () => {
  const worries = [
    {
      icon: <DollarSign className="w-8 h-8 text-red-400" />,
      title: "가격이 갑자기 오를까 봐",
      desc: "계산할 때 말이 바뀌는 덤탱이, 절대 없습니다. 처음 안내드린 그대로 진행됩니다."
    },
    {
      icon: <UserX className="w-8 h-8 text-red-400" />,
      title: "사이즈·마인드가 안 맞을까 봐",
      desc: "무조건 좋다고 하지 않습니다. 당일 출근 현황과 수질, 솔직하게 말씀드립니다."
    },
    {
      icon: <Ghost className="w-8 h-8 text-red-400" />,
      title: "혼자 가도 어색할까 봐",
      desc: "1인 방문객 비중이 40% 이상입니다. 혼자 오셔도 담당이 어색하지 않게 케어합니다."
    },
    {
      icon: <Ban className="w-8 h-8 text-red-400" />,
      title: "강매나 푸쉬가 있을까 봐",
      desc: "웨이터의 무리한 팁 요구, 술 강매 일절 없습니다. 깔끔하게 노실 수 있습니다."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          "다들 이런 걱정 때문에<br className="md:hidden" /> 문의 주십니다"
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {worries.map((item, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worries;