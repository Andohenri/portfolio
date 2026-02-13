import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"

const links = ['À propos', 'Skills', 'Travaux', 'Contact']
const hrefs = ['#about', '#skills', '#work', '#contact']

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(navRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 2.2 }
    )

    ScrollTrigger.create({
      start: 100,
      onToggle(self) {
        gsap.to(navRef.current, {
          backgroundColor: self.isActive ? 'rgba(240,240,238,0.88)' : 'transparent',
          backdropFilter:  self.isActive ? 'blur(16px)' : 'none',
          boxShadow:       self.isActive ? '0 1px 24px rgba(0,0,0,.06)' : 'none',
          duration: 0.4,
        })
      },
    })
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5" style={{ opacity: 0 }}>
      <a href="#hero" className="font-display text-2xl tracking-wider text-dark no-underline hoverable">
        graf<span className="text-red">.</span>ty
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l, i) => (
          <li key={l}>
            <a
              href={hrefs[i]}
              className="relative text-[.82rem] font-medium tracking-[.12em] uppercase text-dark no-underline group hoverable"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="bg-dark text-white px-6 py-2 rounded-full text-[.82rem] font-semibold tracking-widest uppercase no-underline transition-colors duration-300 hover:bg-red hoverable">
        Hire Me!
      </a>
    </nav>
  )
}

export default Navbar