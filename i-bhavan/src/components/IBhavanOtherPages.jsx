import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IBHAVAN_PRODUCTS, IBHAVAN_BLOGS, IBHAVAN_JOBS, IBHAVAN_IMG } from '../data/IBhavanData.js';
import { Reveal, Section, Modal, HomeCTA } from './IBhavanShared.jsx';

export const IBhavanProducts2 = ({ navigate, openGetInTouch }) => {
  const products = IBHAVAN_PRODUCTS;
  const cats = ['All', ...Array.from(new Set(products.map((p) => p.cat)))];
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? products : products.filter((p) => p.cat === cat);
  return (
    <div>
      <section className="service-hero" style={{ minHeight: 'clamp(380px,50vh,520px)' }}>
        <img src={IBHAVAN_IMG.product || 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1800&auto=format&fit=crop'} alt="Products" loading="lazy" />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-inner">
          <Reveal><div className="eyebrow eyebrow-dot" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.85)' }}>Products</div></Reveal>
          <Reveal delay={80}>
            <h1 style={{ maxWidth: 1100, fontFamily: "Instrument Serif" }}>
              Hardware for a <span className="italic" style={{ color: '#F05885', fontFamily: "Instrument Serif" }}>smarter home</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ marginTop: '2rem', maxWidth: 620 }}>
              Hand-picked devices from premium global brands — fully installed, integrated and supported by our team.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="chip-row">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={'chip' + (cat === c ? ' is-active' : '')}>{c}</button>
            ))}
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i % 4 * 50}>
              <div onClick={openGetInTouch} className="product-card lift">
                <div className="product-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div className="product-cat"><i className="fa-solid fa-tag" style={{ marginRight: 6, color: 'var(--accent)' }}></i>{p.cat}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', fontFamily: "serif" }}>{p.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{p.desc}</p>
                  <div className="btn-link" style={{ fontSize: '0.82rem', color: 'var(--accent)', alignSelf: 'flex-start', marginTop: 'auto' }}>Enquire <span className="arrow">→</span></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <HomeCTA openGetInTouch={openGetInTouch} navigate={navigate} />
    </div>
  );
};

export const IBhavanBlogs = ({ navigate, openGetInTouch }) => {
  const [openBlog, setOpenBlog] = useState(null);
  const blogs = IBHAVAN_BLOGS;
  const featured = blogs[0];
  const rest = blogs.slice(1);
  return (
    <div>
      <section className="service-hero" style={{ minHeight: 'clamp(380px,50vh,520px)' }}>
        <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1800&auto=format&fit=crop" alt="Blog" loading="lazy" />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-inner">
          <Reveal><div className="eyebrow eyebrow-dot" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.85)' }}>Blog</div></Reveal>
          <Reveal delay={80}>
            <h1 style={{ maxWidth: 1100, fontFamily: "Instrument Serif" }}>
              Notes on smart living, work, and <span className="italic" style={{ color: '#F05885', fontFamily: "Instrument Serif" }}>technology</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ marginTop: '2rem', maxWidth: 620 }}>
              Field notes, deep dives, and practical guides from our specialists.
            </p>
          </Reveal>
        </div>
      </section>
      <Section>
        <Reveal>
          <div onClick={() => setOpenBlog(featured)} className="blog-featured lift" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)', cursor: 'pointer', paddingBottom: 'clamp(2rem,4vw,3rem)', borderBottom: '1px solid var(--border)' }}>
            <div className="photo-card" style={{ aspectRatio: '4/3', minHeight: 280 }}>
              <img src={featured.img} alt={featured.title} loading="lazy" />
              <div className="photo-num">Featured</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="num" style={{ marginBottom: '1rem' }}>Featured · {featured.cat} · {featured.read} read</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: '1.25rem' }}>{featured.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-alt)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif,serif', fontSize: '0.95rem', flexShrink: 0 }}>{featured.author.split(' ').map((w) => w[0]).join('')}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{featured.author} · {featured.date}</div>
              </div>
            </div>
          </div>
        </Reveal>
        <ul className="link-list">
          {rest.map((b, i) => (
            <Reveal key={b.id} delay={i * 60}>
              <li onClick={() => setOpenBlog(b)} style={{ padding: 'clamp(1.5rem,3vw,2rem) 0', alignItems: 'flex-start' }}>
                <div className="blog-row">
                  <span className="num" style={{ minWidth: 32, paddingTop: '0.25rem' }}>0{i + 1}</span>
                  <div className="photo-card blog-row-thumb" style={{ aspectRatio: '1/1', width: 100 }}>
                    <img src={b.img} alt={b.title} loading="lazy" />
                  </div>
                  <div style={{ minWidth: 0, paddingTop: '0.25rem' }}>
                    <div className="ll-title" style={{ fontSize: 'clamp(1.2rem,2vw,1.5rem)' }}>{b.title}</div>
                    <div className="ll-meta" style={{ marginTop: '0.6rem' }}>{b.cat} · {b.read} read · {b.date}</div>
                  </div>
                  <p className="blog-row-excerpt" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, paddingTop: '0.25rem' }}>{b.excerpt}</p>
                </div>
                <span className="ll-arrow" style={{ paddingTop: '0.25rem', marginLeft: '1rem' }}>→</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
      <style>{`
        .blog-row{flex:1;display:grid;grid-template-columns:auto 100px 1fr minmax(0,1.3fr);gap:1.5rem;align-items:flex-start;min-width:0}
        @media (max-width:980px){.blog-row{grid-template-columns:auto 100px 1fr}.blog-row-excerpt{display:none}}
        @media (max-width:600px){.blog-row{grid-template-columns:auto 1fr;gap:1rem}.blog-row-thumb{display:none}}
      `}</style>
      <Modal open={!!openBlog} onClose={() => setOpenBlog(null)} title={openBlog?.title} subtitle={openBlog ? openBlog.author + ' · ' + openBlog.date + ' · ' + openBlog.read + ' read' : ''}>
        {openBlog && (
          <div>
            <div className="photo-card" style={{ aspectRatio: '16/9', marginBottom: '1.5rem' }}>
              <img src={openBlog.img} alt={openBlog.title} loading="lazy" />
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{openBlog.excerpt}</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              This article dives into the practical tactics and real-world case studies we've collected across our client portfolio. From setup through to operation, we walk through each decision point so you can adapt the learnings to your own context.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Want the full write-up in your inbox? Subscribe to our monthly newsletter for the latest from the iBhavan team.
            </p>
          </div>
        )}
      </Modal>
      <HomeCTA openGetInTouch={openGetInTouch} navigate={navigate} />
    </div>
  );
};

