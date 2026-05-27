import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { getPortfolioContent } from "../constants"
import { useLocale } from "../context/LocaleContext"
import { convertToDirectDownload } from "../utils/download"

const hrefs = ['#about', '#skills', '#work', '#contact']

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Navbar = () => {
  const { locale, setLocale } = useLocale()
  const copy = getPortfolioContent(locale).nav
  const cvLink = import.meta.env.VITE_CV_LINK
    ? convertToDirectDownload(import.meta.env.VITE_CV_LINK)
    : '#'

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: '50% top',
        scrub: true,
      }
    });
    navTween.fromTo('nav', { backgroundColor: 'transparent', backdropFilter: 'none' }, {
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
        {copy.links.map((l, i) => (
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

      <div className="flex items-center gap-3">
        <div
          role="group"
          aria-label={copy.languageLabel}
          className="inline-flex items-center bg-dark rounded-full p-1"
        >
          <button
            type="button"
            onClick={() => setLocale('fr')}
            className={`px-3  rounded-full text-[.76rem] font-semibold tracking-widest uppercase transition-colors duration-200 hoverable flex items-center ${locale === 'fr' ? 'bg-white text-dark' : 'text-white'
              }`}
            aria-pressed={locale === 'fr'}
          >
            <span className="text-lg">🇫🇷</span>
          </button>

          <button
            type="button"
            onClick={() => setLocale('en')}
            className={`ml-1 px-3  rounded-full text-[.76rem] font-semibold tracking-widest uppercase transition-colors duration-200 hoverable flex items-center ${locale === 'en' ? 'bg-white text-dark' : 'text-white'
              }`}
            aria-pressed={locale === 'en'}
          >
            <span className="text-lg">🇬🇧</span>
          </button>
        </div>

        <a
          href={cvLink}
          download
          rel="noreferrer"
          target="_blank"
          className="bg-dark text-white px-6 py-2 rounded-full text-[.82rem] font-semibold tracking-widest uppercase no-underline transition-colors duration-300 hover:bg-red hoverable"
        >
          {copy.cv}
        </a>
      </div>
    </nav>
  )
}

export default Navbar