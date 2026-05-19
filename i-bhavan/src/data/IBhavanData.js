// Shared data for all pages

export const IBHAVAN_SERVICES = {
  'smart-home': {
    label: 'Smart Home Automation',
    icon: 'fa-house-laptop',
    tagline: 'Intelligent automation for modern living',
    hero: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1800&auto=format&fit=crop',
    description: 'Transform your living spaces with seamless automation, security, and energy intelligence — designed and integrated by certified specialists.',
    items: [
      { id: 'sh-lighting', label: 'Smart Lighting', icon: 'fa-lightbulb', desc: 'Automated, mood-responsive lighting with scenes & scheduling.' },
      { id: 'sh-security', label: 'Security & Surveillance', icon: 'fa-shield-halved', desc: 'CCTV, smart locks, sensors & real-time monitoring.' },
      { id: 'sh-climate', label: 'Climate Control', icon: 'fa-temperature-half', desc: 'Smart HVAC, thermostats & energy-saving automation.' },
      { id: 'sh-voice', label: 'Voice Control', icon: 'fa-microphone-lines', desc: 'Alexa, Google & Siri integration across your whole home.' },
      { id: 'sh-energy', label: 'Energy Management', icon: 'fa-bolt', desc: 'Real-time consumption tracking & solar-ready systems.' },
      { id: 'sh-appliances', label: 'Smart Appliances', icon: 'fa-plug', desc: 'Connect and automate existing devices & appliances.' },
    ],
  },
  'hr-solutions': {
    label: 'HR Solutions',
    icon: 'fa-people-group',
    tagline: 'End-to-end talent & people operations',
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop',
    description: 'From hiring to compliance to leadership development — a complete people-operations partner for organisations that take their workforce seriously.',
    items: [
      { id: 'hr-recruit', label: 'Recruitment', icon: 'fa-bullseye', desc: 'Bulk, niche, and leadership hiring across industries.' },
      { id: 'hr-payroll', label: 'Payroll Management', icon: 'fa-indian-rupee-sign', desc: 'Salary processing, TDS, payslips & reporting.' },
      { id: 'hr-compliance', label: 'Statutory Compliance', icon: 'fa-clipboard-check', desc: 'PF, ESIC, labour law & audit support.' },
      { id: 'hr-ops', label: 'HR Operations', icon: 'fa-gears', desc: 'Employee lifecycle, attendance & onboarding.' },
      { id: 'hr-training', label: 'Training & Development', icon: 'fa-book-open-reader', desc: 'Skill programs, leadership & soft skills.' },
      { id: 'hr-consulting', label: 'HR Consulting', icon: 'fa-brain', desc: 'Policy design, org structure & performance systems.' },
      { id: 'hr-security', label: 'Physical Security Consultant', icon: 'fa-user-shield', desc: 'Site assessments, guard force planning & SOPs for premises security.' },
      { id: 'hr-talent', label: 'Talent Management', icon: 'fa-chess-knight', desc: 'Succession planning, performance frameworks & retention strategy.' },
      { id: 'hr-leadership', label: 'Leadership Development', icon: 'fa-arrow-trend-up', desc: 'Executive coaching, high-potential programs & 360° feedback.' },
      { id: 'hr-posh', label: 'POSH Training', icon: 'fa-scale-balanced', desc: 'PoSH Act compliance, IC setup, awareness sessions & investigations.' },
    ],
  },
  'it-solutions': {
    label: 'IT Solutions',
    icon: 'fa-laptop-code',
    tagline: 'Technology built for small & mid-scale businesses',
    hero: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800&auto=format&fit=crop',
    description: 'Production-grade software, cloud, and security infrastructure — engineered for SMEs that need enterprise reliability without the enterprise overhead.',
    items: [
      { id: 'it-software', label: 'Custom Software', icon: 'fa-code', desc: 'Tailor-made web & desktop applications.' },
      { id: 'it-web', label: 'Website Development', icon: 'fa-globe', desc: 'Fast, responsive sites & e-commerce platforms.' },
      { id: 'it-cyber', label: 'Cybersecurity', icon: 'fa-shield-virus', desc: 'Audits, firewalls, endpoint security & compliance.' },
      { id: 'it-erp', label: 'ERP Systems', icon: 'fa-boxes-stacked', desc: 'Inventory, finance & HR-integrated ERP.' },
      { id: 'it-cloud', label: 'Cloud & Storage', icon: 'fa-cloud', desc: 'Migration, managed hosting & secure backups.' },
      { id: 'it-support', label: 'IT Support & AMC', icon: 'fa-headset', desc: 'Helpdesk, network, and SLA-based monitoring.' },
    ],
  },
  'business-solutions': {
    label: 'Business Solutions',
    icon: 'fa-chart-line',
    tagline: 'Strategy, operations & growth advisory',
    hero: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop',
    description: 'Practical, hands-on consulting that turns ambition into operating systems — strategy, finance, sales, analytics, and SME growth in one place.',
    items: [
      { id: 'bs-strategy', label: 'Strategy & Advisory', icon: 'fa-compass', desc: 'Vision, market positioning & 3-year growth roadmaps.' },
      { id: 'bs-ops', label: 'Processes & Operations', icon: 'fa-diagram-project', desc: 'SOPs, workflow design, ISO readiness & operational excellence.' },
      { id: 'bs-finance', label: 'Finance & Compliance', icon: 'fa-coins', desc: 'CFO advisory, budgeting, taxation & regulatory compliance.' },
      { id: 'bs-sales', label: 'Sales & Marketing Enablement', icon: 'fa-bullhorn', desc: 'Go-to-market playbooks, pipeline systems & brand activation.' },
      { id: 'bs-sme', label: 'Startup & SME Support', icon: 'fa-rocket', desc: 'Incorporation, fundraising decks, scaling & founder coaching.' },
      { id: 'bs-analytics', label: 'Analytics & Decision Support', icon: 'fa-chart-pie', desc: 'Dashboards, KPI design & data-driven decision frameworks.' },
    ],
  },
};

