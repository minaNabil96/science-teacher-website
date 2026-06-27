'use client';

export default function ErrorPage({reset}: {reset: () => void}) {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 p-6 dark:bg-slate-900">
      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Something went wrong</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Please try again.</p>
        <button onClick={reset} className="mt-6 rounded-full bg-chemistry-purple px-6 py-3 font-semibold text-white">
          Retry
        </button>
      </div>
    </main>
  );
}