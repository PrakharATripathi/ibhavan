import React from 'react';
import { IBHAVAN_SERVICES, IBHAVAN_IMG } from '../data/IBhavanData.js';
import { Reveal, Counter, Section, SectionHead, HomeCTA } from './IBhavanShared.jsx';

export const IBhavanHome2 = ({ navigate, openGetInTouch }) => {
  const services = IBHAVAN_SERVICES;
  const IMG = IBHAVAN_IMG;

  const domains = [
    { id: 'smart-home', num: '01', title: 'Smart Home Automation', tagline: 'Automation for modern living', body: 'From lighting and climate to security and voice, we design unified smart-home systems that work quietly and reliably, every day.', img: IMG.smartHome },
    { id: 'hr-solutions', num: '02', title: 'HR Solutions', tagline: 'People operations, end-to-end', body: 'Recruitment, payroll, statutory compliance, leadership development, and POSH training for organisations that take their workforce seriously.', img: IMG.hr },
    { id: 'it-solutions', num: '03', title: 'IT Solutions', tagline: 'Technology for growing businesses', body: 'Custom software, managed cloud, cybersecurity, and business applications tailored to the budgets and pace of small and mid-sized businesses.', img: IMG.it },
    { id: 'business-solutions', num: '04', title: 'Business Solutions', tagline: 'Strategy, operations & growth advisory', body: 'Strategy, finance, operations, sales enablement, and analytics — practical, hands-on consulting that turns ambition into operating systems.', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop' }
  ];

  const stats = [
    { n: 500, s: '+', l: 'Smart Homes Delivered' },
    { n: 10000, s: '+', l: 'Successful Placements' },
    { n: 150, s: '+', l: 'Enterprise Clients' },
    { n: 7, s: '+', l: 'Years in Business' }
  ];

  const whyUs = [
    { icon: 'fa-medal', t: 'Specialist depth', d: 'Domain experts in every service line — automation engineers, HR partners, and senior developers who own outcomes end-to-end, never generalists stretched thin.' },
    { icon: 'fa-stopwatch', t: 'SLA-backed delivery', d: 'Measurable turnarounds across recruitment pipelines, audit cycles, and deployment timelines — committed in writing and tracked transparently.' },
    { icon: 'fa-shield-halved', t: 'Compliance-first', d: 'Statutory, data privacy, and information security obligations met without exception — fully audited processes engineered for regulated environments.' },
    { icon: 'fa-link', t: 'A single partner', d: 'One relationship, one accountability owner across every practice — fewer vendors, faster decisions, and a shared roadmap for your home and business.' }
  ];

  return (
    <div>
      {/* HERO */}
      <section className="page-hero" style={{ paddingBottom: 'clamp(4rem,8vw,6rem)' }}>
        <div className="ambient-hero">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-dot" style={{ marginBottom: '2.5rem' }}>Smart Home Automation · HR · IT · Business Solutions</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{ maxWidth: 1200, marginBottom: '2rem', fontFamily: "Instrument Serif" }}>
              Transforming everyday<br />
              living, <span className="italic accent-mark">at home</span> and<br />
              at <span className="italic accent-mark">work.</span>
            </h1>
          </Reveal>
          <div className="hero-split">
            <Reveal delay={180}>
              <p className="lead" style={{ maxWidth: 520 }}>
                iBhavan is a multi-domain services firm helping homes and organisations across India adopt intelligent systems — from smart-home automation to end-to-end HR and IT for growing businesses.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <button onClick={openGetInTouch} className="btn btn-dark">Start a conversation <span className="arrow">→</span></button>
                <button onClick={() => navigate('about')} className="btn btn-ghost">About us</button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={340}>
            <div className="hero-domains">
              {domains.map((d) => (
                <div key={d.id} onClick={() => navigate(d.id)} className="photo-card lift" style={{ aspectRatio: '4/3', cursor: 'pointer' }}>
                  <img src={d.img} alt={d.title} loading="lazy" />
                  <div className="photo-num">{d.num}</div>
                  <div className="photo-caption">{d.title}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--border-soft)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div>
                  <div className="stat-num"><Counter to={s.n} suffix={s.s} /></div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 200, lineHeight: 1.5 }}>{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <Section>
        <SectionHead number="§ 01" eyebrow="What we do"
          title={'Four practices,<br/>one <span class="italic accent-mark">unified</span> approach.'}
          subtitle="We believe reliability compounds. Whether you're building a smart home or scaling a workforce, we bring the same rigour, the same specialists, and the same accountability." />

        <ul className="link-list" style={{ borderTop: '1px solid var(--border-soft)', listStyle: 'none' }}>
          {domains.map((d, i) => (
            <Reveal key={d.id} delay={i * 80}>
              <li onClick={() => navigate(d.id)} style={{ padding: 'clamp(1.75rem,3vw,2.25rem) 0', alignItems: 'flex-start' }}>
                <div className="domain-row">
                  <span className="num" style={{ paddingTop: '0.5rem', minWidth: 32 }}>{d.num}</span>
                  <div style={{ minWidth: 0 }}>
                    <div className="ll-title" style={{ fontSize: 'clamp(1.7rem,2.6vw,2.4rem)', fontFamily: "Instrument Serif" }}>{d.title}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.55rem' }}>{d.tagline}</div>
                  </div>
                  <p className="dr-body" style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7, paddingTop: '0.25rem' }}>{d.body}</p>
                  <div className="dr-thumb photo-card" style={{ aspectRatio: '4/3' }}>
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>
                </div>
                <span className="ll-arrow" style={{ paddingTop: '0.75rem', fontSize: '1.1rem', marginLeft: '1rem' }}>→</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* WHY CHOOSE US */}
      <Section alt>
        <SectionHead number="§ 02" eyebrow="Why choose us"
          title={'A different kind of <span class="italic accent-mark">partner</span>.'}
          subtitle="Four reasons clients across India trust iBhavan to run the systems behind their homes and businesses." />
        <div className="premium-grid cols-4">
          {whyUs.map((f, i) => (
            <Reveal key={f.t} delay={i * 60}>
              <div className="premium-card">
                <div className="pc-icon"><i className={'fa-solid ' + f.icon}></i></div>
                <h3 className="pc-title" style={{ fontFamily: "serif" }}>{f.t}</h3>
                <p className="pc-desc">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WORK MOSAIC */}
      <Section>
        <SectionHead number="§ 03" eyebrow="Moments from our work"
          title={'Deployed in the wild, <span class="italic accent-mark">every day</span>.'} />
        <div className="mosaic">
          <div className="photo-card" style={{ gridColumn: 'span 7', gridRow: 'span 3' }}>
            <img src={IMG.mosaic1} alt="Smart living room" loading="lazy" />
            <div className="photo-num">01</div>
            <div className="photo-caption">Residential · Bengaluru</div>
          </div>
          <div className="photo-card" style={{ gridColumn: 'span 5', gridRow: 'span 2' }}>
            <img src={IMG.mosaic2} alt="Team working" loading="lazy" />
            <div className="photo-num">02</div>
            <div className="photo-caption">HR Operations · Mumbai</div>
          </div>
          <div className="photo-card" style={{ gridColumn: 'span 5', gridRow: 'span 1' }}>
            <img src={IMG.mosaic3} alt="Server infrastructure" loading="lazy" />
            <div className="photo-num">03</div>
            <div className="photo-caption">Managed Cloud</div>
          </div>
          <div className="photo-card" style={{ gridColumn: 'span 4', gridRow: 'span 2' }}>
            <img src={IMG.mosaic4} alt="Home office automation" loading="lazy" />
            <div className="photo-num">04</div>
            <div className="photo-caption">Home Office</div>
          </div>
          <div className="photo-card" style={{ gridColumn: 'span 4', gridRow: 'span 2' }}>
            <img src={IMG.mosaic5} alt="Office space" loading="lazy" />
            <div className="photo-num">05</div>
            <div className="photo-caption">Hospitality</div>
          </div>
          <div className="photo-card" style={{ gridColumn: 'span 4', gridRow: 'span 2' }}>
            <img src={IMG.mosaic6} alt="Tech workspace" loading="lazy" />
            <div className="photo-num">06</div>
            <div className="photo-caption">IT Deployment</div>
          </div>
        </div>
      </Section>

      {/* Industries marquee */}
      <Section style={{ padding: 'clamp(3rem,6vw,4.5rem) 0' }}>
        <Reveal>
          <div className="num" style={{ textAlign: 'center', marginBottom: '2rem' }}>Trusted across industries</div>
        </Reveal>
        <div className="marquee">
          <div className="marquee-track">
            {[...['Residential', 'Hospitality', 'Manufacturing', 'Retail', 'Healthcare', 'Logistics', 'Education', 'BFSI', 'IT Services', 'FMCG'], ...['Residential', 'Hospitality', 'Manufacturing', 'Retail', 'Healthcare', 'Logistics', 'Education', 'BFSI', 'IT Services', 'FMCG']].map((t, i) => (
              <span key={i} style={{ fontFamily: 'Instrument Serif,serif', fontSize: 'clamp(1.4rem,2vw,1.9rem)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {t} <span style={{ color: 'var(--accent)', margin: '0 1.5rem', fontSize: '1rem' }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <HomeCTA openGetInTouch={openGetInTouch} navigate={navigate} />
    </div>
  );
};