export const IBHAVAN_PRODUCTS = [
  { id: 'p-hub', name: 'iBhavan Smart Hub', cat: 'Smart Home Automation', desc: 'Central controller for lights, climate, security & voice — works with Matter, Zigbee & Wi-Fi.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-cam', name: '4K Outdoor Smart Camera', cat: 'Security', desc: 'AI person & vehicle detection, colour night vision and on-device storage.', img: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-lock', name: 'Biometric Smart Lock', cat: 'Security', desc: 'Fingerprint, PIN, RFID and remote unlock — built for Indian door frames.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-bulb', name: 'Tunable Smart Bulb', cat: 'Lighting', desc: '16M colours, warm-to-cool tuning, schedules and scene presets.', img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-thermo', name: 'Smart Thermostat', cat: 'Climate', desc: 'Geo-fenced cooling/heating, energy reports and HVAC integration.', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-curtain', name: 'Motorised Curtain Track', cat: 'Lifestyle', desc: 'Whisper-quiet motors, voice and app control, programmable wake-up scenes.', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-doorbell', name: 'Video Doorbell Pro', cat: 'Security', desc: 'Two-way audio, AI delivery detection, integrates with smart lock & lights.', img: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=900&auto=format&fit=crop' },
  { id: 'p-meter', name: 'Energy Monitoring Meter', cat: 'Energy', desc: 'Real-time per-circuit consumption, anomaly alerts and solar-ready.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop' },
];

export const IBHAVAN_JOBS = [
  { id: 1, title: 'Smart Home Automation Engineer', dept: 'Smart Tech', type: 'Full-time', loc: 'Bengaluru', exp: '2–4 yrs', skills: ['IoT','Automation','Networking'], hot: true,
    about: 'We are looking for a hands-on engineer to design and deploy smart home automation systems across residential and commercial projects. You will work with IoT devices, lighting systems, security hardware, and integrate them into unified platforms.',
    responsibilities: ['Design end-to-end smart home architectures','Install and configure IoT devices on-site','Integrate with voice assistants and mobile apps','Troubleshoot connectivity and automation issues','Train clients on system usage'],
    requirements: ['2–4 years in IoT / home automation','Knowledge of KNX, Zigbee, Z-Wave protocols','Strong networking fundamentals','Excellent client communication'],
    benefits: ['Competitive salary + performance bonus','Health insurance for family','Learning & certification budget','Hybrid work flexibility'] },
  { id: 2, title: 'HR Business Partner', dept: 'HR', type: 'Full-time', loc: 'Mumbai', exp: '3–5 yrs', skills: ['HRBP','Employee Relations','Compliance'], hot: false,
    about: 'Strategic HRBP role partnering with business leaders to align HR strategy with organizational goals.',
    responsibilities: ['Partner with leadership on workforce planning','Handle employee relations and grievances','Drive engagement initiatives','Advise on compensation and benefits'],
    requirements: ['3–5 years as HRBP','MBA in HR preferred','Strong employment law knowledge','Excellent stakeholder management'],
    benefits: ['Market-leading compensation','Family health coverage','Wellness programs','Career growth roadmap'] },
  { id: 3, title: 'Talent Acquisition Specialist', dept: 'HR', type: 'Full-time', loc: 'Bengaluru', exp: '1–3 yrs', skills: ['Sourcing','Recruitment','ATS'], hot: true,
    about: 'Own end-to-end recruitment for tech and non-tech roles across our client portfolio.',
    responsibilities: ['Source candidates via multiple channels','Screen and shortlist profiles','Coordinate interviews and offers','Maintain ATS hygiene'],
    requirements: ['1–3 years in recruitment','ATS proficiency (Zoho, Greenhouse, etc.)','Strong Boolean search skills','Fast turnaround mindset'],
    benefits: ['Attractive incentives per closure','Remote-friendly','Modern tooling','Rapid career progression'] },
  { id: 4, title: 'Payroll & Compliance Executive', dept: 'HR', type: 'Full-time', loc: 'Hyderabad', exp: '2–4 yrs', skills: ['Payroll','PF/ESIC','Labour Law'], hot: false,
    about: 'Manage end-to-end payroll and statutory compliance for our client organizations.',
    responsibilities: ['Process monthly payroll accurately','File PF, ESIC, PT returns','Handle audit queries','Maintain compliance documentation'],
    requirements: ['2–4 years in payroll & compliance','Expertise in PF, ESIC, Gratuity','Tally/Zoho Payroll experience','Attention to detail'],
    benefits: ['Certification support','Flexible hours','Insurance','Performance bonus'] },
  { id: 5, title: 'Smart Lighting Consultant', dept: 'Smart Tech', type: 'Full-time', loc: 'Bengaluru', exp: '1–3 yrs', skills: ['LED Systems','KNX','Client Mgmt'], hot: false,
    about: 'Consultative sales role for premium smart lighting installations.',
    responsibilities: ['Conduct client site surveys','Design lighting schemes','Prepare quotes and proposals','Oversee installations'],
    requirements: ['Background in lighting design or electrical','KNX certification a plus','Strong visualization skills','Client-facing confidence'],
    benefits: ['High commissions','Product training abroad','Company vehicle','Health benefits'] },
  { id: 6, title: 'Business Development Manager', dept: 'Sales', type: 'Full-time', loc: 'Pune', exp: '4–6 yrs', skills: ['B2B Sales','Tech Solutions','CRM'], hot: true,
    about: 'Drive new business across our Smart Home Automation, HR, and IT verticals.',
    responsibilities: ['Own regional revenue targets','Build enterprise relationships','Collaborate with delivery teams','Maintain CRM pipeline'],
    requirements: ['4–6 years B2B tech sales','Track record of exceeding targets','Network across SMEs','Strong presentation skills'],
    benefits: ['Uncapped commissions','Car allowance','ESOPs','International travel'] },
  { id: 7, title: 'Training & Development Lead', dept: 'HR', type: 'Full-time', loc: 'Remote', exp: '3–5 yrs', skills: ['L&D','Content Design','LMS'], hot: false,
    about: 'Design and deliver world-class learning programs for our clients and internal teams.',
    responsibilities: ['Needs-analysis and curriculum design','Facilitate workshops','Manage LMS','Measure training ROI'],
    requirements: ['3–5 years in L&D','Instructional design expertise','LMS admin experience','Strong facilitation'],
    benefits: ['Fully remote','Annual L&D budget','Conferences','Flexible hours'] },
  { id: 8, title: 'Security Systems Technician', dept: 'Smart Tech', type: 'Full-time', loc: 'Chennai', exp: '1–2 yrs', skills: ['CCTV','Access Control','IP Networks'], hot: false,
    about: 'Install, configure and maintain smart security systems at client sites.',
    responsibilities: ['CCTV and access control installations','Network configuration','Preventive maintenance','On-call support'],
    requirements: ['Diploma in electronics / ITI','1–2 years field experience','IP networking basics','Willingness to travel'],
    benefits: ['Travel allowance','Tool kit provided','Certifications','Overtime pay'] },
];

export const IBHAVAN_BLOGS = [
  { id: 1, title: 'How Smart Lighting Can Cut Your Energy Bills by 40%', cat: 'Smart Home Automation', read: '5 min', date: 'April 15, 2026', author: 'Priya Mehta', tag: 'Featured',
    excerpt: 'Intelligent LED systems with motion sensing and scheduling can transform your energy consumption. Here\'s a breakdown of the math, real-world examples, and where to start.',
    img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1400&auto=format&fit=crop',
    gradient: 'linear-gradient(135deg,#4F46E5,#F59E0B)' },
  { id: 2, title: 'The Complete Guide to Statutory Compliance for Indian SMEs', cat: 'HR', read: '12 min', date: 'April 10, 2026', author: 'Rahul Verma', tag: 'Guide',
    excerpt: 'PF, ESIC, professional tax, gratuity — the alphabet soup of Indian compliance can overwhelm small businesses. This guide walks through every requirement step-by-step.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    gradient: 'linear-gradient(135deg,#0EA5E9,#4F46E5)' },
  { id: 3, title: 'Cybersecurity Essentials: A Non-Technical Founder\'s Playbook', cat: 'IT', read: '7 min', date: 'April 5, 2026', author: 'Anand Sharma', tag: 'Popular',
    excerpt: 'You don\'t need to be a tech wizard to secure your business. These 10 practical steps will cover 90% of the threats facing small businesses today.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    gradient: 'linear-gradient(135deg,#F59E0B,#DB2777)' },
  { id: 4, title: 'Hiring Blue-Collar Talent at Scale: Lessons From 200+ Placements', cat: 'HR', read: '8 min', date: 'March 28, 2026', author: 'Sunita Patel',
    excerpt: 'Scaling skilled workforce hiring requires a completely different playbook from white-collar recruitment. Here\'s what we\'ve learned.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    gradient: 'linear-gradient(135deg,#10B981,#0EA5E9)' },
  { id: 5, title: 'Why Every SME Needs an ERP — Even if You\'re Still Small', cat: 'IT', read: '6 min', date: 'March 22, 2026', author: 'Arjun Kapoor',
    excerpt: 'ERP isn\'t just for big enterprises anymore. Here\'s why starting small with an ERP can save you years of operational chaos down the line.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    gradient: 'linear-gradient(135deg,#DB2777,#7C3AED)' },
  { id: 6, title: 'Voice Control Is the New Remote: Rethinking Home UX', cat: 'Smart Home Automation', read: '4 min', date: 'March 18, 2026', author: 'Priya Mehta',
    excerpt: 'As voice assistants mature, we\'re rethinking how homeowners interact with their spaces. The remote control is dead. Long live natural language.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    gradient: 'linear-gradient(135deg,#F59E0B,#10B981)' },
];

export const IBHAVAN_IMG = {
  // Hero domain previews
  smartHome:  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop', // modern interior
  hr:         'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop', // team meeting
  it:         'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop', // servers / tech
  // Founder portrait (placeholder: professional portrait)
  founder:    'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop',
  // Mosaic gallery
  mosaic1:    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop', // luxury living room
  mosaic2:    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop', // office team
  mosaic3:    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop', // cloud / server
  mosaic4:    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=900&auto=format&fit=crop',  // home office
  mosaic5:    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop', // hotel / hospitality
  mosaic6:    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop', // workspace
  // CTA backdrop (dark atmospheric)
  ctaBackdrop:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop',
  // About page imagery
  aboutTeam:  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
  aboutOffice:'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1400&auto=format&fit=crop',
  // Blogs
  blog1: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1400&auto=format&fit=crop', // lighting
  blog2: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop', // paperwork / compliance
  blog3: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop', // security / lock
  blog4: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', // team hiring
  blog5: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', // analytics
  blog6: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop', // voice / smart
  // Product hero
  product: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1400&auto=format&fit=crop',
};

if (typeof window !== 'undefined') {
  window.IBHAVAN_SERVICES = IBHAVAN_SERVICES;
  window.IBHAVAN_PRODUCTS = IBHAVAN_PRODUCTS;
  window.IBHAVAN_JOBS = IBHAVAN_JOBS;
  window.IBHAVAN_BLOGS = IBHAVAN_BLOGS;
  window.IBHAVAN_IMG = IBHAVAN_IMG;
}
