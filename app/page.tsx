'use client'

import { useMemo, useState } from 'react'
import {ArrowRight, BatteryCharging, Check,ChevronDown,CircleHelp,Home, Menu,Phone,ShieldCheck,Sparkles,SunMedium,X, Zap,} from 'lucide-react'

const projects = [
  { type: 'Residential', title: 'Maple Street home', meta: '8.4 kW · 24 panels', image: '/solar-hero.png' },
  { type: 'Residential', title: 'Cedar Ridge backup', meta: '10.8 kW + battery', image: '/solar-hero.png' },
  { type: 'Commercial', title: 'Northline workspace', meta: '42 kW · flat roof', image: '/solar-hero.png' },
]

const faqs = [
  ['How much does solar cost?', 'Every system is designed around your roof, energy use, and goals. We provide a clear, no-pressure proposal after your free assessment.'],
  ['Will solar work during an outage?', 'Solar panels alone usually turn off during an outage. Add a battery system to keep essential circuits powered when the grid goes down.'],
  ['How long does installation take?', 'Most residential installations are completed in one to two days once permits and utility approvals are in place.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [monthlyBill, setMonthlyBill] = useState('')

  const filteredProjects = useMemo(
    () => projectFilter === 'All' ? projects : projects.filter((project) => project.type === projectFilter),
    [projectFilter],
  )

  const estimatedSavings = monthlyBill ? Math.round(Number(monthlyBill) * 12 * 0.82 * 5).toLocaleString() : '—'

  return (
    <main className="site-shell">
      <div className="announcement"><span>Now booking spring installations</span><a href="#quote">Get your free solar assessment <ArrowRight size={14} /></a></div>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Sunward Solar home">
          <span className="brand-mark"><SunMedium size={22} />
          </span>
          <span>sunward<span className="brand-accent">.</span>
          </span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:18005550190"><Phone size={15} /> (800) 555-0190</a>
          <a className="button button-small" href="#quote">Get a quote <ArrowRight size={16} />
          </a>
        </div>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> Power your everyday</p>
          <h1>Make your home <em>brighter.</em></h1>
          <p className="hero-lede">Solar energy and battery backup, designed around the way you live.
            Make a confident switch to clean power with a local team you can count on.</p>
          <div className="hero-actions"><a className="button" href="#quote">See what you can save <ArrowRight size={17} /></a>
            <a className="text-link" href="#how-it-works">Explore our process <ArrowRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>JD</span><span>AM</span><span>RK</span>
            </div>
            <p><strong>4.9/5</strong> from 240+ local homeowners</p>
          </div>
        </div>
        <div className="hero-visual"><div className="sun-glow" /><div className="hero-photo"><img src="/solar-hero.png" alt="Solar panels on a sunlit modern home" /></div><div className="floating-card savings-card"><span className="card-icon"><Zap size={16} /></span><span><small>Average annual savings</small><strong>$2,840</strong></span></div><div className="floating-card clean-card"><Check size={15} /><span>Clean energy<br /><strong>starts here</strong></span></div></div>
      </section>

      <section className="trust-strip"><p>Trusted by homeowners across the region</p><div className="trust-items"><span><ShieldCheck size={18} /> 25-year protection</span><span><SunMedium size={18} /> NABCEP certified</span><span><BatteryCharging size={18} /> Battery-ready systems</span><span><Sparkles size={18} /> 100% satisfaction</span></div></section>


      <section className="section solutions" id="solutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Solutions that fit</p><h2>More control over<br /><em>your energy.</em></h2>
          </div>
          <p>From your first consultation to your first utility bill, we make going solar feel refreshingly simple.</p>
        </div>
        <div className="solution-grid"><article className="solution-card card-sun"><span className="number">01</span><SunMedium size={34} />
          <h3>Residential solar</h3><p>Turn your roof into a source of clean, predictable energy for your home.</p><a href="#quote">Explore solar <ArrowRight size={16} /></a>
        </article>
          <article className="solution-card card-battery"><span className="number">02</span><BatteryCharging size={34} /><h3>Battery backup</h3>
            <p>Keep the lights on and take control when the grid is down or rates are high.</p><a href="#quote">Explore backup <ArrowRight size={16} /></a>
          </article>
          <article className="solution-card card-business"><span className="number">03</span><Home size={34} /><h3>For your business</h3>
            <p>Lower operating costs with a smarter, more resilient commercial system.</p><a href="#quote">Explore commercial <ArrowRight size={16} /></a>
          </article>
        </div>
      </section>




      <section className="process-section" id="how-it-works">
        <div className="process-intro"><p className="eyebrow">A better way to go solar</p><h2>Simple from<br /><em>start to finish.</em></h2>
          <p>We handle the details, explain every step, and never make you chase us for an update.</p>
          <a className="text-link light-link" href="#quote">Talk to a solar guide <ArrowRight size={16} /></a></div><div className="process-steps">
          <div><span>01</span><h3>See your potential</h3>
            <p>Share a few details about your home and current energy use.</p>
          </div>
          <div><span>02</span>
            <h3>Get a clear plan</h3>
            <p>We design a system around your roof, budget, and energy goals.</p>
          </div>
          <div><span>03</span><h3>We make it happen</h3>
            <p>Our certified crew handles permits, installation, and activation.</p>
          </div>
          <div>
            <span>04</span><h3>Enjoy the difference</h3>
            <p>Watch your savings grow with simple monitoring and local support.</p>
          </div>
        </div>
      </section>



      <section className="section calculator-section" id="savings"><div><p className="eyebrow">A little motivation</p><h2>What could you<br />
        <em>save?</em></h2><p>Get a quick, personalized estimate. No phone number required.</p></div>
        <div className="calculator-card">
          <label htmlFor="bill">Whats your average monthly electric bill?</label>
          <div className="bill-input"><span>#</span><input id="bill" type="number" min="0"
            placeholder="180" value={monthlyBill}
            onChange={(event) => setMonthlyBill(event.target.value)} /><span>/ month</span>
          </div>
          <div className="estimate"><span>Potential 5-year savings</span>
            <strong>{estimatedSavings === '—' ? 'Enter your bill' : `#${estimatedSavings}`}</strong>
          </div>
          <a className="button" href="#quote">Get my exact estimate <ArrowRight size={16} /></a>
          </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading"><div><p className="eyebrow">Proof in the panels</p><h2>Built for real<br />
          <em>life.</em></h2></div><div className="project-controls"><p>Every project is different. The care is always the same.</p>
            <div className="filter-tabs">{['All', 'Residential', 'Commercial'].map((filter) => <button key={filter}
              className={projectFilter === filter ? 'active' : ''} onClick={() => setProjectFilter(filter)}>{filter}</button>)}

            </div>
          </div>
        </div>
        <div className="project-grid">{filteredProjects.map((project) => <article className="project-card" key={project.title}>
          <div className="project-image">
            <img src={project.image} alt={`${project.title} solar installation`} />
            <span>{project.type}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.meta}</p>
        </article>)}
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div><p className="eyebrow">Let&apos;s talk energy</p><h2>Ready to make<br />
          <em>the switch?</em></h2><p>Tell us a little about your home and we will be in touch with a tailored plan.</p>
          <div className="quote-contact">
            <Phone size={18} />
            <span>Prefer to talk?<strong>(800) 555-0190</strong></span>
          </div>
        </div>{submitted ?
          <div className="success-card"><Check size={28} />
            <h3>We've got it.</h3>
            <p>Thanks for reaching out. A solar guide will be in touch shortly.</p>
          </div>
          : <form className="quote-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <div className="form-row">
              <label>First name<input required placeholder="Alex" /></label>
              <label>Last name<input required placeholder="Morgan" /></label>
            </div>
            <label>Email address<input type="email" required placeholder="alex@example.com" />

            </label>
            <label>What are you interested in?
              <select defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Solar panels</option>
                <option>Battery backup</option>
                <option>Solar + battery</option>
                <option>Commercial solar</option>
              </select>
            </label>
            <button className="button" type="submit">Request my free quote <ArrowRight size={16} /></button>
            <small>By submitting, you agree to receive helpful updates from Sunward Solar.</small>
          </form>}
      </section>

      <section className="section faq-section" id="faq">
        <div><p className="eyebrow">Questions, answered</p><h2>Good to<br /><em>know.</em></h2>
          <p>Still curious? Our solar guides are here to help.</p>
          <a className="text-link" href="#quote">Ask us anything <ArrowRight size={16} /></a></div>
        <div className="faq-list">{faqs.map(([question, answer], index) =>
          <div className="faq-item" key={question}>
            <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              aria-expanded={openFaq === index}>
              <span>{question}</span>
              <ChevronDown className={openFaq === index ? 'rotated' : ''} size={19} />
            </button>
            {openFaq === index && <p>{answer}</p>}
          </div>)}
        </div>
      </section>

      <footer className="footer" id="about">
        <div className="brand footer-brand">
          <span className="brand-mark"><SunMedium size={22} /> </span>
          <span>sunward<span className="brand-accent">.</span></span>
        </div>
        <p>Clean energy, thoughtfully installed.<br />Serving our community since 2011.</p>
        <address className="footer-address">1234 AHA Plaza bwari,<br /> FCT ABUJA</address>
        <div className="footer-links">
          <a href="#solutions">Solutions</a><br />
          <a href="#projects">Projects</a><br/>
          <a href="#quote">Contact</a><br/>
          <a href="#faq">FAQ</a>
        </div>
        <p className="copyright">© 2026 Sunward Solar. All rights reserved.</p>
      </footer>
    </main>
  )
}
