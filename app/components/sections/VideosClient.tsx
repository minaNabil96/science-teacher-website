'use client';

import dynamic from 'next/dynamic';
import {useState} from 'react';
import {PlayCircle} from 'lucide-react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false});

const videos = [
  '/videos/test-science.mp4',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  'https://www.youtube.com/watch?v=ScMzIvxBSi4'
];

export default function VideosClient({labels}: {labels: {featured: string; topics: string[]}}) {
  const [current, setCurrent] = useState(videos[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_.8fr] lg:gap-8">
      <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-xl sm:rounded-3xl">
        <div className="aspect-video">
          <ReactPlayer url={current} controls width="100%" height="100%" />
        </div>
        <div className="p-4 text-white sm:p-5">
          <p className="text-sm font-black sm:text-base">{labels.featured}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
        {videos.map((video, i) => (
          <button
            key={video}
            onClick={() => setCurrent(video)}
            className={`flex items-center gap-3 rounded-2xl border bg-white p-3 text-start shadow-sm transition hover:-translate-y-1 dark:bg-slate-800 sm:gap-4 sm:rounded-3xl sm:p-4 ${current === video ? 'border-chemistry-purple ring-2 ring-chemistry-purple' : 'border-slate-200 dark:border-slate-700'}`}
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-slate-950 text-white sm:size-16 sm:rounded-2xl">
              <PlayCircle size={24} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-black text-slate-900 dark:text-white sm:text-sm">{labels.topics[i]}</span>
              <span className="mt-0.5 block text-[10px] text-slate-500 dark:text-slate-400 sm:mt-1 sm:text-xs">30-60 sec preview</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}