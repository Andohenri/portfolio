import gsap from "gsap"
import { useEffect, useRef } from "react"

const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx: number = 0, my: number = 0, rx: number = 0, ry: number = 0
    let raf: number
  
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      gsap.set(dot.current, { x: mx, y: my })
    }

    const lerp = () => {
      rx += (mx - rx) * 0.2
      ry += (my - ry) * 0.2
      gsap.set(ring.current, { x: rx, y: ry })
      raf = requestAnimationFrame(lerp)
    }

    const onEnter = () => ring.current?.classList.add('hovered')
    const onLeave = () => ring.current?.classList.remove('hovered')

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(lerp)

    const targets = document.querySelectorAll('a, button, .hoverable')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
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