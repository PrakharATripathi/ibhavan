
const SectionBadge = ({ children, color = '#38BDF8' }) => (
  <span style={{
    display: 'inline-block', background: color + '18', color, border: `1px solid ${color}33`,
    borderRadius: 20, padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
  }}>{children}</span>
);

const HomeServiceCard = ({ icon, title, desc, accent, onClick }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff', borderRadius: 16, padding: '2rem 1.75rem',
        boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.12)' : '0 2px 16px rgba(0,0,0,0.06)',
        border: `1.5px solid ${hov ? accent : 'transparent'}`,
        transform: hov ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s ease', cursor: 'pointer', flex: 1, minWidth: 280,
      }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: accent + '18',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem', marginBottom: '1.25rem',
      }}>{icon}</div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F1F4A', marginBottom: '0.6rem' }}>{title}</h3>
      <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.93rem', marginBottom: '1.25rem' }}>{desc}</p>
      <span style={{ color: accent, fontWeight: 600, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 4 }}>
        Learn More <span style={{ fontSize: '1rem' }}>→</span>
      </span>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div style={{ textAlign: 'center', padding: '1.5rem' }}>
    <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38BDF8', lineHeight: 1 }}>{number}</div>
    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginTop: '0.4rem', fontWeight: 500 }}>{label}</div>
  </div>
);

const FeatureRow = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
    <div style={{
      width: 44, height: 44, borderRadius: 10, background: 'rgba(56,189,248,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.1rem', flexShrink: 0,
    }}>{icon}</div>
    <div>
      <div style={{ fontWeight: 600, color: '#0F1F4A', fontSize: '0.95rem' }}>{title}</div>
      <div style={{ color: '#64748B', fontSize: '0.87rem', marginTop: '0.2rem', lineHeight: 1.6 }}>{desc}</div>
    </div>
  </div>
);

const TestimonialCard = ({ quote, name, role, company }) => (
  <div style={{
    background: '#fff', borderRadius: 16, padding: '1.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    border: '1px solid #E8EDF5', flex: 1, minWidth: 260,
  }}>
    <div style={{ color: '#38BDF8', fontSize: '1.8rem', lineHeight: 1, marginBottom: '0.75rem' }}>"</div>
    <p style={{ color: '#475569', lineHeight: 1.75, fontSize: '0.92rem', marginBottom: '1.25rem' }}>{quote}</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#38BDF8,#F472B6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.9rem',
      }}>{name[0]}</div>
      <div>
        <div style={{ fontWeight: 600, color: '#0F1F4A', fontSize: '0.9rem' }}>{name}</div>
        <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{role}, {company}</div>
      </div>
    </div>
  </div>
);

const IndustryTag = ({ label }) => (
  <div style={{
    background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 10,
    padding: '0.6rem 1.2rem', fontSize: '0.88rem', fontWeight: 500, color: '#334155',
    display: 'flex', alignItems: 'center', gap: '0.5rem',
  }}>
    <span style={{ color: '#38BDF8', fontSize: '0.9rem' }}>✦</span> {label}
  </div>
);

