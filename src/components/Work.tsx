import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiMysql,
  SiDocker,
  SiN8N,
} from 'react-icons/si'
import { FaArrowRight } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// ── Types ─────────────────────────────────────────────────────────────────────
interface TechIcon {
  icon: React.ElementType
  color: string
}

interface Project {
  id: number
  cat: string
  title: string
  bg: string
  col: string
  techIcons: TechIcon[]
}

interface Service {
  num: string
  name: string
  desc: string
}

interface ServiceItemProps {
  item: Service
}

// ── Data ──────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    cat: 'Next.js · TypeScript · PostgreSQL',
    title: 'App de gestion de tâches',
    bg: 'from-[#0f172a] to-[#1e3a5f]',
    col: 'text-white',
    techIcons: [
      { icon: SiNextdotjs, color: '#ffffff' },
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    id: 2,
    cat: 'Node.js · Express · MongoDB',
    title: 'API REST E-commerce',
    bg: 'from-[#1a0f2e] to-violet-800',
    col: 'text-white',
    techIcons: [
      { icon: SiNodedotjs, color: '#68a063' },
      { icon: SiExpress, color: '#ffffff' },
      { icon: SiMongodb, color: '#4ade80' },
    ],
  },
  {
    id: 3,
    cat: 'React · MySQL · Docker',
    title: 'Dashboard Analytics',
    bg: 'from-[#0d1b2a] to-[#1a3a5f]',
    col: 'text-white',
    techIcons: [
      { icon: SiReact, color: '#61dafb' },
      { icon: SiMysql, color: '#f59e0b' },
      { icon: SiDocker, color: '#2496ed' },
    ],
  },
  {
    id: 4,
    cat: 'n8n · Node.js · PostgreSQL',
    title: "Pipeline d'automatisation",
    bg: 'from-rose-100 to-pink-200',
    col: 'text-dark',
    techIcons: [
      { icon: SiN8N, color: '#ea4b71' },
      { icon: SiNodedotjs, color: '#68a063' },
      { icon: SiPostgresql, color: '#336791' },
    ],
  },
]

const services: Service[] = [
  {
    num: '01',
    name: 'DÉVELOPPEMENT FULLSTACK',
    desc: "Création d'applications web complètes de A à Z : interfaces React/Next.js côté client, APIs Express/Node.js côté serveur, bases de données PostgreSQL ou MongoDB. Typage strict TypeScript et bonnes pratiques inclus.",
  },
  {
    num: '02',
    name: 'APIS & BASES DE DONNÉES',
    desc: "Conception et développement d'APIs RESTful robustes avec Node.js/Express. Modélisation de bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB), migrations, ORM Prisma.",
  },
  {
    num: '03',
    name: 'AUTOMATISATION N8N',
    desc: "Mise en place de workflows d'automatisation avec n8n : intégrations d'APIs tierces, automatisation de tâches répétitives, traitement de données, notifications et pipelines no-code/low-code.",
  },
  {
    num: '04',
    name: 'DÉPLOIEMENT DOCKER',
    desc: "Containerisation d'applications avec Docker et Docker Compose. Configuration d'environnements reproductibles, déploiement sur serveurs VPS, initiation à l'orchestration Kubernetes.",
  },
]

