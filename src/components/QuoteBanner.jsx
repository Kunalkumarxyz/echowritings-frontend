// src/components/QuoteBanner.jsx
import useQuote from './useQuote.js';

export default function QuoteBanner({ tag = 'inspirational' }) {
  const { quote, loading, error, refresh } = useQuote(tag);

  const content = quote?.content ?? '';
  const author = quote?.author ?? 'EchoWritings';

  return (
    <section className="relative overflow-hidden" aria-label="Quote banner">
      <div className="bg-gradient-to-r from-brand to-amber-400 text-neutral-900">
        <div className="container-px mx-auto py-14">
          <div
            className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center"
            aria-live="polite"
            aria-busy={loading}
          >
            <p className="text-2xl md:text-3xl font-medium leading-snug">
              {loading
                ? 'Fetching a dose of inspiration…'
                : error
                ? 'Could not load quote.'
                : `“${content}”`}
            </p>

            <p className="mt-4 font-semibold">
              {!loading && !error ? `— ${author}` : ''}
            </p>

            <button
              onClick={refresh}
              aria-label="Load new quote"
              disabled={loading}
              className={`
                mt-6 px-5 py-2.5 inline-flex items-center gap-3
                ${loading ? 'opacity-70 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'}
                text-white rounded-xl shadow-sm focus:outline-none focus:ring-0 active:scale-[0.98] transition
              `}
            >
              <span className="text-lg opacity-95">↻</span>
              <span className="font-medium">New Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
