import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect } from "react"
import { getPortfolioContent } from "../constants"
import { useLocale } from "../context/LocaleContext"

// ─── Lerp utilitaire ───────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const Hero = () => {
  const { locale } = useLocale()
  const copy = getPortfolioContent(locale).hero
  const sectionRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef<HTMLHeadingElement>(null)
  const badge1Ref = useRef<HTMLDivElement>(null)
  const badge2Ref = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !hasFinePointer) return

    let rafId: number
    let isVisible = true
    let mx = 0, my = 0
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
      <h1 ref={ghostRef} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-center w-full z-0 leading-none"
        style={{ fontSize: 'clamp(6rem, 13vw, 12rem)', letterSpacing: '.02em', opacity: 0,  WebkitTextFillColor: 'transparent', WebkitTextStroke: '5px rgba(255,59,31,0.50)' }}
      >
        &lt;BUILD /&gt;
      </h1>

      {/* ── Badges flottants — magnetic via rAF ── */}
      <div ref={badge1Ref}
        className="absolute z-20 bg-white rounded-full bottom-[50%] left-[7%] md:bottom-[17%] md:left-[55%]
                   px-4 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-lg"
        style={{ opacity: 0, willChange: 'transform' }}
      >
        {copy.badges[0]}
      </div>
      <div ref={badge2Ref}
        className="absolute z-20 bg-white rounded-full top-[25%] right-[5%] md:top-[17%] md:right-[5%]
                   px-4 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-lg"
        style={{ opacity: 0, willChange: 'transform' }}
      >
        {copy.badges[1]}
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
          {copy.availability}
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
          {copy.title[0]}<br />
          <span className="text-red">{copy.title[1]} </span>
          {copy.title[2]}
        </h2>

        <div
          ref={cardRef}
          className="bg-white rounded-2xl p-6 max-w-md shadow-lg mt-2"
          style={{ opacity: 0 }}
        >
          <p className="text-sm leading-relaxed text-gray-500 mb-4">
            {copy.description}
          </p>
          <p className="text-xs text-muted mb-4">andohenrirazafinatoandro@gmail.com</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red text-white px-6 py-2.5 rounded-full
                       text-xs font-bold tracking-widest uppercase no-underline
                       transition-all duration-300 hover:-translate-y-0.5
                       hover:shadow-[0_8px_24px_rgba(255,59,31,.35)]"
          >
            {copy.cta}
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div ref={rightRef}
        className="relative hidden md:flex items-center justify-center overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Anneau orbitant */}
        <div
          className="absolute z-10 rounded-full pointer-events-none top-1/2 left-1/2"
          style={{
            width: 'clamp(320px,42vw,480px)',
            aspectRatio: '1',
            border: '0.5px solid rgba(255,59,31,0.25)',
            animation: 'ringRotate 14s linear infinite',
          }}
        >
          <div
            className="absolute rounded-full -top-1 left-1/2 -translate-x-1/2"
            style={{
              width: '8px', height: '8px',
              background: '#ff3b1f',
              boxShadow: '0 0 12px rgba(255,59,31,0.9), 0 0 24px rgba(255,59,31,0.4)',
            }}
          />
        </div>

        {/* Anneau extérieur */}
        <div
          className="absolute z-10 rounded-full pointer-events-none top-1/2 left-1/2"
          style={{
            width: 'clamp(300px,38vw,430px)',
            aspectRatio: '1',
            border: '0.5px solid rgba(255,59,31,0.08)',
            animation: 'ringRotate 22s linear infinite reverse',
          }}
        />

        {/* Logo */}
        <div className="relative z-20 flex items-center justify-center mt-20">
          <img
            src="/hero-logo.png"
            alt="logo"
            className="w-auto"
            style={{
              filter: `
                drop-shadow(0 0 18px rgba(255,59,31,0.7))
                drop-shadow(0 0 48px rgba(255,59,31,0.35))
                drop-shadow(0 0 90px rgba(255,59,31,0.15))
              `,
              animation: 'logoFloat 4s ease-in-out infinite',
            }}
          />
        </div>

        <style>{`
          @keyframes ringRotate {
            from { transform: translate(-50%,-50%) rotate(0deg); }
            to   { transform: translate(-50%,-50%) rotate(360deg); }
          }
          @keyframes logoFloat {
            0%, 100% {
              transform: translateY(0px);
              filter: drop-shadow(0 0 18px rgba(255,59,31,0.7))
                      drop-shadow(0 0 48px rgba(255,59,31,0.35))
                      drop-shadow(0 0 90px rgba(255,59,31,0.15));
            }
            50% {
              transform: translateY(-14px);
              filter: drop-shadow(0 0 28px rgba(255,80,31,0.9))
                      drop-shadow(0 0 65px rgba(255,59,31,0.5))
                      drop-shadow(0 0 110px rgba(255,59,31,0.2));
            }
          }
        `}</style>
      </div>

      {/* ── Scroll hint ── */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-16 flex items-center gap-3 text-xs font-medium tracking-[.12em] uppercase text-muted z-10"
        style={{ opacity: 0 }}
      >
        <span className="block w-10 h-px bg-muted" />
        {copy.scroll} ↓
      </div>
    </section>
  )
}

export default Hero