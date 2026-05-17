
const PBadge = ({ children, color = '#38BDF8' }) => (
  <span style={{
    display: 'inline-block', background: color + '18', color, border: `1px solid ${color}33`,
    borderRadius: 20, padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 600,
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
  }}>{children}</span>
);

const ProductCard = ({ icon, title, category, features, useCase }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: '#fff', borderRadius: 16, overflow: 'hidden',
      boxShadow: hov ? '0 14px 40px rgba(0,0,0,0.12)' : '0 2px 14px rgba(0,0,0,0.06)',
      transform: hov ? 'translateY(-6px)' : 'none', transition: 'all 0.3s ease',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Image placeholder */}
      <div style={{
        height: 160, background: 'linear-gradient(135deg, #0F1F4A, #1A3470)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -30, right: -30, width: 120, height: 120,
          borderRadius: '50%', background: 'rgba(56,189,248,0.1)',
        }}/>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{icon}</div>
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(56,189,248,0.2)', border: '1px solid rgba(56,189,248,0.4)',
          borderRadius: 20, padding: '0.2rem 0.75rem', color: '#38BDF8', fontSize: '0.72rem', fontWeight: 600,
        }}>{category}</div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, #38BDF855, transparent)',
        }}/>
      </div>
      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontWeight: 700, color: '#0F1F4A', fontSize: '1rem', marginBottom: '0.75rem' }}>{title}</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
          {features.map(f => (
            <li key={f} style={{ display: 'flex', gap: '0.5rem', color: '#475569', fontSize: '0.83rem' }}>
              <span style={{ color: '#38BDF8', flexShrink: 0 }}>✔</span> {f}
            </li>
          ))}
        </ul>
        <div style={{
          background: '#F4F7FB', borderRadius: 8, padding: '0.6rem 0.9rem',
          fontSize: '0.8rem', color: '#64748B', marginBottom: '1rem',
        }}>
          <span style={{ fontWeight: 600, color: '#0F1F4A' }}>Use Case:</span> {useCase}
        </div>
        <button style={{
          background: hov ? 'linear-gradient(135deg,#38BDF8,#0EA5E9)' : '#F4F7FB',
          color: hov ? '#fff' : '#0F1F4A', border: 'none', borderRadius: 8,
          padding: '0.65rem', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer',
          transition: 'all 0.25s ease', width: '100%',
        }}>Enquire Now</button>
      </div>
    </div>
  );
};

const IBhavanProducts = ({ setCurrentPage }) => {
  const [filter, setFilter] = React.useState('All');
  const navigate = (id) => { setCurrentPage(id); window.scrollTo({ top: 0 }); };

  const categories = ['All', 'Lighting', 'Security', 'Climate', 'Appliances', 'Voice', 'Energy'];

  const products = [
    { icon: '💡', title: 'Smart Dimmer Switch', category: 'Lighting', features: ['Touch & app control', '0–100% dimming', 'Scene presets', 'Energy logging'], useCase: 'Living rooms, bedrooms, corridors' },
    { icon: '🔦', title: 'Motion Sensor Light', category: 'Lighting', features: ['PIR motion detection', '5m range', 'Auto-off timer', 'Low power mode'], useCase: 'Hallways, parking, outdoors' },
    { icon: '📷', title: 'HD CCTV System', category: 'Security', features: ['4K resolution', 'Night vision 30m', 'Cloud & local storage', 'Mobile alerts'], useCase: 'Homes, offices, retail' },
    { icon: '🔐', title: 'Smart Door Lock', category: 'Security', features: ['PIN, card & app unlock', 'Tamper alerts', 'Auto-lock schedule', 'Guest access codes'], useCase: 'Entry doors, apartments' },
    { icon: '📡', title: 'Motion & Intrusion Sensor', category: 'Security', features: ['360° detection', 'Pet-immune mode', 'Instant app alerts', 'Battery backup'], useCase: 'Perimeter security' },
    { icon: '❄️', title: 'Smart AC Controller', category: 'Climate', features: ['Works with all AC brands', 'Schedule & auto-off', 'Energy savings mode', 'Remote access'], useCase: 'Bedrooms, offices, hotels' },
    { icon: '🌡️', title: 'Smart Thermostat', category: 'Climate', features: ['Auto temperature scheduling', 'Occupancy sensing', 'Energy reports', 'Voice control'], useCase: 'Homes, villas, offices' },
    { icon: '🔌', title: 'Smart Plug', category: 'Appliances', features: ['Remote on/off', 'Power monitoring', 'Schedule automation', 'Overload protection'], useCase: 'Any home appliance' },
    { icon: '🍳', title: 'Smart Kitchen Hub', category: 'Appliances', features: ['Controls 5+ appliances', 'Recipe-based automation', 'Energy dashboard', 'Voice integration'], useCase: 'Modular kitchens' },
    { icon: '🎙️', title: 'Voice Control Hub', category: 'Voice', features: ['Alexa & Google support', 'Multi-room audio', 'Custom routines', 'Offline fallback'], useCase: 'Whole-home control' },
    { icon: '📊', title: 'Energy Monitor', category: 'Energy', features: ['Real-time consumption', 'Device-level tracking', 'Cost analytics', 'Solar ready'], useCase: 'Homes, factories, offices' },
    { icon: '⚡', title: 'Smart Circuit Breaker', category: 'Energy', features: ['Remote trip control', 'Load balancing', 'Fault detection', 'App notifications'], useCase: 'Residential & commercial panels' },
  ];

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg,#102248,#102248)', padding: '5rem 2rem 6rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)' }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>HOME → PRODUCTS</div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Smart Home Products
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.8 }}>
            Browse our full catalogue of smart home devices — individually sourced or bundled as complete automation solutions.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ background: '#F4F7FB', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem', alignItems: 'center' }}>
            <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600, marginRight: '0.5rem' }}>Filter:</span>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                background: filter === c ? 'linear-gradient(135deg,#38BDF8,#0EA5E9)' : '#fff',
                color: filter === c ? '#fff' : '#475569',
                border: filter === c ? 'none' : '1px solid #E2E8F0',
                borderRadius: 20, padding: '0.4rem 1rem', fontSize: '0.83rem',
                fontWeight: filter === c ? 600 : 400, cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: filter === c ? '0 2px 10px rgba(56,189,248,0.3)' : 'none',
              }}>{c}</button>
            ))}
          </div>

          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(p => <ProductCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <PBadge>Need Something Custom?</PBadge>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '0.75rem' }}>
          Can't Find What You're Looking For?
        </h2>
        <p style={{ color: '#64748B', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
          We design custom automation solutions for any property type or requirement. Talk to our experts.
        </p>
        <button onClick={() => navigate('contact')} style={{
          background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', border: 'none',
          borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
        }}>Request Custom Solution</button>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanProducts });
