import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { CTAButton } from '../components/CTAButton';
import { Check, Lock, Users, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

export function ContactPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && phone && email) {
      // Create hidden iframe for submission
      let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden_iframe';
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Create and submit form
      const form = document.createElement('form');
      form.method = 'GET';
      form.action = 'https://script.google.com/macros/s/AKfycbz8_UWJpgqh_f7FXia1WlZwrBzx8dBkWfNOwAol32Bn-MsArYZTW07SRsC1ZqsTN5S70g/exec';
      form.target = 'hidden_iframe';
      form.style.display = 'none';

      const fields = [
        { name: 'firstName', value: firstName },
        { name: 'lastName', value: lastName },
        { name: 'phone', value: phone },
        { name: 'email', value: email }
      ];

      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Navigate after short delay
      setTimeout(() => {
        navigate('/confirmation', { state: { firstName } });
      }, 500);
    }
  };

  return (
    <>
      <SEO
        title="Get Started - ChapterTwo Companion Service"
        description="Connect with a caring companion today. Fill in your details and we'll call you personally within 24 hours. No credit card, 100% free and private."
        keywords="contact companion service, sign up senior companion, connect with companion, request companion call"
      />
      <div className="bg-[#FFFAF8] min-h-[calc(100vh-5rem)] py-12 sm:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Phone Icon */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#FAD4E0] rounded-full">
            <Phone className="text-[#B5294E]" size={40} />
          </div>
        </div>

        {/* Header */}
        <h2 className="font-['Georgia',serif] text-[1.6rem] sm:text-[2rem] text-center text-[#111111] mb-2 sm:mb-3 px-4">
          Let's get you connected
        </h2>
        <p className="text-center text-[0.95rem] sm:text-[1.05rem] text-[#4A4A4A] mb-6 sm:mb-8 px-4">
          Fill in the details below and we'll call you personally.
        </p>

        {/* Quote Card */}
        <div className="bg-gradient-to-br from-[#FAD4E0] to-[#FFFAF8] border-2 border-[#B5294E] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 mb-8 sm:mb-10">
          <p className="font-['Georgia',serif] text-[0.95rem] sm:text-[1.05rem] italic text-[#111111] leading-[1.6]">
            "It takes strength to reach out. We're truly glad you're here."
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
          <div>
            <label htmlFor="firstName" className="block text-[0.95rem] sm:text-[1.05rem] font-medium text-[#111111] mb-2">
              First name <span className="text-[#B5294E]">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Your first name"
              className="w-full px-4 sm:px-5 py-4 sm:py-5 text-[0.95rem] sm:text-[1.05rem] border-2 border-[#FAD4E0] rounded-[12px] sm:rounded-[14px] bg-white focus:border-[#B5294E] focus:outline-none transition-colors min-h-[60px]"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-[0.95rem] sm:text-[1.05rem] font-medium text-[#111111] mb-2">
              Last name <span className="text-[#B5294E]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Your last name"
              className="w-full px-4 sm:px-5 py-4 sm:py-5 text-[0.95rem] sm:text-[1.05rem] border-2 border-[#FAD4E0] rounded-[12px] sm:rounded-[14px] bg-white focus:border-[#B5294E] focus:outline-none transition-colors min-h-[60px]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[0.95rem] sm:text-[1.05rem] font-medium text-[#111111] mb-2">
              Email address <span className="text-[#B5294E]">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 sm:px-5 py-4 sm:py-5 text-[0.95rem] sm:text-[1.05rem] border-2 border-[#FAD4E0] rounded-[12px] sm:rounded-[14px] bg-white focus:border-[#B5294E] focus:outline-none transition-colors min-h-[60px]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[0.95rem] sm:text-[1.05rem] font-medium text-[#111111] mb-2">
              Phone Number <span className="text-[#B5294E]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(555) 000-0000"
              className="w-full px-4 sm:px-5 py-4 sm:py-5 text-[0.95rem] sm:text-[1.05rem] border-2 border-[#FAD4E0] rounded-[12px] sm:rounded-[14px] bg-white focus:border-[#B5294E] focus:outline-none transition-colors min-h-[60px]"
            />
          </div>

          <CTAButton type="submit" className="w-full text-[1rem] sm:text-[1.05rem]">
            Connect Me Now
          </CTAButton>

          {/* Reassurance Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-[#E8F5E9] rounded-full">
              <Check className="text-green-700 flex-shrink-0" size={16} />
              <span className="text-[0.85rem] sm:text-[0.9rem] text-[#111111]">No credit card</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-[#E8F5E9] rounded-full">
              <Lock className="text-[#B5294E] flex-shrink-0" size={16} />
              <span className="text-[0.85rem] sm:text-[0.9rem] text-[#111111]">100% private</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-[#E8F5E9] rounded-full">
              <Users className="text-[#B5294E] flex-shrink-0" size={16} />
              <span className="text-[0.85rem] sm:text-[0.9rem] text-[#111111]">No commitment</span>
            </div>
          </div>
        </form>

        {/* Amber Secondary Box */}
        <div className="bg-[#FFF3E0] border-2 border-[#FFA726] rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 text-center">
          <p className="text-[0.95rem] sm:text-[1rem] text-[#111111] mb-3">
            <strong>Rather call us yourself?</strong>
          </p>
          <a
            href="tel:1-800-555-0192"
            className="inline-flex items-center gap-2 text-[#B5294E] font-medium text-[1rem] sm:text-[1.05rem] hover:underline"
          >
            <Phone size={20} className="flex-shrink-0" />
            1-800-555-0192
          </a>
          <p className="text-[0.85rem] sm:text-[0.9rem] text-[#4A4A4A] mt-2">
            Mon–Fri · 9am–6pm Eastern
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
