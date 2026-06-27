'use client';

import useEmblaCarousel from 'embla-carousel-react';
import {useCallback, useState} from 'react';
import {Star, ChevronLeft, ChevronRight, PenLine} from 'lucide-react';
import {motion} from 'framer-motion';
import {toast} from 'sonner';

const reviews = [
  {name: 'أحمد عبد المجيد', nameEn: 'Ahmed Abdelmegid', relation: 'Parent', rating: 5, year: 'Grade 12', quoteAr: 'بنتي كانت بتخاف من العلوم وبعد ما بدأت مع مس ميرنا بقت عايزاه كل يوم. الدرجات اتحسنت جدًا وشكرًا لمس ميرنا على صبرها وشرحها الحلو.', quoteEn: 'My daughter used to fear science, but after starting with Mrs. Mirna she loves it. Her grades improved a lot.'},
  {name: 'إيمان سليمان', nameEn: 'Eman Suleiman', relation: 'Parent', rating: 5, year: 'Grade 10', quoteAr: 'والله مس ميرنا زي الفل، ابني دلوقتي بيشرحلي الدرس قبل ما يراجع! تابعت معاه من الأول وفرقت معاه قوي.', quoteEn: 'Mrs. Mirna is amazing. Now my son explains the lesson to me before reviewing. She followed up from day one and it made a huge difference.'},
  {name: 'مصطفى كامل', nameEn: 'Mostafa Kamel', relation: 'Parent', rating: 5, year: 'Grade 11', quoteAr: 'أسلوبها في الشرح تحفة، بتدخل ب أمثلة من الحياة واللي خلاني أثق فيها إنها دايمًا بتتابع معايا عبر واتساب.', quoteEn: 'Her teaching style is brilliant. She uses real-life examples and she always follows up via WhatsApp, which built my trust.'},
  {name: 'دعاء محمود', nameEn: 'Doaa Mahmoud', relation: 'Parent', rating: 4, year: 'Grade 9', quoteAr: 'أختي الصغيرة كانت واقعة في مادة العلوم وبعد مس ميرنا بقى عندها ثقة في نفسها. الشرح مبسط ومفهوم.', quoteEn: 'My younger sister was struggling in science, but Mrs. Mirna gave her confidence back. The explanations are simple and clear.'},
  {name: 'نادر جمال', nameEn: 'Nader Gamal', relation: 'Parent', rating: 5, year: 'Grade 12', quoteAr: 'أحسن حاجة في مس ميرنا إنها مش بس بتشرح، لا دي بتأسس الطالب. في ثانوية عامة كان ابني محتاج حد يفهمه مش يحفظه وده اللي حصل.', quoteEn: 'The best thing about Mrs. Mirna is she builds the student foundation, not just explains. During high school my son needed understanding, not memorization, and that is exactly what happened.'},
  {name: 'هند رشدي', nameEn: 'Hend Roshdy', relation: 'Parent', rating: 5, year: 'Grade 10', quoteAr: 'مس ميرنا بتفهم نفسية الطالب قوي، بتعرف إمتى تشد وإمتى تخفف. ابني بقى مستني الدرس بشغف.', quoteEn: 'Mrs. Mirna understands the student psychology well. She knows when to push and when to ease up. My son now waits eagerly for the lesson.'}
];

export default function TestimonialsClient({labels, locale}: {labels: Record<string, string>; locale: string}) {
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
          {data.map((review, i) => {
            const displayName = locale === 'ar' ? review.name : review.nameEn;
            const quote = locale === 'ar' ? review.quoteAr : review.quoteEn;
            return (
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
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">"{quote}"</p>
                  <div className="mt-4 flex items-center gap-3 sm:mt-6">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-chemistry-purple text-sm text-white font-black sm:size-12 sm:text-base">{displayName[0]}</div>
                    <div className="min-w-0">
                      <p className="text-sm font-black text-slate-900 dark:text-white sm:text-base">{displayName}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">{review.relation} · {review.year}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3 sm:mt-8">
        <button onClick={scrollPrev} className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 sm:size-12"><ChevronLeft className="size-4 text-slate-700 dark:text-slate-300 sm:size-5" /></button>
        <button onClick={scrollNext} className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 sm:size-12"><ChevronRight className="size-4 text-slate-700 dark:text-slate-300 sm:size-5" /></button>
      </div>
    </>
  );
}