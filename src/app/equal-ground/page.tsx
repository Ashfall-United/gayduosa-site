import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GraduationCap, Globe, Handshake, ArrowRight, Mail } from 'lucide-react'
import { ORG_EMAIL, ORG_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Equal Ground',
  description: `Equal Ground is ${ORG_NAME}'s scholarship programme — covering school fees, providing international exposure, and supporting student-athletes from the pitch to the professional world.`,
}

const HERO_IMAGE =
  'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/impact-4.jpg'

const covers = [
  {
    Icon: GraduationCap,
    title: 'School Fees',
    description:
      'We cover full annual school fees for enrolled student-athletes, removing the single biggest barrier between sport and education.',
  },
  {
    Icon: Globe,
    title: 'International Exposure',
    description:
      'Through partnerships with institutions in Europe and the USA, scholars gain exposure to global education standards, cultures, and career networks.',
  },
  {
    Icon: Handshake,
    title: 'Career Transition',
    description:
      'We don't just fund school — we walk alongside athletes as they move into professional life, with mentorship, workshops, and employer connections.',
  },
]

const ways = [
  {
    title: 'Fund a Scholarship',
    description:
      'Your donation directly covers the school fees and educational costs for a GSA student-athlete for a full academic year.',
    cta: 'Donate now',
    href: '/donate',
    highlight: true,
  },
  {
    title: 'Corporate Sponsorship',
    description:
      'Name a scholarship. Partner organisations can sponsor a cohort of athletes — with full impact reporting, visibility, and co-branding.',
    cta: 'Partner with us',
    href: `mailto:${ORG_EMAIL}?subject=Equal Ground Corporate Sponsorship`,
    highlight: false,
  },
  {
    title: 'Mentor an Athlete',
    description:
      'Professionals across any field can volunteer time as a mentor — helping student-athletes navigate education, career decisions, and life beyond the pitch.',
    cta: 'Get involved',
    href: `mailto:${ORG_EMAIL}?subject=Equal Ground Mentorship`,
    highlight: false,
  },
]

export default function EqualGroundPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div className="relative bg-[#01255f] overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Equal Ground — scholarship programme for GSA student-athletes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01255f] via-[#01255f]/80 to-[#01255f]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01255f]/85 via-transparent to-[#01255f]/55" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20">
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
              <span className="text-[#fee11b] text-[10px] uppercase tracking-[0.22em] font-bold">
                GSA Initiative
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.06] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Equal <span className="text-[#fee11b]">Ground</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-4">
              Every athlete deserves access to education. Equal Ground funds school fees,
              opens international doors, and walks student-athletes from the pitch to the
              professional world.
            </p>
            <p className="text-white/50 text-sm italic mb-10">
              "A young person with both a ball and a book has the best chance of building a meaningful future."
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-[#fee11b] hover:bg-[#e5ca10] active:scale-[0.98] text-[#01255f] px-8 py-4 font-black text-sm tracking-wide transition-all"
            >
              Fund a Scholarship <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* About */}
        <div className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
                    The Scholarship
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#01255f] leading-[1.1] mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Sport Opens Doors.<br />Education Keeps Them Open.
                </h2>
                <p className="text-[#5a6478] text-base leading-relaxed mb-5">
                  For many young athletes in Liberia, the cost of school is the wall between
                  a promising future and a life without opportunity. Equal Ground removes that
                  wall — by covering school fees, providing materials, and connecting athletes
                  to educational institutions far beyond Monrovia.
                </p>
                <p className="text-[#5a6478] text-base leading-relaxed">
                  We believe that building great athletes and great students are the same work.
                  The Equal Ground scholarship is how we prove it — one student-athlete at a time.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {[
                  { value: '15', label: 'Athletes currently supported' },
                  { value: '100%', label: 'School fee coverage' },
                  { value: '2+', label: 'International partner institutions' },
                  { value: '1st', label: 'Cohort entering professional life' },
                ].map((s) => (
                  <div key={s.label} className="bg-white px-6 py-8 sm:px-8 sm:py-10">
                    <p
                      className="text-4xl sm:text-5xl font-black text-[#fee11b] leading-none mb-2 tabular-nums"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs text-[#5a6478] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What we cover */}
        <div className="bg-[#f5f7fc] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
                What We Cover
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#01255f] leading-[1.1] mb-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              End-to-End Educational Support
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {covers.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white border border-gray-100 p-7 lg:p-8 hover:border-[#01255f]/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#fee11b] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                  />
                  <div className="w-11 h-11 bg-[#f5f7fc] group-hover:bg-[#01255f] flex items-center justify-center mb-5 transition-colors duration-300">
                    <item.Icon className="w-5 h-5 text-[#01255f] group-hover:text-[#fee11b] transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#01255f] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5a6478] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to contribute */}
        <div className="bg-[#01255f] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
              <span className="text-[#fee11b] text-[10px] uppercase tracking-[0.2em] font-bold">
                Get Involved
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How You Can Contribute
            </h2>
            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {ways.map((way) => (
                <div
                  key={way.title}
                  className={`p-7 lg:p-8 flex flex-col border ${
                    way.highlight
                      ? 'bg-[#fee11b] border-[#fee11b]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  } transition-colors`}
                >
                  <h3
                    className={`text-xl font-bold mb-3 ${way.highlight ? 'text-[#01255f]' : 'text-white'}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {way.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 mb-6 ${way.highlight ? 'text-[#01255f]/75' : 'text-white/60'}`}>
                    {way.description}
                  </p>
                  <a
                    href={way.href}
                    className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-all hover:gap-3 ${
                      way.highlight ? 'text-[#01255f]' : 'text-[#fee11b] hover:text-white'
                    }`}
                  >
                    {way.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl font-bold text-[#01255f] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Questions about Equal Ground?
              </h3>
              <p className="text-[#5a6478] text-sm">We would love to hear from you.</p>
            </div>
            <a
              href={`mailto:${ORG_EMAIL}?subject=Equal Ground Enquiry`}
              className="inline-flex items-center gap-2 bg-[#01255f] hover:bg-[#011840] active:scale-[0.98] text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-all shrink-0"
            >
              <Mail className="w-4 h-4" /> {ORG_EMAIL}
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
