import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect } from "react"

// ─── Lerp utilitaire ───────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef<HTMLHeadingElement>(null)
  const badge1Ref = useRef<HTMLDivElement>(null)
  const badge2Ref = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !hasFinePointer) return

    let rafId: number
    let isVisible = true
    let mx = 0, my = 0
    let orbX = 0, orbY = 0
    let b1X = 0, b1Y = 0
    let b2X = 0, b2Y = 0

    const onMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      mx = (e.clientX - rect.left) / rect.width - 0.5
      my = (e.clientY - rect.top) / rect.height - 0.5
    }

    const tick = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(tick)
        return
      }

      orbX = lerp(orbX, mx * 36, 0.055)
      orbY = lerp(orbY, my * 20, 0.055)
      if (orbRef.current) {
        orbRef.current.style.transform =
          `translate(calc(-50% + ${orbX}px), calc(-50% + ${orbY}px))`
      }

      b1X = lerp(b1X, mx * -16, 0.045)
      b1Y = lerp(b1Y, my * -10, 0.045)
      b2X = lerp(b2X, mx * 20, 0.045)
      b2Y = lerp(b2Y, my * 14, 0.045)
      if (badge1Ref.current) badge1Ref.current.style.transform = `translate(${b1X}px,${b1Y}px)`
      if (badge2Ref.current) badge2Ref.current.style.transform = `translate(${b2X}px,${b2Y}px)`

      rafId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 1.8,
    })

    tl.fromTo(ghostRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 0.15, scale: 1, duration: 1.4 }, 0)

      .fromTo([badge1Ref.current, badge2Ref.current],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.18 }, 0.2)

      .fromTo(tagRef.current,
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.55 }, 0.4)

      .fromTo(scriptRef.current,
        { opacity: 0, x: -36, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.7 }, 0.55)

      .fromTo(titleRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.05 }, 0.68)

      .fromTo(cardRef.current,
        { opacity: 0, y: 38 },
        { opacity: 1, y: 0, duration: 0.75 }, 0.98)

      .fromTo(orbRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.9, duration: 1.2, ease: 'elastic.out(1, 0.62)' }, 0.15)

      .fromTo(rightRef.current,
        { opacity: 0, x: 55 },
        { opacity: 1, x: 0, duration: 1.0 }, 0.3)

      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }, 1.4)

    gsap.fromTo([badge1Ref.current, badge2Ref.current],
      { y: 0 },
      {
        y: -13,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.75,
      }
    )

    const onScroll = () => {
      if (!ghostRef.current) return
      gsap.set(ghostRef.current, {
        yPercent: -50,
        y: window.scrollY * 0.45,
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen grid md:grid-cols-2 overflow-hidden"
    >
      {/* ── Ghost watermark ── */}
      <h1
        ref={ghostRef}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   font-display text-center w-full z-0 text-dark leading-none"
        style={{ fontSize: 'clamp(6rem, 13vw, 12rem)', letterSpacing: '.02em', opacity: 0 }}
      >
        &lt;BUILD /&gt;
      </h1>

      {/* ── Badges flottants — magnetic via rAF ── */}
      <div
        ref={badge1Ref}
        className="absolute z-20 bg-white rounded-full top-[50%] left-[7%] md:top-[31%] md:left-[7%]
                   px-4 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-lg"
        style={{ opacity: 0, willChange: 'transform' }}
      >
        Développeur Web et mobile
      </div>
      <div
        ref={badge2Ref}
        className="absolute z-20 bg-white rounded-full top-[25%] right-[5%] md:top-[17%] md:right-[5%]
                   px-4 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-lg"
        style={{ opacity: 0, willChange: 'transform' }}
      >
        Créateur de solutions
      </div>

      {/* ── LEFT ── */}
      <div className="relative z-10 flex flex-col justify-center px-16 pb-16 pt-20 gap-3">

        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5
                     text-xs font-semibold tracking-widest uppercase mb-1 w-fit"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Disponible pour projets
        </div>

        <p
          ref={scriptRef}
          className="font-script text-violet"
          style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', opacity: 0, willChange: 'filter' }}
        >
          Ando Henri
        </p>

        <h2
          ref={titleRef}
          className="font-display leading-none"
          style={{
            fontSize: 'clamp(3rem,6vw,5.5rem)',
            opacity: 0,
            clipPath: 'inset(0 100% 0 0)',
            willChange: 'clip-path',
          }}
        >
          DÉVELOPPEUR<br />
          <span className="text-red">WEB et MOBILE, </span>
          SUR MESURE.
        </h2>

        <div
          ref={cardRef}
          className="bg-white rounded-2xl p-6 max-w-md shadow-lg mt-2"
          style={{ opacity: 0 }}
        >
          <p className="text-sm leading-relaxed text-gray-500 mb-4">
            Je conçois des applications web et mobile modernes, rapides et adaptées à vos besoins.
            De l'idée à la mise en ligne, je vous accompagne pour créer des solutions fiables et évolutives.
          </p>
          <p className="text-xs text-muted mb-4">andohenrirazafinatoandro@gmail.com</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red text-white px-6 py-2.5 rounded-full
                       text-xs font-bold tracking-widest uppercase no-underline
                       transition-all duration-300 hover:-translate-y-0.5
                       hover:shadow-[0_8px_24px_rgba(255,59,31,.35)]"
          >
            Démarrer un projet
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div
        ref={rightRef}
        className="relative hidden md:flex items-center justify-center overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Orb magnétique — déplacé par rAF lerp */}
        <div
          ref={orbRef}
          className="absolute rounded-full z-0"
          style={{
            width: 'clamp(300px,44vw,500px)',
            aspectRatio: '1',
            background: 'radial-gradient(circle at 40% 40%, #ff3b1f 0%, #e8280f 55%, #b01f0b 100%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            opacity: 0,
            willChange: 'transform',
            backdropFilter: 'blur(100px)',
          }}
        />

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg"
            className="w-full" style={{ height: '90vh' }}>
            <defs>
              <radialGradient id="hg" cx="50%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#080808" />
              </radialGradient>
            </defs>
            <ellipse cx="200" cy="290" rx="170" ry="270" fill="url(#hg)" opacity=".9" />
            <circle cx="200" cy="145" r="75" fill="#111" opacity=".95" />
            <ellipse cx="200" cy="95" rx="90" ry="75" fill="#0a0a0a" opacity=".9" />
            <ellipse cx="155" cy="120" rx="45" ry="55" fill="#080808" opacity=".85" />
            <ellipse cx="245" cy="120" rx="45" ry="55" fill="#080808" opacity=".85" />
            <ellipse cx="200" cy="75" rx="70" ry="50" fill="#0d0d0d" opacity=".9" />
            <rect x="168" y="152" width="26" height="16" rx="6" fill="none" stroke="#ff3b1f" strokeWidth="2.5" />
            <rect x="206" y="152" width="26" height="16" rx="6" fill="none" stroke="#ff3b1f" strokeWidth="2.5" />
            <line x1="194" y1="160" x2="206" y2="160" stroke="#ff3b1f" strokeWidth="2" />
            <line x1="168" y1="160" x2="160" y2="158" stroke="#ff3b1f" strokeWidth="2" />
            <line x1="232" y1="160" x2="240" y2="158" stroke="#ff3b1f" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-16 flex items-center gap-3 text-xs
                   font-medium tracking-[.12em] uppercase text-muted z-10"
        style={{ opacity: 0 }}
      >
        <span className="block w-10 h-px bg-muted" />
        Explorer ↓
      </div>
    </section>
  )
}

export default Hero