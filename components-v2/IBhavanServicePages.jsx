// Service category pages + About
const ServicePage = ({ slug, navigate, openGetInTouch }) => {
  const data = window.IBHAVAN_SERVICES[slug];
  const num = { 'smart-home': '01', 'hr-solutions': '02', 'it-solutions': '03', 'business-solutions': '04' }[slug];
  const benefits = {
    'smart-home': [
      { icon: 'fa-house-laptop', t: 'Integrated whole-home ecosystem' },
      { icon: 'fa-award', t: 'Premium global brands' },
      { icon: 'fa-headset', t: 'Lifetime remote support' },
      { icon: 'fa-leaf', t: 'Energy savings of 30–50%' },
    ],
    'hr-solutions': [
      { icon: 'fa-people-arrows', t: 'End-to-end people operations' },
      { icon: 'fa-map-location-dot', t: 'Pan-India hiring network' },
      { icon: 'fa-clipboard-check', t: '100% statutory compliance' },
      { icon: 'fa-stopwatch', t: '72-hour turnarounds' },
    ],
    'it-solutions': [
      { icon: 'fa-rupee-sign', t: 'Tailored to SME budgets' },
      { icon: 'fa-arrows-rotate', t: 'Ongoing managed services' },
      { icon: 'fa-shield-virus', t: 'Security-first development' },
      { icon: 'fa-cloud-arrow-up', t: 'Scalable cloud-native stack' },
    ],
    'business-solutions': [
      { icon: 'fa-compass', t: 'Strategy that translates to action' },
      { icon: 'fa-chart-pie', t: 'Decisions backed by data' },
      { icon: 'fa-handshake-angle', t: 'Hands-on delivery, not slideware' },
      { icon: 'fa-rocket', t: 'Built for SME pace and budgets' },
    ],
  }[slug];

  return (
    <div>
      {/* Hero banner with background image */}
      <section className="service-hero">
        <img src={data.hero} alt={data.label} loading="lazy" />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-inner">
          <Reveal>
            <div className="num" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('home')}>Home</span> / Services / <span style={{ color: '#fff' }}>{data.label}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem' }}>
                <i className={'fa-solid ' + data.icon}></i>
              </span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>§ {num} · {data.tagline}</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 style={{ maxWidth: 1100, color: '#fff' }}>
              {data.label.split(' ')[0]}{' '}
              <span className="italic" style={{ color: '#F05885' }}>{data.label.split(' ').slice(1).join(' ') || 'solutions'}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead" style={{ marginTop: '2rem', maxWidth: 680, color: 'rgba(255,255,255,0.82)' }}>{data.description}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead number="§ Services" eyebrow="Full scope" title={'Everything under one <span class="italic accent-mark">roof</span>.'} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '0', borderTop: '1px solid var(--border)' }}>
          {data.items.map((it, i) => {
            const cols = 3; const isLastCol = (i + 1) % cols === 0;
            return (
              <Reveal key={it.id} delay={i * 50}>
                <div onClick={openGetInTouch} className="lift" style={{ padding: '2.25rem 1.75rem 2.25rem 0', borderRight: !isLastCol ? '1px solid var(--border-soft)' : 'none', borderBottom: '1px solid var(--border-soft)', paddingLeft: (i % cols === 0) ? 0 : '1.75rem', cursor: 'pointer' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.15rem' }}>
                    <i className={'fa-solid ' + it.icon}></i>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>{it.label}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{it.desc}</p>
                  <div className="btn-link" style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--accent)' }}>Enquire <span className="arrow">→</span></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section alt>
        <SectionHead number="§ Why" eyebrow="What sets us apart" title={'Built for <span class="italic accent-mark">' + data.label.toLowerCase() + '</span>.'} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '0', borderTop: '1px solid var(--border)' }}>
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 60}>
              <div style={{ padding: '2.25rem 1.5rem 2.25rem 0', borderRight: i < benefits.length - 1 ? '1px solid var(--border-soft)' : 'none', paddingLeft: i === 0 ? 0 : '1.5rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  <i className={'fa-solid ' + b.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.35 }}>{b.t}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Single CTA at bottom */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 'clamp(3rem,6vw,5rem)' }}>
          <Reveal><h2>Ready to begin? <span className="italic accent-mark">Let's talk.</span></h2></Reveal>
          <Reveal delay={120}>
            <div>
              <p className="lead" style={{ marginBottom: '2rem' }}>Talk to a specialist today. We'll design a solution that fits your exact requirements.</p>
              <button onClick={openGetInTouch} className="btn btn-dark">Get in touch <span className="arrow">→</span></button>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

const IBhavanAbout2 = ({ navigate, openGetInTouch }) => {
  const IMG = window.IBHAVAN_IMG || {};
  return (
    <div>
      <section style={{ position: 'relative', padding: 'clamp(8rem,14vw,11rem) 2rem clamp(4rem,8vw,6rem)', borderBottom: '1px solid var(--border-soft)', overflow: 'hidden' }}>
        <div className="ambient-hero" style={{ opacity: 0.5 }}>
          <div className="orb orb-1" style={{ top: '20%', left: '60%' }}></div>
          <div className="orb orb-3" style={{ bottom: '10%', left: '5%' }}></div>
        </div>
        <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Reveal><div className="num" style={{ marginBottom: '2rem' }}>§ About</div></Reveal>
          <Reveal delay={100}>
            <h1 style={{ maxWidth: 1200 }}>
              A decade of building <span className="italic accent-mark">trust</span>,<br />
              through reliability.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="lead" style={{ marginTop: '2.5rem', maxWidth: 680 }}>
              iBhavan started with a simple idea: bring together the specialists you need to run a modern business and home — under one accountable roof.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div style={{ marginTop: 'clamp(3rem,6vw,5rem)', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <div className="photo-card" style={{ aspectRatio: '16/9' }}>
                <img src={IMG.aboutTeam || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'} alt="iBhavan team" loading="lazy" />
                <div className="photo-caption">The team · Bengaluru HQ</div>
              </div>
              <div className="photo-card" style={{ aspectRatio: '9/16' }}>
                <img src={IMG.aboutOffice || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'} alt="iBhavan office" loading="lazy" />
                <div className="photo-caption">Workspace</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '0', borderTop: '1px solid var(--border)' }}>
          {[
            { n: '01', t: 'Mission', d: 'To be the most trusted partner for businesses and homeowners seeking measurable outcomes across smart living, workforce, and technology.' },
            { n: '02', t: 'Vision', d: 'A future where intelligent systems — human and digital — work together seamlessly, making daily life more efficient and fulfilling.' },
            { n: '03', t: 'Values', d: 'Reliability. Transparency. Continuous improvement. We measure success by the long-term trust our clients place in us.' },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div style={{ padding: '3rem 2rem 3rem 0', borderRight: i < 2 ? '1px solid var(--border-soft)' : 'none', paddingLeft: i === 0 ? 0 : '2rem' }}>
                <div className="num" style={{ marginBottom: '2rem' }}>{v.n}</div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{v.t}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7 }}>{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHead number="§ 04" eyebrow="Our values" title={'The <span class="italic accent-mark">five pillars</span> we work by.'} subtitle="A short list of the principles that guide every engagement, every hire, and every product decision at iBhavan." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '0', borderTop: '1px solid var(--border)' }}>
          {[
            { icon: 'fa-shield-halved', t: 'Reliability', d: 'Show up, every time. Built into our SLAs, our processes, and our culture.' },
            { icon: 'fa-eye', t: 'Transparency', d: 'Clear pricing, honest timelines and uncomfortable conversations when needed.' },
            { icon: 'fa-handshake', t: 'Partnership', d: 'We win when our clients win. Long-horizon relationships over short-term wins.' },
            { icon: 'fa-rotate', t: 'Continuous improvement', d: 'Quarterly reviews, post-mortems, and a relentless focus on doing better next time.' },
            { icon: 'fa-lock', t: 'Compliance & Trust', d: 'Statutory, data, and information security obligations met without exception.' },
          ].map((p, i, arr) => (
            <Reveal key={p.t} delay={i * 70}>
              <div style={{ padding: '2.5rem 1.5rem 2.5rem 0', borderRight: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none', paddingLeft: i === 0 ? 0 : '1.5rem', height: '100%' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', fontSize: '1.2rem' }}>
                  <i className={'fa-solid ' + p.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.7rem' }}>{p.t}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Single CTA at bottom */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 'clamp(3rem,6vw,5rem)' }}>
          <Reveal><h2>Ready to begin? <span className="italic accent-mark">Let's talk.</span></h2></Reveal>
          <Reveal delay={120}>
            <div>
              <p className="lead" style={{ marginBottom: '2rem' }}>We'd love to hear what you're building or considering. A short call is usually the fastest way to start.</p>
              <button onClick={openGetInTouch} className="btn btn-dark">Get in touch <span className="arrow">→</span></button>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

Object.assign(window, { ServicePage, IBhavanAbout2 });
