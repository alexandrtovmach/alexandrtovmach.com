import { useState, type ReactNode } from 'react';
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

const BACKGROUND_FALLBACK_IMAGE = '/shows/bg.png';

const formatDateList = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

const BackgroundLayer = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${BACKGROUND_FALLBACK_IMAGE}')` }}
    />
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={BACKGROUND_FALLBACK_IMAGE}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/shows/bg.webm" type="video/webm" />
      <source src="/shows/bg.mp4" type="video/mp4" />
      <img
        className="w-full h-full object-cover"
        src={BACKGROUND_FALLBACK_IMAGE}
        alt="Shows background"
      />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/95 to-[#131313]"></div>
    <div className="absolute inset-0 bg-grain transition-opacity duration-300"></div>
  </div>
);

const PageHeader = () => (
  <header className="mb-12">
    <nav className="mx-auto flex items-center justify-between font-bold max-sm:hidden opacity-80">
      <a href="/"> ⟵ Back to main </a>
    </nav>
    <h1 className="text-5xl md:text-7xl text-[#e5e2e1] uppercase mb-4 opacity-90 font-bold tracking-tighter">
      Stack Trace
    </h1>
    <p className="text-base md:text-lg text-[#e9bcba]">
      No complex algorithms here — just a simple, chronological log of my
      favorite nights spent in the pit.
    </p>
  </header>
);

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <div className="relative z-10 py-12 px-6 md:px-12 max-w-6xl mx-auto min-h-screen">
    <PageHeader />
    {children}
  </div>
);

const ListView = ({ events }: { events: MusicEvent[] }) => {
  return (
    <PageWrapper>
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
                    {' '}
                    //{' '}
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
    </PageWrapper>
  );
};

const PosterView = ({ events }: { events: MusicEvent[] }) => {
  return (
    <PageWrapper>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {events
          .filter((event) => !event.hidden)
          .map((event, idx) => {
            const imgUrl = event.image;

            return (
              <article
                key={idx}
                className="relative break-inside-avoid overflow-hidden bg-[#201f1f] rounded-md group transition-transform duration-300 hover:scale-105"
              >
                <img
                  alt={event.name}
                  className="w-full h-auto object-cover grayscale mix-blend-luminosity opacity-80 hover:grayscale-0 transition-all duration-500 block"
                  src={imgUrl}
                />

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
    </PageWrapper>
  );
};

export default function ShowsList({ events: _events }: ShowsListProps) {
  const events = [..._events].reverse();
  const [viewMode, setViewMode] = useState<'list' | 'poster'>('list');

  return (
    <div className="relative min-h-screen w-full font-sans overflow-x-hidden">
      <style>{`
          .bg-grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.8;
            mix-blend-mode: overlay;
            pointer-events: none;
          }
        `}</style>

      <BackgroundLayer />

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
