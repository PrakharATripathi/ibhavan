
const SBadge = ({ children, color = '#38BDF8' }) => (
  <span style={{
    display: 'inline-block', background: color + '18', color, border: `1px solid ${color}33`,
    borderRadius: 20, padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
  }}>{children}</span>
);

const ValueCard = ({ num, title, desc, icon }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: '#fff', borderRadius: 16, padding: '2rem',
      boxShadow: hov ? '0 10px 36px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.05)',
      border: `1.5px solid ${hov ? '#38BDF8' : 'transparent'}`,
      transform: hov ? 'translateY(-5px)' : 'none', transition: 'all 0.3s ease', flex: 1, minWidth: 200,
    }}>
      <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{icon}</div>
      <div style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>{num}</div>
      <h3 style={{ fontWeight: 700, color: '#0F1F4A', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
};

const LeaderCard = ({ name, role, initials }) => (
  <div style={{
    background: '#fff', borderRadius: 16, padding: '2rem', textAlign: 'center',
    boxShadow: '0 2px 14px rgba(0,0,0,0.06)', flex: 1, minWidth: 200,
  }}>
    <div style={{
      width: 72, height: 72, borderRadius: '50%',
      background: 'linear-gradient(135deg, #102248, #38BDF8)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto 1rem', color: '#fff', fontWeight: 800, fontSize: '1.4rem',
    }}>{initials}</div>
    <div style={{ fontWeight: 700, color: '#0F1F4A', fontSize: '1rem' }}>{name}</div>
    <div style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '0.3rem' }}>{role}</div>
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
      {['in', 'tw'].map(s => (
        <div key={s} style={{
          width: 30, height: 30, borderRadius: '50%', background: '#F1F5F9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#64748B', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
        }}>{s}</div>
      ))}
    </div>
  </div>
);

const IBhavanAbout = ({ setCurrentPage }) => {
  const navigate = (id) => { setCurrentPage(id); window.scrollTo({ top: 0 }); };

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #102248 0%, #102248 100%)',
        padding: '5rem 2rem 6rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 400, height: 400,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
        }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>
            HOME → ABOUT US
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1.25rem' }}>
            Who We Are
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, fontSize: '1.05rem', lineHeight: 1.8 }}>
            iBhavan was born from a simple vision — to make both living spaces and workplaces smarter, 
            more efficient, and future-ready.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <SBadge>Our Story</SBadge>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '1rem', lineHeight: 1.25 }}>
                Dual Expertise,<br/>One Mission
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: '1rem' }}>
                iBhavan is a forward-thinking company operating at the intersection of smart technology 
                and human capital management. We believe the future belongs to organisations and homes 
                that seamlessly blend intelligence with efficiency.
              </p>
              <p style={{ color: '#64748B', lineHeight: 1.8 }}>
                Founded with a commitment to innovation and reliability, we serve clients across India — 
                from individual homeowners seeking automation to enterprises building high-performing teams.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{
                background: '#F4F7FB', borderRadius: 20, padding: '2.5rem',
                border: '1px solid #E2E8F0',
              }}>
                <img src="uploads/Loho.png" alt="iBhavan" style={{ height: 80, objectFit: 'contain', marginBottom: '1.5rem' }} />
                <div style={{ color: '#0F1F4A', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  "Transforming Everyday Living"
                </div>
                <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.9rem' }}>
                  Our tagline embodies our commitment — to elevate the everyday experience of homes and 
                  workplaces through technology and talent.
                </p>
                <div style={{
                  display: 'flex', gap: '1rem', marginTop: '1.5rem',
                  borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem',
                }}>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8' }}>500+</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Projects</div>
                  </div>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F472B6' }}>200+</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Placements</div>
                  </div>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8' }}>50+</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Industries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SBadge>Direction</SBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Vision & Mission</h2>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{
              flex: 1, minWidth: 280, background: 'linear-gradient(135deg, #0F1F4A, #1A3470)',
              borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(56,189,248,0.1)' }}/>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔭</div>
              <div style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>OUR VISION</div>
              <p style={{ color: '#fff', fontSize: '1.05rem', lineHeight: 1.75, fontWeight: 500 }}>
                To become India's most trusted dual-domain partner — transforming every home into an intelligent 
                ecosystem and every organisation into a talent-powered enterprise.
              </p>
            </div>
            <div style={{
              flex: 1, minWidth: 280, background: 'linear-gradient(135deg, #1A3470, #112454)',
              borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(244,114,182,0.1)' }}/>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
              <div style={{ color: '#F472B6', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>OUR MISSION</div>
              <p style={{ color: '#fff', fontSize: '1.05rem', lineHeight: 1.75, fontWeight: 500 }}>
                Deliver innovative, reliable, and scalable Smart Home and HR solutions that drive measurable 
                value — tailored precisely to the ambitions of every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SBadge color="#F472B6">What We Stand For</SBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <ValueCard num="01" icon="💡" title="Innovation" desc="We constantly explore emerging technologies and methodologies to deliver forward-thinking solutions." />
            <ValueCard num="02" icon="🛡️" title="Reliability" desc="Our clients trust us to deliver on time, every time — with consistent quality and zero compromise." />
            <ValueCard num="03" icon="🔧" title="Customisation" desc="No two clients are alike. Every solution we build is tailored to your specific goals and constraints." />
            <ValueCard num="04" icon="📈" title="Scalability" desc="From a single home to an enterprise campus, our solutions grow as you grow." />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SBadge>The Team</SBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Leadership</h2>
            <p style={{ color: '#64748B', marginTop: '0.5rem' }}>The visionaries driving iBhavan forward</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <LeaderCard initials="AK" name="Anil Kumar" role="Founder & CEO" />
            <LeaderCard initials="SP" name="Sunita Patel" role="Head, Smart Solutions" />
            <LeaderCard initials="RV" name="Rahul Verma" role="Head, HR Services" />
            <LeaderCard initials="PM" name="Pooja Mehta" role="Chief Operating Officer" />
          </div>
        </div>
      </section>

      {/* Unique Advantage */}
      <section style={{
        background: 'linear-gradient(135deg, #102248, #102248)',
        padding: '5rem 2rem', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SBadge>The iBhavan Edge</SBadge>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Why We're Different
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Most companies specialize in one domain. iBhavan's dual expertise means we understand both the 
            technology ecosystems of modern homes and the human dynamics of modern workplaces — 
            giving us a uniquely holistic perspective.
          </p>
          <button onClick={() => navigate('contact')} style={{
            background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)', color: '#fff',
            border: 'none', borderRadius: 8, padding: '0.9rem 2.2rem',
            fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
          }}>Work With Us</button>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanAbout });
