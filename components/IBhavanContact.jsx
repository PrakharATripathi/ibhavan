
const IBhavanContact = ({ setCurrentPage }) => {
  const [form, setForm] = React.useState({ name: '', company: '', service: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [activeType, setActiveType] = React.useState('smart');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inp = (field, placeholder, type = 'text') => ({
    value: form[field],
    onChange: (e) => { setForm({ ...form, [field]: e.target.value }); setErrors({ ...errors, [field]: '' }); },
    placeholder,
    type,
    style: {
      width: '100%', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.93rem',
      border: `1.5px solid ${errors[field] ? '#EF4444' : '#E2E8F0'}`,
      outline: 'none', background: '#F9FAFB', color: '#0F1F4A', boxSizing: 'border-box',
      transition: 'border-color 0.2s',
    },
  });

  const accentColor = activeType === 'smart' ? '#38BDF8' : '#F472B6';

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg,#102248,#102248)', padding: '5rem 2rem 6rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)' }}/>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>HOME → CONTACT</div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.8 }}>
            Whether you're automating your home or looking for HR solutions, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Inquiry type selector */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', gap: 0 }}>
          {[
            { id: 'smart', label: '🏠 Smart Solutions Inquiry', color: '#38BDF8' },
            { id: 'hr', label: '👥 HR Services Inquiry', color: '#F472B6' },
          ].map(({ id, label, color }) => (
            <button key={id} onClick={() => setActiveType(id)} style={{
              padding: '1rem 2rem', border: 'none', background: 'transparent', cursor: 'pointer',
              fontWeight: activeType === id ? 700 : 400, fontSize: '0.93rem',
              color: activeType === id ? color : '#64748B',
              borderBottom: `2.5px solid ${activeType === id ? color : 'transparent'}`,
              transition: 'all 0.2s',
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <section style={{ background: '#F4F7FB', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          {/* Contact Info */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '0.5rem' }}>
              {activeType === 'smart' ? 'Smart Home Experts' : 'HR Solutions Team'}
            </h2>
            <p style={{ color: '#64748B', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activeType === 'smart'
                ? 'Schedule a free site assessment or get a custom automation quote for your property.'
                : 'Connect with our HR specialists for recruitment, payroll, or compliance requirements.'}
            </p>

            {/* Contact details */}
            {[
              { icon: '📞', label: 'Phone', val: '+91 98765 43210' },
              { icon: '✉️', label: 'Email', val: activeType === 'smart' ? 'smart@ibhavan.com' : 'hr@ibhavan.com' },
              { icon: '📍', label: 'Address', val: 'Bengaluru, Karnataka, India' },
              { icon: '🕐', label: 'Hours', val: 'Mon–Sat, 9:00 AM – 7:00 PM' },
            ].map(({ icon, label, val }) => (
              <div key={label} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: accentColor + '15',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0F1F4A', fontSize: '0.88rem' }}>{label}</div>
                  <div style={{ color: '#64748B', fontSize: '0.9rem', marginTop: 2 }}>{val}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div style={{
              marginTop: '2rem', borderRadius: 16, overflow: 'hidden',
              border: '1px solid #E2E8F0', background: '#E8EDF5', height: 200,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: '#94A3B8', gap: '0.5rem',
            }}>
              <div style={{ fontSize: '2rem' }}>🗺️</div>
              <div style={{ fontSize: '0.85rem', fontFamily: 'monospace' }}>[ Map — Bengaluru office location ]</div>
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: 1.4, minWidth: 320 }}>
            {submitted ? (
              <div style={{
                background: '#fff', borderRadius: 20, padding: '3rem', textAlign: 'center',
                boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '0.5rem' }}>
                  Message Received!
                </h3>
                <p style={{ color: '#64748B', lineHeight: 1.7 }}>
                  Thank you for reaching out to iBhavan. Our team will get back to you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', service: '', email: '', phone: '', message: '' }); }}
                  style={{
                    marginTop: '1.5rem', background: accentColor, color: '#fff', border: 'none',
                    borderRadius: 8, padding: '0.75rem 1.75rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.93rem',
                  }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background: '#fff', borderRadius: 20, padding: '2.5rem',
                boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F1F4A', marginBottom: '1.75rem' }}>
                  Send us a Message
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Full Name *</label>
                    <input {...inp('name', 'Your full name')} />
                    {errors.name && <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.name}</div>}
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Company</label>
                    <input {...inp('company', 'Company name')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Email *</label>
                    <input {...inp('email', 'your@email.com', 'email')} />
                    {errors.email && <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.email}</div>}
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Phone</label>
                    <input {...inp('phone', '+91 00000 00000', 'tel')} />
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Service Required *</label>
                  <select value={form.service} onChange={e => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: '' }); }}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.93rem',
                      border: `1.5px solid ${errors.service ? '#EF4444' : '#E2E8F0'}`,
                      background: '#F9FAFB', color: form.service ? '#0F1F4A' : '#94A3B8', outline: 'none',
                    }}>
                    <option value="">Select a service...</option>
                    <optgroup label="Smart Home">
                      <option>Smart Home Automation</option>
                      <option>Smart Security</option>
                      <option>Smart Lighting</option>
                      <option>Climate Control</option>
                      <option>Custom Smart Solution</option>
                    </optgroup>
                    <optgroup label="HR Solutions">
                      <option>Recruitment & Hiring</option>
                      <option>Payroll Management</option>
                      <option>Statutory Compliance</option>
                      <option>HR Consulting</option>
                      <option>Training & Development</option>
                    </optgroup>
                  </select>
                  {errors.service && <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.service}</div>}
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>Message *</label>
                  <textarea value={form.message}
                    onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.93rem',
                      border: `1.5px solid ${errors.message ? '#EF4444' : '#E2E8F0'}`,
                      background: '#F9FAFB', color: '#0F1F4A', outline: 'none', resize: 'vertical',
                      fontFamily: 'inherit', boxSizing: 'border-box',
                    }} />
                  {errors.message && <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.message}</div>}
                </div>
                <button type="submit" style={{
                  width: '100%', background: `linear-gradient(135deg, ${accentColor}, ${activeType === 'smart' ? '#0EA5E9' : '#DB2777'})`,
                  color: '#fff', border: 'none', borderRadius: 8, padding: '0.9rem',
                  fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                  boxShadow: `0 4px 16px ${accentColor}44`, transition: 'opacity 0.2s',
                }}>
                  {activeType === 'smart' ? 'Request Smart Home Consultation' : 'Connect with HR Team'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { IBhavanContact });
