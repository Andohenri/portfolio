import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const pctRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const progress = { value: 0 }
    gsap.to(progress, {
      value: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const p = Math.round(progress.value)
        if (barRef.current) barRef.current.style.width = p + '%'
        if (pctRef.current) pctRef.current.textContent = p + '%'
      },
      onComplete: () => {
        gsap.to(wrapRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power3.inOut',
          onComplete
        })
      }
    })

  }, [onComplete])

  return (
    <div ref={wrapRef} className="loader-wrap">
      <p className="font-display text-white tracking-widest" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
        PORTFOLIO
      </p>
      <div className="w-48 h-px bg-white/10">
        <div ref={barRef} className="h-full bg-red transition-none" style={{ width: 0 }} />
      </div>
      <p ref={pctRef} className="text-white/40 text-xs tracking-[.2em]">
        0%
      </p>
    </div>
  )
}

export default Loader