import { useState } from 'react';
import { List, LayoutGrid } from 'lucide-react';

interface AudioObject {
  '@type': string;
  url: string;
  description?: string;
}

interface Performer {
  '@type': string;
  name: string;
  sameAs?: string;
  description?: string;
  image?: string;
  audio?: AudioObject;
}

interface Location {
  '@type': string;
  name: string;
  address?: {
    '@type': string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  geo?: {
    '@type': string;
    latitude: string;
    longitude: string;
  };
}

interface MusicEvent {
  '@type': string;
  name: string;
  image?: string;
  startDate: string;
  endDate?: string;
  duration?: string;
  location: Location;
  performer: Performer[];
  eventAttendanceMode?: string;
  description?: string;
  hidden?: boolean;
}

interface ShowsListProps {
  events: MusicEvent[];
}

const formatDateList = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

const ListView = ({ events }: { events: MusicEvent[] }) => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm8rGeAKDi7Qp9opVj8exc849kJ07VR_-gisO04g_8OOWlscyQCy62TBdjTSmmI2F2oiy249i_u8rD1ulSVZckfuxjcBYzri_I56ygkwkeBuZAILo9IzU4u0cFNHK20e-M0i8sED6QqSgMYjOZzGrV78XqteC0XbbuIdlH4Fei7RXp8quLZakzli6ziu9Yv3y19Zyq_fzv9oeu5cCsLHmyEAA6wHLbEYyPTLt4-ngtUQunoSN7MCgRqN3tONv9ZsAzERePqLyIz9Q')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/80 to-[#131313]"></div>
        <div className="absolute inset-0 bg-grain transition-opacity duration-300 opacity-10"></div>
      </div>

      <div className="relative z-10 pt-24 pb-48 px-6 md:px-16 md:pr-32 max-w-7xl mx-auto min-h-screen flex flex-col">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl text-[#e5e2e1] uppercase mb-4 opacity-90 font-bold tracking-tighter">
            Archive Directory
          </h1>
          <p className="text-base md:text-lg text-[#e9bcba] max-w-xl">
            A chronological record of aural decimation. Raw data extracted from
            the touring history.
          </p>
        </header>

        <div className="flex flex-col gap-0 w-full">
          <div className="flex items-center py-4 px-4 gap-2 border-b border-white/10 opacity-50 mb-2">
            <div className="hidden md:block basis-1/5 text-xs tracking-widest text-[#e9bcba] uppercase font-mono">
              Date
            </div>
            <div className="md:basis-3/5 text-xs tracking-widest text-[#e9bcba] uppercase font-mono">
              Show
            </div>
            <div className="hidden md:block basis-1/5 text-right text-xs tracking-widest text-[#e9bcba] uppercase font-mono">
              Venue
            </div>
          </div>

          {events
            .filter((event) => !event.hidden)
            .map((event, idx) => (
              <div
                key={idx}
                className="group flex flex-col border-b border-white/5 hover:bg-[#2a2a2a]/40 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#ffb3b2]/5 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out z-0 pointer-events-none"></div>

                <div className="flex-col md:flex-row flex gap-1 md:gap-2 md:items-center py-6 px-4 relative z-10">
                  <div className="basis-full md:basis-1/5 text-sm tracking-wider text-[#929090] uppercase font-mono">
                    {formatDateList(event.startDate)}
                    <span className="inline md:hidden">
                      {' '}//{' '}
                      {event.location?.address?.addressLocality ||
                        event.location?.name}
                    </span>
                  </div>
                  <div className="basis-full md:basis-3/5 flex flex-col justify-center">
                    <div className="text-2xl md:text-4xl text-[#e5e2e1] hover:text-[#ffb3b2] transition-colors duration-300 uppercase tracking-tight font-bold">
                      {event.name}
                    </div>
                    <span className="text-xs tracking-wider text-[#e9bcba] uppercase font-mono opacity-80 mt-1">
                      {[...event.performer]
                        .reverse()
                        .map((p) => p.name)
                        .join(' • ')}
                    </span>
                  </div>
                  <div className="hidden md:block basis-full md:basis-1/5 md:text-right text-sm tracking-wider text-[#ffb3b2] uppercase font-mono">
                    {event.location?.name}
                    <br />
                    <span className="text-[#e9bcba] text-[10px] opacity-70 uppercase">
                      {event.location?.address?.addressLocality || 'UNKNOWN'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const PosterView = ({ events }: { events: MusicEvent[] }) => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(circle,_rgba(255,179,178,0.05)_0%,_rgba(19,19,19,0)_70%)] pointer-events-none z-0"></div>

      <div className="relative z-10 pt-24 pb-48 px-6 md:px-16 md:pr-32 max-w-7xl mx-auto min-h-screen">
        <header className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#e5e2e1] mb-2 tracking-tighter uppercase">
            Visual Archive
          </h1>
          <p className="text-base md:text-lg text-[#e9bcba] max-w-xl">
            A curated collection of brutalist tour graphics from the underground
            circuit. High contrast. High distortion.
          </p>
        </header>

        {/* Masonry Layout for Adaptive/Fluid sizing */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {events
            .filter((event) => !event.hidden)
            .map((event, idx) => {
              const fallbacks = [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBCK4CKWg78LSOkRWj3HlVB_LOiMaiWD7uNAO5iH6HVOsHfakVE3jDsHojg7DYBgvsbZh_vF9Y5zdC-fgDYVSdDM6WGy1laAjqpWUsm0_PI5pEm35uxyz8orlyVDFVCq7_2yy7urIHM6easuXBs4lOU2QTZ-2uv_4qTJ2obULenbTBllhoIcoAMPSn-GD10Bb7oqXbQvHdtRQnMU9trixnmtjEMnF93C3yRqSRpV5oSABLjRwwZEr-DQdNW31xqYAiZi8PYxd8LQy8',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDI3ooxX0PS_wXpltXGvzQhMgsBVuUGXuGwBrCAKcvFmmnICjtteO6CgmlLL01XqOY2eyTfSoAVjCRS5M1pyhOIdFLxOEysTvsfwex2XaO6IYy3U_N4GHwRN7JTDeNEqvPourP3_qqSgWtxIM2XicynEddMcTteCmAHv3l85DtnsVI88PzRF2BQebaS7Vy3LwAxjjQm8YfI0PZinGezskxjOSZTuOcHuCLXb9gtCEvouKf5qP-E_kYWhs_-0OR-ux5zYoyBW0CphqI',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBtmYdXsu8fkFMn94rL5Hk6CCm2Ds5KnzGDgGgp0Z8_4M75QEvmCrn5PB6uETt82rYcP6vXi3mShoQKQk4irGNQLYqZhtJPFl2KX-sgERZjGqHtNqWeNy55SKlM2M8Qha7tc_CG0ilhpPVSqqaWIr1BOwXjeeZ-WZjYiASWn8r3PYamhyk4tL2dkORPAl71escaKiOMgECMB1b-eFIx4iuYQSAnKytrMm7WQlZ0QbdYoH0vG6Sm6lcvt9jXcmOAnuAbtRPe2rwUlH4',
              ];
              const imgUrl = event.image || fallbacks[idx % fallbacks.length];

              return (
                <article
                  key={idx}
                  className="relative break-inside-avoid overflow-hidden bg-[#201f1f] rounded-md group transition-transform duration-300 hover:scale-105"
                >
                  {/* Image now determines the block's height adaptively */}
                  <img
                    alt={event.name}
                    className="w-full h-auto object-cover grayscale mix-blend-luminosity opacity-80 hover:grayscale-0 transition-all duration-500 block"
                    src={imgUrl}
                  />

                  {/* Hover Overlay: hidden by default, visible on hover with a darker red background */}
                  <div className="absolute inset-0 bg-[#bf002a] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    <h3 className="text-2xl font-bold text-white uppercase leading-tight">
                      {event.name}
                    </h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="text-xs tracking-wider text-white uppercase font-mono font-bold">
                        {event.performer.map((p) => p.name).join(' • ')}
                      </span>
                      <span className="text-xs tracking-widest text-white uppercase font-mono">
                        {formatDateList(event.startDate)} //{' '}
                        {event.location?.address?.addressLocality ||
                          event.location?.name}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default function ShowsList({ events: _events }: ShowsListProps) {
  const events = [..._events].reverse();
  const [viewMode, setViewMode] = useState<'list' | 'poster'>('list');

  return (
    <div className="relative min-h-screen w-full font-sans overflow-x-hidden">
      <style>{`
          .bg-grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.05;
            mix-blend-mode: overlay;
            pointer-events: none;
          }
        `}</style>

      {/* View Mode Switching Sidebar (Desktop) */}
      <aside className="fixed right-0 top-0 h-full flex-col justify-center items-center gap-6 z-50 bg-[#0e0e0e]/60 backdrop-blur-md border-l border-white/5 w-16 hidden md:flex">
        <button
          onClick={() => setViewMode('list')}
          className={`p-3 rounded-full transition-all group cursor-pointer ${viewMode === 'list' ? 'text-[#ffb3b2] bg-[#ffb3b2]/10' : 'text-[#e9bcba] hover:bg-[#ffb3b2]/10 hover:text-[#ffb3b2]'}`}
          title="List View"
        >
          <List className="w-6 h-6" />
        </button>
        <button
          onClick={() => setViewMode('poster')}
          className={`p-3 rounded-full transition-all group cursor-pointer ${viewMode === 'poster' ? 'text-[#ffb3b2] bg-[#ffb3b2]/10' : 'text-[#e9bcba] hover:bg-[#ffb3b2]/10 hover:text-[#ffb3b2]'}`}
          title="Poster View"
        >
          <LayoutGrid className="w-6 h-6" />
        </button>
      </aside>

      {/* View Mode Switching Bottom bar (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center py-4">
        <button
          onClick={() => setViewMode('list')}
          className={`flex flex-col items-center gap-1 ${viewMode === 'list' ? 'text-[#ffb3b2]' : 'text-[#e9bcba]'}`}
        >
          <List className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider font-mono">
            List
          </span>
        </button>
        <button
          onClick={() => setViewMode('poster')}
          className={`flex flex-col items-center gap-1 ${viewMode === 'poster' ? 'text-[#ffb3b2]' : 'text-[#e9bcba]'}`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider font-mono">
            Poster
          </span>
        </button>
      </div>

      {viewMode === 'list' && <ListView events={events} />}
      {viewMode === 'poster' && <PosterView events={events} />}
    </div>
  );
}
