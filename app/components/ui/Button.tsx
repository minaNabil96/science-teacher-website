import Link from 'next/link';
import {cn} from './cn';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
};

const variants = {
  primary: 'bg-gradient-to-r from-chemistry-purple to-indigo-700 text-white shadow-lg hover:shadow-glow-light dark:hover:shadow-glow',
  secondary: 'bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10',
  outline: 'border border-slate-300 bg-white text-slate-900 hover:border-chemistry-purple dark:border-slate-600 dark:bg-transparent dark:text-slate-100 dark:hover:border-chemistry-purple'
};

export default function Button({href, variant = 'primary', className, children, ...props}: Props) {
  const classes = cn(
    'focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}