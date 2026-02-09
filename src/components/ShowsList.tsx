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
    <div className="shows-container">
      <div className="shows-grid">
        {events.map((event, idx) => (
          <div key={idx} className="show-card">
            {event.image && (
              <div className="show-poster">
                <img src={event.image} alt={event.name} />
              </div>
            )}

            <div className="show-content">
              <h3 className="show-title">{event.name}</h3>

              <div className="show-date">📅 {formatDate(event.startDate)}</div>

              <div className="show-location">
                📍 {event.location.name}
                {event.location.address?.addressLocality && (
                  <span>, {event.location.address.addressLocality}</span>
                )}
              </div>

              {event.description && (
                <p className="show-description">{event.description}</p>
              )}

              <div className="performers">
                <h4>Artists</h4>
                <div className="performers-list">
                  {event.performer.map((performer, pidx) => (
                    <div
                      key={pidx}
                      className={`performer ${hoveredBand === `${event.name}-${performer.name}` ? 'active' : ''}`}
                      onMouseEnter={() =>
                        handleBandHover(event.name, performer)
                      }
                      onMouseLeave={handleBandLeave}
                    >
                      {performer.image && (
                        <img
                          src={performer.image}
                          alt={performer.name}
                          className="performer-image"
                        />
                      )}
                      <div className="performer-info">
                        <p className="performer-name">{performer.name}</p>
                        {performer.description && (
                          <p className="performer-description">
                            {performer.description}
                          </p>
                        )}
                        {performer.audio && (
                          <p className="audio-hint">
                            🔊 Hover to listen: {performer.audio.description}
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

      <style>{`
        .shows-container {
          padding: 2rem 0;
        }

        .shows-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .show-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .show-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .show-poster {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .show-poster img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .show-content {
          padding: 1.5rem;
        }

        .show-title {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          font-weight: 600;
          color: #333;
        }

        .show-date,
        .show-location {
          margin: 0.5rem 0;
          font-size: 0.95rem;
          color: #666;
          line-height: 1.4;
        }

        .show-description {
          margin: 1rem 0;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }

        .performers {
          margin-top: 1.5rem;
          border-top: 1px solid #e0e0e0;
          padding-top: 1rem;
        }

        .performers h4 {
          margin: 0 0 1rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
        }

        .performers-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .performer {
          display: flex;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f9f9f9;
        }

        .performer:hover,
        .performer.active {
          background: #f0f0f0;
          transform: translateX(4px);
        }

        .performer-image {
          width: 60px;
          height: 60px;
          border-radius: 4px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .performer-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .performer-name {
          margin: 0;
          font-weight: 600;
          font-size: 0.95rem;
          color: #333;
        }

        .performer-description {
          margin: 0.25rem 0 0 0;
          font-size: 0.85rem;
          color: #777;
          line-height: 1.3;
        }

        .audio-hint {
          margin: 0.5rem 0 0 0;
          font-size: 0.8rem;
          color: #999;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .shows-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
