import { Link } from 'react-router';
import { Phone } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
}

export function CTAButton({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-3 px-8 py-5 rounded-[18px] font-medium transition-all shadow-lg hover:shadow-xl active:scale-[0.98] min-h-[60px]';

  const variantClasses = {
    primary: 'bg-[#B5294E] text-white hover:bg-[#7D1A35]',
    secondary: 'bg-white text-[#B5294E] border-2 border-[#B5294E] hover:bg-[#FAD4E0]',
    ghost: 'border-2 border-[#B5294E] text-[#B5294E] bg-transparent hover:bg-[#FAD4E0]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <Phone size={20} />
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${classes} no-underline`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${classes} no-underline`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
