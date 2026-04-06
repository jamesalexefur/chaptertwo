import { useState, useEffect } from 'react';
import { CTAButton } from '../components/CTAButton';
import { Check, Heart, Lock, Phone, Users, Shield, DollarSign, MapPin, Star, ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';

const activityNames = [
  'Dorothy, 71 — just connected with a companion',
  'Robert, 68 — having his first call today',
  'Margaret, 74 — finding comfort in conversation',
  'James, 82 — sharing stories from his past',
  'Patricia, 69 — no longer feeling alone',
];

export function LandingPage() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activityNames.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="ChapterTwo - Companion Matching for Seniors | End Loneliness"
        description="Connect with a caring companion by phone. No apps, no computers. ChapterTwo matches Americans aged 60-85 with real people who understand. 100% free, private, and safe."
        keywords="senior companionship, elderly companion service, phone companion for seniors, senior loneliness, aging in place support, telephone friendship service, companion care, senior social connection"
      />
      <StructuredData type="service" />
      <div className="bg-[#FFFAF8]">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#E8F5E9] rounded-full mb-6 sm:mb-8 text-sm sm:text-base">
            <Check className="text-green-700 flex-shrink-0" size={18} />
            <span className="text-[#111111] font-medium">Trusted by over 12,400 Americans aged 60–85</span>
          </div>

          <h1 className="font-['Georgia',serif] text-[clamp(1.75rem,6vw,3rem)] leading-[1.15] mb-4 sm:mb-6 px-2">
            <span className="text-[#111111]">You deserve someone</span>
            <br />
            <span className="text-[#B5294E]">who truly gets you.</span>
          </h1>

          <p className="text-[clamp(0.95rem,3vw,1.05rem)] leading-[1.7] text-[#111111] mb-4 sm:mb-5 max-w-2xl mx-auto px-4">
            Whether you've lost a partner, moved to a new city, or simply grown apart from friends over the years — you belong here.
          </p>

          <p className="text-[clamp(0.95rem,3vw,1.05rem)] leading-[1.7] text-[#111111] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            ChapterTwo connects you with a real, caring companion by phone. No apps. No computers. Just a warm conversation with someone who understands.
          </p>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-[#E8F5E9] rounded-full mb-6 sm:mb-8 animate-pulse max-w-full overflow-hidden">
            <div className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
            <span className="text-[#111111] text-[0.8rem] sm:text-[0.9rem] truncate">{activityNames[currentActivity]}</span>
          </div>

          <div className="mb-6 px-4">
            <CTAButton to="/onboarding" className="w-full sm:w-auto sm:min-w-[380px] text-[1rem] sm:text-[1.05rem]">
              Connect on a Call — It's Free
            </CTAButton>
          </div>

          <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A] mb-6 sm:mb-8 px-4">
            We call you · 100% private · No credit card · No commitment
          </p>

          <div className="bg-[#FFF3E0] border-2 border-[#FFA726] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 max-w-2xl mx-auto">
            <p className="text-[0.95rem] sm:text-[1rem] text-[#111111] mb-2">
              <strong>Prefer to call us directly?</strong>
            </p>
            <a
              href="tel:878882492"
              className="inline-flex items-center gap-2 text-[#B5294E] font-medium text-[1rem] sm:text-[1.05rem] hover:underline"
            >
              <Phone size={20} className="flex-shrink-0" />
              878882492
            </a>
            <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A] mt-2">
              Mon–Fri 9am–6pm Eastern · Real people, no robots
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-[1.75rem] sm:text-[2.25rem] font-['Georgia',serif] text-[#B5294E] mb-1 sm:mb-2">12,400+</div>
              <div className="text-[0.8rem] sm:text-[0.95rem] text-[#4A4A4A]">Companions matched</div>
            </div>
            <div className="text-center">
              <div className="text-[1.75rem] sm:text-[2.25rem] font-['Georgia',serif] text-[#B5294E] mb-1 sm:mb-2">4.9/5</div>
              <div className="text-[0.8rem] sm:text-[0.95rem] text-[#4A4A4A]">Average rating</div>
            </div>
            <div className="text-center">
              <div className="text-[1.75rem] sm:text-[2.25rem] font-['Georgia',serif] text-[#B5294E] mb-1 sm:mb-2">91%</div>
              <div className="text-[0.8rem] sm:text-[0.95rem] text-[#4A4A4A]">Feel less lonely</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-center text-[#111111] mb-3">
            How it works
          </h2>
          <p className="text-center text-[0.95rem] sm:text-[1.05rem] text-[#4A4A4A] mb-10 sm:mb-16">
            Simple as a phone call — because that's all it is.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#FFFAF8] border-2 border-[#B5294E] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 text-center">
              <div className="text-[3rem] sm:text-[3.5rem] mb-3 sm:mb-4">📝</div>
              <h3 className="font-['Georgia',serif] text-[1.2rem] sm:text-[1.35rem] text-[#111111] mb-2 sm:mb-3">
                Tell us your name & number
              </h3>
              <p className="text-[0.9rem] sm:text-[0.95rem] text-[#4A4A4A] leading-[1.6]">
                30 seconds, no account
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#B5294E] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 text-center">
              <div className="text-[3rem] sm:text-[3.5rem] mb-3 sm:mb-4">🤝</div>
              <h3 className="font-['Georgia',serif] text-[1.2rem] sm:text-[1.35rem] text-[#111111] mb-2 sm:mb-3">
                We personally find your match
              </h3>
              <p className="text-[0.9rem] sm:text-[0.95rem] text-[#4A4A4A] leading-[1.6]">
                Real team member, 24 hours
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#B5294E] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 text-center">
              <div className="text-[3rem] sm:text-[3.5rem] mb-3 sm:mb-4">📞</div>
              <h3 className="font-['Georgia',serif] text-[1.2rem] sm:text-[1.35rem] text-[#111111] mb-2 sm:mb-3">
                Your companion calls you
              </h3>
              <p className="text-[0.9rem] sm:text-[0.95rem] text-[#4A4A4A] leading-[1.6]">
                No apps, your own pace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Trust Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#FAD4E0] to-[#FFFAF8] border-2 border-[#B5294E] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B5294E] flex items-center justify-center text-white font-['Georgia',serif] text-xl sm:text-2xl flex-shrink-0">
                SB
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#B5294E] text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  A NOTE FROM OUR FOUNDER
                </div>
                <blockquote className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.2rem] italic text-[#111111] leading-[1.6] mb-3 sm:mb-4">
                  "When my mother moved to a new state at 72, I watched her become a different person. She went from being the life of every gathering to spending days without speaking to anyone. No amount of video calls could replace what she'd lost — the daily hellos, the shared cups of coffee, someone who just understood her chapter of life."
                </blockquote>
                <p className="text-[0.9rem] sm:text-[0.95rem] text-[#4A4A4A] font-medium">
                  Sarah Brennan, Founder & CEO, ChapterTwo · Bethesda, MD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-center text-[#111111] mb-10 sm:mb-16">
            Why Americans trust ChapterTwo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
              <Lock className="mx-auto mb-2 sm:mb-3 text-[#B5294E]" size={32} />
              <h3 className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] mb-1 sm:mb-2">
                100% Private
              </h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A]">
                Your conversations stay between you and your companion
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
              <Shield className="mx-auto mb-2 sm:mb-3 text-[#B5294E]" size={32} />
              <h3 className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] mb-1 sm:mb-2">
                Background-Checked
              </h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A]">
                Every companion is carefully vetted for your safety
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
              <Phone className="mx-auto mb-2 sm:mb-3 text-[#B5294E]" size={32} />
              <h3 className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] mb-1 sm:mb-2">
                Phone-First
              </h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A]">
                No apps or computers — just your phone
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
              <DollarSign className="mx-auto mb-2 sm:mb-3 text-[#B5294E]" size={32} />
              <h3 className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] mb-1 sm:mb-2">
                Always Free
              </h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A]">
                No hidden costs, no credit card required
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
              <MapPin className="mx-auto mb-2 sm:mb-3 text-[#B5294E]" size={32} />
              <h3 className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] mb-1 sm:mb-2">
                US-Based Team
              </h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A]">
                Real Americans who understand your experience
              </p>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
              <Users className="mx-auto mb-2 sm:mb-3 text-[#B5294E]" size={32} />
              <h3 className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] mb-1 sm:mb-2">
                No Commitment
              </h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A]">
                Connect when you want, pause anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#B5294E] to-[#7D1A35] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-12 text-white">
            <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-center mb-8 sm:mb-10">
              Our Promise to You
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <Heart className="flex-shrink-0 mt-1 text-[#FAD4E0]" size={20} />
                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.6]">
                  We will never pressure you into anything.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Heart className="flex-shrink-0 mt-1 text-[#FAD4E0]" size={20} />
                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.6]">
                  A real human will always be available by phone.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Heart className="flex-shrink-0 mt-1 text-[#FAD4E0]" size={20} />
                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.6]">
                  Your privacy and dignity come first, always.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Heart className="flex-shrink-0 mt-1 text-[#FAD4E0]" size={20} />
                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.6]">
                  We'll take the time to find the right match for you.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Heart className="flex-shrink-0 mt-1 text-[#FAD4E0]" size={20} />
                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.6]">
                  If something doesn't feel right, we'll make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-center text-[#111111] mb-2 sm:mb-3">
            Real stories from real Americans
          </h2>
          <p className="text-center text-[0.95rem] sm:text-[1.05rem] text-[#4A4A4A] mb-10 sm:mb-16">
            Ages 60–85 · From all across the United States
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 shadow-md">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                ))}
              </div>
              <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.7] text-[#111111] mb-5 sm:mb-6">
                <span className="text-[2rem] sm:text-[2.5rem] leading-[0] text-[#B5294E] font-['Georgia',serif]">"</span>
                After my husband passed, I didn't think I'd ever find someone who understood. My companion checks in every week. She gets it. I'm not alone anymore.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#B5294E] flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                  MT
                </div>
                <div>
                  <div className="font-medium text-[#111111] text-[0.9rem] sm:text-[0.95rem]">Margaret T., 68</div>
                  <div className="text-[0.8rem] sm:text-[0.875rem] text-[#4A4A4A]">Columbus, OH</div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 shadow-md">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                ))}
              </div>
              <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.7] text-[#111111] mb-5 sm:mb-6">
                <span className="text-[2rem] sm:text-[2.5rem] leading-[0] text-[#B5294E] font-['Georgia',serif]">"</span>
                I was skeptical at first. But now I look forward to Tuesday mornings when Bill calls. We talk about everything — baseball, our grandkids, the weather. It's like having a friend again.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#B5294E] flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                  RH
                </div>
                <div>
                  <div className="font-medium text-[#111111] text-[0.9rem] sm:text-[0.95rem]">Robert H., 76</div>
                  <div className="text-[0.8rem] sm:text-[0.875rem] text-[#4A4A4A]">Portland, OR</div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFAF8] border-2 border-[#FAD4E0] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 shadow-md">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                ))}
              </div>
              <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.7] text-[#111111] mb-5 sm:mb-6">
                <span className="text-[2rem] sm:text-[2.5rem] leading-[0] text-[#B5294E] font-['Georgia',serif]">"</span>
                Moving to Florida away from my children was harder than I expected. ChapterTwo gave me someone to talk to who actually listens. No pressure, no judgment. Just kindness.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#B5294E] flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                  DW
                </div>
                <div>
                  <div className="font-medium text-[#111111] text-[0.9rem] sm:text-[0.95rem]">Dorothy W., 71</div>
                  <div className="text-[0.8rem] sm:text-[0.875rem] text-[#4A4A4A]">Tampa, FL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-center text-[#111111] mb-2 sm:mb-3">
            Common questions
          </h2>
          <p className="text-center text-[0.9rem] sm:text-[1rem] text-[#4A4A4A] mb-8 sm:mb-12">
            Call us at <a href="tel:878882492" className="text-[#B5294E] hover:underline font-medium">878882492</a> if you don't see yours.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: 'Do I need to know how to use a computer?',
                a: 'Not at all. ChapterTwo works entirely over the phone. If you can answer a phone call, you can use ChapterTwo. No apps, no accounts, no technology skills needed.',
              },
              {
                q: "Is this safe? How do I know who I'm talking to?",
                a: 'Every companion goes through a thorough background check before joining ChapterTwo. Our team personally interviews and trains each companion. Your safety and comfort are our top priorities.',
              },
              {
                q: "What if I don't like my match?",
                a: "Simply let us know, and we'll find you a different companion at no charge. There's no pressure to continue if it doesn't feel right. We want you to feel comfortable and connected.",
              },
              {
                q: 'How much does this cost?',
                a: 'ChapterTwo is completely free. There are no hidden fees, no credit card required, and no catch. We believe everyone deserves companionship.',
              },
              {
                q: 'How often will my companion call?',
                a: "That's entirely up to you. Some members talk weekly, others a few times a month. You set the pace that feels comfortable for you. There's no obligation or schedule you have to follow.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border-2 border-[#FAD4E0] rounded-[14px] sm:rounded-[16px] overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#FFFAF8] transition-colors"
                >
                  <span className="font-['Georgia',serif] text-[1.05rem] sm:text-[1.15rem] text-[#111111] pr-3 sm:pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 text-[#B5294E] transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    size={22}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.6] text-[#4A4A4A]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Families */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[3rem] sm:text-[4rem] mb-4 sm:mb-6">👨‍👩‍👧</div>
          <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-[#111111] mb-4 sm:mb-6 px-4">
            Helping a parent or loved one?
          </h2>
          <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.7] text-[#4A4A4A] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            We understand how hard it can be to watch someone you love experience loneliness. Our team is here to answer your questions and help you support your loved one through this process.
          </p>
          <CTAButton variant="ghost" href="tel:878882492">
            Call us: 878882492
          </CTAButton>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-[#B5294E] to-[#7D1A35] py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Georgia',serif] text-[1.75rem] sm:text-[2.25rem] text-white mb-3 sm:mb-4 px-4">
            Ready to start your next chapter?
          </h2>
          <p className="text-[1rem] sm:text-[1.125rem] text-white/90 mb-8 sm:mb-10 px-4">
            It takes strength to reach out. We're so glad you're here.
          </p>
          <div className="px-4 mb-8 sm:mb-12">
            <CTAButton variant="secondary" to="/onboarding" className="bg-white text-[#B5294E] hover:bg-[#FFFAF8] w-full sm:w-auto">
              Connect on a Call — It's Free
            </CTAButton>
          </div>
          <p className="text-white/70 text-[0.85rem] sm:text-[0.9rem] px-4">
            ChapterTwo Inc., 4800 Montgomery Lane, Suite 400, Bethesda, MD 20814
          </p>
        </div>
      </section>
      </div>
    </>
  );
}
