import { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('hero--visible')
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Replace this placeholder with the final hero video/image */}
      <div className="hero__media media-placeholder media-placeholder--hero">
      </div>

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Voices that<br />shape the world
        </h1>
        <p className="hero__subtitle">
          Where young storytellers, speakers, and journalists find their stage.
        </p>
        <a className="btn btn--white btn--lg" href="#cta">
          Join PSJ Gass!!
        </a>
      </div>

      <div className="hero__footer">
        <ul className="hero__stats">
          <li className="hero__stat">
            <strong>Pemegang Piagam Penghargaan</strong>
            <span>Mencangkup Kepulauan Jawa</span>
          </li>
          <li className="hero__stat">
            <strong>100+ Alumni</strong>
            <span>Selama 6 Tahun</span>
          </li>
          <li className="hero__stat">
            <strong>Keterampilan siap media</strong>
            <span>Dari hari pertama</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
