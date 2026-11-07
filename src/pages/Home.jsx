import './Home.css';

const bars = [14, 26, 40, 58, 34, 70, 48, 82, 56, 90, 62, 76, 44, 64, 30, 50, 22, 36, 16];

const cards = [
  {
    page: 'Sound Studio',
    text: 'Try binaural beats, Solfeggio frequencies, and ambient sound mixers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" />
      </svg>
    ),
  },
  {
    page: 'Relaxation Library',
    text: 'Listen to curated playlists, guided meditations, and ASMR sounds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14zM5 19l7-7" />
      </svg>
    ),
  },
  {
    page: 'Wellness Insights',
    text: 'Explore brainwave visuals, relaxation tips, and helpful resources.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="12" width="4" height="8" rx="1" />
        <rect x="10" y="7" width="4" height="13" rx="1" />
        <rect x="16" y="3" width="4" height="17" rx="1" />
      </svg>
    ),
  },
];

function Home({ onNavigate }) {
  return (
    <div className="home-grid">
      <section className="home-hero">
        <p className="eyebrow">Your Solutions</p>
        <h1 className="home-hero-title">Calm. Focus. Reset.</h1>
        <p className="home-hero-text">
          Explore our personalized tools designed to reduce stress,
          enhance focus, and support better sleep.
        </p>
        <button className="home-button" onClick={() => onNavigate('Solutions')}>
          Explore Solutions →
        </button>
        <div className="home-wave" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </section>

      <section className="home-card home-science">
        <div className="home-science-top">
          <h2>The Science Behind</h2>
          <button className="home-link" onClick={() => onNavigate('Science Behind')}>
            Learn More →
          </button>
        </div>
        <p>
          Discover how sound can calm the mind, regulate the nervous system,
          and support brain health.
        </p>
      </section>

      <div className="home-row">
        {cards.map((card) => (
          <article
            key={card.page}
            className="home-card"
            onClick={() => onNavigate(card.page)}
          >
            <span className="home-icon">{card.icon}</span>
            <h2>{card.page}</h2>
            <p>{card.text}</p>
            <button
              className="home-arrow"
              aria-label={`Open ${card.page}`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(card.page);
              }}
            >
              →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;