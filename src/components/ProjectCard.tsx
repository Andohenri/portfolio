import { useRef } from 'react'
import { gsap } from 'gsap'
import { FaArrowRight } from 'react-icons/fa'

// ─── Lerp natif ──────────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

interface Props {
  project: Project
  index:   number
}

export const ProjectCard = ({ project: p }: Props) => {
  const cardRef   = useRef<HTMLDivElement>(null)
  const bgRef     = useRef<HTMLDivElement>(null)

  // rAF state — isolé par instance, zéro variable globale
  const state = useRef({ rx:0, ry:0, crx:0, cry:0, rafId:0 })

  const startRaf = () => {
    const s = state.current
    const tick = () => {
      s.crx = lerp(s.crx, s.rx, 0.1)
      s.cry = lerp(s.cry, s.ry, 0.1)
      if (cardRef.current)
        cardRef.current.style.transform =
          `perspective(800px) rotateX(${s.crx}deg) rotateY(${s.cry}deg)`
      s.rafId = requestAnimationFrame(tick)
    }
    s.rafId = requestAnimationFrame(tick)
  }

  const stopRaf = () => {
    cancelAnimationFrame(state.current.rafId)
    const s = state.current
    s.rx = 0; s.ry = 0
    gsap.to(cardRef.current, {
      rotateX: 0, rotateY: 0,
      duration: 0.65, ease: 'power3.out',
      clearProps: 'transform',
    })
  }

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect()
    const nx = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2
    const ny = ((e.clientY - rect.top)   / rect.height - 0.5) * 2
    state.current.rx = ny * -14
    state.current.ry = nx *  14

    if (bgRef.current)
      bgRef.current.style.transform = 'scale(1.06)'
  }

  const hasBgImage = !!p.bgImage

  return (
    <div
      ref={cardRef}
      className="work-card group relative rounded-2xl overflow-hidden cursor-none
                 will-change-transform"
      style={{
        aspectRatio: '4/3',
        opacity: 0,
        backgroundImage: hasBgImage ? `url(${p.bgImage})` : undefined,
        backgroundSize: 'cover',
      }}
      onMouseEnter={startRaf}
      onMouseMove={onMove}
      onMouseLeave={stopRaf}
    >
      {!hasBgImage && (
        <div
          ref={bgRef}
          className={`absolute inset-0 bg-linear-to-br ${p.bg}`}
          style={{
            transition: 'transform .7s cubic-bezier(.22,1,.36,1)',
            transformOrigin: 'center',
          }}
        />
      )}
 
      {!hasBgImage && (
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-[.07] pointer-events-none">
          {p.techIcons.map(({ icon: Icon, color }, i) => (
            <Icon key={i} size={60} style={{ color }} />
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/88 to-[#0a0a0a]/48
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-380 ease-[cubic-bezier(.22,1,.36,1)]" />

      <div className="absolute bottom-3.5 left-3.5 flex gap-1.5 z-10
                      group-hover:opacity-0 group-hover:translate-y-1.5
                      transition-all duration-300 ease-out">
        {p.techIcons.map(({ icon: Icon, color }, i) => (
          <div key={i} className="w-7 h-7 rounded-lg bg-black/55 backdrop-blur-sm flex items-center justify-center">
            <Icon size={14} style={{ color }} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20
                      opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-380 ease-[cubic-bezier(.22,1,.36,1)]">
        <p className="text-red text-[9px] font-bold tracking-[.18em] uppercase mb-1.5">
          {p.cat}
        </p>
        <p className="font-display text-white leading-tight mb-3"
          style={{ fontSize: 'clamp(.95rem,2vw,1.35rem)' }}>
          {p.title}
        </p>
        <div className="flex items-center gap-2.5">
          {p.techIcons.map(({ icon: Icon, color }, i) => (
            <Icon key={i} size={16} style={{ color }} />
          ))}
        </div>
      </div>

      {p.liveUrl && (
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white
                     flex items-center justify-center z-30
                     opacity-0 scale-50 -rotate-45
                     group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0
                     transition-all duration-340 ease-[cubic-bezier(.34,1.56,.64,1)]"
        >
          <FaArrowRight size={14} color="#111" />
        </a>
      )}
    </div>
  )
}