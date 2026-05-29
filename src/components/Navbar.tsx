'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ORG_NAME, ORG_SHORT } from '@/lib/constants'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Initiatives', href: '/#initiatives' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Contact', href: '/#contact' },
] as const

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false)
    if (pathname !== '/') return
    const hash = href.includes('#') ? href.slice(href.indexOf('#')) : ''
    if (!hash) return
    e.preventDefault()
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#01255f]/96 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo */}
          <Link href="/" aria-label={`${ORG_NAME} home`} className="flex items-center">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/gsa_logo.png"
                alt={ORG_NAME}
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="inline-flex items-center text-white/70 hover:text-white px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors leading-none relative after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-[#fee11b] after:scale-x-0 after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/donate"
              className="ml-4 bg-[#fee11b] hover:bg-[#e5ca10] active:scale-[0.97] text-[#01255f] px-6 py-2.5 text-[13px] font-black tracking-wide transition-all uppercase"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-[5px]" aria-hidden="true">
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex w-full items-center text-white/70 hover:text-white hover:bg-white/5 px-2 py-3.5 text-sm font-medium tracking-wide border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-4 mb-1 block text-center bg-[#fee11b] hover:bg-[#e5ca10] text-[#01255f] px-6 py-4 text-sm font-black tracking-wide uppercase transition-colors"
            >
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