const IBhavanHome = ({ setCurrentPage }) => {
  const [heroHov1, setHeroHov1] = React.useState(false);
  const [heroHov2, setHeroHov2] = React.useState(false);

  const navigate = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #102248 0%, #102248 50%, #112454 100%)',
        position: 'relative', overflow: 'hidden', paddingTop: 72,
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: -200, right: -200, width: 700, height: 700,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: -100, left: -100, width: 500, height: 500,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}/>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 720 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)',
              borderRadius: 20, padding: '0.35rem 1rem', marginBottom: '1.75rem',
              color: '#38BDF8', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.06em',
            }}>
              <span>◉</span> SMART LIVING · SMARTER WORKFORCE
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff',
              lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Montserrat, sans-serif',
            }}>
              Smart Homes.<br />
              Smarter Teams.<br />
              <span style={{ color: '#38BDF8' }}>Stronger Business.</span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8,
              marginBottom: '2.5rem', maxWidth: 560,
            }}>
              iBhavan delivers Smart Home Automation, comprehensive HR Solutions, and IT Services 
              for small to mid-scale businesses — three powerful domains, one trusted partner.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('smart-home')}
                onMouseEnter={() => setHeroHov1(true)} onMouseLeave={() => setHeroHov1(false)}
                style={{
                  background: heroHov1 ? 'linear-gradient(135deg,#56C9F8,#38BDF8)' : 'linear-gradient(135deg,#38BDF8,#0EA5E9)',
                  color: '#fff', border: 'none', borderRadius: 8, padding: '0.85rem 2rem',
                  fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                  boxShadow: heroHov1 ? '0 6px 24px rgba(56,189,248,0.4)' : '0 2px 14px rgba(56,189,248,0.3)',
                  transform: heroHov1 ? 'translateY(-2px)' : 'none', transition: 'all 0.25s ease',
                }}>
                🏠 Smart Solutions
              </button>
              <button onClick={() => navigate('hr-solutions')}
                onMouseEnter={() => setHeroHov2(true)} onMouseLeave={() => setHeroHov2(false)}
                style={{
                  background: 'transparent', color: '#fff',
                  border: `1.5px solid ${heroHov2 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)'}`,
                  borderRadius: 8, padding: '0.85rem 2rem', fontSize: '1rem', fontWeight: 600,
                  cursor: 'pointer', transform: heroHov2 ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.25s ease', backdropFilter: 'blur(4px)',
                }}>
                👥 HR Services
              </button>
              <button onClick={() => navigate('it-solutions')}
                style={{
                  background: 'rgba(129,140,248,0.15)', color: '#818CF8',
                  border: '1.5px solid rgba(129,140,248,0.4)',
                  borderRadius: 8, padding: '0.85rem 2rem', fontSize: '1rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.25s ease', backdropFilter: 'blur(4px)',
                }}>
                💻 IT Solutions
              </button>
            </div>

            {/* Quick stats */}
            <div style={{
              display: 'flex', gap: '2.5rem', marginTop: '3.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem',
              flexWrap: 'wrap',
            }}>
              {[['500+', 'Smart Projects'], ['200+', 'Talent Placed'], ['50+', 'IT Clients'], ['98%', 'Satisfaction']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8' }}>{n}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW CARDS ── */}
      <section style={{ background: '#F4F7FB', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <SectionBadge>Our Domains</SectionBadge>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '0.75rem' }}>
              Three Domains. One Partner.
            </h2>
            <p style={{ color: '#64748B', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Whether you're automating your home, building a high-performing team, or digitising your business — iBhavan has the expertise.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <HomeServiceCard
              icon="🏠" title="Smart Home Solutions"
              desc="Automate your home with intelligent lighting, security, climate control, and appliance management. Seamless integration, remote control, and energy efficiency at your fingertips."
              accent="#38BDF8" onClick={() => navigate('smart-home')}
            />
            <HomeServiceCard
              icon="👥" title="HR Solutions"
              desc="End-to-end HR services including recruitment, payroll, statutory compliance, and talent development. Your trusted partner for building and managing world-class teams."
              accent="#F472B6" onClick={() => navigate('hr-solutions')}
            />
            <HomeServiceCard
              icon="💻" title="IT Solutions"
              desc="Custom software, cybersecurity, websites, ERP, cloud storage and managed IT — affordable technology built specifically for small to mid-scale businesses."
              accent="#818CF8" onClick={() => navigate('it-solutions')}
            />
          </div>
        </div>
      </section>

      {/* ── WHY IBHAVAN ── */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <SectionBadge>Why iBhavan</SectionBadge>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '1rem', lineHeight: 1.2 }}>
                One Partner.<br/>Infinite Possibilities.
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.75, marginBottom: '2rem' }}>
                We combine deep technology expertise with human capital insights to deliver solutions 
                that scale with your ambitions — whether at home or in the enterprise.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <FeatureRow icon="⚡" title="Dual Expertise" desc="Unique blend of smart technology and HR solutions under one roof." />
                <FeatureRow icon="🔧" title="Fully Customisable" desc="Every solution is tailored to your specific needs and scale." />
                <FeatureRow icon="🛡️" title="Compliance-Ready" desc="100% statutory compliance across all HR and tech deployments." />
                <FeatureRow icon="📈" title="Scalable Architecture" desc="Built to grow — from single homes to enterprise campuses." />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              {/* Visual block */}
              <div style={{
                background: 'linear-gradient(135deg, #0F1F4A 0%, #1A3470 100%)',
                borderRadius: 24, padding: '2.5rem', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -40, right: -40, width: 200, height: 200,
                  borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
                }}/>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                  CORE VALUES
                </div>
                {[
                  { v: '01', title: 'Innovation', sub: 'Pioneering solutions for tomorrow' },
                  { v: '02', title: 'Reliability', sub: 'Consistent, dependable delivery' },
                  { v: '03', title: 'Customisation', sub: 'Tailored to your unique context' },
                  { v: '04', title: 'Scalability', sub: 'Growing with you at every stage' },
                ].map(({ v, title, sub }) => (
                  <div key={v} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                    padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', marginTop: 2, flexShrink: 0 }}>{v}</span>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', marginTop: 2 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <SectionBadge>Industries We Serve</SectionBadge>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '2.5rem' }}>
            Trusted Across Sectors
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {['Manufacturing & Plants', 'IT & Software', 'Real Estate & Construction', 'Retail', 'BFSI', 'Startups', 'Residential', 'Hospitality', 'Healthcare'].map(i => (
              <IndustryTag key={i} label={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionBadge color="#F472B6">Client Stories</SectionBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <TestimonialCard
              quote="iBhavan transformed our office into a fully automated smart workspace. The installation was seamless and the ROI on energy savings has been remarkable."
              name="Rajesh Kumar" role="Facilities Head" company="TechPark Bangalore"
            />
            <TestimonialCard
              quote="Their HR team placed 120+ skilled professionals for our manufacturing plant within 45 days. Exceptional quality and compliance track record."
              name="Priya Nair" role="VP Operations" company="Apex Industries"
            />
            <TestimonialCard
              quote="The payroll and statutory compliance handled by iBhavan has saved us 30+ hours per month. Our team now focuses on what matters most."
              name="Anand Sharma" role="Founder" company="StartupHub"
            />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #102248 0%, #102248 100%)',
        padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}/>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Ready to Transform Your Future?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            Talk to our experts today — Smart Home or HR, we've got you covered.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('contact')} style={{
              background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)', color: '#fff',
              border: 'none', borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem',
              fontWeight: 600, cursor: 'pointer',
            }}>Get a Free Consultation</button>
            <button onClick={() => navigate('about')} style={{
              background: 'transparent', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.35)', borderRadius: 8,
              padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
            }}>Learn About Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanHome });
