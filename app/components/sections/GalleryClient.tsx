'use client';

import Image from 'next/image';
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Download, Share2, X} from 'lucide-react';
import {toast} from 'sonner';

const images = Array.from({length: 12}).map((_, i) => ({
  src: `/images/gallery/photo-${(i % 6) + 1}.jpg`,
  category: ['classroom', 'lab', 'events', 'success'][i % 4],
  caption: `Science moment ${i + 1}`
}));

export default function GalleryClient({labels}: {labels: Record<string, string>}) {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState<(typeof images)[number] | null>(null);
  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
        {['all', 'classroom', 'lab', 'events', 'success'].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`rounded-full px-4 py-2 text-xs font-bold transition sm:px-5 sm:py-3 sm:text-sm ${filter === cat ? 'bg-chemistry-purple text-white' : 'border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>
            {labels[cat]}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-2 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4 xl:gap-5">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.button
              layout
              key={img.src + i}
              onClick={() => setActive(img)}
              initial={{opacity: 0, scale: 0.96}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.96}}
              className="group relative mb-3 block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:mb-5 sm:rounded-3xl"
            >
              <Image src={img.src} alt={img.caption} width={700} height={500 + (i % 3) * 120} className="h-auto w-full transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-end bg-gradient-to-t from-black/70 to-transparent p-3 text-start opacity-0 transition group-hover:opacity-100 sm:p-5">
                <span className="text-xs font-bold text-white sm:text-sm">{img.caption}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-3 sm:p-4" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <button onClick={() => setActive(null)} className="absolute end-3 top-3 grid size-10 place-items-center rounded-full bg-white text-slate-950 sm:end-5 sm:top-5 sm:size-12">
              <X />
            </button>
            <div className="max-w-5xl overflow-hidden rounded-2xl bg-white dark:bg-slate-800 sm:rounded-3xl">
              <Image src={active.src} alt={active.caption} width={1200} height={800} className="max-h-[75vh] w-full object-contain" />
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:gap-3 sm:p-4">
                <p className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">{active.caption}</p>
                <div className="flex gap-2">
                  <a href={active.src} download className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-300 sm:px-4 sm:py-2 sm:text-sm"><Download className="me-1.5 inline size-3 sm:me-2 sm:size-4" />{labels.download}</a>
                  <button onClick={() => toast.success(labels.shared)} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-300 sm:px-4 sm:py-2 sm:text-sm"><Share2 className="me-1.5 inline size-3 sm:me-2 sm:size-4" />{labels.share}</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}