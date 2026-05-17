
const IBhavanFooter = ({ navigate, openGetInTouch }) => {
  const link = { color: 'var(--text-muted)', fontSize: '0.88rem', cursor: 'pointer', display: 'block', padding: '0.5rem 0', transition: 'color 0.2s' };
  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--text)', padding: '5rem 2rem 2rem', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div style={{ gridColumn: 'span 2', maxWidth: 320 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem' }}>
              <img src="uploads/Loho.png" style={{ height: 38, width: 38, objectFit: 'cover', objectPosition: 'left center', borderRadius: 4 }}/>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: '1.55rem', letterSpacing: '-0.02em' }}>iBhavan</div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Smart Home automation, HR Solutions, and IT Services — under one reliable roof. Transforming everyday living since 2014.</p>
          </div>
          <div>
            <div className="num" style={{ marginBottom: '1rem' }}>Services</div>
            {[['Smart Home','smart-home'],['HR Solutions','hr-solutions'],['IT Solutions','it-solutions'],['Business Solutions','business-solutions']].map(([l,id]) => (
              <span key={l} style={link} onClick={() => navigate(id)} onMouseEnter={e=>e.target.style.color='var(--accent)'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{l}</span>
            ))}
          </div>
          <div>
            <div className="num" style={{ marginBottom: '1rem' }}>Company</div>
            {[['About','about'],['Products','products'],['Blogs','blogs'],['Careers','careers']].map(([l,id]) => (
              <span key={l} style={link} onClick={() => navigate(id)} onMouseEnter={e=>e.target.style.color='var(--accent)'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{l}</span>
            ))}
          </div>
          <div>
            <div className="num" style={{ marginBottom: '1rem' }}>Contact</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 2 }}>
              <div>+91 98765 43210</div>
              <div>info@ibhavan.com</div>
              <div>Bengaluru, India</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '2rem', borderTop: '1px solid var(--border-soft)', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
          <div>© 2026 iBhavan. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span style={{ cursor: 'pointer' }}>Privacy</span>
            <span style={{ cursor: 'pointer' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { IBhavanFooter });
