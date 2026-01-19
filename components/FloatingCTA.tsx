import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:01000000000"; // Replace with actual number
  };

  const handleKakao = () => {
    // Replace with actual link
    window.open("https://kakao.com", "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-700 p-4 md:hidden">
      <div className="flex gap-3">
        <button 
          onClick={handleCall}
          className="flex-1 bg-slate-200 text-slate-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Phone size={20} />
          전화 상담
        </button>
        <button 
          onClick={handleKakao}
          className="flex-1 bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          카톡 문의
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;