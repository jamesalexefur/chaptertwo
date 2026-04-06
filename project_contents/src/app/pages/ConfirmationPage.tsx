import { useLocation } from 'react-router';
import { Check, Phone } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export function ConfirmationPage() {
  const location = useLocation();
  const firstName = (location.state as any)?.firstName || 'there';
  const [isConnecting, setIsConnecting] = useState(false);

  const handleCallNow = () => {
    setIsConnecting(true);
    window.location.href = 'tel:1-800-555-0192';
    setTimeout(() => setIsConnecting(false), 3000);
  };

  return (
    <>
      <SEO
        title="Welcome to ChapterTwo - We'll Call You Soon!"
        description="Thank you for joining ChapterTwo. Our team will match you with a caring companion and call you within 24 hours. You're not alone anymore."
        keywords="companion confirmation, senior companion signup complete"
      />
      <div className="bg-[#FFFAF8] min-h-[calc(100vh-5rem)] py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Checkmark Circle */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#B5294E] rounded-full">
            <Check className="text-[#B5294E]" size={48} strokeWidth={3} />
          </div>
        </div>

        {/* Header */}
        <h2 className="font-['Georgia',serif] text-[1.75rem] sm:text-[2.25rem] text-center text-[#111111] mb-3 sm:mb-4 px-4">
          You're in, {firstName}.
        </h2>
        <p className="text-center text-[0.95rem] sm:text-[1.05rem] text-[#4A4A4A] leading-[1.6] mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Thank you for taking this step. Our team will be in touch within 24 hours. If you'd like to speak with someone right now, tap the button below.
        </p>

        {/* Call Now Button */}
        <div className="mb-8 sm:mb-10 px-4">
          <button
            onClick={handleCallNow}
            className={`w-full max-w-md mx-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-5 sm:py-6 rounded-[16px] sm:rounded-[18px] font-medium text-[1.05rem] sm:text-[1.15rem] transition-all shadow-lg min-h-[70px] ${
              isConnecting
                ? 'bg-[#4CAF50] text-white'
                : 'bg-[#4CAF50] text-white hover:bg-[#45a049] active:scale-[0.98]'
            }`}
          >
            <Phone size={24} className="flex-shrink-0" />
            <span className="text-center">{isConnecting ? 'Connecting you now…' : 'Call Us Now — 1-800-555-0192'}</span>
          </button>
          <p className="text-center text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A] mt-3">
            Mon–Fri · 9am–6pm Eastern · Tap to call instantly from your phone
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="bg-white border-2 border-[#B5294E] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 mb-6 sm:mb-8">
          <h3 className="font-['Georgia',serif] text-[1.4rem] sm:text-[1.6rem] text-[#111111] mb-5 sm:mb-6 text-center">
            What happens next
          </h3>

          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#B5294E] text-white flex items-center justify-center font-['Georgia',serif] text-lg sm:text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1 pt-1">
                <p className="text-[0.95rem] sm:text-[1rem] leading-[1.6] text-[#111111]">
                  Our team personally reviews your details — a real human, not a computer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#B5294E] text-white flex items-center justify-center font-['Georgia',serif] text-lg sm:text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1 pt-1">
                <p className="text-[0.95rem] sm:text-[1rem] leading-[1.6] text-[#111111]">
                  We carefully match you with a companion who understands your chapter of life.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#B5294E] text-white flex items-center justify-center font-['Georgia',serif] text-lg sm:text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1 pt-1">
                <p className="text-[0.95rem] sm:text-[1rem] leading-[1.6] text-[#111111]">
                  Your companion calls you within 24 hours to introduce themselves and set up your first real conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Green Support Box */}
        <div className="bg-[#E8F5E9] border-2 border-green-600 rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
          <p className="text-[0.95rem] sm:text-[1rem] text-[#111111] mb-3">
            <strong>Need help?</strong>
          </p>
          <a
            href="tel:1-800-555-0192"
            className="inline-flex items-center gap-2 text-[#B5294E] font-medium text-[1rem] sm:text-[1.05rem] hover:underline"
          >
            <Phone size={20} className="flex-shrink-0" />
            1-800-555-0192
          </a>
          <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A] mt-2">
            Real people. No automated menus. We promise.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#4A4A4A]">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
            <span className="text-[0.85rem] sm:text-[0.9rem]">12,849 members online</span>
          </div>
          <p className="text-[0.8rem] sm:text-[0.85rem] text-[#4A4A4A] px-4">
            ChapterTwo Inc., 4800 Montgomery Lane, Suite 400, Bethesda, MD 20814
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
