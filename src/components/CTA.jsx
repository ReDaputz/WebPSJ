function CTA() {
  const cards = [
    { title: 'Workshops', href: '#' },
    { title: 'Mentorship', href: '#' },
    { title: 'Events', href: '#' },
    { title: 'Resources', href: '#' },
  ]

  return (
    <section className="cta" id="cta">
      {/* Replace this placeholder with the final CTA background image */}
      <div className="cta__bg media-placeholder media-placeholder--cta">
        <div className="media-placeholder__label">CTA Background Image</div>
      </div>

      <div className="cta__content">
        <div className="cta__text">
          <h2 className="cta__heading">Ready to find your voice?</h2>
          <p className="cta__description">
            Whether you want to lead from the stage or report from the frontlines, PSJ gives you the tools, community, and confidence to make your mark.
          </p>
          <a className="btn btn--white btn--lg" href="#">
            Apply Now
          </a>
        </div>

        {/* Link cards — mirrors Cowboy's "Keep Exploring" section */}
        <div className="cta__cards">
          {cards.map((card) => (
            <a key={card.title} className="cta__card" href={card.href}>
              <span className="cta__card-title">{card.title}</span>
              <span className="cta__card-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTA
