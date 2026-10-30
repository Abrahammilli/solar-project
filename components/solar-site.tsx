'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronDown,
  CircleDollarSign,
  Download,
  Home,
  Leaf,
  Menu,
  PanelTop,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
  X,
} from 'lucide-react'

const services = [
  { icon: Sun, number: '01', title: 'Residential solar', text: 'A smarter roof, engineered around your home, your energy use, and your long-term goals.' },
  { icon: BatteryCharging, number: '02', title: 'Battery storage', text: 'Keep the lights on through outages and use more of your own clean energy, day and night.' },
  { icon: PanelTop, number: '03', title: 'Commercial solar', text: 'Turn your biggest operating expense into a strategic advantage with scalable systems.' },
  { icon: Zap, number: '04', title: 'EV charging', text: 'Charge at home with a convenient Level 2 system integrated with your solar setup.' },
]

const projects = [
  { label: 'Residential · 8.4 kW', title: 'The Ajiboye home', stat: '92% offset', className: 'project-one' },
  { label: 'Residential · 12.8 kW', title: 'The johson residence', stat: '$2,840 saved / yr', className: 'project-two' },
  { label: 'Commercial · 48 kW', title: 'fruit & wine Workshop', stat: '31% lower costs', className: 'project-three' },
]

const faqs = [
  ['How much does solar yo cost?', ' Every system is designed around your home and energy use. After a free assessment, we show your options, savings, and monthly payment side-by-side.'],
  ['Will solar work during a power outage?', 'Panels alone shut off during an outage. Add a home battery and your essential circuits can stay powered automatically.'],
  ['How long does installation take?', 'Most residential installations are completed in one to two days once permits and utility approval are in place.'],
]

function Brand() {
  return <Link href="#top" className="brand" aria-label="Sunward Energy home"><span className="brand-mark"><Sun size={18} strokeWidth={2.5} /></span><span>sunward<span className="brand-dot">.</span></span></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="nav-wrap"><Brand /><nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation"><Link href="#solutions" onClick={() => setOpen(false)}>Solutions</Link><Link href="#savings" onClick={() => setOpen(false)}>Savings</Link><Link href="#projects" onClick={() => setOpen(false)}>Projects</Link><Link href="#about" onClick={() => setOpen(false)}>About us</Link><Link href="#faq" onClick={() => setOpen(false)}>FAQ</Link></nav><div className="nav-actions"><a href="tel:18005550189" className="phone-link"><Phone size={15} /> (800) 555-0189</a><Link href="#quote" className="button button-small button-dark">Get a quote <ArrowRight size={15} /></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div></div></header>
}

function SectionIntro({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={light ? 'section-intro light' : 'section-intro'}><div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function QuoteForm() {
  return <div className="quote-card"><div className="quote-card-top"><span className="eyebrow"><span className="eyebrow-line" />Free home energy assessment</span><Sparkles size={22} /></div><h3>See what your home could save.</h3><p>Tell us a little about your energy use. We'll show you a clear, no-pressure path to more affordable, reliable power.</p><form className="quote-form" onSubmit={(e) => e.preventDefault()}><label><span>Monthly electric bill</span><select defaultValue=""><option value="" disabled>Select a range</option><option>$100–$200</option><option>$200–$350</option><option>$350+</option></select></label><label><span>ZIP code</span><input placeholder="e.g. 90210" inputMode="numeric" /></label><button className="button button-light" type="submit">Calculate my savings <ArrowRight size={16} /></button></form><small>Free estimate · No obligation · Takes 2 minutes</small></div>
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-image"><Image src="/solar-hero.png" alt="Modern home with solar panels at golden hour" fill priority sizes="100vw" /></div><div className="hero-overlay" /><div className="hero-content page-width"><div className="hero-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" />Power your everyday</div><h1>Energy that works<br /><em>for you.</em></h1><p>Thoughtfully designed solar and battery systems for a more independent, affordable, and sustainable home.</p><div className="hero-buttons"><Link href="#quote" className="button button-accent">Explore your savings <ArrowRight size={17} /></Link><Link href="#projects" className="text-link light-link">See our work <ArrowRight size={16} /></Link></div></div><QuoteForm /></div><div className="hero-bottom page-width"><span><span className="status-dot" />Serving homeowners since 2012</span><span>Clean energy, beautifully done</span></div></section>
}

function TrustBar() {
  return <section className="trust-bar"><div className="page-width trust-inner"><span className="trust-label">Trusted by homeowners<br />across the region</span><div className="trust-item"><ShieldCheck size={20} />NABCEP Certified</div><div className="trust-item"><span className="trust-stars">★★★★★</span><span>5.0 on Google</span></div><div className="trust-item"><Leaf size={20} />10,000+ tons CO₂ offset</div><div className="trust-item"><span className="trust-number">12</span><span>years of expertise</span></div></div></section>
}

function Solutions() {
  return <section className="section page-width" id="solutions"><SectionIntro eyebrow="What we do" title={<>A better way to<br /><span>power your life.</span></>} text="From the first conversation to the day your system goes live, we make clean energy feel simple."/><div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={22} /></div><span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p><Link href="#quote" className="card-link" aria-label={`Learn more about ${title}`}>Learn more <ArrowRight size={15} /></Link></article>)}</div></section>
}

