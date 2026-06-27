'use client';

import useEmblaCarousel from 'embla-carousel-react';
import {useCallback, useState} from 'react';
import {Star, ChevronLeft, ChevronRight, PenLine} from 'lucide-react';
import {motion} from 'framer-motion';
import {toast} from 'sonner';

const reviews = [
  {name: 'Mona Ahmed', relation: 'Parent', rating: 5, year: 'Grade 12', quote: 'My son finally understood science and achieved top marks.'},
  {name: 'Ahmed Samir', relation: 'Parent', rating: 5, year: 'Grade 11', quote: 'Clear explanation, regular follow-up, and a very respectful teacher.'},
  {name: 'Sara Ali', relation: 'Parent', rating: 5, year: 'Grade 10', quote: 'The lab-style examples made science exciting for my daughter.'},
  {name: 'Hany Mostafa', relation: 'Parent', rating: 4, year: 'Grade 12', quote: 'Excellent revision plan before exams and strong parent communication.'}
];

export default function TestimonialsClient({labels}: {labels: Record<string, string>}) {
  const [emblaRef, embla] = useEmblaCarousel({loop: true, align: 'start'});
  const [filter, setFilter] = useState('all');
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const data = filter === 'all' ? reviews : reviews.filter((r) => r.rating === Number(filter));

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8 sm:gap-3">
        {['all', '5', '4'].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-xs font-bold sm:px-5 sm:py-3 sm:text-sm ${filter === f ? 'bg-chemistry-purple text-white' : 'border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>
            {f === 'all' ? labels.all : `${f} ${labels.stars}`}
          </button>
        ))}
        <button onClick={() => toast.success(labels.reviewToast)} className="rounded-full bg-chemistry-teal px-4 py-2 text-xs font-bold text-white sm:px-5 sm:py-3 sm:text-sm">
          <PenLine className="me-1.5 inline size-3 sm:me-2 sm:size-4" /> {labels.write}
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map((review, i) => (
            <motion.div
              key={review.name}
              className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%] md:px-3 lg:flex-[0_0_33.333%]"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.08}}
            >
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:rounded-3xl sm:p-7">
                <div className="mb-3 flex text-amber-400 sm:mb-5">
                  {Array.from({length: 5}).map((_, s) => <Star key={s} className={`size-4 sm:size-5 ${s < review.rating ? 'fill-current' : ''}`} />)}
                </div>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">"{review.quote}"</p>
                <div className="mt-4 flex items-center gap-3 sm:mt-6">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-chemistry-purple text-sm text-white font-black sm:size-12 sm:text-base">{review.name[0]}</div>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-slate-900 dark:text-white sm:text-base">{review.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">{review.relation} · {review.year}</p>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3 sm:mt-8">
        <button onClick={scrollPrev} className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 sm:size-12"><ChevronLeft className="size-4 text-slate-700 dark:text-slate-300 sm:size-5" /></button>
        <button onClick={scrollNext} className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 sm:size-12"><ChevronRight className="size-4 text-slate-700 dark:text-slate-300 sm:size-5" /></button>
      </div>
    </>
  );
}