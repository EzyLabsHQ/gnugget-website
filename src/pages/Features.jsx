import { Link } from 'react-router-dom'
import {
  featureGroups,
  statusBarItems,
  springboardItems,
  internalItems,
  daemonItems,
} from '../data/features.js'

function Card({ icon, title, blurb, details }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{blurb}</p>
      <ul style={{ margin: '12px 0 0', paddingLeft: 18, color: 'var(--text-muted)', fontSize: 14 }}>
        {details.map((d) => (
          <li key={d} style={{ margin: '4px 0' }}>
            {d}
          </li>
        ))}
      </ul>
    </article>
  )
}

function Checklist({ title, items }) {
  return (
    <section className="roadmap-phase">
      <div className="roadmap-phase-header">
        <h2>{title}</h2>
      </div>
      <ul className="roadmap-list">
        {items.map((item) => (
          <li className="roadmap-item" key={item}>
            <span className="roadmap-item-bullet" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Features() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Features
          </div>
          <h1>Features</h1>
          <p>
            GoldenNugget supports iOS 26.2 – 27.0+. Customize wallpapers, the
            status bar, Springboard, system internals, and daemons — all
            jailbreak-free.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="section-header">
          <span className="section-tag">Overview</span>
          <h2>What you can do</h2>
        </div>
        <div className="feature-grid">
          {featureGroups.map((f) => (
            <Card key={f.title} {...f} />
          ))}
        </div>
      </div>

      <div className="container section" style={{ borderBottom: 'none' }}>
        <div className="section-header">
          <span className="section-tag">Deep dive</span>
          <h2>Full option lists</h2>
          <p className="section-sub">
            The complete, up-to-date set of tweaks available in the app.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          <Checklist title="Status Bar" items={statusBarItems} />
          <Checklist title="Springboard Options" items={springboardItems} />
          <Checklist title="Internal Options" items={internalItems} />
          <Checklist title="Disable Daemons" items={daemonItems} />
        </div>
      </div>
    </>
  )
}