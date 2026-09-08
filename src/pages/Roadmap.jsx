import { Link } from 'react-router-dom'
import { renderInline } from '../lib/inline.jsx'
import { roadmap } from '../data/roadmap.js'

function PhaseBadge({ status, label }) {
  return <span className={`phase-status ${status}`}>{label}</span>
}

function RoadmapPhase({ phase }) {
  const numbered = phase.groups
    ? phase.groups.flatMap((g) => g.items)
    : null

  return (
    <section className="roadmap-phase">
      <div className="roadmap-phase-header">
        <h2>{renderInline(phase.title)}</h2>
        <PhaseBadge status={phase.status} label={phase.statusLabel} />
      </div>
      <p>{renderInline(phase.intro)}</p>

      {phase.groups ? (
        phase.groups.map((group) => (
          <div className="roadmap-group" key={group.title}>
            <div className="roadmap-group-title">{group.title}</div>
            <ul className="roadmap-list">
              {group.items.map((item) => {
                const index = numbered.indexOf(item) + 1
                return (
                  <li className="roadmap-item" key={item}>
                    <span className="roadmap-item-number">{index}</span>
                    <span>{renderInline(item)}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))
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
            Short-term plan for GoldenNugget. Verified against{' '}
            <code>docs/ARCHITECTURE.md</code> before large changes.
          </p>
        </div>
      </div>

      <div className="container section">
        {roadmap.map((phase) => (
          <RoadmapPhase key={phase.id} phase={phase} />
        ))}

        <div className="roadmap-note">
          <span className="note-icon" aria-hidden="true">
            ⚠
          </span>
          <span>
            The 9.4 refactor is a housekeeping pass — it prepares the codebase
            for feature work and introduces no user-visible changes (unless they
            fall out naturally). Verify big changes against{' '}
            <code>docs/ARCHITECTURE.md</code> before proceeding.
          </span>
        </div>
      </div>
    </>
  )
}