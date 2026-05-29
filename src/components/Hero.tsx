'use client'

import Link from 'next/link'
import Image from 'next/image'

const HERO_IMAGE =
  'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/PSA-1.jpg'

const heroStats = [
  { value: '100+', label: 'Youth reached annually' },
  { value: '1+', label: 'Years of programmes' },
  { value: '100%', label: 'Community-led' },
  { value: 'Liberia', label: 'Based in Monrovia' },
] as const

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between bg-[#01255f] overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="GSA youth sport programme — young people playing football in Monrovia, Liberia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic gradient: heavy left + bottom, breathes right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01255f] via-[#01255f]/80 sm:via-[#01255f]/65 to-[#01255f]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01255f]/85 via-transparent to-[#01255f]/55" />
      </div>

      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-32 sm:pt-36 pb-10 sm:pb-14">
        <div className="w-full max-w-3xl">

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-heading)' }} className="mb-0">
            <span
              className="block text-white text-[2.4rem] xs:text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-7xl font-bold leading-[1.06] fade-in-up"
              style={{ animationDelay: '0.15s' }}
            >
              Sport as a Path
            </span>
            <span
              className="block text-[#fee11b] text-[2.4rem] xs:text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-7xl font-bold leading-[1.06] fade-in-up"
              style={{ animationDelay: '0.25s' }}
            >
              to a Better Life.
            </span>
          </h1>

          {/* Body copy */}
          <p
            className="mt-6 sm:mt-7 text-white/70 text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-[38rem] fade-in-up"
            style={{ animationDelay: '0.38s' }}
          >
            A social enterprise connecting young people in Liberia to education, mentorship,
            and opportunity — through the universal language of sport.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 sm:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4 fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="bg-[#fee11b] hover:bg-[#e5ca10] active:scale-[0.98] text-[#01255f] px-8 py-4 font-bold text-sm tracking-wide transition-all text-center"
            >
              Our Mission
            </a>
            <Link
              href="/donate"
              className="border border-white/30 hover:border-white/70 hover:bg-white/8 active:scale-[0.98] text-white px-8 py-4 font-medium text-sm tracking-wide transition-all text-center"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip — anchored to bottom */}
      <div
        className="relative z-10 border-t border-white/10 fade-in-up"
        style={{ animationDelay: '0.65s' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 sm:px-8 lg:px-10 py-5 sm:py-6 bg-black/25 backdrop-blur-sm hover:bg-white/8 transition-colors"
            >
              <p
                className="text-[#fee11b] font-black text-xl sm:text-2xl tabular-nums leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.value}
              </p>
              <p className="text-white/50 text-[11px] sm:text-xs mt-1.5 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