function Process() {
  return <section className="process-section"><div className="page-width"><SectionIntro eyebrow="The Sunward way" title={<>From first light<br /><span>to full power.</span></>} text="A straightforward process, guided by people who know their craft." light/><div className="process-grid">{[['01', 'Discover', 'We learn how your home works today and what you want it to do tomorrow.'], ['02', 'Design', 'Our team creates a system that fits your roof, your rhythm, and your budget.'], ['03', 'Install', 'Certified installers bring your system to life with care, precision, and respect.'], ['04', 'Activate', 'We handle the details and stay close long after your system is switched on.']].map(([number, title, text]) => <div className="process-step" key={number}><span>{number}</span><div className="process-step-line" /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
}

function Savings() {
  return <section className="savings-section" id="savings"><div className="page-width savings-grid"><div><SectionIntro eyebrow="The brighter math" title={<>Your power bill<br />shouldn't <span>powerless.</span></>} text="The average Sunward customer saves over $38,000 across the life of their system. Add the 30% federal tax credit and the numbers get even brighter."/><Link href="#quote" className="button button-dark">See your numbers <ArrowRight size={16} /></Link></div><div className="savings-card"><div className="savings-card-heading"><CircleDollarSign size={21} /><span>Illustrative lifetime savings</span></div><strong>$38,420</strong><div className="savings-chart"><div className="chart-labels"><span>Without solar</span><span>With Sunward</span></div><div className="bar bar-high" /><div className="bar bar-low" /><div className="chart-axis"><span>Year 1</span><span>Year 10</span><span>Year 25</span></div></div><div className="savings-foot"><span><Check size={14} />30% federal tax credit</span><span><Check size={14} />25-year panel warranty</span></div></div></div></section>
}

function Projects() {
  return <section className="section page-width" id="projects"><div className="projects-heading"><SectionIntro eyebrow="Proof, not promises" title={<>Good energy looks<br /><span>good on you.</span></>} text="A few of the homes and businesses we've helped take their power back."/><Link href="#quote" className="text-link">View all projects <ArrowRight size={16} /></Link></div><div className="project-grid">{projects.map((project, i) => <article className={`project-card ${project.className}`} key={project.title}><div className="project-image"><div className="project-placeholder">{i === 0 ? <Home size={38} /> : i === 1 ? <Sun size={38} /> : <PanelTop size={38} />}<span>Project image</span></div><div className="project-overlay"><span>{project.label}</span><h3>{project.title}</h3><strong>{project.stat}</strong></div></div></article>)}</div><p className="project-note"><Download size={16} /> When you're ready, upload your completed project photos to <code>public/projects/</code> to replace these image slots.</p></section>
}

function About() {
  return <section className="about-section" id="about"><div className="page-width about-grid"><div className="about-art"><div className="sun-orb"><Sun size={48} /></div><div className="about-stamp">Local team<br /><strong>Since 2012</strong></div><div className="about-lines" /></div><div className="about-copy"><SectionIntro eyebrow="Why Sunward" title={<>The right energy<br /><span>feels personal.</span></>} text="We're a local team of designers, electricians, and energy nerds who believe a cleaner future starts at home. No pushy sales tactics. No confusing fine print. Just thoughtful work that pays you back."/><div className="about-stats"><div><strong>4.9/5</strong><span>Customer rating</span></div><div><strong>2,400+</strong><span>Systems installed</span></div><div><strong>25 yr</strong><span>Panel warranty</span></div></div><Link href="#quote" className="text-link">Meet the team <ArrowRight size={16} /></Link></div></div></section>
}

function FAQ() {
  const [active, setActive] = useState(0)
  return <section className="faq-section" id="faq"><div className="page-width faq-grid"><SectionIntro eyebrow="Good to know" title={<>Questions are<br /><span>always welcome.</span></>} text="Still curious? Our energy advisors are just a call away."/><div className="faq-list">{faqs.map(([question, answer], index) => <div className={active === index ? 'faq-item active' : 'faq-item'} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{question}</span><ChevronDown size={18} /></button>{active === index && <p>{answer}</p>}</div>)}</div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="page-width footer-top"><div><Brand /><p>Clean energy, beautifully done.</p></div><div className="footer-links"><div><strong>Explore</strong><Link href="#solutions">Solutions</Link><Link href="#savings">Savings & financing</Link><Link href="#projects">Our projects</Link></div><div><strong>Company</strong><Link href="#about">About Sunward</Link><Link href="#faq">FAQ</Link><Link href="#quote">Contact us</Link></div><div><strong>Get in touch</strong><a href="tel:18005550189">(800) 555-0189</a><a href="mailto:hello@sunward.energy">hello@sunward.energy</a><span>Mon–Fri, 8am–6pm</span></div></div></div><div className="page-width footer-bottom"><span>© 2026 Sunward Energy. All rights reserved.</span><span>Privacy · Terms</span><span>Made for a brighter tomorrow.</span></div></footer>
}

export default function SolarSite() {
  return <><Header /><main><Hero /><TrustBar /><Solutions /><Process /><Savings /><Projects /><About /><FAQ /><section className="quote-section" id="quote"><div className="page-width quote-banner"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" />Let's talk energy</div><h2>Ready to make<br /><em>your move?</em></h2></div><div><p>Start with a free, no-pressure assessment. Your future self will thank you.</p><Link href="#top" className="button button-accent">Get your free quote <ArrowRight size={16} /></Link></div></div></section></main><Footer /></>
}

export { SolarSite }
