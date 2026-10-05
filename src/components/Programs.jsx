import { useState } from 'react'

const programs = [
  {
    id: 'speaking',
    title: 'The Orator',
    subtitle: 'Public Speaking Mastery',
    tags: ['Stage presence', 'Persuasion', 'Debate', 'Confidence building', 'Storytelling'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 'journalism',
    title: 'The Reporter',
    subtitle: 'Investigative Journalism',
    tags: ['News writing', 'Interviewing', 'Ethics', 'Digital media', 'Field reporting'],
    gradient: 'linear-gradient(135deg, #0f3460 0%, #533483 50%, #e94560 100%)',
  },
]

function Programs() {
  const [active, setActive] = useState(0)

  return (
    <section className="programs" id="programs">
      {/* Tab toggle */}
      <div className="programs__toggle" role="tablist" aria-label="Program selections">
        {programs.map((prog, i) => (
          <button
            key={prog.id}
            id={`tab-${prog.id}`}
            className={`programs__toggle-btn ${i === active ? 'programs__toggle-btn--active' : ''}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-controls={`panel-${prog.id}`}
          >
            {prog.subtitle}
          </button>
        ))}
      </div>

      {/* Program panels container in CSS Grid Stack to eliminate layout shifts */}
      <div className="programs__container">
        {programs.map((prog, i) => (
          <div
            key={prog.id}
            id={`panel-${prog.id}`}
            className={`programs__panel ${i === active ? 'programs__panel--active' : ''}`}
            role="tabpanel"
            aria-labelledby={`tab-${prog.id}`}
            aria-hidden={i !== active}
          >
            <div className="programs__info">
              <h2 className="programs__title">{prog.title}</h2>
              <ul className="programs__tags">
                {prog.tags.map((tag) => (
                  <li key={tag} className="programs__tag">+ {tag}</li>
                ))}
              </ul>
            </div>

            {/* Program media container */}
            <div className="programs__media">
              <div
                className="media-placeholder media-placeholder--program"
                style={{ background: prog.gradient }}
              >
                <div className="media-placeholder__label">{prog.subtitle} Image</div>
              </div>
              <a className="btn btn--dark programs__explore-btn" href="#cta">
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs
