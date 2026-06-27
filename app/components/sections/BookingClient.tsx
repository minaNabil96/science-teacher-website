'use client';

import {useMemo, useState} from 'react';
import {format, addDays} from 'date-fns';
import {toast} from 'sonner';
import Button from '../ui/Button';

export default function BookingClient({labels}: {labels: Record<string, string>}) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('individual');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dates = useMemo(() => Array.from({length: 10}).map((_, i) => format(addDays(new Date(), i + 1), 'yyyy-MM-dd')), []);
  const times = ['04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM'];
  const prices: Record<string, string> = {
    individual: labels.priceIndividual,
    group: labels.priceGroup,
    online: labels.priceOnline,
    inperson: labels.priceInperson
  };

  function confirm() {
    toast.success(labels.confirmed);
    setStep(1);
  }

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">
      <div className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:grid sm:grid-cols-5 sm:gap-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className={`rounded-full px-3 py-1.5 text-center text-xs font-black sm:px-4 sm:py-2 sm:text-sm ${step >= s ? 'bg-chemistry-purple text-white' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'}`}>
            {labels[`step${s}`]}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h3 className="mb-4 text-xl font-black text-slate-900 dark:text-white sm:mb-5 sm:text-2xl">{labels.chooseType}</h3>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {['individual', 'group', 'online', 'inperson'].map((item) => (
              <button key={item} onClick={() => setType(item)} className={`rounded-2xl border p-5 text-start transition sm:rounded-3xl sm:p-6 ${type === item ? 'border-chemistry-purple bg-chemistry-purple/5 ring-2 ring-chemistry-purple dark:bg-chemistry-purple/10' : 'border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-700'}`}>
                <span className="block text-lg font-black text-slate-900 dark:text-white sm:text-xl">{labels[item]}</span>
                <span className="mt-1 block text-sm font-bold text-chemistry-teal sm:mt-2 sm:text-base">{prices[item]}</span>
              </button>
            ))}
          </div>
          <Button onClick={() => setStep(2)} className="mt-5 sm:mt-6">{labels.next}</Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="mb-4 text-xl font-black text-slate-900 dark:text-white sm:mb-5 sm:text-2xl">{labels.chooseDate}</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
            {dates.map((d) => (
              <button key={d} onClick={() => setDate(d)} className={`rounded-xl p-3 text-xs font-bold sm:rounded-2xl sm:p-4 sm:text-sm ${date === d ? 'bg-chemistry-purple text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>{d}</button>
            ))}
          </div>
          <div className="mt-5 flex gap-3 sm:mt-6">
            <Button variant="outline" onClick={() => setStep(1)}>{labels.back}</Button>
            <Button disabled={!date} onClick={() => setStep(3)}>{labels.next}</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="mb-4 text-xl font-black text-slate-900 dark:text-white sm:mb-5 sm:text-2xl">{labels.chooseTime}</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {times.map((slot) => (
              <button key={slot} onClick={() => setTime(slot)} className={`rounded-xl p-3 text-xs font-bold sm:rounded-2xl sm:p-4 sm:text-sm ${time === slot ? 'bg-chemistry-purple text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>{slot}</button>
            ))}
          </div>
          <div className="mt-5 flex gap-3 sm:mt-6">
            <Button variant="outline" onClick={() => setStep(2)}>{labels.back}</Button>
            <Button disabled={!time} onClick={() => setStep(4)}>{labels.next}</Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="mb-4 text-xl font-black text-slate-900 dark:text-white sm:mb-5 sm:text-2xl">{labels.studentDetails}</h3>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {[labels.studentName, labels.parentPhone, labels.grade, labels.notes].map((placeholder) => (
              <input key={placeholder} placeholder={placeholder} className="min-h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none focus:border-chemistry-purple dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-slate-400 sm:min-h-12 sm:rounded-2xl sm:text-base" />
            ))}
          </div>
          <div className="mt-5 flex gap-3 sm:mt-6">
            <Button variant="outline" onClick={() => setStep(3)}>{labels.back}</Button>
            <Button onClick={() => setStep(5)}>{labels.next}</Button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="mb-4 text-xl font-black text-slate-900 dark:text-white sm:mb-5 sm:text-2xl">{labels.confirm}</h3>
          <div className="rounded-2xl bg-slate-50 p-5 leading-8 dark:bg-slate-700 sm:rounded-3xl sm:p-6 sm:leading-9">
            <p className="text-sm text-slate-900 dark:text-white sm:text-base"><b>{labels.typeLabel}:</b> {labels[type]}</p>
            <p className="text-sm text-slate-900 dark:text-white sm:text-base"><b>{labels.dateLabel}:</b> {date}</p>
            <p className="text-sm text-slate-900 dark:text-white sm:text-base"><b>{labels.timeLabel}:</b> {time}</p>
            <p className="text-sm text-slate-900 dark:text-white sm:text-base"><b>{labels.priceLabel}:</b> {prices[type]}</p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-sm">{labels.payment}</p>
          </div>
          <div className="mt-5 flex gap-3 sm:mt-6">
            <Button variant="outline" onClick={() => setStep(4)}>{labels.back}</Button>
            <Button onClick={confirm}>{labels.confirmBooking}</Button>
          </div>
        </div>
      )}
    </div>
  );
}