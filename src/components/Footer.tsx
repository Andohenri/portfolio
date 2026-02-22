const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/6 px-16 py-6
                        flex flex-col sm:flex-row justify-between items-center gap-2">
      <p className="text-white/30 text-xs tracking-widest">
        © 2026{' '}
        <a href="#hero" className="text-red no-underline hoverable">
          Ando Henri
        </a>
        . Tous droits réservés.
      </p>
      <p className="text-white/30 text-xs tracking-widest">
        Design &amp; Développement · Conçu avec ❤
      </p>
    </footer>
  )
}

export default Footer