import { Link, useLocation } from 'react-router';
import { useTextSize } from '../contexts/TextSizeContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const { textSize, setTextSize } = useTextSize();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFAF8] border-b border-[#FAD4E0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#B5294E] flex items-center justify-center text-white font-bold text-base sm:text-lg">
              C
            </div>
            <span className="font-['Georgia',serif] text-xl sm:text-2xl text-[#111111]">
              chapter<span className="text-[#B5294E]">Two</span>
            </span>
          </Link>

          {/* Desktop: Member counter and text size toggle */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
              <span className="text-[#111111] font-medium text-sm">12,849 members online</span>
            </div>

            <div className="flex gap-1 border border-[#FAD4E0] rounded-lg p-1 bg-white">
              <button
                onClick={() => setTextSize('small')}
                className={`px-3 py-1.5 rounded transition-colors text-sm ${
                  textSize === 'small'
                    ? 'bg-[#B5294E] text-white'
                    : 'text-[#4A4A4A] hover:bg-[#FAD4E0]'
                }`}
                aria-label="Small text size"
              >
                A
              </button>
              <button
                onClick={() => setTextSize('medium')}
                className={`px-3 py-1.5 rounded transition-colors text-base ${
                  textSize === 'medium'
                    ? 'bg-[#B5294E] text-white'
                    : 'text-[#4A4A4A] hover:bg-[#FAD4E0]'
                }`}
                aria-label="Medium text size"
              >
                A
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-3 py-1.5 rounded transition-colors text-lg ${
                  textSize === 'large'
                    ? 'bg-[#B5294E] text-white'
                    : 'text-[#4A4A4A] hover:bg-[#FAD4E0]'
                }`}
                aria-label="Large text size"
              >
                A
              </button>
            </div>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#B5294E]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 sm:top-20 bg-[#FFFAF8] z-40 p-4 sm:p-6 overflow-y-auto">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#E8F5E9] rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
              <span className="text-[#111111] font-medium text-sm sm:text-base">12,849 members online</span>
            </div>

            <div className="border-t border-[#FAD4E0] pt-4 sm:pt-6">
              <p className="text-[#4A4A4A] mb-3 font-medium text-sm sm:text-base">Text Size</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setTextSize('small')}
                  className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    textSize === 'small'
                      ? 'bg-[#B5294E] text-white'
                      : 'bg-white border border-[#FAD4E0] text-[#4A4A4A]'
                  }`}
                >
                  Small A
                </button>
                <button
                  onClick={() => setTextSize('medium')}
                  className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    textSize === 'medium'
                      ? 'bg-[#B5294E] text-white'
                      : 'bg-white border border-[#FAD4E0] text-[#4A4A4A]'
                  }`}
                >
                  Medium A
                </button>
                <button
                  onClick={() => setTextSize('large')}
                  className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    textSize === 'large'
                      ? 'bg-[#B5294E] text-white'
                      : 'bg-white border border-[#FAD4E0] text-[#4A4A4A]'
                  }`}
                >
                  Large A
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
