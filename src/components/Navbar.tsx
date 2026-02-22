import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

const links = ['À propos', 'Skills', 'Travaux', 'Contact']
const hrefs = ['#about', '#skills', '#work', '#contact']

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const convertToDirectDownload = (driveUrl: string): string => {
  const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (!match) return driveUrl
  
  const fileId = match[1]
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: '50% top',
        scrub: true,
      }
    });
    navTween.fromTo('nav', { backgroundColor: 'transparent', backdropFilter: 'none'}, {
      backgroundColor: 'rgba(240,240,238,0.88)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 1px 24px rgba(0,0,0,.06)',
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5">
      <a href="#hero" className="font-display text-2xl tracking-wider text-dark no-underline hoverable">
        <img src="/logo.png" alt="logo" className="h-10 w-10" />
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

      <a href={convertToDirectDownload(import.meta.env.VITE_CV_LINK!!)} download rel="noreferrer" target="_blank" className="bg-dark text-white px-6 py-2 rounded-full text-[.82rem] font-semibold tracking-widest uppercase no-underline transition-colors duration-300 hover:bg-red hoverable">
        Mon CV
      </a>
    </nav>
  )
}

export default Navbar