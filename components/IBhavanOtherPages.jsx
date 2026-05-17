
const IBhavanProducts2 = ({ navigate, openGetInTouch }) => {
  const products = window.IBHAVAN_PRODUCTS;
  const cats = ['All', ...Array.from(new Set(products.map(p => p.cat)))];
  const [cat, setCat] = React.useState('All');
  const filtered = cat === 'All' ? products : products.filter(p => p.cat === cat);
  return (
    <div>
      {/* Hero banner */}
      <section className="service-hero" style={{ minHeight: '50vh' }}>
        <img src={window.IBHAVAN_IMG.product || 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1800&auto=format&fit=crop'} alt="Products" loading="lazy" />
        <div className="service-hero-overlay"></div>
        <div className="service-hero-inner">
          <Reveal><div className="num" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>§ Products</div></Reveal>
          <Reveal delay={80}>
            <h1 style={{ maxWidth: 1100, color: '#fff' }}>
              Hardware for a <span className="italic" style={{ color: '#F05885' }}>smarter home</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ marginTop: '2rem', maxWidth: 620, color: 'rgba(255,255,255,0.82)' }}>
              Hand-picked devices from premium global brands — fully installed, integrated and supported by our team.
            </p>
          </Reveal>
        </div>
      </section>
      <Section>
        <Reveal>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap', borderBottom: '1px solid var(--border-soft)', paddingBottom: '1rem' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '0.55rem 1.1rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', borderRadius: 999,
                border: '1px solid ' + (cat === c ? 'var(--ink)' : 'var(--border)'),
                background: cat === c ? 'var(--ink)' : 'transparent',
                color: cat === c ? 'var(--bg)' : 'var(--text-muted)',
              }}>{c}</button>
            ))}
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 50}>
              <div onClick={openGetInTouch} className="product-card lift">
                <div className="product-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div className="product-cat"><i className="fa-solid fa-tag" style={{ marginRight: 6, color: 'var(--accent)' }}></i>{p.cat}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{p.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                  <div className="btn-link" style={{ fontSize: '0.82rem', color: 'var(--accent)' }}>Enquire <span className="arrow">→</span></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Single CTA at bottom */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 'clamp(3rem,6vw,5rem)' }}>
          <Reveal><h2>Ready to begin? <span className="italic accent-mark">Let's talk.</span></h2></Reveal>
          <Reveal delay={120}>
            <div>
              <p className="lead" style={{ marginBottom: '2rem' }}>Tell us about your space and we'll suggest a setup that matches your taste, your home, and your budget.</p>
              <button onClick={openGetInTouch} className="btn btn-dark">Get in touch <span className="arrow">→</span></button>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};

const IBhavanBlogs = ({ navigate }) => {
  const [openBlog, setOpenBlog] = React.useState(null);
  const blogs = window.IBHAVAN_BLOGS;
  const featured = blogs[0];
  const rest = blogs.slice(1);
  return (
    <div>
      <section style={{ padding: 'clamp(8rem,14vw,11rem) 2rem clamp(3rem,6vw,4rem)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Reveal><div className="num" style={{ marginBottom: '2rem' }}>§ Blog</div></Reveal>
          <Reveal delay={80}><h1 style={{ maxWidth: 1100 }}>Notes on smart living, work, and <span className="italic accent-mark">technology</span>.</h1></Reveal>
          <Reveal delay={160}><p className="lead" style={{ maxWidth: 620, marginTop: '2rem' }}>Field notes, deep dives, and practical guides from our specialists.</p></Reveal>
        </div>
      </section>
      <Section>
        <Reveal>
          <div onClick={() => setOpenBlog(featured)} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', marginBottom: '4rem', cursor: 'pointer', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }} className="lift">
            <div className="photo-card" style={{ aspectRatio: '4/3', minHeight: 280 }}>
              <img src={featured.img} alt={featured.title} loading="lazy" />
              <div className="photo-num">Featured</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="num" style={{ marginBottom: '1rem' }}>Featured · {featured.cat} · {featured.read} read</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginBottom: '1.25rem' }}>{featured.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-alt)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif,serif', fontSize: '0.95rem' }}>{featured.author.split(' ').map(w=>w[0]).join('')}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{featured.author} · {featured.date}</div>
              </div>
            </div>
          </div>
        </Reveal>
        <ul className="link-list">
          {rest.map((b, i) => (
            <Reveal key={b.id} delay={i * 60}>
              <li onClick={() => setOpenBlog(b)} style={{ padding: '2rem 0', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'auto 100px 1fr minmax(0,1.3fr)', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span className="num" style={{ minWidth: 32, paddingTop: '0.25rem' }}>0{i+1}</span>
                  <div className="photo-card" style={{ aspectRatio: '1/1', width: 100 }}>
                    <img src={b.img} alt={b.title} loading="lazy" />
                  </div>
                  <div style={{ minWidth: 0, paddingTop: '0.25rem' }}>
                    <div className="ll-title" style={{ fontSize: '1.5rem' }}>{b.title}</div>
                    <div className="ll-meta" style={{ marginTop: '0.75rem' }}>{b.cat} · {b.read} read · {b.date}</div>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, paddingTop: '0.25rem' }}>{b.excerpt}</p>
                </div>
                <span className="ll-arrow" style={{ paddingTop: '0.25rem' }}>→</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Modal open={!!openBlog} onClose={() => setOpenBlog(null)} title={openBlog?.title} subtitle={openBlog ? (openBlog.author + ' · ' + openBlog.date + ' · ' + openBlog.read + ' read') : ''}>
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
    </div>
  );
};

const IBhavanCareers2 = ({ navigate, openGetInTouch, setJobId }) => {
  const [filter, setFilter] = React.useState('all');
  const jobs = window.IBHAVAN_JOBS;
  const depts = [...new Set(jobs.map(j => j.dept))];
  const filtered = filter === 'all' ? jobs : jobs.filter(j => j.dept === filter);
  return (
    <div>
      <section style={{ padding: 'clamp(8rem,14vw,11rem) 2rem clamp(3rem,6vw,4rem)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Reveal><div className="num" style={{ marginBottom: '2rem' }}>§ Careers</div></Reveal>
          <Reveal delay={80}><h1 style={{ maxWidth: 1100 }}>Build the future with <span className="italic accent-mark">us</span>.</h1></Reveal>
          <Reveal delay={160}><p className="lead" style={{ maxWidth: 620, marginTop: '2rem' }}>Join a team shipping meaningful work across three of India's fastest-growing verticals.</p></Reveal>
        </div>
      </section>
      <Section>
        <Reveal>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap', paddingBottom: '1rem', borderBottom: '1px solid var(--border-soft)' }}>
            {['all', ...depts].map(d => (
              <button key={d} onClick={() => setFilter(d)} style={{
                padding: '0.55rem 1.1rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', borderRadius: 999,
                border: '1px solid ' + (filter === d ? 'var(--ink)' : 'var(--border)'),
                background: filter === d ? 'var(--ink)' : 'transparent',
                color: filter === d ? 'var(--bg)' : 'var(--text-muted)',
              }}>{d === 'all' ? 'All Roles' : d}</button>
            ))}
          </div>
        </Reveal>
        <ul className="link-list" style={{ borderTop: '1px solid var(--border)' }}>
          {filtered.map((j, i) => (
            <Reveal key={j.id} delay={(i % 5) * 40}>
              <li onClick={() => setJobId(j.id)} style={{ padding: '1.75rem 0', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'flex-start' }}>
                  <span className="num" style={{ minWidth: 32, paddingTop: '0.25rem' }}>0{i+1}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <div className="ll-title">{j.title}</div>
                      {j.hot && <span style={{ fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>● Urgent</span>}
                    </div>
                    <div className="ll-meta" style={{ marginTop: '0.85rem' }}>{j.dept} · {j.loc} · {j.exp} · {j.type}</div>
                  </div>
                  <div style={{ color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500, paddingTop: '0.25rem' }}>View role</div>
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

const IBhavanJobDetail = ({ jobId, navigate, setJobId }) => {
  const job = window.IBHAVAN_JOBS.find(j => j.id === jobId);
  const [applied, setApplied] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', exp: '', cover: '' });
  const [errors, setErrors] = React.useState({});
  if (!job) return <div style={{ padding: '10rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Job not found. <span onClick={() => { setJobId(null); navigate('careers'); }} style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 500 }}>Back to Careers</span></div>;
  const apply = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) er.email = 'Valid email required';
    if (!form.phone.trim()) er.phone = 'Required';
    if (Object.keys(er).length) { setErrors(er); return; }
    setApplied(true);
  };
  return (
    <div>
      <section style={{ padding: 'clamp(7rem,12vw,9rem) 2rem clamp(3rem,5vw,4rem)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div className="num" style={{ marginBottom: '2rem' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { setJobId(null); navigate('careers'); }}>Careers</span> / <span style={{ color: 'var(--text)' }}>{job.title}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="eyebrow">{job.dept}</span>
              {job.hot && <span style={{ fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>● Urgent Hiring</span>}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', maxWidth: 900, marginBottom: '1.5rem' }}>{job.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span>📍 {job.loc}</span><span>⏱ {job.exp}</span><span>💼 {job.type}</span>
            </div>
          </Reveal>
        </div>
      </section>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', gap: '4rem', maxWidth: 1080, margin: '0 auto' }}>
          <div>
            <Reveal>
              <div className="num" style={{ marginBottom: '0.75rem' }}>§ 01 — About the role</div>
              <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '3rem' }}>{job.about}</p>
            </Reveal>
            <Reveal><div className="num" style={{ marginBottom: '0.75rem' }}>§ 02 — Responsibilities</div></Reveal>
            <ul className="link-list" style={{ marginBottom: '3rem', borderTop: '1px solid var(--border-soft)' }}>
              {job.responsibilities.map((r, i) => (
                <Reveal key={i} delay={i*30}>
                  <li style={{ padding: '1.1rem 0', cursor: 'default' }} onMouseEnter={e => e.currentTarget.style.paddingLeft = '0px'}>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                      <span className="num">0{i+1}</span>
                      <span style={{ color: 'var(--text)', fontSize: '0.98rem', lineHeight: 1.55 }}>{r}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal><div className="num" style={{ marginBottom: '0.75rem' }}>§ 03 — What we're looking for</div></Reveal>
            <ul className="link-list" style={{ marginBottom: '3rem', borderTop: '1px solid var(--border-soft)' }}>
              {job.requirements.map((r, i) => (
                <Reveal key={i} delay={i*30}>
                  <li style={{ padding: '1.1rem 0', cursor: 'default' }}>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                      <span className="num">0{i+1}</span>
                      <span style={{ color: 'var(--text)', fontSize: '0.98rem', lineHeight: 1.55 }}>{r}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal><div className="num" style={{ marginBottom: '0.75rem' }}>§ 04 — What we offer</div></Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0', borderTop: '1px solid var(--border)', marginBottom: '2rem' }}>
              {job.benefits.map((b, i) => (
                <Reveal key={i} delay={i*30}>
                  <div style={{ padding: '1.5rem 1rem 1.5rem 0', borderRight: i < job.benefits.length - 1 ? '1px solid var(--border-soft)' : 'none', paddingLeft: i === 0 ? 0 : '1rem', fontSize: '0.9rem', color: 'var(--text)' }}>{b}</div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <div style={{ position: 'sticky', top: 100 }}>
              <Reveal>
                <div style={{ border: '1px solid var(--border)', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Apply for this role</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>We usually respond within 3 business days.</p>
                  {applied ? (
                    <div>
                      <div className="num" style={{ marginBottom: '0.75rem', color: 'var(--accent)' }}>● Application received</div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>We'll reach out at <span style={{ color: 'var(--text)' }}>{form.email}</span>.</p>
                    </div>
                  ) : (
                    <form onSubmit={apply} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      <div><label className="label">Full name</label><input className="inp" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>{errors.name && <div style={{color:'var(--accent)',fontSize:'0.74rem',marginTop:4}}>{errors.name}</div>}</div>
                      <div><label className="label">Email</label><input className="inp" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>{errors.email && <div style={{color:'var(--accent)',fontSize:'0.74rem',marginTop:4}}>{errors.email}</div>}</div>
                      <div><label className="label">Phone</label><input className="inp" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>{errors.phone && <div style={{color:'var(--accent)',fontSize:'0.74rem',marginTop:4}}>{errors.phone}</div>}</div>
                      <div><label className="label">Experience (years)</label><input className="inp" value={form.exp} onChange={e=>setForm({...form,exp:e.target.value})}/></div>
                      <div><label className="label">Why you?</label><textarea className="inp" rows={2} value={form.cover} onChange={e=>setForm({...form,cover:e.target.value})} style={{resize:'vertical'}}/></div>
                      <button type="submit" className="btn btn-dark" style={{ marginTop: '0.75rem', alignSelf: 'flex-start' }}>Submit <span className="arrow">→</span></button>
                    </form>
                  )}
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div style={{ marginTop: '1rem', padding: '1.5rem', border: '1px solid var(--border-soft)' }}>
                  <div className="num" style={{ marginBottom: '0.75rem' }}>Skills</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {job.skills.map(s => (
                      <span key={s} style={{ fontSize: '0.76rem', padding: '0.3rem 0.7rem', border: '1px solid var(--border)', borderRadius: 999, color: 'var(--text-muted)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

Object.assign(window, { IBhavanProducts2, IBhavanBlogs, IBhavanCareers2, IBhavanJobDetail });
