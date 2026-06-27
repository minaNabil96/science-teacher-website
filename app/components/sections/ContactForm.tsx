'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {toast} from 'sonner';
import Button from '../ui/Button';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  grade: z.string().min(1),
  subject: z.string().min(3),
  message: z.string().min(10),
  website: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm({labels}: {labels: Record<string, string>}) {
  const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  async function onSubmit(data: FormValues) {
    if (data.website) return;
    await new Promise((res) => setTimeout(res, 900));
    toast.success(labels.success);
    reset();
  }

  const input = 'min-h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-chemistry-purple focus:ring-2 focus:ring-chemistry-purple/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white sm:min-h-12 sm:rounded-2xl sm:text-base';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:gap-4 sm:rounded-3xl sm:p-6">
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {(['name', 'email', 'phone', 'grade'] as const).map((field) => (
          <label key={field} className="grid gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 sm:gap-2 sm:text-base">
            {labels[field]}
            <input className={input} {...register(field)} />
            {errors[field] && <span className="text-xs text-red-500 sm:text-sm">{labels.invalid}</span>}
          </label>
        ))}
      </div>
      <label className="grid gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 sm:gap-2 sm:text-base">
        {labels.subject}
        <input className={input} {...register('subject')} />
        {errors.subject && <span className="text-xs text-red-500 sm:text-sm">{labels.invalid}</span>}
      </label>
      <label className="grid gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 sm:gap-2 sm:text-base">
        {labels.message}
        <textarea rows={4} className="rounded-xl border border-slate-300 bg-white p-4 text-sm outline-none transition focus:border-chemistry-purple focus:ring-2 focus:ring-chemistry-purple/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white sm:rounded-2xl sm:text-base sm:rows-5" {...register('message')} />
        {errors.message && <span className="text-xs text-red-500 sm:text-sm">{labels.invalid}</span>}
      </label>
      <label className="grid gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 sm:gap-2 sm:text-base">
        {labels.file}
        <input type="file" className={input} />
      </label>
      <Button disabled={isSubmitting}>{isSubmitting ? labels.sending : labels.send}</Button>
    </form>
  );
}