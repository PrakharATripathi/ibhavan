
const IBhavanNav = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'smart-home', label: 'Smart Home' },
    { id: 'hr-solutions', label: 'HR Solutions' },
    { id: 'it-solutions', label: 'IT Solutions' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' },
    { id: 'careers', label: 'Careers' },
  ];

  const nav = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(10,22,54,0.98)' : 'rgba(10,22,54,0.95)',
    backdropFilter: 'blur(12px)',
    boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.25)' : 'none',
    transition: 'all 0.3s ease',
    borderBottom: scrolled ? '1px solid rgba(56,189,248,0.15)' : 'none',
  };

  const inner = {
    maxWidth: 1280, margin: '0 auto', padding: '0 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 72,
  };

  const logoArea = {
    display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', flexShrink: 0,
  };

  const linkStyle = (id) => ({
    color: currentPage === id ? '#38BDF8' : 'rgba(255,255,255,0.85)',
    fontWeight: currentPage === id ? 600 : 400,
    fontSize: '0.875rem',
    letterSpacing: '0.02em',
    cursor: 'pointer',
    padding: '0.35rem 0',
    borderBottom: currentPage === id ? '2px solid #38BDF8' : '2px solid transparent',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  });

  const ctaBtn = {
    background: 'linear-gradient(135deg, #F472B6, #DB2777)',
    color: '#fff', border: 'none', borderRadius: 6,
    padding: '0.45rem 1.1rem', fontSize: '0.85rem', fontWeight: 600,
    cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 2px 12px rgba(244,114,182,0.3)',
    whiteSpace: 'nowrap',
  };

  const navigate = (id) => {
    setCurrentPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={nav}>
      <div style={inner}>
        <div style={logoArea} onClick={() => navigate('home')}>
          <img src="uploads/Loho.png" alt="iBhavan icon"
            style={{ height: 44, width: 46, objectFit: 'cover', objectPosition: 'left center', flexShrink: 0 }} />
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.18rem', fontFamily: 'Montserrat, sans-serif', lineHeight: 1, letterSpacing: '-0.01em' }}>iBhavan</div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', letterSpacing: '0.07em', marginTop: 2, whiteSpace: 'nowrap' }}>TRANSFORMING EVERYDAY LIVING</div>
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <span key={l.id} style={linkStyle(l.id)}
              onClick={() => navigate(l.id)}
              onMouseEnter={e => { if (currentPage !== l.id) e.target.style.color = '#fff'; }}
              onMouseLeave={e => { if (currentPage !== l.id) e.target.style.color = 'rgba(255,255,255,0.85)'; }}>
              {l.label}
            </span>
          ))}
          <button style={ctaBtn}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 4px 16px rgba(244,114,182,0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 2px 12px rgba(244,114,182,0.3)'; }}
            onClick={() => navigate('contact')}>
            Get in Touch
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          color: '#fff', fontSize: '1.5rem', padding: '0.25rem',
        }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,22,54,0.99)', padding: '1rem 2rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
          borderTop: '1px solid rgba(56,189,248,0.2)',
        }}>
          {links.map(l => (
            <span key={l.id} style={{ ...linkStyle(l.id), fontSize: '1rem' }} onClick={() => navigate(l.id)}>
              {l.label}
            </span>
          ))}
          <button style={{ ...ctaBtn, width: 'fit-content', fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}
            onClick={() => navigate('contact')}>Get in Touch</button>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { IBhavanNav });
