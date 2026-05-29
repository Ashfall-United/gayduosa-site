'use client'

import Image from 'next/image'
import { GraduationCap, HeartPulse, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const COLLAGE: { src: string; alt: string; position?: string }[] = [
  {
    src: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/gallery/1775475072625-dv79355ktag.jpg',
    alt: 'GSA youth programme',
  },
  {
    src: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/gallery/1779923284284-2bqqi3kfxnd.jpg',
    alt: 'GSA community activity',
  },
  {
    src: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/gallery/1779922443185-k9jy7z5olq.jpg',
    alt: 'GSA training session',
  },
  {
    src: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/gallery/1779924571711-woqi98pgz9h.jpg',
    alt: 'GSA athletes',
  },
]

const pillars: { title: string; description: string; Icon: LucideIcon; image?: string }[] = [
  {
    title: 'Education',
    description:
      'We believe that high quality education will have a lasting impact on our athletes, so we cover school fees, provide international exposure through collaborations with institutions in Europe and USA, build the character of our young leaders, and facilitate sustainable growth supporting their transition into the professional world.',
    Icon: GraduationCap,
    image: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/impact-4.jpg',
  },
  {
    title: 'Health & Wellbeing',
    description:
      'Improving the health standards of our student-athletes is the cornerstone of our model, because we believe that good health is the key to an enhanced performance, both on and off the pitch. We do this by offering specialized treatments and recovery plans, mental health support services, and physiotherapy programs.',
    Icon: HeartPulse,
    image: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/Wellbeing.jpg',
  },
  {
    title: 'Talent Development',
    description:
      'Our academies aim to nurture talent to compete at the highest levels of football through a nation-wide footprint of satellite academies and traveling scouts, facilities and equipment of the highest standards, and a unique coaching philosophy.',
    Icon: Star,
    image: 'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/Sameandkolleh.jpg',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Top: text + bento collage */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
                Who We Are
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#01255f] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              A Social Enterprise<br />Built on Sport
            </h2>
            <p className="text-[#5a6478] text-base leading-relaxed mb-8">
              Gayduo Sports Association (GSA) is a Liberian social enterprise that harnesses the
              power of sport to create lasting social change. Founded in Monrovia, we develop
              programmes that give young people access to sport, quality mentorship, and pathways
              to education and employment.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 bg-[#01255f] hover:bg-[#011840] active:scale-[0.98] text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-all"
            >
              Get in touch
            </a>
          </div>

          {/* Right — bento image collage */}
          {/* Layout: top-left large, top-right small / bottom-left small, bottom-right large */}
          <div
            className="grid gap-2 sm:gap-3"
            style={{
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gridTemplateRows: '1fr 1fr',
              height: '420px',
            }}
          >
            {/* img1 — top-left, large */}
            <div className="relative overflow-hidden group" style={{ gridColumn: 1, gridRow: 1 }}>
              <Image
                src={COLLAGE[0].src}
                alt={COLLAGE[0].alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${COLLAGE[0].position ?? 'object-center'}`}
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>

            {/* img2 — top-right, small */}
            <div className="relative overflow-hidden group" style={{ gridColumn: 2, gridRow: 1 }}>
              <Image
                src={COLLAGE[1].src}
                alt={COLLAGE[1].alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${COLLAGE[1].position ?? 'object-center'}`}
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>

            {/* img3 — bottom-left, small */}
            <div className="relative overflow-hidden group" style={{ gridColumn: 1, gridRow: 2 }}>
              <Image
                src={COLLAGE[2].src}
                alt={COLLAGE[2].alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${COLLAGE[2].position ?? 'object-center'}`}
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>

            {/* img4 — bottom-right, large */}
            <div className="relative overflow-hidden group" style={{ gridColumn: 2, gridRow: 2 }}>
              <Image
                src={COLLAGE[3].src}
                alt={COLLAGE[3].alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${COLLAGE[3].position ?? 'object-center'}`}
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </div>
        </div>

        {/* Divider — Three Pillars of Impact */}
        <div className="flex items-center gap-4 mb-10 sm:mb-12">
          <span aria-hidden="true" className="h-px flex-1 bg-gray-100" />
          <div className="flex items-center gap-3 shrink-0">
            <span aria-hidden="true" className="h-px w-6 bg-[#fee11b]" />
            <h3
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#5a6478]"
            >
              Three Pillars of Impact
            </h3>
            <span aria-hidden="true" className="h-px w-6 bg-[#fee11b]" />
          </div>
          <span aria-hidden="true" className="h-px flex-1 bg-gray-100" />
        </div>

        {/* Pillar cards grid */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-white border border-gray-100 hover:border-[#01255f]/20 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-52 lg:h-60 shrink-0 overflow-hidden bg-[#f5f7fc]">
                {pillar.image ? (
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-[#01255f]/5 flex items-center justify-center">
                    <pillar.Icon className="w-12 h-12 text-[#01255f]/20" strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold text-[#01255f] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5a6478] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
