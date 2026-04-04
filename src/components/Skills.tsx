import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { skills } from '../constants'

gsap.registerPlugin(ScrollTrigger, useGSAP)


const tags = [
  'HTML / CSS', 'Gsap animation',
  'n8n', 'REST API', 'Git', 'Tailwind CSS',
  'Prisma', 'JWT', 'Linux', 'CI/CD', 'Agile / Scrum',
  'WebSockets', 'Testing', 'Microservices',
  'Caching (Redis)', 'Queues (RabbitMQ)'
]

const Skills = () => {
  const sectionRef = useRef(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo('.sk-header', { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sk-header', start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )

    // Cards stagger
    gsap.fromTo('.skill-card', { y: 60, opacity: 0 },
      {
        y: 0, rotateX: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          onEnter() {
            setTimeout(() => {
              barRefs.current.forEach((bar, i) => {
                if (bar) bar.style.width = skills[i].pct + '%'
              })
            }, 500)
          },
        },
      }
    )

    gsap.to(".marquee-track", {
      xPercent: -50,
      duration: 10,
      ease: "linear",
      repeat: -1,
    })

    gsap.fromTo(barRefs.current,
      { width: 0 },
      {
        width: (i) => skills[i].pct + '%',
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.08
      }
    )
  },
    { scope: sectionRef }
  )

  return (
    <section id="skills" ref={sectionRef} className="bg-dark px-16 py-32 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,59,31,0.08),transparent_40%)]" />

      {/* Header */}
      <div className="sk-header flex justify-between items-end mb-16">
        <div>
          <p className="section-label">Expertise</p>
          <h2 className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem,5vw,4.2rem)' }}>
            CE QUE JE <span className="text-red">MAÎTRISE</span>
          </h2>
        </div>
        <p className="hidden md:block text-white/40 text-sm leading-relaxed text-right max-w-xs">
          Conception, développement et optimisation de solutions digitales modernes,
          pensées pour la performance et l’évolutivité.
        </p>
      </div>

      {/* Grid */}
      <div className="skills-grid grid grid-cols-2 md:grid-cols-5 z-10 gap-4">
        {skills.map((s, i) => (
          <div key={s.name}
            className="skill-card group
                        bg-linear-to-b from-white/5 to-transparent
                        border border-white/6
                        rounded-2xl p-6
                        transition-all duration-500
                        hover:-translate-y-2
                        hover:border-red/40
                        hover:shadow-[0_20px_60px_rgba(255,59,31,0.15)]">
            <div className="md:w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4
  transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{ background: s.color + '22', border: `1px solid ${s.color}44` }}>
              <s.icon color={s.color} />
            </div>
            <p className="text-white hidden sm:block font-semibold mb-1">{s.name}</p>
            <p className="text-muted hidden sm:block text-xs tracking-widest uppercase mb-3">
              {s.level} &middot;
            </p>
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <div
                ref={el => { if (el) barRefs.current[i] = el }}
                className="skill-bar-inner h-full rounded-full"
                style={{
                  width: 0, background: s.color,
                  transition: 'width 1.2s cubic-bezier(.4,0,.2,1)'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="overflow-hidden mt-16 pt-6 border-t border-white/[.07]">
        <div className="marquee-track flex gap-7 max-w-max">
          {[...tags, ...tags].map((tag, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold tracking-[.12em] uppercase text-white/30 whitespace-nowrap">
              <span className="text-red">✦</span>{tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
