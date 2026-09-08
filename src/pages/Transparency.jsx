import { Link } from 'react-router-dom'
import { renderInline } from '../lib/inline.jsx'

const GITHUB_URL = 'https://github.com/awesomenull-dev/GoldenNugget'
const DISCORD_URL = 'https://discord.gg/Rm6r4zeE3y'

const principles = [
  {
    icon: '🔓',
    title: 'Truly open source',
    text: 'Every line of GoldenNugget is public on GitHub under the AGPL-3.0 license. Anyone can read, audit, and rebuild the app from source.',
  },
  {
    icon: '🕵️',
    title: 'No data collection',
    text: 'GoldenNugget is a local desktop app. It does not phone home, track you, or collect analytics. Everything happens on your machine.',
  },
  {
    icon: '🛟',
    title: 'Backup-first',
    text: 'A three-phase backup → tweak → restore workflow means your data is protected before anything is written to your device.',
  },
  {
    icon: '📦',
    title: 'Reproducible builds',
    text: 'Dependencies are pinned in requirements.txt and the app can be compiled with compile.py, so builds match the published source.',
  },
  {
    icon: '🌍',
    title: 'Community translated',
    text: 'Translations are crowdsourced in the open gNugget-i18n repository — no translators are paid or coerced, all credited.',
  },
  {
    icon: '🪙',
    title: 'Free, no strings',
    text: 'GoldenNugget is free to use, with no paid tiers or hidden features. If the project helps you, a star on GitHub is the best support.',
  },
]

const workflow = [
  {
    id: '1',
    title: 'Backup',
    text: 'The app creates a full backup of your device before touching anything.',
  },
  {
    id: '2',
    title: 'Tweak',
    text: 'Changes are applied to the backup offline, on your own machine.',
  },
  {
    id: '3',
    title: 'Restore',
    text: 'The backup — not the live system — is restored to the device.',
  },
]

const statuses = [
  {
    title: 'Issues & PRs',
    text: 'All bug reports, feature requests, and pull requests are filed publicly on GitHub where everyone can see them.',
  },
  {
    title: 'Releases',
    text: 'Every release is published from the public repository with pinned dependencies and build instructions.',
  },
  {
    title: 'Community',
    text: 'Support happens in an open Discord server — questions and answers stay visible to help everyone.',
  },
]

export default function Transparency() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Transparency
          </div>
          <h1>Development Transparency</h1>
          <p>
            How GoldenNugget is developed, what it does with your data, and how
            the project stays open and honest.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="section-header">
          <span className="section-tag">Principles</span>
          <h2>What we stand for</h2>
          <p className="section-sub">
            GoldenNugget is built in the open, by the community, for the
            community — with no murky business model behind it.
          </p>
        </div>
        <div className="feature-grid">
          {principles.map((p) => (
            <article className="feature-card" key={p.title}>
              <div className="feature-icon" aria-hidden="true">
                {p.icon}
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="container section">
        <div className="section-header">
          <span className="section-tag">Safety</span>
          <h2>Your data stays yours</h2>
        </div>
        <div className="facts-grid">
          <div className="fact">
            <span className="fact-icon" aria-hidden="true">
              📡
            </span>
            <div>
              <h4>No telemetry</h4>
              <p>
                GoldenNugget contains no analytics SDKs, no crash reporters, and
                no tracking. It never connects anywhere without you telling it
                to.
              </p>
            </div>
          </div>
          <div className="fact">
            <span className="fact-icon" aria-hidden="true">
              🔐
            </span>
            <div>
              <h4>Local by design</h4>
              <p>
                Backups, tweaks, and restores all run on your own computer. Your
                device data is never uploaded to any server.
              </p>
            </div>
          </div>
          <div className="fact">
            <span className="fact-icon" aria-hidden="true">
              🧪
            </span>
            <div>
              <h4>Auditable source</h4>
              <p>
                Because everything is public and reviews happen in the open, you
                can check exactly what the app does before running it.
              </p>
            </div>
          </div>
          <div className="fact">
            <span className="fact-icon" aria-hidden="true">
              🛡️
            </span>
            <div>
              <h4>No hidden code</h4>
              <p>
                No obfuscated binaries, no mystery background work. What you see
                in the repository is what the app runs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="section-header">
          <span className="section-tag">Workflow</span>
          <h2>How changes get applied</h2>
          <p className="section-sub">
            The three-phase workflow that makes GoldenNugget safer than patching
            your device directly.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {workflow.map((step) => (
            <section
              className="roadmap-phase"
              key={step.id}
              style={{ marginBottom: 0 }}
            >
              <div className="roadmap-phase-header">
                <h2>
                  <span className="roadmap-item-number">{step.id}</span>
                  {renderInline(step.title)}
                </h2>
              </div>
              <p>{step.text}</p>
            </section>
          ))}
        </div>
      </div>

      <div className="container section" style={{ borderBottom: 'none' }}>
        <div className="section-header">
          <span className="section-tag">Accountability</span>
          <h2>Open by default</h2>
        </div>
        <div className="facts-grid">
          {statuses.map((s) => (
            <div className="fact" key={s.title}>
              <span className="fact-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="roadmap-note" style={{ marginTop: 32 }}>
          <span className="note-icon" aria-hidden="true">
            🚩
          </span>
          <span>
            Found a security issue? Please report it privately before making it
            public so it can be fixed responsibly. Open a{' '}
            <a
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub issue
            </a>{' '}
            or reach out on the{' '}
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              Discord server
            </a>
            .
          </span>
        </div>
      </div>
    </>
  )
}