'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { INITIATIVES } from '@/lib/constants'

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-16 sm:py-20 lg:py-28 bg-[#f5f7fc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
              Our Initiatives
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#01255f] leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Programmes &amp; Projects
          </h2>
          <p className="text-[#5a6478] text-base max-w-2xl leading-relaxed">
            GSA creates and supports a growing portfolio of sports-based initiatives across Liberia.
            Each is designed to deliver measurable impact in the communities we serve.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {INITIATIVES.map((initiative) => (
            <div
              key={initiative.slug}
              className="bg-white border border-gray-100 flex flex-col hover:shadow-lg hover:border-[#01255f]/15 transition-all duration-300 group overflow-hidden"
            >
              {/* Cover image */}
              {'image' in initiative && (
                <div className="relative h-32 sm:h-44 lg:h-52 shrink-0 overflow-hidden">
                  <Image
                    src={initiative.image}
                    alt={initiative.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle bottom scrim so logo stands out */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              )}

              {/* Card body */}
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
                {'logo' in initiative ? (
                  <div className="relative w-10 h-10 mb-5 shrink-0">
                    <Image
                      src={initiative.logo}
                      alt={initiative.name}
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-[#01255f] flex items-center justify-center mb-5 shrink-0">
                    <span className="text-[#fee11b] font-black text-xs tracking-tight">AU</span>
                  </div>
                )}

                <h3
                  className="text-xl font-bold text-[#01255f] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {initiative.name}
                </h3>
                <p className="text-sm text-[#5a6478] leading-relaxed flex-1 mb-6">
                  {initiative.description}
                </p>

                {initiative.external ? (
                  <a
                    href={initiative.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#01255f] text-sm font-bold hover:text-[#fee11b] transition-colors group-hover:gap-2.5"
                  >
                    Visit website <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={initiative.href}
                    className="inline-flex items-center gap-1.5 text-[#01255f] text-sm font-bold hover:text-[#fee11b] transition-colors group-hover:gap-2.5"
                  >
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="bg-[#01255f] border border-[#01255f] p-4 sm:p-6 lg:p-8 flex flex-col">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-5 shrink-0">
              <span className="text-white/40 text-xl leading-none">+</span>
            </div>
            <h3
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              More Coming Soon
            </h3>
            <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">
              We are actively developing new programmes. If you have an idea or want to partner
              with us on a new initiative, reach out.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-1.5 text-[#fee11b] text-sm font-bold hover:text-white transition-colors"
            >
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