export const IBhavanCareers2 = ({ navigate, openGetInTouch }) => {
  const [filter, setFilter] = useState('all');
  const jobs = IBHAVAN_JOBS;
  const depts = [...new Set(jobs.map((j) => j.dept))];
  const filtered = filter === 'all' ? jobs : jobs.filter((j) => j.dept === filter);
  return (
    <div>
      <section className="service-hero" style={{ minHeight: 'clamp(380px,50vh,520px)' }}>
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop" alt="Careers" loading="lazy" />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-inner">
          <Reveal><div className="eyebrow eyebrow-dot" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.85)' }}>Careers</div></Reveal>
          <Reveal delay={80}>
            <h1 style={{ maxWidth: 1100, fontFamily: "Instrument Serif" }}>
              Build the future with <span className="italic" style={{ color: '#F05885', fontFamily: "Instrument Serif" }}>us</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ marginTop: '2rem', maxWidth: 620 }}>
              Join a team shipping meaningful work across three of India's fastest-growing verticals.
            </p>
          </Reveal>
        </div>
      </section>
      <Section>
        <Reveal>
          <div className="chip-row">
            {['all', ...depts].map((d) => (
              <button key={d} onClick={() => setFilter(d)} className={'chip' + (filter === d ? ' is-active' : '')}>{d === 'all' ? 'All Roles' : d}</button>
            ))}
          </div>
        </Reveal>
        <ul className="link-list" style={{ borderTop: '1px solid var(--border)' }}>
          {filtered.map((j, i) => (
            <Reveal key={j.id} delay={i % 5 * 40}>
              <li onClick={() => navigate(`careers/${j.id}`)} style={{ padding: 'clamp(1.4rem,2.5vw,1.75rem) 0', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 'clamp(1.25rem,2.5vw,2rem)', alignItems: 'flex-start', minWidth: 0 }}>
                  <span className="num" style={{ minWidth: 32, paddingTop: '0.25rem' }}>0{i + 1}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <div className="ll-title" style={{ fontFamily: "serif" }}>{j.title}</div>
                      {j.hot && <span style={{ fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>● Urgent</span>}
                    </div>
                    <div className="ll-meta" style={{ marginTop: '0.75rem' }}>{j.dept} · {j.loc} · {j.exp} · {j.type}</div>
                  </div>
                  <div style={{ color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500, paddingTop: '0.25rem', whiteSpace: 'nowrap' }}>View role</div>
                </div>
                <span className="ll-arrow" style={{ marginLeft: '1rem', paddingTop: '0.25rem' }}>→</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export const IBhavanJobDetail = ({ navigate, openGetInTouch }) => {
  const { jobId } = useParams();
  const job = IBHAVAN_JOBS.find((j) => j.id === parseInt(jobId));
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', exp: '', cover: '' });
  const [errors, setErrors] = useState({});
  if (!job) return <div style={{ padding: '10rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Job not found. <span onClick={() => {navigate('careers');}} style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 500 }}>Back to Careers</span></div>;
  const apply = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) er.email = 'Valid email required';
    if (!form.phone.trim()) er.phone = 'Required';
    if (Object.keys(er).length) {setErrors(er);return;}
    setApplied(true);
  };
  return (
    <div>
      <section className="page-hero" style={{ paddingTop: 'clamp(7rem,12vw,9rem)', paddingBottom: 'clamp(3rem,5vw,4rem)' }}>
        <div className="container" style={{ maxWidth: 1180 }}>
          <Reveal>
            <div className="num" style={{ marginBottom: '2rem' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => {navigate('careers');}}>Careers</span> / <span style={{ color: 'var(--text)' }}>{job.title}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="eyebrow">{job.dept}</span>
              {job.hot && <span style={{ fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>● Urgent Hiring</span>}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', maxWidth: 900, marginBottom: '1.5rem' }}>{job.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span>📍 {job.loc}</span><span>⏱ {job.exp}</span><span>💼 {job.type}</span>
            </div>
          </Reveal>
        </div>
      </section>
      <Section>
        <div className="job-detail-grid">
          <div>
            <Reveal>
              <div className="num" style={{ marginBottom: '0.75rem' }}>§ 01 — About the role</div>
              <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: 'clamp(2rem,4vw,3rem)' }}>{job.about}</p>
            </Reveal>
            <Reveal><div className="num" style={{ marginBottom: '0.75rem' }}>§ 02 — Responsibilities</div></Reveal>
            <ul className="link-list" style={{ marginBottom: 'clamp(2rem,4vw,3rem)', borderTop: '1px solid var(--border-soft)' }}>
              {job.responsibilities.map((r, i) => (
                <Reveal key={i} delay={i * 30}>
                  <li style={{ padding: '1.1rem 0', cursor: 'default' }}>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                      <span className="num" style={{ flexShrink: 0 }}>0{i + 1}</span>
                      <span style={{ color: 'var(--text)', fontSize: '0.98rem', lineHeight: 1.55 }}>{r}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal><div className="num" style={{ marginBottom: '0.75rem' }}>§ 03 — What we're looking for</div></Reveal>
            <ul className="link-list" style={{ marginBottom: 'clamp(2rem,4vw,3rem)', borderTop: '1px solid var(--border-soft)' }}>
              {job.requirements.map((r, i) => (
                <Reveal key={i} delay={i * 30}>
                  <li style={{ padding: '1.1rem 0', cursor: 'default' }}>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                      <span className="num" style={{ flexShrink: 0 }}>0{i + 1}</span>
                      <span style={{ color: 'var(--text)', fontSize: '0.98rem', lineHeight: 1.55 }}>{r}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal><div className="num" style={{ marginBottom: '0.75rem' }}>§ 04 — What we offer</div></Reveal>
            <div className="edit-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
              {job.benefits.map((b, i) => (
                <Reveal key={i} delay={i * 30}>
                  <div className="edit-cell" style={{ padding: '1.5rem', fontSize: '0.95rem', color: 'var(--text)' }}>{b}</div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Reveal>
                <div style={{ border: '1px solid var(--border)', padding: 'clamp(1.5rem,3vw,2rem)', background: 'var(--surface)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Apply for this role</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>We usually respond within 3 business days.</p>
                  {applied ? (
                    <div>
                      <div className="num" style={{ marginBottom: '0.75rem', color: 'var(--accent)' }}>● Application received</div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>We'll reach out at <span style={{ color: 'var(--text)' }}>{form.email}</span>.</p>
                    </div>
                  ) : (
                    <form onSubmit={apply} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      <div><label className="label">Full name</label><input className="inp" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />{errors.name && <div style={{ color: 'var(--accent)', fontSize: '0.74rem', marginTop: 4 }}>{errors.name}</div>}</div>
                      <div><label className="label">Email</label><input className="inp" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />{errors.email && <div style={{ color: 'var(--accent)', fontSize: '0.74rem', marginTop: 4 }}>{errors.email}</div>}</div>
                      <div><label className="label">Phone</label><input className="inp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />{errors.phone && <div style={{ color: 'var(--accent)', fontSize: '0.74rem', marginTop: 4 }}>{errors.phone}</div>}</div>
                      <div><label className="label">Experience (years)</label><input className="inp" value={form.exp} onChange={(e) => setForm({ ...form, exp: e.target.value })} /></div>
                      <div><label className="label">Why you?</label><textarea className="inp" rows={2} value={form.cover} onChange={(e) => setForm({ ...form, cover: e.target.value })} style={{ resize: 'vertical' }} /></div>
                      <button type="submit" className="btn btn-dark" style={{ marginTop: '0.75rem', alignSelf: 'flex-start' }}>Submit <span className="arrow">→</span></button>
                    </form>
                  )}
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div style={{ padding: '1.5rem', border: '1px solid var(--border-soft)' }}>
                  <div className="num" style={{ marginBottom: '0.85rem' }}>Skills</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {job.skills.map((s) => (
                      <span key={s} style={{ fontSize: '0.76rem', padding: '0.3rem 0.7rem', border: '1px solid var(--border)', borderRadius: 999, color: 'var(--text-muted)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
      <HomeCTA openGetInTouch={openGetInTouch} navigate={navigate} secondaryAction={{ label: 'Back to careers', onClick: () => {navigate('careers');} }} />
    </div>
  );
};
