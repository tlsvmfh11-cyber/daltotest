import React from 'react';
import { Info } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          가격 안내
        </h2>
        <p className="text-center text-slate-400 mb-12">
          전화 상담 시 확정된 가격 외에, 가게에서 말이 달라지지 않습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold text-slate-200 mb-2">기본 구성</h3>
            <p className="text-sm text-slate-400 mb-6">주대 + 룸티 + 기본 안주</p>
            <div className="w-full border-t border-slate-700 my-4"></div>
            <ul className="text-slate-300 space-y-3 w-full text-left px-4">
              <li className="flex justify-between">
                <span>12년산 양주 세트</span>
                <span className="font-bold">정찰제 적용</span>
              </li>
              <li className="flex justify-between">
                <span>맥주/음료</span>
                <span className="font-bold">무제한 서비스</span>
              </li>
              <li className="flex justify-between">
                <span>룸 이용 시간</span>
                <span className="font-bold">시간 무제한</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold text-slate-200 mb-2">인건비 (TC)</h3>
            <p className="text-sm text-slate-400 mb-6">투명하게 공개합니다</p>
            <div className="w-full border-t border-slate-700 my-4"></div>
            <ul className="text-slate-300 space-y-3 w-full text-left px-4">
              <li className="flex justify-between">
                <span>담당 케어비 (WT)</span>
                <span className="font-bold">별도 문의</span>
              </li>
              <li className="flex justify-between">
                <span>접객원 봉사료 (TC)</span>
                <span className="font-bold">시간 당 정찰제</span>
              </li>
              <li className="text-sm text-slate-500 mt-4 text-center">
                * 인원 수와 시간에 따라 합리적으로 책정됩니다.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-lg flex items-start gap-3">
          <Info className="text-blue-400 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-blue-200 text-sm mb-1">요일/시간별 변동 안내</h4>
            <p className="text-slate-400 text-sm">
              강남의 모든 업소는 피크 타임이나 요일에 따라 주대가 소폭 변동될 수 있습니다.<br />
              하지만, <span className="text-white font-bold underline">입장 전 통화로 안내드린 견적에서 절대 추가되지 않습니다.</span> 안심하고 방문하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;