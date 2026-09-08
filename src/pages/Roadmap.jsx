import { Link } from 'react-router-dom'
import { renderInline } from '../lib/inline.jsx'
import { roadmap } from '../data/roadmap.js'

function PhaseBadge({ status, label }) {
  return <span className={`phase-status ${status}`}>{label}</span>
}

function RoadmapPhase({ phase }) {
  return (
    <section className="roadmap-phase">
      <div className="roadmap-phase-header">
        <h2>{renderInline(phase.title)}</h2>
        <PhaseBadge status={phase.status} label={phase.statusLabel} />
      </div>
      <p>{renderInline(phase.intro)}</p>

      {phase.items && phase.listLabel ? (
        <div className="roadmap-group">
          <div className="roadmap-group-title">{phase.listLabel}</div>
          <ul className="roadmap-list">
            {phase.items.map((item) => (
              <li className="roadmap-item" key={item}>
                <span className="roadmap-item-bullet" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : phase.items ? (
        <div className="roadmap-group">
          <ul className="roadmap-list">
            {phase.items.map((item) => (
              <li className="roadmap-item" key={item} style={{ borderStyle: 'dashed' }}>
                <span className="roadmap-item-bullet" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}

export default function Roadmap() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Roadmap
          </div>
          <h1>Roadmap</h1>
          <p>
            GoldenNugget's plan for the next versions — from 9.3.3 to 9.4.2.
            What each one means for you.
          </p>
        </div>
      </div>

      <div className="container section">
        {roadmap.map((phase) => (
          <RoadmapPhase key={phase.id} phase={phase} />
        ))}

        <div className="roadmap-note">
          <span className="note-icon" aria-hidden="true">
            ℹ
          </span>
          <span>
            Roadmap is a plan, not a promise — items can shift between versions
            if needed.
          </span>
        </div>
      </div>
    </>
  )
}