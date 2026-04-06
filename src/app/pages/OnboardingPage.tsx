import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CTAButton } from '../components/CTAButton';
import { SEO } from '../components/SEO';
import { saveOnboardingPayload } from '../lib/onboarding';

const questions = [
  {
    id: 1,
    question: "How long have you been feeling lonely?",
    options: [
      "A few weeks",
      "Several months",
      "Over a year",
      "Most of my life"
    ]
  },
  {
    id: 2,
    question: "What does loneliness feel like for you?",
    options: [
      "No one to talk to after a long day",
      "Feeling invisible in social situations",
      "Lost my close friends over time",
      "Never really had deep connections"
    ]
  },
  {
    id: 3,
    question: "What kind of companion are you hoping for?",
    subtitle: "We'll use this to find your best match.",
    options: [
      "A daily chat buddy",
      "Someone to do activities with",
      "Deep emotional support",
      "A mix of everything"
    ]
  },
  {
    id: 4,
    question: "What's held you back from connecting?",
    options: [
      "Anxiety around new people",
      "Don't know where to start",
      "Past connections hurt me",
      "Just haven't found the right fit"
    ]
  }
];

export function OnboardingPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setAnswers({ ...answers, [currentQuestion]: option });

    // Automatically move to next question after selection
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(answers[currentQuestion + 1] || '');
      } else {
        const completedAnswers = {
          ...answers,
          [currentQuestion]: option,
        };

        saveOnboardingPayload({
          answers: questions.map((entry, index) => ({
            question: entry.question,
            answer: completedAnswers[index] || '',
          })),
        });

        // All questions answered, go to contact form
        navigate('/contact');
      }
    }, 400);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <>
      <SEO
        title="Tell Us About You - ChapterTwo"
        description="Help us find your perfect companion match. Share what you're looking for in a meaningful connection."
        keywords="companion matching, personalized companion service, find companion"
      />
      <div className="bg-[#FFFAF8] min-h-[calc(100vh-5rem)] py-8 sm:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex gap-1 sm:gap-2 mb-3">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 sm:h-2 flex-1 rounded-full transition-all duration-300 ${
                    index <= currentQuestion ? 'bg-[#B5294E]' : 'bg-[#FAD4E0]'
                  }`}
                />
              ))}
            </div>
            <p className="text-[0.85rem] sm:text-[0.95rem] text-[#4A4A4A]">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Question */}
          <div className="mb-8 sm:mb-10">
            <h1 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2.2rem] leading-[1.2] text-[#111111] mb-3 sm:mb-4">
              {question.question}
            </h1>
            {question.subtitle && (
              <p className="text-[0.95rem] sm:text-[1.05rem] text-[#4A4A4A]">
                {question.subtitle}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left px-5 sm:px-6 py-4 sm:py-5 text-[0.95rem] sm:text-[1.05rem] border-2 rounded-[12px] sm:rounded-[14px] transition-all duration-200 min-h-[60px] flex items-center ${
                  selectedOption === option
                    ? 'border-[#B5294E] bg-[#FAD4E0] text-[#111111]'
                    : 'border-[#FAD4E0] bg-white text-[#4A4A4A] hover:border-[#B5294E] hover:bg-[#FFFAF8]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Privacy Reassurance */}
          <p className="text-center text-[0.85rem] sm:text-[0.9rem] text-[#9E9E9E] italic">
            Your answers are private and never shared.
          </p>

          {/* Back Button (only show after first question) */}
          {currentQuestion > 0 && (
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  setSelectedOption(answers[currentQuestion - 1] || '');
                }}
                className="text-[0.95rem] sm:text-[1rem] text-[#B5294E] hover:underline"
              >
                ← Go back
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
