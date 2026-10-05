import { useEffect, useRef } from 'react'

const columns = 7
const totalCards = columns * 2 // 2 balanced rows

function Community() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('community--visible')
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const placeholderColors = [
    '#e8e4df', '#d4cfc7', '#c8c2b8', '#ddd8d0',
    '#e0dcd5', '#ccc7be', '#d8d3cb', '#e5e0d8',
    '#d1ccc3', '#e3ded6', '#c5c0b7', '#d6d1c8',
    '#dfd9d1', '#c9c4bb', '#e1dcd4', '#ced9e3',
    '#d3c8d6', '#dde0c8', '#c8d6d3', '#d6d3c8',
    '#c8ced6',
  ]

  return (
    <section className="community" id="community" ref={sectionRef}>
      <div className="community__header">
        <h2 className="community__heading">
          You'll never speak alone
        </h2>
        <p className="community__subheading">
          Hundreds of young voices, one powerful community. Every workshop, every stage, every story brings us closer to a more informed, more articulate generation.
        </p>
      </div>

      {/* Grid of community member cards — mirrors Cowboy's 7-column community photo grid */}
      <div className="community__grid">
        {Array.from({ length: totalCards }).map((_, i) => (
          <div key={i} className="community__card">
            {/* Replace this placeholder with a real community member photo */}
            <div
              className="media-placeholder media-placeholder--community"
              style={{ backgroundColor: placeholderColors[i % placeholderColors.length] }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Community
