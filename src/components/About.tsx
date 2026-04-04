import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { codeLines, stats, techBadges } from '../constants'

gsap.registerPlugin(ScrollTrigger)

// ─── Lerp natif ──────────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

// ─── TerminalCard ─────────────────────────────────────────────────────────────
const TerminalCard = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

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
    <div className="relative flex flex-col w-full h-full rounded-3xl overflow-hidden bg-[#0f0f0f]">
      <div className="mx-[6%] mt-[7%] h-full rounded-xl bg-[#1a1a1a] overflow-hidden flex flex-col">

        {/* Barre titre */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e1e] shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[9px] text-white/20 font-mono">terminal</span>
        </div>

        {/* Corps */}
        <div className="px-4 py-3 space-y-1.5 flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#68a063] text-[10px] font-mono font-bold">$</span>
            <span className="text-[#e2e8f0]/60 text-[10px] font-mono">npm run dev</span>
          </div>

          {codeLines.map((line, i) => (
            <div key={i} className="flex items-center h-1.5">
              <span
                className="h-full rounded-sm"
                style={{ width: line.w, background: line.color, opacity: line.op }}
              />
            </div>
          ))}

          <div ref={cursorRef} className="w-2.5 h-3 rounded-sm bg-red mt-1" />
        </div>
      </div>

      {/* Tech badges */}
      <div className="grid grid-cols-3 gap-2 mx-[6%] mt-3 pb-[6%]">
        {techBadges.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl py-3 bg-[#1a1a1a]"
          >
            <Icon size={18} strokeWidth={1.5} style={{ color }} />
            <span className="text-[8px] font-mono font-medium tracking-wide" style={{ color, opacity: 0.75 }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const statRefs = useRef<Array<HTMLSpanElement | null>>([])

  // ─── 3-D tilt magnétique via rAF lerp ────────────────────────────────────
  useEffect(() => {
    let mx = 0, my = 0
    let cx = 0, cy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      mx = (e.clientX - rect.left) / rect.width - 0.5
      my = (e.clientY - rect.top) / rect.height - 0.5
    }

    const tick = () => {
      cx = lerp(cx, mx * 0.018, 0.055)   // ← coefficient = amplitude tilt
      cy = lerp(cy, my * 0.018, 0.055)
      if (cardRef.current) {
        cardRef.current.style.transform =
          `perspective(900px) rotateY(${cx * 30}deg) rotateX(${-cy * 20}deg)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // ─── Animations ScrollTrigger ─────────────────────────────────────────────
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

    tl.fromTo('.about-label',
      { opacity: 0, x: -28 },
      { opacity: 1, x: 0, duration: 0.55 })
      .fromTo('.about-heading',
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.75 }, 0.12)
      .fromTo('.about-text',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65 }, 0.28)

      // ── Reveal carte : fond rouge wipe → card fade-in ──────────────────
      .fromTo('.about-img-bg',
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 0.75, ease: 'power4.out' }, 0.18)
      .fromTo('.about-img-wrap',
        { opacity: 0, x: 52 },
        { opacity: 1, x: 0, duration: 0.85 }, 0.32)

      // ── Stats staggered ──────────────────────────────────────────────────
      .fromTo('.stat-item',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 0.45)

      // ── Badge disponibilité — elastic pop ────────────────────────────────
      .fromTo('.about-badge',
        { opacity: 0, scale: 0.72 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.7)' }, 0.9)

      // ── Compteurs : lerp rAF natif (pas de gsap ticker) ──────────────────
      .add(() => {
        statRefs.current.forEach((ref, i) => {
          if (!ref) return
          const target = stats[i].num
          let val = 0
          const step = () => {
            val = lerp(val, target, 0.055)
            ref.textContent = String(Math.round(val))
            if (Math.abs(target - val) > 0.3) requestAnimationFrame(step)
            else ref.textContent = String(target)
          }
          requestAnimationFrame(step)
        })
      }, 0.45)

  }, { scope: sectionRef })

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
          className="about-heading font-display leading-none mb-7"
          style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', opacity: 0 }}
        >
          CRÉER,<br />
          OPTIMISER,<br />
          <span className="text-red">FAIRE ÉVOLUER.</span>
        </h2>

        <p
          className="about-text text-gray-500 leading-relaxed mb-12 max-w-lg"
          style={{ opacity: 0 }}
        >
          Je suis <strong className="text-dark">RAZAFINATOANDRO Ando Henri</strong>, développeur
          spécialisé dans la conception d'applications web et mobiles sur mesure.
          J'aide les entreprises et entrepreneurs à transformer leurs idées en solutions
          digitales performantes, fiables et évolutives.
        </p>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item flex flex-col gap-1" style={{ opacity: 0 }}>
              <div className="font-display text-5xl leading-none text-dark flex items-baseline gap-0.5">
                <span ref={(el: HTMLSpanElement | null) => { statRefs.current[i] = el }}>0</span>
                <span className="text-red">{s.suffix}</span>
              </div>
              <span className="text-xs text-muted tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ────────── RIGHT ────────── */}
      <div className="relative flex justify-center items-center">
        <div
          ref={cardRef}
          className="about-img-wrap relative rounded-3xl max-w-sm w-full"
          style={{ aspectRatio: '3/4', opacity: 0, willChange: 'transform' }}
        >
          <div
            className="about-img-bg absolute inset-0 bg-red/80 rounded-3xl"
            style={{ transform: 'scaleX(0)' }}
          />
          <TerminalCard />
        </div>

        {/* Badge flottant */}
        <div
          className="about-badge absolute -left-8 bottom-8 bg-dark text-white rounded-2xl p-5 shadow-2xl z-10"
          style={{ opacity: 0 }}
        >
          <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
            ● Disponible maintenant
          </span>
        </div>
      </div>
    </section>
  )
}

export default About