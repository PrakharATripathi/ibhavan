
const { useState, useEffect, useRef } = React;

const Reveal = ({ children, delay = 0, style }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const t = setTimeout(() => setSeen(true), 40);
      return () => clearTimeout(t);
    }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    obs.observe(ref.current);
    const fallback = setTimeout(() => setSeen(true), 1200);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);
  return <div ref={ref} className={'reveal' + (seen ? ' in' : '')} style={{ transitionDelay: delay + 'ms', ...style }}>{children}</div>;
};

const Counter = ({ to, suffix = '', duration = 1400 }) => {
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    // Fallback: if visible already (rect intersects viewport), kick off after a beat
    const fallback = setTimeout(() => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) start();
    }, 600);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
};

const Section = ({ children, alt = false, style, narrow = false }) => (
  <section style={{ padding: 'clamp(4rem,9vw,7rem) 2rem', background: alt ? 'var(--bg-alt)' : 'var(--bg)', ...style }}>
    <div style={{ maxWidth: narrow ? 980 : 1320, margin: '0 auto' }}>{children}</div>
  </section>
);

// Editorial section header with number + eyebrow
const SectionHead = ({ number, eyebrow, title, subtitle, maxWidth = 720 }) => (
  <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
    <Reveal>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {number && <span className="num" style={{ whiteSpace: 'nowrap' }}>{number}</span>}
        {eyebrow && <span className="eyebrow" style={{ whiteSpace: 'nowrap' }}>{eyebrow}</span>}
      </div>
    </Reveal>
    <Reveal delay={80}>
      <h2 style={{ maxWidth, marginBottom: subtitle ? '1rem' : 0 }} dangerouslySetInnerHTML={{ __html: title }} />
    </Reveal>
    {subtitle && <Reveal delay={160}><p className="lead" style={{ maxWidth: 620 }}>{subtitle}</p></Reveal>}
  </div>
);

const Modal = ({ open, onClose, children, title, subtitle }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const h = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', h);
      return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
    }
  }, [open, onClose]);
  return (
    <div className={'modal-backdrop' + (open ? ' open' : '')} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
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

const GetInTouchModal = ({ open, onClose }) => {
  const [type, setType] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => { if (!open) setTimeout(() => { setType(null); setSubmitted(false); setForm({ name:'', email:'', phone:'', message:'' }); setErrors({}); }, 350); }, [open]);

  const typeOpts = [
    { id: 'smart', num: '01', title: 'Smart Home Solutions', desc: 'Automation, security, climate.' },
    { id: 'hr', num: '02', title: 'HR Services', desc: 'Recruitment, payroll, compliance.' },
    { id: 'it', num: '03', title: 'IT Solutions', desc: 'Software, websites, cloud.' },
  ];

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) er.email = 'Valid email required';
    if (!form.message.trim()) er.message = 'Required';
    if (Object.keys(er).length) { setErrors(er); return; }
    setSubmitted(true);
  };

  const selected = typeOpts.find(t => t.id === type);

  return (
    <Modal open={open} onClose={onClose}
      title={submitted ? 'Thank you.' : (type ? selected.title : <>Let's <span className="italic accent-mark">talk.</span></>)}
      subtitle={submitted ? "We've received your message." : (type ? "We'll respond within 24 hours." : 'What brings you here today?')}>
      {submitted ? (
        <div style={{ padding: '1rem 0' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
            Thanks, <span style={{ color: 'var(--text)', fontWeight: 500 }}>{form.name}</span>. Our team will be in touch at <span style={{ color: 'var(--text)' }}>{form.email}</span> shortly.
          </p>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      ) : !type ? (
        <div className="link-list" style={{ listStyle: 'none' }}>
          {typeOpts.map(t => (
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
            <input className="inp" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" />
            {errors.name && <div style={{ color: 'var(--accent)', fontSize: '0.76rem', marginTop: 4 }}>{errors.name}</div>}
          </div>
          <div>
            <label className="label">Email</label>
            <input className="inp" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@company.com" />
            {errors.email && <div style={{ color: 'var(--accent)', fontSize: '0.76rem', marginTop: 4 }}>{errors.email}</div>}
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="inp" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 ..." />
          </div>
          <div>
            <label className="label">Message</label>
            <textarea className="inp" rows={2} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Briefly describe what you need..." style={{ resize: 'vertical' }} />
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

Object.assign(window, { Reveal, Counter, Section, SectionHead, Modal, GetInTouchModal });
