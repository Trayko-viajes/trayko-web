import type { FormEvent } from 'react';
import type { SearchForm } from './types';

type Props = {
  value: SearchForm;
  onChange: (field: keyof SearchForm, value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
};

const IconOrigin = () => (
  <svg className="w-4 h-4 shrink-0 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="3" />
    <path strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

const IconDestination = () => (
  <svg className="w-4 h-4 shrink-0 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.66 0 3-1.34 3-3S13.66 5 12 5 9 6.34 9 8s1.34 3 3 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
  </svg>
);

const IconCalendar = () => (
  <svg className="w-4 h-4 shrink-0 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export function HeroSearchBar({ value, onChange, onSubmit, isLoading }: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center bg-white rounded-3xl sm:rounded-full border border-outline-variant/30 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] p-3 sm:p-1.5 sm:pl-2">
        <label className="flex items-center gap-2.5 flex-1 min-w-0 px-3 py-2.5 sm:py-2 sm:border-r border-outline-variant/25">
          <IconOrigin />
          <input
            type="text"
            placeholder="Desde"
            value={value.origin}
            onChange={(e) => onChange('origin', e.target.value)}
            className="w-full min-w-0 bg-transparent text-sm font-medium text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none"
            autoComplete="off"
          />
        </label>

        <label className="flex items-center gap-2.5 flex-1 min-w-0 px-3 py-2.5 sm:py-2 sm:border-r border-outline-variant/25">
          <IconDestination />
          <input
            type="text"
            placeholder="Hacia"
            value={value.destination}
            onChange={(e) => onChange('destination', e.target.value)}
            className="w-full min-w-0 bg-transparent text-sm font-medium text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none"
            autoComplete="off"
          />
        </label>

        <label className="flex items-center gap-2.5 flex-1 min-w-0 px-3 py-2.5 sm:py-2 sm:pr-1">
          <IconCalendar />
          <input
            type="date"
            placeholder="Fecha"
            value={value.date}
            onChange={(e) => onChange('date', e.target.value)}
            className="w-full min-w-0 bg-transparent text-sm font-medium text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none [color-scheme:light]"
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-bold text-sm px-6 py-3.5 sm:py-3 min-h-[48px] rounded-2xl sm:rounded-full hover:bg-primary transition-colors disabled:opacity-70 shadow-md shadow-primary-container/20"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Buscar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
