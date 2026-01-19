import React, { useState } from 'react';
import { FaqType } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqType[] = [
    {
      id: 1,
      question: "혼자 가도 되나요?",
      answer: "네, 물론입니다. 최근에는 1인 방문객이 전체의 40% 이상입니다. 담당이 꼼꼼하게 케어해드리니 어색함 없이 편하게 즐기실 수 있습니다."
    },
    {
      id: 2,
      question: "예약은 꼭 해야 하나요?",
      answer: "필수는 아니지만, 예약을 하시면 웨이팅 없이 바로 룸으로 안내받으실 수 있습니다. 특히 금/토요일은 예약 없이는 입장이 지연될 수 있습니다."
    },
    {
      id: 3,
      question: "초이스 했는데 마음에 안 들면 어떻게 하나요?",
      answer: "마음에 드실 때까지 보여드립니다. 억지로 앉히는 일은 절대 없습니다. 만약 상황이 안 좋아서 보여드릴 인원이 부족하다면 입장 전에 솔직하게 말씀드립니다."
    },
    {
      id: 4,
      question: "나중에 추가 요금 생기나요?",
      answer: "아니요. 손님께서 술을 추가하시거나 연장하시지 않는 이상, 처음 안내드린 견적 외에 추가 요금은 발생하지 않습니다."
    },
    {
      id: 5,
      question: "건전하게 운영되나요?",
      answer: "네, 합법적인 1종 유흥업소 허가를 받아 운영하고 있습니다. 안심하고 비즈니스 및 모임을 가지실 수 있습니다."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 px-4 mb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          자주 묻는 질문
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-slate-700 rounded-lg bg-slate-800 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-slate-200">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-slate-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 bg-slate-800 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50">
                  <div className="mt-4">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;