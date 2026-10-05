import { useEffect, useRef } from 'react'

function Showcase() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('showcase--visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="showcase" id="showcase" ref={sectionRef}>
      {/* Replace this placeholder with the final showcase video/image */}
      <div className="showcase__media media-placeholder media-placeholder--showcase">
        <div className="media-placeholder__label">Showcase Video / Image</div>
      </div>

      <div className="showcase__overlay" />

      <div className="showcase__content">
        <h2 className="showcase__title">
          Fearless<br />storytelling
        </h2>
        <p className="showcase__subtitle">
          From campus newsrooms to national stages — our members don't just learn, they lead.
        </p>
        <a className="btn btn--white btn--lg" href="#cta">
          Read their stories
        </a>
      </div>
    </section>
  )
}

export default Showcase
