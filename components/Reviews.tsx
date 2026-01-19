import React from 'react';
import { ReviewType } from '../types';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews: ReviewType[] = [
    {
      id: 1,
      age: "30대 후반 / 직장인",
      context: "거래처 접대",
      content: "접대 자리라 신경 많이 쓰였는데, 담당이 눈치껏 잘 챙겨줘서 분위기 좋게 끝났습니다. 가격도 처음 말한 그대로라 깔끔했네요."
    },
    {
      id: 2,
      age: "40대 초반 / 자영업",
      context: "지인 모임",
      content: "솔직히 반신반의하면서 갔는데 내상 없었습니다. 애들 상태 별로면 그냥 맥주나 한잔 하고 가라고 솔직하게 말해주는 게 맘에 듭니다."
    },
    {
      id: 3,
      age: "30대 중반 / 전문직",
      context: "1인 혼술",
      content: "혼자 가서 좀 뻘줌할까 걱정했는데, 방치 안 하고 중간중간 체크해줘서 편하게 마시다 왔습니다. 혼자 가기도 괜찮은 듯."
    },
    {
      id: 4,
      age: "50대 초반 / 사업가",
      context: "비즈니스",
      content: "강남 바닥에서 이 정도면 양심적입니다. 굳이 비싼 술 강요 안 하고, 예산 맞춰서 세팅해주는 게 좋았습니다."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          실제 방문하신 형님들의 후기
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-700 p-6 rounded-xl border-l-4 border-yellow-500 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-slate-200 font-bold text-sm">{review.age}</p>
                  <p className="text-slate-400 text-xs">{review.context}</p>
                </div>
                <div className="flex text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;