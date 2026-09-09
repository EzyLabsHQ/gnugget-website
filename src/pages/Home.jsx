import { Link } from 'react-router-dom'
import { useGitHubStars, formatStars } from '../hooks/useGitHubStars.js'

const GITHUB_URL = 'https://github.com/awesomenull-dev/GoldenNugget'
const DISCORD_URL = 'https://discord.gg/Rm6r4zeE3y'
const RELEASES_URL = `${GITHUB_URL}/releases`

const highlights = [
  {
    icon: '🎨',
    title: 'PosterBoard',
    text: 'Animated wallpapers and descriptors with community-wallpaper support.',
  },
  {
    icon: '📶',
    title: 'Status Bar',
    text: 'Change the carrier name, icons, bars, battery, time and more.',
  },
  {
    icon: '🏠',
    title: 'Springboard',
    text: 'Lock screen footnote, idle auto-lock, dimming, Dynamic Island and more.',
  },
  {
    icon: '⚙️',
    title: 'Internal Options',
    text: 'Hidden diagnostics, debug modes and internal Apple settings.',
  },
  {
    icon: '💧',
    title: 'Disable Liquid Glass',
    text: 'Control iOS 26+ Liquid Glass visuals on supported devices.',
  },
  {
    icon: '🛑',
    title: 'Disable Daemons',
    text: 'Quiet down OTA updates, Game Center, Screen Time, iCloud and many more.',
  },
]

const facts = [
  {
    icon: '🔒',
    title: 'Jailbreak-free',
    text: 'No jailbreak required — GoldenNugget runs on stock iOS 26.2 – 27.0+.',
  },
  {
    icon: '🛟',
    title: 'Backup-first workflow',
    text: 'Three-phase backup → tweak → restore cycle prevents data loss on iOS 27.',
  },
  {
    icon: '🐍',
    title: 'Python + PySide6',
    text: 'Built with pymobiledevice3 and a Qt GUI, Python 3.10+ required.',
  },
  {
    icon: '🌍',
    title: 'Community translated',
    text: 'Translations crowdsourced via the gNugget-i18n repository.',
  },
]

export default function Home() {
  const { stars } = useGitHubStars()
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">✦ iOS 27 support</span>
            <h1>
              Unlock the fullest potential of your{' '}
              <span className="gold">device</span>
            </h1>
            <p className="lead">
              Customize your device with animated wallpapers, disable pesky
              daemons, and more — all jailbreak-free.
            </p>
            <div className="hero-actions">
              <Link to="/features" className="btn btn-gold">
                Explore features
              </Link>
              <Link to="/roadmap" className="btn">
                View roadmap
              </Link>
              <a className="btn" href={RELEASES_URL} target="_blank" rel="noreferrer">
                Download
              </a>
            </div>
            <div className="hero-meta">
              <span className="meta-item">
                <span className="meta-icon">★</span> {formatStars(stars)} stars on GitHub
              </span>
              <span className="meta-item">
                <span className="meta-icon">⑂</span> Fork of Nugget
              </span>
              <span className="meta-item">
                <span className="meta-icon">∞</span> Open source (AGPL-3.0)
              </span>
            </div>
          </div>
          <img src="/nugget.png" alt="GoldenNugget logo" className="hero-nugget" />
        </div>
      </section>

      <div className="container section" style={{ marginTop: 0 }}>
        <div className="roadmap-note" style={{ margin: '32px 0 0' }}>
          <span className="note-icon" aria-hidden="true">
            ⚠
          </span>
          <span>
            <strong style={{ color: 'var(--text)' }}>
              Please back up your data before using this project.
            </strong>{' '}
            GoldenNugget may cause unforeseen problems, so it is better to be
            safe than sorry. The project is <strong style={{ color: 'var(--text)' }}>not responsible</strong> for any
            damage done to your device, data loss, or bootloop.
          </span>
        </div>
      </div>

      <div className="container section">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2>Built to unlock</h2>
          <p className="section-sub">
            From animated wallpapers to system internals — everything Nugget
            pioneered, hardened with a backup-first workflow for iOS 27.
          </p>
        </div>
        <div className="feature-grid">
          {highlights.map((h) => (
            <article className="feature-card" key={h.title}>
              <div className="feature-icon" aria-hidden="true">
                {h.icon}
              </div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          <Link to="/features" style={{ color: 'var(--accent)' }}>
            See the full option list →
          </Link>
        </p>
      </div>

      <div className="container section">
        <div className="section-header">
          <span className="section-tag">Why GoldenNugget</span>
          <h2>Safe by design</h2>
        </div>
        <div className="facts-grid">
          {facts.map((f) => (
            <div className="fact" key={f.title}>
              <span className="fact-icon" aria-hidden="true">
                {f.icon}
              </span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container section" style={{ borderBottom: 'none' }}>
        <div className="section-header">
          <span className="section-tag">Get started</span>
          <h2>Requirements &amp; quick start</h2>
        </div>

        <div className="facts-grid">
          <div className="roadmap-phase">
            <h3>Windows</h3>
            <ul
              style={{
                color: 'var(--text-muted)',
                fontSize: 14,
                paddingLeft: 18,
                margin: '10px 0 0',
              }}
            >
              <li>Apple Devices (Microsoft Store) or iTunes</li>
            </ul>
          </div>
          <div className="roadmap-phase">
            <h3>Linux</h3>
            <ul
              style={{
                color: 'var(--text-muted)',
                fontSize: 14,
                paddingLeft: 18,
                margin: '10px 0 0',
              }}
            >
              <li>usbmuxd</li>
              <li>libimobiledevice</li>
            </ul>
          </div>
        </div>

        <div className="roadmap-phase" style={{ marginTop: 16 }}>
          <h3>Python</h3>
          <div className="citation" style={{ marginTop: 12 }}>
            <pre style={{ margin: 0, overflowX: 'auto', fontSize: 13 }}>
              <code>
                {`python3 -m venv .env       # once
source .env/bin/activate   # macOS/Linux (Windows: .env\\Scripts\\activate.bat)
pip3 install -r requirements.txt
python3 main_app.py`}
              </code>
            </pre>
          </div>
        </div>

        <div className="cta-actions" style={{ marginTop: 32 }}>
          <a className="btn btn-gold" href={RELEASES_URL} target="_blank" rel="noreferrer">
            Download GoldenNugget
          </a>
          <a className="btn" href={DISCORD_URL} target="_blank" rel="noreferrer">
            Join the Discord
          </a>
          <a className="btn" href={`${GITHUB_URL}#contributing-and-forking`} target="_blank" rel="noreferrer">
            Contribute
          </a>
        </div>
      </div>

      <div className="cta">
        <div className="container">
          <h2>Ready to unlock your device?</h2>
          <p>
            Star the repo, join the community, or dive into the roadmap to see
            what's coming next.
          </p>
          <div className="cta-actions">
            <a className="btn btn-gold" href={GITHUB_URL} target="_blank" rel="noreferrer">
              Star on GitHub
            </a>
            <Link to="/roadmap" className="btn">
              Check the roadmap
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}