// ── ServiceItem ───────────────────────────────────────────────────────────────
const ServiceItem = ({ item }: ServiceItemProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const plusRef = useRef<HTMLSpanElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const isOpening = !open

    gsap.to(bodyRef.current, {
      maxHeight: isOpening ? 220 : 0,
      duration: isOpening ? 0.5 : 0.35,
      ease: isOpening ? 'power3.out' : 'power3.in',
    })

    gsap.to(plusRef.current, {
      rotate: isOpening ? 45 : 0,
      duration: 0.35,
      ease: 'power2.inOut',
    })

    gsap.to(itemRef.current, {
      borderColor: isOpening
        ? 'rgba(255,59,31,.4)'
        : 'rgba(17,16,16,.15)',
      duration: 0.3,
    })

    setOpen(isOpening)
  }

  return (
    <div
      ref={itemRef}
      className="service-item border-t border-dark/15 last:border-b last:border-dark/15 overflow-hidden"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-7 text-left group hoverable"
      >
        <span className="text-xs text-muted tracking-widest mr-6 tabular-nums">
          {item.num}
        </span>
        <span
          className="font-display flex-1 group-hover:text-red transition-colors duration-300"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.6rem)', letterSpacing: '.03em' }}
        >
          {item.name}
        </span>
        <span
          ref={plusRef}
          className={`w-10 h-10 rounded-full border flex items-center justify-center
                      text-xl font-light transition-colors duration-300
                      ${open
              ? 'bg-red text-white border-red'
              : 'border-dark/20 group-hover:bg-red group-hover:text-white group-hover:border-red'
            }`}
        >
          +
        </span>
      </button>

      <div ref={bodyRef} className="overflow-hidden" style={{ maxHeight: 0 }}>
        <p className="pb-7 pl-10 pr-4 text-gray-500 leading-relaxed max-w-xl text-[.95rem]">
          {item.desc}
        </p>
      </div>
    </div>
  )
}

// ── Work ──────────────────────────────────────────────────────────────────────
const Work = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.work-header', { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-header',
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // 2. Cards stagger slide-up
    gsap.fromTo('.work-card', { opacity: 0, y: 80 },
      {
        opacity: 1, y: 0,
        duration: 0.75, ease: 'power3.out',
        stagger: { amount: 0.45, from: 'start' },
        scrollTrigger: {
          trigger: '.work-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // 3. Services header
    gsap.fromTo(
      '.services-header > *',
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0,
        duration: 0.55, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // 4. Services items : gauche → droite en stagger
    gsap.fromTo(
      '.service-item',
      {
        opacity: 0,
        x: -60,
        clipPath: 'inset(0 100% 0 0)',
      },
      {
        opacity: 1,
        x: 0,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.65,
        ease: 'power3.out',
        stagger: { amount: 0.5, from: 'start' },
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  },
    { scope: sectionRef }
  )

  return (
    <section id="work" ref={sectionRef} className="px-16 py-32 bg-bg overflow-hidden">

      {/* Header */}
      <div className="work-header flex justify-between items-end mb-16">
        <div>
          <p className="section-label">Projets</p>
          <h2
            className="font-display leading-none"
            style={{ fontSize: 'clamp(2.5rem,5vw,4.2rem)' }}
          >
            MES <span className="text-red">PROJETS</span>
          </h2>
        </div>
        <a
          href="https://github.com/andohenri"
          target="_blank"
          rel="noreferrer"
          className="bg-dark text-white px-6 py-2 rounded-full text-xs font-semibold
                     tracking-widest uppercase no-underline hover:bg-red transition-colors
                     duration-300 self-end hoverable"
        >
          GitHub →
        </a>
      </div>

      {/* Grid projets */}
      <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`work-card relative rounded-2xl overflow-hidden cursor-none group
                        bg-linear-to-br ${p.bg}`}
            style={{ aspectRatio: '4/3', opacity: 0 }}
          >
            <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-10">
              {p.techIcons.map(({ icon: Icon, color }, i) => (
                <Icon key={i} size={64} style={{ color }} />
              ))}
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-dark/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className={p.col}>
                <p className="text-red text-xs font-semibold tracking-[.15em] uppercase mb-2">
                  {p.cat}
                </p>
                <p className="font-display text-3xl tracking-wide text-white">{p.title}</p>

                <div className="flex items-center gap-3 mt-3">
                  {p.techIcons.map(({ icon: Icon, color }, i) => (
                    <Icon key={i} size={18} style={{ color }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Flèche */}
            <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <FaArrowRight size={16} strokeWidth={2.5} color="#111" />
            </div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="mt-24" ref={servicesRef}>
        <div className="services-header mb-8">
          <p className="section-label">Services</p>
          <h2
            className="font-display leading-none"
            style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}
          >
            CE QUE JE <span className="text-red">PROPOSE</span>
          </h2>
        </div>

        <div>
          {services.map((s) => (
            <ServiceItem key={s.num} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work