import React from 'react';
import { IBHAVAN_SERVICES, IBHAVAN_IMG } from '../data/IBhavanData.js';
import { Reveal, Section, SectionHead, HomeCTA } from './IBhavanShared.jsx';

export const ServicePage = ({ slug, navigate, openGetInTouch }) => {
  const data = IBHAVAN_SERVICES[slug];
  const num = { 'smart-home': '01', 'hr-solutions': '02', 'it-solutions': '03', 'business-solutions': '04' }[slug];
  const benefits = {
    'smart-home': [
      { icon: 'fa-house-laptop', t: 'Integrated whole-home ecosystem', d: 'A single, certified architecture across lighting, climate, security and entertainment — every subsystem speaks one protocol so your home behaves as one intelligent, reliable space.' },
      { icon: 'fa-award', t: 'Premium global brands', d: 'Curated hardware from Lutron, Crestron, Control4, Sonos and Hikvision — engineered, supported and certified to perform in Indian conditions over a decade-plus lifecycle.' },
      { icon: 'fa-headset', t: 'Lifetime remote support', d: 'A dedicated technical concierge with proactive monitoring, predictive maintenance and one-tap remote diagnostics — long after the install team leaves your driveway.' },
      { icon: 'fa-leaf', t: 'Energy savings of 30–50%', d: 'Smart scheduling, occupancy intelligence and load profiling reduce HVAC and lighting consumption measurably — most homes recover their automation investment within three to five years.' }
    ],
    'hr-solutions': [
      { icon: 'fa-people-arrows', t: 'End-to-end people operations', d: 'Recruitment, onboarding, payroll, statutory compliance and L&D handled by a single accountable partner — so leadership can focus on strategy instead of HR firefighting.' },
      { icon: 'fa-map-location-dot', t: 'Pan-India hiring network', d: 'Sourcing engines and recruiter pods across thirty-plus cities, blending niche specialists with high-volume bench delivery for technical, leadership and frontline roles.' },
      { icon: 'fa-clipboard-check', t: '100% statutory compliance', d: 'PF, ESIC, PT, gratuity, POSH and labour-law obligations administered with zero-defect audit trails — your liability surface, fully owned and documented.' },
      { icon: 'fa-stopwatch', t: '72-hour turnarounds', d: 'Most active mandates receive shortlisted, screened candidates within three working days — because vacant seats cost more than a fast hire ever will.' }
    ],
    'it-solutions': [
      { icon: 'fa-rupee-sign', t: 'Tailored to SME budgets', d: 'Right-sized engineering pods, transparent rate cards and pay-as-you-grow infrastructure — enterprise capability without the enterprise overhead.' },
      { icon: 'fa-arrows-rotate', t: 'Ongoing managed services', d: 'A 24x7 NOC, change management, patching cadence and quarterly architecture reviews — we don’t hand over and disappear; we operate alongside you for the long run.' },
      { icon: 'fa-shield-virus', t: 'Security-first development', d: 'OWASP-aligned SDLC, hardened cloud baselines, identity-aware access and pen-test gates on every release — security engineered in, never bolted on.' },
      { icon: 'fa-cloud-arrow-up', t: 'Scalable cloud-native stack', d: 'Containerised, observable, multi-region architectures on AWS, Azure and GCP — designed to scale linearly with your business and survive its toughest growth quarters.' }
    ],
    'business-solutions': [
      { icon: 'fa-compass', t: 'Strategy that translates to action', d: 'We align operational execution with measurable business goals, ensuring every initiative creates tangible impact instead of theoretical planning.' },
      { icon: 'fa-chart-pie', t: 'Decisions backed by data', d: 'Unified dashboards, cohort analytics and KPI instrumentation give leadership a single, trusted source of truth — so strategy meetings stop debating numbers and start choosing direction.' },
      { icon: 'fa-handshake-angle', t: 'Hands-on delivery, not slideware', d: 'Senior consultants embed with your teams to operationalise the plan — process change, hiring, tooling — long after the kickoff workshop ends.' },
      { icon: 'fa-rocket', t: 'Built for SME pace and budgets', d: 'Frameworks, sprints and pricing engineered for founder-led businesses — outcomes in weeks, not the multi-quarter cycles of legacy consulting firms.' }
    ]
  }[slug];

  const labelWords = data.label.split(' ');
  const firstWord = labelWords[0];
  const restWords = labelWords.slice(1).join(' ') || 'solutions';

  return (
    <div>
      {/* Service hero */}
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
            <h1 style={{ maxWidth: 1100, fontFamily: "Instrument Serif" }}>
              {firstWord}{' '}
              <span className="italic" style={{ color: '#F05885' }}>{restWords}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead" style={{ marginTop: '2rem', maxWidth: 680 }}>{data.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Service items */}
      <Section>
        <SectionHead number="§ Services" eyebrow="Full scope" title={'Everything under one <span class="italic accent-mark">roof</span>.'} />
        <div className="edit-grid cols-3">
          {data.items.map((it, i) => (
            <Reveal key={it.id} delay={i % 3 * 50}>
              <div onClick={openGetInTouch} className="edit-cell lift" style={{ cursor: 'pointer' }}>
                <div className="icon-chip icon-chip-sq"><i className={'fa-solid ' + it.icon}></i></div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', fontFamily: "serif" }}>{it.label}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{it.desc}</p>
                <div className="btn-link" style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--accent)', alignSelf: 'flex-start' }}>Enquire <span className="arrow">→</span></div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section alt>
        <SectionHead number="§ Why" eyebrow="What sets us apart" title={'Built for <span class="italic accent-mark" style="font-family: Times New Roman">' + (slug === 'hr-solutions' ? 'HR solutions' : slug === 'it-solutions' ? 'IT solutions' : data.label.toLowerCase()) + '</span>.'} />
        <div className="premium-grid cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 60}>
              <div className="premium-card">
                <div className="pc-icon"><i className={'fa-solid ' + b.icon}></i></div>
                <h3 className="pc-title" style={{ fontFamily: "serif" }}>{b.t}</h3>
                <p className="pc-desc">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Standardized site CTA */}
      <HomeCTA openGetInTouch={openGetInTouch} navigate={navigate} />
    </div>
  );
};

export const IBhavanAbout2 = ({ navigate, openGetInTouch }) => {
  const IMG = IBHAVAN_IMG;
  const mvv = [
    { n: '01', t: 'Mission', d: 'To be the most trusted partner for businesses and homeowners seeking measurable outcomes across smart living, workforce, and technology.' },
    { n: '02', t: 'Vision', d: 'A future where intelligent systems — human and digital — work together seamlessly, making daily life more efficient and fulfilling.' },
    { n: '03', t: 'Values', d: 'Reliability. Transparency. Continuous improvement. We measure success by the long-term trust our clients place in us.' }
  ];

  const pillars = [
    { icon: 'fa-shield-halved', t: 'Reliability', d: 'Show up, every time. SLAs we publish, processes we audit, and a culture engineered to deliver consistently — the unglamorous work that compounds into trust.' },
    { icon: 'fa-eye', t: 'Transparency', d: 'Clear pricing, honest timelines, and the uncomfortable conversations early — we believe candour is the fastest path to durable client relationships.' },
    { icon: 'fa-handshake', t: 'Partnership', d: 'We win when our clients win. Long-horizon engagements over short-term billing — our incentives are designed to align with your outcomes, not our utilisation.' },
    { icon: 'fa-rotate', t: 'Continuous improvement', d: 'Quarterly reviews, post-mortems and a relentless bias for doing better next time — we don’t scale by repeating ourselves; we scale by learning faster.' },
    { icon: 'fa-lock', t: 'Compliance & Trust', d: 'Statutory, data and information-security obligations met without exception — the foundation that lets every other promise we make actually hold.' }
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="ambient-hero" style={{ opacity: 0.5 }}>
          <div className="orb orb-1" style={{ top: '20%', left: '60%' }}></div>
          <div className="orb orb-3" style={{ bottom: '10%', left: '5%' }}></div>
        </div>
        <div className="container">
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
            <div className="about-photos">
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
        <div className="edit-grid cols-3">
          {mvv.map((v) => (
            <Reveal key={v.t} delay={80}>
              <div className="edit-cell">
                <div className="num" style={{ marginBottom: '2rem' }}>{v.n}</div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "serif" }}>{v.t}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7 }}>{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHead number="§ 04" eyebrow="Our values" title={'The <span class="italic accent-mark">five pillars</span> we work by.'} subtitle="A short list of the principles that guide every engagement, every hire, and every product decision at iBhavan." />
        <div className="premium-grid cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="premium-card">
                <div className="pc-icon"><i className={'fa-solid ' + p.icon}></i></div>
                <h3 className="pc-title" style={{ fontFamily: "serif" }}>{p.t}</h3>
                <p className="pc-desc">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <HomeCTA openGetInTouch={openGetInTouch} navigate={navigate} />
    </div>
  );
};
