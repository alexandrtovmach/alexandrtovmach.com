import React, { useRef, useState } from 'react';

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
}

interface ShowsListProps {
  events: MusicEvent[];
}

export default function ShowsList({ events }: ShowsListProps) {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const [hoveredBand, setHoveredBand] = useState<string | null>(null);

  const handleBandHover = (eventName: string, performer: Performer) => {
    // Stop all current audio
    Object.values(audioRefs.current).forEach((audio) => audio.pause());

    // Play new audio if available
    if (performer.audio?.url) {
      const key = `${eventName}-${performer.name}`;
      if (!audioRefs.current[key]) {
        const audio = new Audio(performer.audio.url);
        audioRefs.current[key] = audio;
      }
      audioRefs.current[key].currentTime = 0;
      audioRefs.current[key]
        .play()
        .catch((err) => console.error('Audio play error:', err));
      setHoveredBand(key);
    }
  };

  const handleBandLeave = () => {
    Object.values(audioRefs.current).forEach((audio) => audio.pause());
    setHoveredBand(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {event.image && (
              <div className="w-full h-64 overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {event.name}
              </h3>

              <div className="text-sm text-gray-600 leading-relaxed my-2">
                📅 {formatDate(event.startDate)}
              </div>

              <div className="text-sm text-gray-600 leading-relaxed my-2">
                📍 {event.location.name}
                {event.location.address?.addressLocality && (
                  <span>, {event.location.address.addressLocality}</span>
                )}
              </div>

              {event.description && (
                <p className="text-sm text-gray-700 leading-relaxed my-4">
                  {event.description}
                </p>
              )}

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  Artists
                </h4>
                <div className="flex flex-col gap-4">
                  {event.performer.map((performer, pidx) => (
                    <div
                      key={pidx}
                      className={`flex gap-4 p-3 rounded-md cursor-pointer transition-all duration-200 ${
                        hoveredBand === `${event.name}-${performer.name}`
                          ? 'bg-gray-100 translate-x-1'
                          : 'bg-gray-50 hover:bg-gray-100 hover:translate-x-1'
                      }`}
                      onMouseEnter={() =>
                        handleBandHover(event.name, performer)
                      }
                      onMouseLeave={handleBandLeave}
                    >
                      {performer.image && (
                        <img
                          src={performer.image}
                          alt={performer.name}
                          className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex flex-col flex-1 justify-center">
                        <p className="font-semibold text-sm text-gray-900">
                          {performer.name}
                        </p>
                        {performer.description && (
                          <p className="text-xs text-gray-600 leading-relaxed mt-1">
                            {performer.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
