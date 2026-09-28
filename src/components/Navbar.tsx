import { useEffect, useState } from 'react'

// Export these from Figma as SVGs and drop them in src/assets/
import logo from '../assets/logo.svg'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import bookmarkIcon from '../assets/substack.svg'

//object initializer basically for redirecting on same page
interface NavLink {
  label: string
  href: string
}

//this ones that but for external links
interface IconLink {
  label: string // used for screen readers, since icons have no visible text
  href: string
  icon: string // Vite turns an imported SVG into a URL string
  external?: boolean // true = opens in a new tab
}

//making the actual links for the navbar, these are the ones that will be displayed on the page
const navLinks: NavLink[] = [
  { label: 'home', href: '#home' },
  { label: 'about me', href: '#about-me' },
  { label: 'projects', href: '#projects' },
]

const iconLinks: IconLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/not-kassie', 
    icon: githubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kassandra-flores-01837014b', 
    icon: linkedinIcon,
    external: true,
  },
  {
    label: 'Substack',
    href: '#', // TO DO: eventually this will be a link to my substack, but for now it just goes nowhere
    icon: bookmarkIcon,
  },
]

// Shared keyboard-focus outline so every link gets the same treatment
const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

function Navbar() {
    // true = mobile menu is open, false = closed
  const [open, setOpen] = useState(false)

  // Let people close the menu with the Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown) // cleanup
  }, [])

  return (
    // set up visuals 
    <header className="sticky top-0 z-50 bg-navy">
      <nav
        aria-label="Main"
        // Mobile first: wraps onto two rows. From `sm` (640px) up: one row.
        className="mx-auto flex max-w-360 items-center gap-8 px-5 py-3 sm:px-10 sm:py-3.5"
      >
        {/* Logo + name */}
         <a href="#home" className={`flex items-center gap-2.5 ${focusRing}`}>
          <img src={logo} alt="" className="size-8" />
          <span className="text-xl font-bold">Kassandra Flores</span>
        </a>

        {/* Desktop text links: hidden on mobile, shown from `sm` (640px) up */}
        <ul className="hidden gap-7 sm:mr-auto sm:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-muted transition-colors hover:text-white focus-visible:text-white ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

<ul className="hidden gap-6 sm:flex">
          {iconLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className={`block ${focusRing}`}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <img src={link.icon} alt="" className="block size-6" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button: mobile only */}
        <button
          type="button"
          className={`ml-auto sm:hidden ${focusRing}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" /> // X
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" /> // three lines
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown: only rendered while open */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 px-5 pb-5 pt-2 sm:hidden"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)} // close after choosing a page
                  className={`block py-3 text-lg text-muted transition-colors hover:text-white ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-3 flex gap-6">
            {iconLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className={`block ${focusRing}`}
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  <img src={link.icon} alt="" className="block size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar