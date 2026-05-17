
const ITBadge = ({ children, color = '#38BDF8' }) => (
  <span style={{
    display: 'inline-block', background: color + '18', color, border: `1px solid ${color}33`,
    borderRadius: 20, padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
  }}>{children}</span>
);

const ITServiceCard = ({ icon, title, desc, points, accent = '#38BDF8' }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: '#fff', borderRadius: 16, padding: '2rem',
      boxShadow: hov ? '0 14px 40px rgba(0,0,0,0.11)' : '0 2px 14px rgba(0,0,0,0.05)',
      border: `1.5px solid ${hov ? accent : 'transparent'}`,
      transform: hov ? 'translateY(-5px)' : 'none', transition: 'all 0.3s ease',
    }}>
      <div style={{
        width: 54, height: 54, borderRadius: 14, background: accent + '18',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', marginBottom: '1.1rem',
      }}>{icon}</div>
      <h3 style={{ fontWeight: 700, color: '#0F2050', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1rem' }}>{desc}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {points.map(p => (
          <li key={p} style={{ display: 'flex', gap: '0.5rem', color: '#475569', fontSize: '0.82rem' }}>
            <span style={{ color: accent, flexShrink: 0, fontSize: '0.7rem', marginTop: 3 }}>✔</span> {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

const IBhavanIT = ({ setCurrentPage }) => {
  const navigate = (id) => { setCurrentPage(id); window.scrollTo({ top: 0 }); };

  const services = [
    {
      icon: '💻', title: 'Custom Software Development',
      desc: 'Tailor-made applications designed around your business workflows, from concept to deployment.',
      points: ['Web & desktop applications', 'API development & integration', 'Legacy system modernisation', 'SaaS product development'],
    },
    {
      icon: '🌐', title: 'Website Design & Development',
      desc: 'Professional, fast, and mobile-responsive websites that convert visitors into customers.',
      points: ['Corporate & portfolio sites', 'E-commerce platforms', 'CMS-based websites', 'Landing pages & microsites'],
    },
    {
      icon: '🛡️', title: 'Cybersecurity Solutions',
      desc: 'Protect your business from threats with end-to-end security assessments, tools, and monitoring.',
      points: ['Vulnerability assessments', 'Firewall & endpoint security', 'Data encryption & backup', 'Security audits & compliance'],
      accent: '#F472B6',
    },
    {
      icon: '📦', title: 'ERP & Business Software',
      desc: 'Streamline operations with integrated ERP systems built for small to mid-scale enterprises.',
      points: ['Inventory & supply chain', 'Finance & accounting modules', 'HR & payroll integration', 'Custom ERP configuration'],
    },
    {
      icon: '☁️', title: 'Cloud & Storage Solutions',
      desc: 'Reliable, scalable cloud infrastructure and secure data storage tailored to your business size.',
      points: ['Cloud migration & setup', 'Managed cloud hosting', 'Secure backup & recovery', 'Hybrid storage solutions'],
      accent: '#F472B6',
    },
    {
      icon: '🤖', title: 'IT Support & Managed Services',
      desc: 'Proactive IT management so you can focus on your business, not your infrastructure.',
      points: ['Helpdesk & remote support', 'Network setup & maintenance', 'Hardware procurement', 'SLA-based monitoring'],
    },
    {
      icon: '📊', title: 'Business Intelligence & Analytics',
      desc: 'Turn your raw data into actionable insights with dashboards, reports, and analytics tools.',
      points: ['Custom dashboards', 'Data warehouse setup', 'Reporting automation', 'KPI tracking systems'],
    },
    {
      icon: '📱', title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile apps for Android and iOS, built for performance and usability.',
      points: ['iOS & Android apps', 'React Native / Flutter', 'App store deployment', 'Post-launch maintenance'],
      accent: '#F472B6',
    },
  ];

  const targetClients = [
    { icon: '🏪', label: 'Retail & Trading' },
    { icon: '🏥', label: 'Healthcare Clinics' },
    { icon: '🏗️', label: 'Construction & Real Estate' },
    { icon: '🏭', label: 'Small Manufacturers' },
    { icon: '📚', label: 'Education & Training' },
    { icon: '🍽️', label: 'Hospitality & F&B' },
    { icon: '🚛', label: 'Logistics & Transport' },
    { icon: '💼', label: 'Professional Services' },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1230 0%, #102248 50%, #0D1E45 100%)',
        padding: '5rem 2rem 6rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)' }}/>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>
            HOME → IT SOLUTIONS
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: 20, padding: '0.35rem 1rem', marginBottom: '1.5rem', color: '#38BDF8', fontSize: '0.82rem', fontWeight: 600 }}>
            <span>◉</span> FOR SMALL & MID-SCALE BUSINESSES
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>
            IT Solutions Built<br/>
            <span style={{ color: '#38BDF8' }}>for Your Scale</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Affordable, scalable technology solutions — custom software, cybersecurity, ERP, cloud, and more — 
            designed specifically for small to mid-scale companies ready to grow.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('contact')} style={{
              background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', border: 'none',
              borderRadius: 8, padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(56,189,248,0.35)',
            }}>Get a Free IT Consultation</button>
            <button onClick={() => navigate('contact')} style={{
              background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 8, padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
            }}>Request a Demo</button>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', flexWrap: 'wrap' }}>
            {[['50+', 'Projects Delivered'], ['30+', 'Clients Served'], ['5+', 'Years Experience'], ['100%', 'On-Time Delivery']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8' }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why iBhavan for IT */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <ITBadge>Why Choose Us</ITBadge>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F2050', marginBottom: '1rem', lineHeight: 1.25 }}>
                Technology at a Price<br/>That Makes Sense
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Most IT firms are built for enterprises. iBhavan is different — we design, price, and 
                deliver solutions that fit the realities of small and mid-scale businesses without compromising quality.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { icon: '⚡', t: 'Fast Turnaround', d: 'MVP to deployment in weeks, not months.' },
                  { icon: '💰', t: 'SME-Friendly Pricing', d: 'Transparent, milestone-based pricing models.' },
                  { icon: '🔧', t: 'End-to-End Support', d: 'Design, build, deploy and maintain — all under one roof.' },
                  { icon: '🔒', t: 'Security-First', d: 'Every solution is built with cybersecurity in mind from day one.' },
                ].map(({ icon, t, d }) => (
                  <div key={t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(56,189,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#0F2050', fontSize: '0.93rem' }}>{t}</div>
                      <div style={{ color: '#64748B', fontSize: '0.85rem', marginTop: 2, lineHeight: 1.6 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: 'linear-gradient(135deg,#0F2050,#1A3470)', borderRadius: 20, padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(56,189,248,0.1)' }}/>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>OUR PROCESS</div>
                {[
                  { n: '01', t: 'Discovery & Scoping', s: 'We understand your business and define the right solution.' },
                  { n: '02', t: 'Design & Prototype', s: 'Wireframes and mockups for your approval before any code.' },
                  { n: '03', t: 'Agile Development', s: 'Iterative builds with regular demos and feedback loops.' },
                  { n: '04', t: 'Deploy & Support', s: 'Launch with confidence — we stay on for ongoing support.' },
                ].map(({ n, t, s }) => (
                  <div key={n} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.9rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', marginTop: 2, flexShrink: 0 }}>{n}</span>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>{t}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: 2 }}>{s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <ITBadge>Our IT Services</ITBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F2050' }}>What We Build & Manage</h2>
            <p style={{ color: '#64748B', marginTop: '0.5rem', maxWidth: 520, margin: '0.5rem auto 0' }}>
              Full-stack IT capabilities for every stage of your business journey
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map(s => <ITServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <ITBadge color="#F472B6">Target Clients</ITBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F2050' }}>Who We Work With</h2>
            <p style={{ color: '#64748B', marginTop: '0.5rem' }}>Small to mid-scale businesses across diverse sectors</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {targetClients.map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: '#F4F7FB', border: '1.5px solid #E2E8F0', borderRadius: 12,
                padding: '0.7rem 1.3rem', fontSize: '0.9rem', fontWeight: 500, color: '#334155',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages teaser */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <ITBadge>Engagement Models</ITBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F2050' }}>Flexible Engagement Options</h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '📋', title: 'Project-Based', desc: 'Fixed scope, fixed price. Ideal for defined deliverables like a website, app, or ERP setup.', tag: 'Most Popular' },
              { icon: '🔄', title: 'Retainer / AMC', desc: 'Monthly managed services for ongoing IT support, security monitoring, and maintenance.', tag: null },
              { icon: '👥', title: 'Dedicated Team', desc: 'A dedicated team of developers, designers, or IT staff embedded into your operations.', tag: 'Enterprise' },
            ].map(({ icon, title, desc, tag }) => (
              <div key={title} style={{ flex: 1, minWidth: 240, background: '#fff', borderRadius: 16, padding: '2rem', border: '1.5px solid #E2E8F0', position: 'relative' }}>
                {tag && (
                  <div style={{ position: 'absolute', top: -10, right: 20, background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', borderRadius: 20, padding: '0.2rem 0.8rem', fontSize: '0.73rem', fontWeight: 700 }}>{tag}</div>
                )}
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, color: '#0F2050', fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ color: '#64748B', fontSize: '0.87rem', lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg,#0A1230,#102248)', padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Ready to Digitise Your Business?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
            Get a free consultation and a no-obligation IT roadmap for your company.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('contact')} style={{
              background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', border: 'none',
              borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(56,189,248,0.35)',
            }}>Start the Conversation</button>
            <button onClick={() => navigate('about')} style={{
              background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
            }}>Learn About iBhavan</button>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanIT });
