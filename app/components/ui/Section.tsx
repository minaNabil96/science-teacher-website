import {cn} from './cn';

export function Section({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-20 sm:py-24', className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 font-bold text-chemistry-teal">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight dark:text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-8 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}