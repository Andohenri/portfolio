import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { codeLines, stats, techBadges } from '../constants'

gsap.registerPlugin(ScrollTrigger)


const TerminalCard = () => {
  const cursorRef = useRef(null)

  useGSAP(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.55,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    })
  }, { scope: cursorRef })

  return (
    <div className="relative flex flex-col justify-between z-10 w-full h-full rounded-3xl overflow-hidden bg-[#0f0f0f]"
      style={{ mixBlendMode: 'multiply' }}>

      {/* ── Fenêtre terminal ── */}
      <div className="mx-[6%] mt-[7%] h-full rounded-xl bg-[#1a1a1a] overflow-hidden">

        {/* Barre de titre */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#242424]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[10px] text-white/20 font-mono">terminal</span>
        </div>

        {/* Corps du terminal */}
        <div className="px-4 py-3 space-y-1.5">

          {/* Prompt */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#68a063] text-[10px] font-mono font-bold">$</span>
            <span className="text-[#e2e8f0]/70 text-[10px] font-mono">npm run dev</span>
          </div>

          {/* Lignes de code simulées */}
          {codeLines.map((line, i) => (
            <div key={i} className="flex items-center h-2">
              <span className="h-full rounded-sm"
                style={{
                  width: line.w,
                  background: line.color,
                  opacity: line.op,
                }}
              />
            </div>
          ))}

          {/* Curseur clignotant GSAP */}
          <div className="flex items-center h-3.5 mt-1">
            <div
              ref={cursorRef}
              className="w-2.5 h-full rounded-sm bg-red"
              style={{ opacity: 1 }}
            />
          </div>
        </div>
      </div>

      {/* ── Badges technos avec Lucide icons ── */}
      <div className="grid grid-cols-3 gap-2 mx-[6%] mt-4 pb-[6%]">
        {techBadges.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-1.5
                       rounded-xl py-3 bg-[#1a1a1a]"
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              style={{ color }}
            />
            <span
              className="text-[8px] font-mono font-medium tracking-wide"
              style={{ color, opacity: 0.75 }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const statRefs = useRef<Array<HTMLSpanElement | null>>([])

  useGSAP(() => {
    const el = sectionRef.current

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: el,
        start: 'top 72%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo('.about-label', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5 })
      .fromTo('.about-heading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .fromTo('.about-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
      .fromTo('.stat-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 0.45)
      .fromTo('.about-img-bg',
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 0.7, ease: 'power4.out' }, 0.2)
      .fromTo('.about-img-wrap', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8 }, 0.35)
      .fromTo('.about-badge',
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 0.85)

    tl.add(() => {
      statRefs.current.forEach((ref, i) => {
        if (!ref) return
        gsap.to(
          { val: 0 },
          {
            val: stats[i].num,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate() {
              ref.textContent = Math.round(this._targets[0].val) + stats[i].suffix
            },
          }
        )
      })
    }, 0.45)
  },
    { scope: sectionRef }
  )

  return (
    <section
      id="about"
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-20 px-16 py-32 bg-bg overflow-hidden"
    >
      {/* ────────── LEFT ────────── */}
      <div>
        <p className="about-label" style={{ opacity: 0 }}>
          À propos de moi
        </p>

        <h2
          className="about-heading font-display leading-none mb-8"
          style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', opacity: 0 }}
        >
          RÉSOLUTION,<br />COLLABORATION,<br />
          <span className="text-red">ADAPTABILITÉ.</span>
        </h2>

        <p
          className="about-text text-gray-500 leading-relaxed mb-12 max-w-lg"
          style={{ opacity: 0 }}
        >
          Je m'appelle <strong className="text-dark">RAZAFINATOANDRO Ando Henri</strong>.
          Développeur Fullstack Junior passionné par la création d'applications web complètes
          et performantes. Mon approche combine{' '}
          <span className="text-dark font-semibold">résolution de problèmes</span>, esprit{' '}
          <span className="text-dark font-semibold">collaboratif</span> et grande{' '}
          <span className="text-dark font-semibold">adaptabilité</span> face aux nouveaux défis.
          Curieux et autodidacte, j'apprends vite et je m'épanouis dans des environnements
          dynamiques où chaque projet est une opportunité de progresser.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item flex flex-col gap-1" style={{ opacity: 0 }}>
              <div
                ref={(el: HTMLSpanElement | null) => { statRefs.current[i] = el }}
                className="font-display text-5xl leading-none text-dark"
              >
                0 <span className='text-red'>{s.suffix}</span>
              </div>
              <span className="text-xs text-muted tracking-widest uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ────────── RIGHT ────────── */}
      <div className="relative flex justify-center">
        <div
          className="about-img-wrap relative rounded-3xl overflow-hidden max-w-sm w-full"
          style={{ aspectRatio: '3/4', opacity: 0 }}
        >
          {/* Fond rouge animé */}
          <div
            className="about-img-bg absolute inset-0 bg-red/80 rounded-3xl"
            style={{ transform: 'scaleX(0)' }}
          />

          <TerminalCard />
        </div>

        {/* Badge disponibilité */}
        <div className="about-badge absolute -left-8 bottom-8 bg-dark text-white rounded-2xl p-5 shadow-2xl z-10"
          style={{ opacity: 0 }}
        >
          <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
            ● Disponible
          </span>
          <p className="font-display text-3xl text-white leading-none mt-1">Ouvert à</p>
          <span className="text-xs text-muted tracking-widest uppercase">de nouvelles <br /> opportunités</span>
        </div>
      </div>
    </section>
  )
}

export default About