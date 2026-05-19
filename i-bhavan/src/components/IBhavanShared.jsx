import React, { useState, useEffect, useRef } from 'react';
import { IBHAVAN_IMG } from '../data/IBhavanData.js';

export const Reveal = ({ children, delay = 0, style }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const t = setTimeout(() => setSeen(true), 40);
      return () => clearTimeout(t);
    }
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) {setSeen(true);obs.disconnect();}}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    obs.observe(ref.current);
    const fallback = setTimeout(() => setSeen(true), 1200);
    return () => {obs.disconnect();clearTimeout(fallback);};
  }, []);
  return <div ref={ref} className={'reveal' + (seen ? ' in' : '')} style={{ transitionDelay: delay + 'ms', ...style }}>{children}</div>;
};

export const Counter = ({ to, suffix = '', duration = 1400 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);
  useEffect(() => {
    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      tick();
    };
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) start();}, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    const fallback = setTimeout(() => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) start();
    }, 600);
    return () => {obs.disconnect();clearTimeout(fallback);};
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
};

export const Section = ({ children, alt = false, style, narrow = false }) => (
  <section style={{ padding: 'clamp(4rem,9vw,7rem) 2rem', background: alt ? 'var(--bg-alt)' : 'var(--bg)', ...style }}>
    <div style={{ maxWidth: narrow ? 980 : 1320, margin: '0 auto' }}>{children}</div>
  </section>
);

export const SectionHead = ({ number, eyebrow, title, subtitle, maxWidth = 720 }) => (
  <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
    <Reveal>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {number && <span className="num" style={{ whiteSpace: 'nowrap' }}>{number}</span>}
        {eyebrow && <span className="eyebrow" style={{ whiteSpace: 'nowrap' }}>{eyebrow}</span>}
      </div>
    </Reveal>
    <Reveal delay={80}>
      <h2 style={{ maxWidth, marginBottom: subtitle ? '1rem' : 0, fontFamily: "Instrument Serif" }} dangerouslySetInnerHTML={{ __html: title }} />
    </Reveal>
    {subtitle && <Reveal delay={160}><p className="lead" style={{ maxWidth: 620 }}>{subtitle}</p></Reveal>}
  </div>
);

export const Modal = ({ open, onClose, children, title, subtitle }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const h = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', h);
      return () => {document.body.style.overflow = '';window.removeEventListener('keydown', h);};
    }
  }, [open, onClose]);
  return (
    <div className={'modal-backdrop' + (open ? ' open' : '')} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            {title && <h3 style={{ fontSize: '1.75rem', color: 'var(--text)', lineHeight: 1.15 }}>{title}</h3>}
            {subtitle && <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{subtitle}</p>}
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export const GetInTouchModal = ({ open, onClose }) => {
  const [type, setType] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {if (!open) setTimeout(() => {setType(null);setSubmitted(false);setForm({ name: '', email: '', phone: '', message: '' });setErrors({});}, 350);}, [open]);

  const typeOpts = [
    { id: 'smart', num: '01', title: 'Smart Home Automation', desc: 'Automation, security, climate.' },
    { id: 'hr', num: '02', title: 'HR Services', desc: 'Recruitment, payroll, compliance.' },
    { id: 'it', num: '03', title: 'IT Solutions', desc: 'Software, websites, cloud.' },
    { id: 'business', num: '04', title: 'Business Solutions', desc: 'Strategy, operations, finance.' }
  ];

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) er.email = 'Valid email required';
    if (!form.message.trim()) er.message = 'Required';
    if (Object.keys(er).length) {setErrors(er);return;}
    setSubmitted(true);
  };

  const selected = typeOpts.find((t) => t.id === type);

  return (
    <Modal open={open} onClose={onClose}
      title={submitted ? 'Thank you.' : type ? selected.title : <>Let's <span className="italic accent-mark">talk.</span></>}
      subtitle={submitted ? "We've received your message." : type ? "We'll respond within 24 hours." : 'What brings you here today?'}>
      {submitted ? (
        <div style={{ padding: '1rem 0' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
            Thanks, <span style={{ color: 'var(--text)', fontWeight: 500 }}>{form.name}</span>. Our team will be in touch at <span style={{ color: 'var(--text)' }}>{form.email}</span> shortly.
          </p>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      ) : !type ? (
        <div className="link-list" style={{ listStyle: 'none' }}>
          {typeOpts.map((t) => (
            <li key={t.id} onClick={() => setType(t.id)} style={{ padding: '1.1rem 0' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <span className="num">{t.num}</span>
                  <div className="ll-title">{t.title}</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '0.35rem', marginLeft: '2.1rem' }}>{t.desc}</div>
              </div>
              <span className="ll-arrow">→</span>
            </li>
          ))}
        </div>
      ) : (
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-soft)' }}>
            <span className="num">{selected.num}</span>
            <span style={{ fontFamily: 'Instrument Serif,serif', fontSize: '1.15rem', color: 'var(--text)', flex: 1 }}>{selected.title}</span>
            <button type="button" onClick={() => setType(null)} className="btn-link" style={{ fontSize: '0.78rem' }}>Change</button>
          </div>
          <div>
            <label className="label">Name</label>
            <input className="inp" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
            {errors.name && <div style={{ color: 'var(--accent)', fontSize: '0.76rem', marginTop: 4 }}>{errors.name}</div>}
          </div>
          <div>
            <label className="label">Email</label>
            <input className="inp" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
            {errors.email && <div style={{ color: 'var(--accent)', fontSize: '0.76rem', marginTop: 4 }}>{errors.email}</div>}
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="inp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." />
          </div>
          <div>
            <label className="label">Message</label>
            <textarea className="inp" rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Briefly describe what you need..." style={{ resize: 'vertical' }} />
            {errors.message && <div style={{ color: 'var(--accent)', fontSize: '0.76rem', marginTop: 4 }}>{errors.message}</div>}
          </div>
          <button type="submit" className="btn btn-dark" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            Send message <span className="arrow">→</span>
          </button>
        </form>
      )}
    </Modal>
  );
};

export const HomeCTA = ({ openGetInTouch, navigate, secondaryAction }) => {
  const secondary = secondaryAction || { label: 'View careers', onClick: () => navigate && navigate('careers') };
  return (
    <section className="cta-photo-bg" style={{ padding: 'clamp(5rem,10vw,8rem) 2rem' }}>
      <img src={IBHAVAN_IMG.ctaBackdrop} alt="" loading="lazy" />
      <div className="container" style={{ position: 'relative', padding: 0 }}>
        <div className="cta-closer" style={{ borderTop: 'none', paddingTop: 0 }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', color: '#F5F4F0' }}>
              Ready to begin? <span style={{ color: '#F05885', fontStyle: 'italic' }}>Let's talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(245,244,240,0.82)', marginBottom: '2rem', maxWidth: 480 }}>
                Share your requirement in a short note, and we'll route it to the right specialist team within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={openGetInTouch} style={{ background: '#F5F4F0', color: '#0A0A0A', padding: '0.95rem 1.6rem', fontSize: '0.88rem', fontWeight: 500, borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: '0.65rem', border: 'none', cursor: 'pointer' }}>Get in touch <span>→</span></button>
                <button onClick={secondary.onClick} style={{ background: 'transparent', color: '#F5F4F0', padding: '0.95rem 1.6rem', fontSize: '0.88rem', fontWeight: 500, borderRadius: 999, border: '1px solid rgba(245,244,240,0.4)', display: 'inline-flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>{secondary.label}</button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
