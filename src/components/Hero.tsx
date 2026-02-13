import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

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

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 2.0 })
    tl.fromTo(ghostRef.current, { opacity: 0, scale: 1.1 }, { opacity: 0.2, scale: 1, duration: 1.2 }, 0)
      .fromTo([badge1Ref.current, badge2Ref.current], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, 0.3)
      .fromTo(tagRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5 }, 0.5)
      .fromTo(scriptRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.65 }, 0.65)
      .fromTo(titleRef.current, { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.9 }, 0.75)
      .fromTo(cardRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, 1.0)
      .fromTo(orbRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.8, duration: 1, ease: 'elastic.out(1,.6)' }, 0.2)
      .fromTo(rightRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.9 }, 0.4)
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.4)

    gsap.to([badge1Ref.current, badge2Ref.current], {
      y: -10, duration: 2.8, ease: 'sine.inOut',
      yoyo: true, repeat: -1, stagger: 0.6
    })

    const onMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 24
      const yPct = (e.clientY / window.innerHeight - 0.5) * 14
      gsap.to(orbRef.current, { x: xPct, y: yPct, duration: 1.6, ease: 'power1.out' })
    }
    window.addEventListener('mousemove', onMove)

    // Ghost parallax on scroll
    const onScroll = () => {
      const y = window.scrollY * 0.15
      gsap.set(ghostRef.current, { y })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen grid md:grid-cols-2 overflow-hidden" ref={sectionRef}>
      <h1
        ref={ghostRef}
        className="pointer-events-none absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-center w-full z-0 text-dark leading-none"
        style={{ fontSize: 'clamp(6rem, 13vw, 12rem)', opacity: 0, letterSpacing: '.02em' }}
      >
        &lt;CODE /&gt;
      </h1>
      <div
        ref={badge1Ref}
        className="absolute z-20 bg-white rounded-full top-[50%] left-[7%] md:top-[31%] md:left-[7%] px-4 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-lg hoverable"
        style={{ opacity: 0 }}
      >
        Développeur
      </div>
      <div
        ref={badge2Ref}
        className="absolute z-20 bg-white rounded-full top-[25%] right-[5%] md:top-[17%] md:right-[5%] px-4 py-1.5 text-xs font-semibold tracking-widest uppercase shadow-lg hoverable"
        style={{ opacity: 0 }}
      >
        Open Source
      </div>

      {/* ── LEFT ── */}
      <div className="relative z-10 flex flex-col justify-center px-16 pb-16 pt-20">

        {/* Available tag */}
        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4 w-fit"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse2 inline-block" />
          Disponible
        </div>

        {/* Script name */}
        <p
          ref={scriptRef}
          className="font-script text-violet mb-1"
          style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', opacity: 0 }}
        >
          Ando Henri
        </p>

        {/* Main title */}
        <h2
          ref={titleRef}
          className="font-display leading-none mb-4"
          style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        >
          DÉVELOPPEUR<br />
          <span className="text-red">FULLSTACK, </span>
          JUNIOR.
        </h2>

        {/* Card */}
        <div
          ref={cardRef}
          className="bg-white rounded-2xl p-6 max-w-xs shadow-lg"
          style={{ opacity: 0 }}
        >
          <p className="text-sm leading-relaxed text-gray-500 mb-4">
            Développeur Fullstack Junior — React, Next.js, Node.js, TypeScript, Docker &amp; n8n. Passionné par la création d'apps modernes de bout en bout.
          </p>
          <p className="text-xs text-muted mb-4">andohenrirazafinatoandro@gmail.com</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,59,31,.35)] hoverable"
          >
            Discutons
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="relative hidden md:flex items-center justify-center overflow-hidden"
        ref={rightRef}
        style={{ opacity: 0 }}
      >
        {/* Orb */}
        <div
          ref={orbRef}
          className="absolute rounded-full z-0"
          style={{
            width: 'clamp(300px,44vw,500px)',
            aspectRatio: '1',
            background: 'radial-gradient(circle at 40% 40%, #ff3b1f 0%, #e8280f 55%, #b01f0b 100%)',
            backdropFilter: 'blur(16px)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            opacity: 0,
          }}
        />

        {/* SVG silhouette */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 400 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ height: '90vh' }}
          >
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


      {/* Scroll hint */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-16 flex items-center gap-3 text-xs font-medium tracking-[.12em] uppercase text-muted z-10"
        style={{ opacity: 0 }}
      >
        <span className="block w-10 h-px bg-muted" />
        Scroll pour découvrir
      </div>
    </section>
  )
}

export default Hero