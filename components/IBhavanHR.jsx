
const HRBadge = ({ children, color = '#F472B6' }) => (
  <span style={{
    display: 'inline-block', background: color + '18', color, border: `1px solid ${color}33`,
    borderRadius: 20, padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
  }}>{children}</span>
);

const HRServiceCard = ({ icon, title, subservices }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: '#fff', borderRadius: 16, padding: '2rem',
      boxShadow: hov ? '0 12px 36px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.05)',
      border: `1.5px solid ${hov ? '#F472B6' : 'transparent'}`,
      transform: hov ? 'translateY(-5px)' : 'none', transition: 'all 0.3s ease',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12, background: 'rgba(244,114,182,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1rem',
      }}>{icon}</div>
      <h3 style={{ fontWeight: 700, color: '#0F1F4A', fontSize: '1.05rem', marginBottom: '1rem' }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {subservices.map(s => (
          <li key={s} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#475569', fontSize: '0.87rem' }}>
            <span style={{ color: '#F472B6', marginTop: 2, flexShrink: 0 }}>◆</span> {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RolePill = ({ label, desc, color }) => (
  <div style={{
    background: '#fff', borderRadius: 14, padding: '1.5rem',
    border: `2px solid ${color}22`, boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    flex: 1, minWidth: 200, textAlign: 'center',
  }}>
    <div style={{
      width: 56, height: 56, borderRadius: '50%', background: color + '15',
      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem',
    }}>
      {color === '#38BDF8' ? '🏗️' : color === '#F472B6' ? '💼' : '👔'}
    </div>
    <div style={{ fontWeight: 700, color: '#0F1F4A', marginBottom: '0.4rem' }}>{label}</div>
    <div style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</div>
  </div>
);

const IBhavanHR = ({ setCurrentPage }) => {
  const navigate = (id) => { setCurrentPage(id); window.scrollTo({ top: 0 }); };

  const industries = [
    { icon: '🏭', name: 'Manufacturing / Plants', desc: 'Skilled & semi-skilled workforce for production lines' },
    { icon: '💻', name: 'IT & Software', desc: 'Tech talent from developers to architects' },
    { icon: '🏗️', name: 'Real Estate & Construction', desc: 'Site engineers, project managers, labourers' },
    { icon: '🛍️', name: 'Retail', desc: 'Store operations, visual merchandising, management' },
    { icon: '🏦', name: 'BFSI', desc: 'Finance, banking, insurance professionals' },
    { icon: '🚀', name: 'Startups', desc: 'Agile hiring solutions for fast-growing teams' },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1E0635 0%, #3A0D5A 50%, #200B42 100%)',
        padding: '5rem 2rem 6rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(244,114,182,0.15) 0%,transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.1) 0%,transparent 70%)' }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#F472B6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>
            HOME → HR SOLUTIONS
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Comprehensive HR Solutions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Your end-to-end HR partner — from sourcing top talent to managing payroll, compliance, and employee growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('contact')} style={{
              background: 'linear-gradient(135deg,#F472B6,#DB2777)', color: '#fff', border: 'none',
              borderRadius: 8, padding: '0.8rem 1.8rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(244,114,182,0.35)',
            }}>Partner with Us</button>
            <button onClick={() => navigate('contact')} style={{
              background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 8, padding: '0.8rem 1.8rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
            }}>Hire Talent Now</button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <HRBadge>End-to-End Partner</HRBadge>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '1rem', lineHeight: 1.25 }}>
                Every HR Need,<br/>One Partner
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.8 }}>
                From your first hire to your thousandth, iBhavan handles every aspect of your human capital journey — 
                recruitment, compliance, payroll, training, and strategic consulting.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { n: '200+', l: 'Talents Placed', c: '#F472B6' },
                  { n: '50+', l: 'Clients Served', c: '#38BDF8' },
                  { n: '98%', l: 'Client Retention', c: '#F472B6' },
                  { n: '100%', l: 'Compliance Rate', c: '#38BDF8' },
                ].map(({ n, l, c }) => (
                  <div key={l} style={{
                    background: '#F4F7FB', borderRadius: 14, padding: '1.5rem', textAlign: 'center',
                    border: `2px solid ${c}22`,
                  }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: c }}>{n}</div>
                    <div style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '0.3rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <HRBadge>Our Services</HRBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>What We Do</h2>
            <p style={{ color: '#64748B', marginTop: '0.5rem' }}>Full-spectrum HR capabilities for every business stage</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <HRServiceCard icon="🎯" title="Recruitment & Talent Acquisition" subservices={[
              'Bulk hiring for large-scale requirements',
              'Niche & specialist role sourcing',
              'Leadership & C-suite hiring',
              'Contract & temp staffing',
            ]} />
            <HRServiceCard icon="💰" title="Payroll Management" subservices={[
              'End-to-end salary processing',
              'Statutory compliance integration',
              'Payslip generation & distribution',
              'TDS & tax computation',
            ]} />
            <HRServiceCard icon="📋" title="Statutory Compliance" subservices={[
              'PF, ESIC & labour law compliance',
              'Audit support & documentation',
              'Regulatory filing & returns',
              'Compliance health checks',
            ]} />
            <HRServiceCard icon="⚙️" title="HR Operations" subservices={[
              'Employee lifecycle management',
              'Attendance & leave systems',
              'Onboarding & offboarding',
              'HR MIS & analytics',
            ]} />
            <HRServiceCard icon="📚" title="Training & Development" subservices={[
              'Skill development programs',
              'Leadership & management training',
              'Induction & onboarding modules',
              'Behavioural & soft skills',
            ]} />
            <HRServiceCard icon="🧠" title="HR Consulting" subservices={[
              'HR policy design & handbook',
              'Organisation structuring',
              'Compensation benchmarking',
              'Performance management design',
            ]} />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <HRBadge color="#38BDF8">Sector Expertise</HRBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Industries We Serve</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {industries.map(({ icon, name, desc }) => (
              <div key={name} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                background: '#F4F7FB', borderRadius: 14, padding: '1.5rem', border: '1px solid #E2E8F0',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: 'rgba(244,114,182,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0F1F4A', fontSize: '0.92rem' }}>{name}</div>
                  <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.25rem', lineHeight: 1.55 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Coverage */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <HRBadge>Role Coverage</HRBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>We Hire Across All Levels</h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <RolePill color="#38BDF8" label="Blue-Collar Workforce"
              desc="Skilled and semi-skilled workers for manufacturing, construction, logistics, and field operations." />
            <RolePill color="#F472B6" label="White-Collar Roles"
              desc="Functional professionals across finance, HR, operations, sales, IT, and administration." />
            <RolePill color="#6366F1" label="Leadership Roles"
              desc="C-suite, VP, director, and senior management positions requiring precision and discretion." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg,#1E0635,#3A0D5A)', padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #F472B6 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Build Your Dream Team Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Tell us your hiring needs. We'll do the rest.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('contact')} style={{
              background: 'linear-gradient(135deg,#F472B6,#DB2777)', color: '#fff', border: 'none',
              borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(244,114,182,0.35)',
            }}>Partner with Us</button>
            <button onClick={() => navigate('careers')} style={{
              background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
            }}>View Open Roles</button>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanHR });
