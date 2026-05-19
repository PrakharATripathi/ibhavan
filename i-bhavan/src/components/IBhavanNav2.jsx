import React, { useState, useEffect, useRef } from 'react';
import { IBHAVAN_SERVICES } from '../data/IBhavanData.js';

export const IBhavanNav2 = ({ currentPage, navigate, openGetInTouch, theme, toggleTheme }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState('smart-home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    const onOut = (e) => {if (wrapRef.current && !wrapRef.current.contains(e.target)) setServicesOpen(false);};
    document.addEventListener('click', onOut);
    return () => {window.removeEventListener('scroll', onScroll);document.removeEventListener('click', onOut);};
  }, []);

  const services = IBHAVAN_SERVICES;
  const openMega = () => {clearTimeout(closeTimer.current);setServicesOpen(true);};
  const scheduleClose = () => {closeTimer.current = setTimeout(() => setServicesOpen(false), 140);};

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: '__services', label: 'Services', hasDropdown: true },
    { id: 'products', label: 'Products' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'careers', label: 'Careers' }
  ];

  const go = (id) => {setServicesOpen(false);setMobileOpen(false);setMobileServicesOpen(false);navigate(id);};
  const serviceNums = { 'smart-home': '01', 'hr-solutions': '02', 'it-solutions': '03', 'business-solutions': '04' };
  const activeData = services[activeService];

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => go('home')}>
          <img src="/uploads/Loho.png" alt="" />
          <div className="logo-stack">
            <div className="name" style={{ fontSize: "25px", fontFamily: "Instrument Serif" }}>iBhavan</div>
            <div className="slogan">Integrated Solutions</div>
          </div>
        </div>

        <div className="nav-links" ref={wrapRef}>
          {links.map((l) => {
            if (l.hasDropdown) {
              return (
                <div key={l.id} style={{ position: 'relative' }} onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                  <div className={'nav-item' + (servicesOpen ? ' open' : '') + (['smart-home', 'hr-solutions', 'it-solutions', 'business-solutions'].includes(currentPage) ? ' active' : '')}
                    onClick={() => setServicesOpen(!servicesOpen)}>
                    {l.label} <span className="chev">▾</span>
                  </div>
                  <div className={'mega' + (servicesOpen ? ' open' : '')} onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                    <div className="mega-sidebar">
                      <div className="mega-title">Our Services</div>
                      {Object.entries(services).map(([k, s]) => (
                        <div key={k} className={'mega-sidebar-item' + (activeService === k ? ' active' : '')}
                          onMouseEnter={() => setActiveService(k)} onClick={() => go(k)}>
                          <span className="ms-num">{serviceNums[k]}</span>
                          <span className="ms-label">{s.label}</span>
                          <span className="ms-arrow">→</span>
                        </div>
                      ))}
                    </div>
                    <div className="mega-panel">
                      <div className="mega-head">
                        <div>
                          <div className="mh-t">{activeData.label}</div>
                          <div className="mh-s">{activeData.tagline}</div>
                        </div>
                        <span onClick={() => go(activeService)} className="btn-link">View all<span className="arrow">→</span></span>
                      </div>
                      {activeData.items.map((item) => (
                        <div key={item.id} className="mega-service" onClick={() => go(activeService)}>
                          <i className={'fa-solid ' + item.icon + ' sv-icon'}></i>
                          <span className="sv-title">{item.label}</span>
                          <span className="sv-arrow">→</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={l.id} className={'nav-item' + (currentPage === l.id ? ' active' : '')} onClick={() => go(l.id)}>
                {l.label}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">{theme === 'dark' ? '☀' : '🌙'}</button>
          <button onClick={openGetInTouch} className="btn btn-dark nav-item-hide" style={{ padding: '0.6rem 1.15rem', fontSize: '0.82rem' }}>
            Get in Touch<span className="arrow">→</span>
          </button>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? '✕' : '☰'}</button>
        </div>
      </div>

      <div className={'mobile-menu' + (mobileOpen ? ' open' : '')}>
        {links.map((l) => {
          if (l.hasDropdown) {
            return (
              <React.Fragment key={l.id}>
                <div className="mobile-menu-item" style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                  Services <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>{mobileServicesOpen ? '–' : '+'}</span>
                </div>
                {mobileServicesOpen && Object.entries(services).map(([k, s]) => (
                  <div key={k} className="mobile-menu-item mobile-sub" onClick={() => go(k)}>— {s.label}</div>
                ))}
              </React.Fragment>
            );
          }
          return <div key={l.id} className="mobile-menu-item" onClick={() => go(l.id)}>{l.label}</div>;
        })}
        <button onClick={() => {openGetInTouch();setMobileOpen(false);}} className="btn btn-dark" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
          Get in Touch<span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
};
