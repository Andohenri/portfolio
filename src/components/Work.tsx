import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { getPortfolioContent } from '../constants'
import { useLocale } from '../context/LocaleContext'
import { ServiceItem } from './ServiceItem'
import { ProjectCard } from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const { locale } = useLocale()
  const copy = getPortfolioContent(locale).work
  const sectionRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.work-header',
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.work-header',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo('.work-card',
      { opacity: 0, y: 72, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: { amount: 0.42, from: 'start' },
        scrollTrigger: {
          trigger: '.work-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo('.services-header > *',
      { opacity: 0, y: 22 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 84%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo('.service-item',
      {
        opacity: 0,
        x: -52,
        clipPath: 'inset(0 100% 0 0)',
      },
      {
        opacity: 1,
        x: 0,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.7,
        ease: 'power4.out',
        stagger: { amount: 0.48, from: 'start' },
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      }
    )

  }, { scope: sectionRef })

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-6 sm:px-12 md:px-16 py-20 md:py-32 bg-bg overflow-hidden"
    >
      {/* ── Header ── */}
      <div className="work-header flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 md:mb-16">
        <div>
          <p className="section-label">
            {copy.label}
          </p>
          <h2 className="font-display leading-none"
            style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
            {copy.title[0]} <span className="text-red">{copy.title[1]}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <p className="hidden md:block text-black/50 text-xs leading-relaxed text-right max-w-xs">
            {copy.description}
          </p>
          <a
            href="https://github.com/andohenri"
            target="_blank"
            rel="noreferrer"
            className="self-start sm:self-end inline-flex items-center gap-2
                       bg-dark text-white px-6 py-2.5 rounded-full
                       text-[10px] font-bold tracking-widest uppercase no-underline
                       transition-all duration-300
                       hover:bg-red hover:-translate-y-0.5
                       hover:shadow-[0_8px_24px_rgba(255,59,31,.3)]"
          >
            {copy.github}
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Grid projets ── */}
      <div className="work-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-20 md:mb-28">
        {copy.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* ── Services ── */}
      <div ref={servicesRef}>
        <div className="services-header mb-8 md:mb-10">
          <p className="section-label flex items-center gap-2.5 mb-2.5">
            {copy.servicesLabel}
          </p>
          <h2 className="font-display leading-none"
            style={{ fontSize: 'clamp(1.8rem,4vw,3.4rem)' }}>
            {copy.servicesTitle[0]} <span className="text-red">{copy.servicesTitle[1]}</span>
          </h2>
        </div>

        <div>
          {copy.services.map(s => (
            <ServiceItem key={s.num} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work