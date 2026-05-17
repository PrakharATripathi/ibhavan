
const SmBadge = ({ children, color = '#38BDF8' }) => (
  <span style={{
    display: 'inline-block', background: color + '18', color, border: `1px solid ${color}33`,
    borderRadius: 20, padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
  }}>{children}</span>
);

const SmCard = ({ icon, title, desc, features }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: '#fff', borderRadius: 16, padding: '1.75rem',
      boxShadow: hov ? '0 12px 36px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.06)',
      border: `1.5px solid ${hov ? '#38BDF8' : 'transparent'}`,
      transform: hov ? 'translateY(-5px)' : 'none', transition: 'all 0.3s ease',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12, background: 'rgba(56,189,248,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem',
      }}>{icon}</div>
      <h3 style={{ fontWeight: 700, color: '#0F1F4A', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1rem' }}>{desc}</p>
      {features && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {features.map(f => (
            <li key={f} style={{ color: '#475569', fontSize: '0.82rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: '#38BDF8', fontSize: '0.7rem' }}>✔</span> {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const UseCaseCard = ({ icon, title, desc }) => (
  <div style={{
    display: 'flex', gap: '1rem', alignItems: 'flex-start',
    background: '#fff', borderRadius: 14, padding: '1.5rem',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #E8EDF5',
  }}>
    <div style={{
      width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
    }}>{icon}</div>
    <div>
      <div style={{ fontWeight: 700, color: '#0F1F4A', marginBottom: '0.3rem' }}>{title}</div>
      <div style={{ color: '#64748B', fontSize: '0.87rem', lineHeight: 1.6 }}>{desc}</div>
    </div>
  </div>
);

const IBhavanSmartHome = ({ setCurrentPage }) => {
  const navigate = (id) => { setCurrentPage(id); window.scrollTo({ top: 0 }); };

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #102248 0%, #102248 60%, #112454 100%)',
        padding: '5rem 2rem 6rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>
            HOME → SMART HOME SOLUTIONS
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Smart Home & Automation
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Transform your space with intelligent automation — from lighting and security to climate and appliances, 
            all unified in one seamless ecosystem.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('contact')} style={{
              background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', border: 'none',
              borderRadius: 8, padding: '0.8rem 1.8rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
            }}>Request a Demo</button>
            <button onClick={() => navigate('contact')} style={{
              background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 8, padding: '0.8rem 1.8rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
            }}>Get Custom Quote</button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <SmBadge>The Ecosystem</SmBadge>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '1rem' }}>
                One Platform,<br/>Total Control
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                iBhavan's smart home ecosystem connects all your devices, appliances, and security systems 
                into a single intelligent platform — controlled from anywhere via app, voice, or automation triggers.
              </p>
              <p style={{ color: '#64748B', lineHeight: 1.8 }}>
                Whether you're building from scratch or upgrading an existing space, our modular architecture 
                adapts to your needs and budget.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{
                background: 'linear-gradient(135deg,#0F1F4A,#1A3470)', borderRadius: 20, padding: '2rem',
              }}>
                {[
                  { icon: '📱', label: 'Remote Control', sub: 'Control everything from your phone' },
                  { icon: '🔋', label: 'Energy Efficient', sub: 'Reduce bills by up to 40%' },
                  { icon: '🔗', label: 'Fully Integrated', sub: 'Works with major platforms' },
                  { icon: '🔒', label: 'Secure by Design', sub: 'End-to-end encrypted' },
                ].map(({ icon, label, sub }) => (
                  <div key={label} style={{
                    display: 'flex', gap: '1rem', alignItems: 'center',
                    padding: '0.9rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, background: 'rgba(56,189,248,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                    }}>{icon}</div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SmBadge>What We Offer</SmBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Product Categories</h2>
            <p style={{ color: '#64748B', marginTop: '0.5rem' }}>Comprehensive automation across every domain of your home</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <SmCard icon="💡" title="Smart Lighting Systems"
              desc="Automated, mood-responsive lighting with scene control, schedules, and energy monitoring."
              features={['Dimmable LED integration', 'Motion-triggered scenes', 'Voice & app control', 'Energy usage dashboard']} />
            <SmCard icon="🔒" title="Smart Security"
              desc="Complete security suite — CCTV, sensors, smart locks, and access control in one unified system."
              features={['HD CCTV with night vision', 'Motion & intrusion sensors', 'Smart door locks', 'Real-time alerts']} />
            <SmCard icon="🌡️" title="Smart Climate Control"
              desc="Intelligent HVAC management for optimal comfort and energy savings, auto-adjusting to occupancy."
              features={['Smart AC control', 'Occupancy-based adjustment', 'Remote thermostat', 'Energy reports']} />
            <SmCard icon="🏠" title="Smart Appliance Integration"
              desc="Connect and automate your existing appliances — kitchen, entertainment, and utility devices."
              features={['Universal device compatibility', 'Scheduled automation', 'Usage monitoring', 'OTA updates']} />
            <SmCard icon="🎙️" title="Voice Control Systems"
              desc="Full Alexa, Google Home, and Siri compatibility for hands-free control of your entire home."
              features={['Multi-assistant support', 'Custom voice commands', 'Group control', 'Routine automation']} />
            <SmCard icon="📊" title="Smart Energy Management"
              desc="Monitor and optimise your home's energy consumption in real time for maximum efficiency."
              features={['Live consumption tracking', 'Solar integration ready', 'Smart metering', 'Cost analytics']} />
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SmBadge color="#F472B6">Delivery Models</SmBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Solution Types</h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '📦', title: 'Individual Products', desc: 'Pick and choose specific devices — smart switches, cameras, or thermostats — without full automation commitment.' },
              { icon: '🔧', title: 'Customised Solutions', desc: 'Fully bespoke automation design, engineered around your floorplan, lifestyle, and preferences.' },
              { icon: '🧩', title: 'Modular Systems', desc: 'Start small and expand. Our modular architecture lets you add capabilities as your needs grow.' },
              { icon: '🏢', title: 'Enterprise Solutions', desc: 'Scalable deployments for office complexes, industrial sites, and large residential developments.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                flex: 1, minWidth: 220, background: '#F4F7FB', borderRadius: 16, padding: '1.75rem',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, color: '#0F1F4A', marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SmBadge>Applications</SmBadge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A' }}>Where We Deploy</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <UseCaseCard icon="🏡" title="Residential Homes" desc="Complete home automation for bungalows and villas — lighting, security, climate, and entertainment." />
            <UseCaseCard icon="🏢" title="Apartments & Societies" desc="Centralised automation and access control for apartments, gated communities, and housing societies." />
            <UseCaseCard icon="🏗️" title="Offices & Commercial" desc="Smart offices with automated HVAC, lighting schedules, visitor management, and energy dashboards." />
            <UseCaseCard icon="🏭" title="Industrial Applications" desc="Industrial-grade automation for factories, warehouses, and production facilities." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#102248,#102248)', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Ready to Automate Your Space?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', fontSize: '1.05rem' }}>
          Get a free consultation and custom quote tailored to your property.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('contact')} style={{
            background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', border: 'none',
            borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
          }}>Request a Demo</button>
          <button onClick={() => navigate('products')} style={{
            background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
            borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
          }}>View All Products</button>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanSmartHome });
