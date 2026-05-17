
const IBhavanCareers = ({ setCurrentPage }) => {
  const [applied, setApplied] = React.useState(null);
  const [resume, setResume] = React.useState(null);
  const [appForm, setAppForm] = React.useState({ name: '', email: '', phone: '', cover: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [filter, setFilter] = React.useState('All');

  const navigate = (id) => { setCurrentPage(id); window.scrollTo({ top: 0 }); };

  const jobs = [
    { id: 1, title: 'Smart Home Solutions Engineer', dept: 'Smart Tech', type: 'Full-time', loc: 'Bengaluru', exp: '2–4 yrs', skills: ['IoT', 'Automation', 'Networking'], hot: true },
    { id: 2, title: 'HR Business Partner', dept: 'HR', type: 'Full-time', loc: 'Mumbai', exp: '3–5 yrs', skills: ['HRBP', 'Employee Relations', 'Compliance'], hot: false },
    { id: 3, title: 'Talent Acquisition Specialist', dept: 'HR', type: 'Full-time', loc: 'Bengaluru', exp: '1–3 yrs', skills: ['Sourcing', 'Recruitment', 'ATS'], hot: true },
    { id: 4, title: 'Payroll & Compliance Executive', dept: 'HR', type: 'Full-time', loc: 'Hyderabad', exp: '2–4 yrs', skills: ['Payroll', 'PF/ESIC', 'Labour Law'], hot: false },
    { id: 5, title: 'Smart Lighting Consultant', dept: 'Smart Tech', type: 'Full-time', loc: 'Bengaluru', exp: '1–3 yrs', skills: ['LED Systems', 'KNX', 'Client Mgmt'], hot: false },
    { id: 6, title: 'Business Development Manager', dept: 'Sales', type: 'Full-time', loc: 'Pune', exp: '4–6 yrs', skills: ['B2B Sales', 'Tech Solutions', 'CRM'], hot: true },
    { id: 7, title: 'Training & Development Lead', dept: 'HR', type: 'Full-time', loc: 'Remote', exp: '3–5 yrs', skills: ['L&D', 'Content Design', 'LMS'], hot: false },
    { id: 8, title: 'Security Systems Technician', dept: 'Smart Tech', type: 'Full-time', loc: 'Chennai', exp: '1–2 yrs', skills: ['CCTV', 'Access Control', 'IP Networks'], hot: false },
  ];

  const depts = ['All', 'Smart Tech', 'HR', 'Sales'];
  const filtered = filter === 'All' ? jobs : jobs.filter(j => j.dept === filter);

  const deptColor = { 'Smart Tech': '#38BDF8', 'HR': '#F472B6', 'Sales': '#6366F1' };

  const handleApply = (job) => { setApplied(job); setSubmitted(false); setResume(null); setAppForm({ name: '', email: '', phone: '', cover: '' }); window.scrollTo({ top: 0 }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appForm.name || !appForm.email) return;
    setSubmitted(true);
  };

  if (applied) {
    return (
      <div style={{ paddingTop: 72 }}>
        <section style={{ background: 'linear-gradient(135deg,#102248,#102248)', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <button onClick={() => setApplied(null)} style={{
              background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, padding: '0.5rem 1.2rem', fontSize: '0.88rem', cursor: 'pointer', marginBottom: '1.5rem',
            }}>← Back to Jobs</button>
            <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Apply: {applied.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[applied.dept, applied.loc, applied.exp, applied.type].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: 20, padding: '0.25rem 0.75rem', fontSize: '0.82rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>
        <section style={{ background: '#F4F7FB', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            {submitted ? (
              <div style={{ background: '#fff', borderRadius: 20, padding: '3rem', textAlign: 'center', boxShadow: '0 2px 20px rgba(0,0,0,0.07)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                <p style={{ color: '#64748B', lineHeight: 1.7 }}>Thank you for applying to iBhavan. Our HR team will review your profile and reach out within 5 business days.</p>
                <button onClick={() => setApplied(null)} style={{
                  marginTop: '1.5rem', background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff',
                  border: 'none', borderRadius: 8, padding: '0.75rem 1.75rem', fontWeight: 600, cursor: 'pointer',
                }}>View More Openings</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', boxShadow: '0 2px 20px rgba(0,0,0,0.07)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '1.5rem' }}>Your Application</h3>
                {[
                  { f: 'name', l: 'Full Name *', p: 'Your full name', t: 'text' },
                  { f: 'email', l: 'Email Address *', p: 'your@email.com', t: 'email' },
                  { f: 'phone', l: 'Phone Number', p: '+91 00000 00000', t: 'tel' },
                ].map(({ f, l, p, t }) => (
                  <div key={f} style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>{l}</label>
                    <input value={appForm[f]} onChange={e => setAppForm({ ...appForm, [f]: e.target.value })}
                      placeholder={p} type={t}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 8, border: '1.5px solid #E2E8F0', fontSize: '0.93rem', background: '#F9FAFB', color: '#0F1F4A', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Upload Resume</label>
                  <div style={{
                    border: '2px dashed #CBD5E1', borderRadius: 10, padding: '1.5rem', textAlign: 'center',
                    background: resume ? '#F0FDF4' : '#F9FAFB', cursor: 'pointer',
                  }}
                    onClick={() => document.getElementById('resumeInput').click()}>
                    <input id="resumeInput" type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }}
                      onChange={e => setResume(e.target.files[0])} />
                    {resume
                      ? <div style={{ color: '#16A34A', fontWeight: 600, fontSize: '0.9rem' }}>✅ {resume.name}</div>
                      : <div>
                          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📄</div>
                          <div style={{ color: '#64748B', fontSize: '0.88rem' }}>Click to upload PDF or DOC</div>
                        </div>
                    }
                  </div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Cover Note</label>
                  <textarea value={appForm.cover} onChange={e => setAppForm({ ...appForm, cover: e.target.value })}
                    placeholder="Briefly tell us why you're the right fit..."
                    rows={4}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 8, border: '1.5px solid #E2E8F0', fontSize: '0.93rem', background: '#F9FAFB', color: '#0F1F4A', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" style={{
                  width: '100%', background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff',
                  border: 'none', borderRadius: 8, padding: '0.9rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                }}>Submit Application</button>
              </form>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#102248,#102248)', padding: '5rem 2rem 6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)' }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>HOME → CAREERS</div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Build Your Career at iBhavan</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, fontSize: '1.05rem', lineHeight: 1.8 }}>
            Join a team that's shaping the future of smart living and workforce management. 
            We're growing fast — and we want you with us.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '0.25rem' }}>Open Positions</h2>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>{filtered.length} role{filtered.length !== 1 ? 's' : ''} available</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {depts.map(d => (
                <button key={d} onClick={() => setFilter(d)} style={{
                  background: filter === d ? '#0F1F4A' : '#fff', color: filter === d ? '#fff' : '#475569',
                  border: '1px solid #E2E8F0', borderRadius: 20, padding: '0.4rem 1rem',
                  fontSize: '0.83rem', fontWeight: filter === d ? 600 : 400, cursor: 'pointer', transition: 'all 0.2s',
                }}>{d}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(job => (
              <div key={job.id} style={{
                background: '#fff', borderRadius: 14, padding: '1.5rem 2rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #E8EDF5',
                display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontWeight: 700, color: '#0F1F4A', fontSize: '1rem', margin: 0 }}>{job.title}</h3>
                    {job.hot && (
                      <span style={{ background: '#FEF3C7', color: '#D97706', borderRadius: 20, padding: '0.15rem 0.6rem', fontSize: '0.72rem', fontWeight: 700 }}>🔥 Hot</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ background: (deptColor[job.dept] || '#64748B') + '15', color: deptColor[job.dept] || '#64748B', borderRadius: 20, padding: '0.2rem 0.75rem', fontSize: '0.78rem', fontWeight: 600 }}>{job.dept}</span>
                    {[job.loc, job.exp, job.type].map(t => (
                      <span key={t} style={{ background: '#F1F5F9', color: '#475569', borderRadius: 20, padding: '0.2rem 0.75rem', fontSize: '0.78rem' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
                    {job.skills.map(s => (
                      <span key={s} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 6, padding: '0.15rem 0.6rem', fontSize: '0.75rem', color: '#64748B' }}>{s}</span>
                    ))}
                  </div>
                </div>
                <button onClick={() => handleApply(job)} style={{
                  background: 'linear-gradient(135deg,#38BDF8,#0EA5E9)', color: '#fff', border: 'none',
                  borderRadius: 8, padding: '0.65rem 1.5rem', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                  flexShrink: 0, whiteSpace: 'nowrap',
                }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer branding */}
      <section style={{ background: 'linear-gradient(135deg,#102248,#102248)', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Don't See a Fit?</h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
          We're always on the lookout for exceptional talent. Drop your resume and we'll reach out when the right role opens up.
        </p>
        <button onClick={() => navigate('contact')} style={{
          background: 'linear-gradient(135deg,#F472B6,#DB2777)', color: '#fff', border: 'none',
          borderRadius: 8, padding: '0.9rem 2.2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
        }}>Send Us Your Profile</button>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanCareers });
