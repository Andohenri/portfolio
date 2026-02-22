import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { MdMailOutline } from 'react-icons/md'
import { fields, socials } from '../constants'

gsap.registerPlugin(ScrollTrigger, useGSAP)


const inputCls = [
  'w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4',
  'font-body text-sm text-white outline-none placeholder-white/25',
  'focus:border-red focus:bg-red/5 transition-all duration-300',
].join(' ')

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgTextRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo('.c-heading',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8 })
      .fromTo('.c-info > *',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.12 }, 0.2)
      .fromTo('.c-field',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, 0.25)
      .fromTo('.c-btn',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }, 0.9)
      .fromTo('.social-btn',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(2)' }, 0.4)

    gsap.set(bgTextRef.current, { xPercent: -50, yPercent: -50 })

    gsap.fromTo(bgTextRef.current,
      { x: '-50%' },
      {
        x: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      }
    )
  },
    { scope: sectionRef }
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-dark overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-20 px-16 py-32"
    >
      {/* ── BG ghost text ── */}
      <span
        ref={bgTextRef}
        className="pointer-events-none absolute top-1/2 left-1/2 text-[18vw] font-display whitespace-nowrap text-white/[.018]"
        style={{ letterSpacing: '.02em' }}
      >
        HELLO !
      </span>

      {/* ── LEFT ── */}
      <div className="relative z-10">
        <p className="section-label text-red">Contact</p>

        <h2
          className="c-heading font-display text-white leading-none mb-8"
          style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', opacity: 0 }}
        >
          LET'S<br />WORK<br />
          <span className="text-red">TOGETHER.</span>
        </h2>

        <div className="c-info flex flex-col gap-6">
          {/* Email */}
          <a
            href="mailto:andohenrirazafinatoandro@gmail.com"
            className="inline-flex items-center gap-3 text-white/60 no-underline
                       pb-4 text-sm hover:text-red
                       transition-colors duration-300 w-fit hoverable"
            style={{ opacity: 0 }}
          >
            <MdMailOutline size={18} />
            andohenrirazafinatoandro@gmail.com
          </a>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-btn w-12 h-12 rounded-full border border-white/15
                           flex items-center justify-center text-white
                           no-underline transition-all duration-300
                           hover:bg-red hover:border-red hover:-translate-y-1 hoverable"
                style={{ opacity: 0 }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT — Formulaire ── */}
      <form
        className="relative z-10 flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Ligne prénom / nom */}
        <div className="grid grid-cols-2 gap-4">
          {fields.slice(0, 2).map(({ id, label, placeholder }) => (
            <div key={id} className="c-field" style={{ opacity: 0 }}>
              <label
                htmlFor={id}
                className="block text-white/40 text-xs tracking-[.12em] uppercase mb-2"
              >
                {label}
              </label>
              <input
                id={id}
                name={id}
                className={inputCls}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>

        {/* Champs restants (email, sujet) */}
        {fields.slice(2).map(({ id, label, placeholder, type }) => (
          <div key={id} className="c-field" style={{ opacity: 0 }}>
            <label
              htmlFor={id}
              className="block text-white/40 text-xs tracking-[.12em] uppercase mb-2"
            >
              {label}
            </label>
            <input
              id={id}
              name={id}
              type={type ?? 'text'}
              className={inputCls}
              placeholder={placeholder}
            />
          </div>
        ))}

        {/* Message */}
        <div className="c-field" style={{ opacity: 0 }}>
          <label
            htmlFor="message"
            className="block text-white/40 text-xs tracking-[.12em] uppercase mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={inputCls}
            placeholder="Décrivez votre projet…"
          />
        </div>

        <button
          type="submit"
          className="c-btn bg-red text-white w-full py-4 rounded-xl font-bold
                     text-sm tracking-widest uppercase transition-all duration-300
                     hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,59,31,.4)]
                     hover:bg-[#e02d0f] hoverable"
          style={{ opacity: 0 }}
        >
          Envoyer le message →
        </button>
      </form>
    </section>
  )
}

export default Contact