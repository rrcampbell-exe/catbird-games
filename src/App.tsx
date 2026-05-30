import './App.css'

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a href="/" className="logo-link" aria-label="Catbird Games — home">
          <img
            src="/images/catbird_games_logo.png"
            alt="Catbird Games"
            className="site-logo"
          />
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            <p className="hero-eyebrow">Indie Game Studio</p>
            <h1 id="hero-heading" className="hero-title">
              Small games.<br />Big fun.
            </h1>
            <p className="hero-body">
              Catbird Games makes games that are playful, sharp, and just a little hard to put down.
            </p>
            <a
              href="https://www.realfakebirds.app"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Real Fake Birds
            </a>
          </div>
          <div className="hero-feathers" aria-hidden="true">
            <img src="/images/badges/flight_feather.png" alt="" className="feather feather-1" />
            <img src="/images/badges/gold_feather.png" alt="" className="feather feather-2" />
            <img src="/images/badges/wing_feather.png" alt="" className="feather feather-3" />
            <img src="/images/badges/silver_feather.png" alt="" className="feather feather-4" />
          </div>
        </section>

        <div className="section-rule" aria-hidden="true">
          <span className="section-rule-line" />
          <img src="/images/badges/plume.png" alt="" className="section-rule-icon" />
          <span className="section-rule-line" />
        </div>

        <section className="featured" aria-labelledby="featured-heading">
          <div className="featured-inner">
            <div className="featured-motif" aria-hidden="true">
              <img src="/images/badges/aurora_feather.png" alt="" className="motif-feather motif-1" />
              <img src="/images/badges/gold_feather.png" alt="" className="motif-feather motif-2" />
              <img src="/images/badges/contour_feather.png" alt="" className="motif-feather motif-3" />
            </div>
            <header className="featured-header">
              <span className="featured-label">Now Playing</span>
              <h2 id="featured-heading" className="featured-title">Real Fake Birds</h2>
              <p className="featured-tagline">Some are real. Some are fake. Tell them apart.</p>
            </header>
            <p className="featured-description">
              A trivia game that asks a simple question: is this bird real or fake?
              Answer correctly to build streaks, earn badges, unlock themes, and expand your field guide. 
              Or challenge friends to see who's the top real fake birder!
            </p>
            <ul className="feature-list" aria-label="Real Fake Birds features">
              <li className="feature-pill">Daily Challenges</li>
              <li className="feature-pill">Streak Tracking</li>
              <li className="feature-pill">Feather Badges</li>
              <li className="feature-pill">Bird Journal</li>
              <li className="feature-pill">Leaderboard</li>
              <li className="feature-pill">Collectible Themes</li>
            </ul>
            <a
              href="https://www.realfakebirds.app"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now →
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-copy">© 2026 Catbird Games, LLC. All rights reserved.</p>
          <nav className="footer-nav" aria-label="Footer links">
            <a href="mailto:campbell.ryan.r@gmail.com" className="footer-link">Contact</a>
            <a
              href="https://www.realfakebirds.app"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Real Fake Birds
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App

