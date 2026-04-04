import gsap from "gsap"
import { useEffect, useRef } from "react"

const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dotX = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "none" })
    const dotY = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "none" })
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.22, ease: "power2.out" })
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.22, ease: "power2.out" })

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onEnter = () => ring.current?.classList.add('hovered')
    const onLeave = () => ring.current?.classList.remove('hovered')

    window.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, .hoverable')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}

export default Cursor