import React from 'react';

export const IBhavanFooter = ({ navigate, openGetInTouch }) => {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,8vw,6rem) 2rem 3rem' }}>
      <div className="container" style={{ padding: 0 }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem', cursor: 'pointer' }} onClick={() => navigate('home')}>
              <img src="uploads/Loho.png" alt="" style={{ height: 38, width: 38, objectFit: 'cover', borderRadius: 4 }} />
              <span style={{ fontFamily: 'Instrument Serif,serif', fontSize: '1.65rem', color: 'var(--text)', lineHeight: 1 }}>iBhavan</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, maxWidth: 360, marginBottom: '1.5rem' }}>
              Integrated solutions for modern living and enterprise operations. Smart home automation, HR, IT, and business advisory under one accountable roof.
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
              <a href="#" style={{ color: 'inherit' }}><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" style={{ color: 'inherit' }}><i className="fa-brands fa-twitter"></i></a>
              <a href="#" style={{ color: 'inherit' }}><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '1.25rem' }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('smart-home')}>Smart Home Automation</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('hr-solutions')}>HR Solutions</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('it-solutions')}>IT Solutions</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('business-solutions')}>Business Solutions</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '1.25rem' }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('about')}>About us</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('products')}>Products</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('blogs')}>Blog</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('careers')}>Careers</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '1.25rem' }}>Contact</div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Bengaluru HQ<br />1st Floor, Indiranagar<br />Bengaluru, Karnataka 560038
            </div>
            <button onClick={openGetInTouch} className="btn-link" style={{ fontSize: '0.88rem' }}>Get in touch <span className="arrow">→</span></button>
          </div>
        </div>

        <div className="hairline" style={{ margin: '3rem 0 2rem' }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          <div>© {new Date().getFullYear()} iBhavan. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
