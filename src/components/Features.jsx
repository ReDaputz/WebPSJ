import { useEffect, useRef, useState } from 'react'

const features = [
  {
    title: 'Stage Presence',
    description: 'Command any room with poise, projection, and purpose.',
    label: 'Master the art of captivating an audience',
  },
  {
    title: 'Investigative Writing',
    description: 'Uncover stories that matter through rigorous research and fearless reporting.',
    label: 'From leads to headlines',
  },
  {
    title: 'Interview Mastery',
    description: 'Ask the right questions. Listen deeply. Get the real story.',
    label: 'Techniques used by top journalists',
  },
  {
    title: 'Media Literacy',
    description: 'Navigate the modern information landscape with critical thinking.',
    label: 'Separate fact from noise',
  },
  {
    title: 'Digital Storytelling',
    description: 'Create compelling narratives across podcasts, video, and social platforms.',
    label: 'Multi-platform content creation',
  },
  {
    title: 'Debate & Rhetoric',
    description: 'Build persuasive arguments and think on your feet under pressure.',
    label: 'Sharpen your critical voice',
  },
]

function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('features--visible')
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features__header">
        <h2 className="features__heading">
          Skills that define<br />tomorrow's leaders
        </h2>
        <p className="features__subheading">
          Our curriculum is designed to build real-world communication skills — from the podium to the press room.
        </p>
      </div>

      <div className="features__grid">
        {/* Left: feature list with clickable items */}
        <div className="features__list">
          {features.map((feat, i) => (
            <button
              key={feat.title}
              className={`features__item ${i === activeIndex ? 'features__item--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className="features__item-index">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="features__item-text">
                <h3 className="features__item-title">{feat.title}</h3>
                <p className="features__item-desc">{feat.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Right: feature image placeholder */}
        <div className="features__visual">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`features__image-wrapper ${i === activeIndex ? 'features__image-wrapper--active' : ''}`}
            >
              {/* Replace this placeholder with the final feature image */}
              <div className="media-placeholder media-placeholder--feature">
                <div className="media-placeholder__label">{feat.title} Image</div>
              </div>
              <p className="features__image-label">{feat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
