import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { SiDocker, SiMongodb, SiMysql, SiN8N, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const skills = [
  { icon: SiReact, name: 'React / Next.js', level: 'Avancé', pct: 82, color: '#61dafb' },
  { icon: SiTypescript, name: 'TypeScript / JavaScript', level: 'Avancé', pct: 78, color: '#3178c6' },
  { icon: SiNodedotjs, name: 'Node.js / Express', level: 'Avancé', pct: 80, color: '#68a063' },
  { icon: SiDocker, name: 'Docker / K8s', level: 'Intermédiaire', pct: 65, color: '#2496ed' },
  { icon: SiPostgresql, name: 'PostgreSQL', level: 'Avancé', pct: 75, color: '#336791' },
  { icon: SiMongodb, name: 'MongoDB', level: 'Intermédiaire', pct: 68, color: '#4ade80' },
  { icon: SiMysql, name: 'MySQL', level: 'Avancé', pct: 76, color: '#f59e0b' },
  { icon: SiN8N, name: 'n8n Automation', level: 'Intermédiaire', pct: 60, color: '#ea4b71' },
]

const tags = [
  'React', 'Next.js', 'TypeScript / JavaScript', 'Node.js', 'Express',
  'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'MySQL',
  'n8n', 'REST API', 'Git', 'Tailwind CSS', 'JavaScript',
  'HTML / CSS', 'Prisma', 'JWT', 'Linux', 'CI/CD',
]

const Skills = () => {
  const sectionRef = useRef(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    // Header
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
  },
    { scope: sectionRef }
  )

  return (
    <section id="skills" ref={sectionRef} className="bg-dark px-16 py-32 overflow-hidden">

      {/* Header */}
      <div className="sk-header flex justify-between items-end mb-16">
        <div>
          <p className="section-label text-red">Stack technique</p>
          <h2 className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem,5vw,4.2rem)' }}>
            SKILLS &amp; <span className="text-red">TECH STACK</span>
          </h2>
        </div>
        <p className="hidden md:block text-white/40 text-sm leading-relaxed text-right max-w-xs">
          Fullstack Junior — en apprentissage constant, passionné par les architectures modernes.
        </p>
      </div>

      {/* Grid */}
      <div className="skills-grid grid grid-cols-1 md:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <div key={s.name}
            className="skill-card bg-white/5 border border-white/[.07] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5  hover:bg-red/10 hover:border-red/30">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ background: s.color + '22', border: `1px solid ${s.color}44` }}>
              <s.icon color={s.color} />
            </div>
            <p className="text-white font-semibold mb-1">{s.name}</p>
            <p className="text-muted text-xs tracking-widest uppercase mb-3">
              {s.level} &middot; {s.pct}%
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
        <div className="animate-marquee flex gap-7 max-w-max">
          {[...tags, ...tags].map((tag, i) => (
            <div  key={i} className="flex items-center gap-2 text-xs font-semibold tracking-[.12em] uppercase text-white/30 whitespace-nowrap">
              <span className="text-red">✦</span>{tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
