import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, Users, Trophy, ArrowRight, Mail } from 'lucide-react'
import { ORG_EMAIL, ORG_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Forward Girls',
  description: `Forward Girls is ${ORG_NAME}'s dedicated female football programme — building the next generation of Liberian women athletes through coaching, competition, and community.`,
}

const HERO_IMAGE =
  'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/IMG_9809.JPG'

const pillars = [
  {
    Icon: Trophy,
    title: 'Structured Coaching',
    description:
      'Qualified coaches deliver regular sessions, tactical development, and competitive fixtures — giving girls the same standard of training as their male counterparts.',
  },
  {
    Icon: Users,
    title: 'Mentorship & Leadership',
    description:
      'Female mentors, former athletes, and community leaders work alongside players to build confidence, communication, and the belief that sport is their space too.',
  },
  {
    Icon: Heart,
    title: 'Pathways & Opportunity',
    description:
      'We connect talented players to trials, scholarships, and national opportunities — bridging the gap between community football and a career in sport.',
  },
]

const ways = [
  {
    title: 'Make a Donation',
    description:
      'Your gift funds coaching sessions, kits, match fees, and the day-to-day costs of running a programme that changes lives.',
    cta: 'Donate now',
    href: '/donate',
    highlight: true,
  },
  {
    title: 'Become a Partner',
    description:
      'Sponsoring Forward Girls puts your organisation at the heart of grassroots female sport in Liberia. We offer visibility, impact reports, and co-branding opportunities.',
    cta: 'Get in touch',
    href: `mailto:${ORG_EMAIL}?subject=Forward Girls Partnership`,
    highlight: false,
  },
  {
    title: 'Volunteer',
    description:
      'Coaches, mentors, physios, and administrators — if you have skills to share, we would love to hear from you. Remote and in-person opportunities available.',
    cta: 'Contact us',
    href: `mailto:${ORG_EMAIL}?subject=Forward Girls Volunteering`,
    highlight: false,
  },
]

export default function ForwardGirlsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div className="relative bg-[#01255f] overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Forward Girls — female football programme in Liberia"
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
              Forward <span className="text-[#fee11b]">Girls</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
              Building Liberia's next generation of female athletes — through world-class coaching,
              fierce competition, and a community that refuses to leave women's sport behind.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-[#fee11b] hover:bg-[#e5ca10] active:scale-[0.98] text-[#01255f] px-8 py-4 font-black text-sm tracking-wide transition-all"
            >
              Support Forward Girls <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* About */}
        <div className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
                  About the Programme
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#01255f] leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Women's Sport in Liberia<br />Deserves More
              </h2>
              <p className="text-[#5a6478] text-base leading-relaxed mb-5">
                Female participation in organised sport across Liberia remains critically low.
                Structural barriers — lack of facilities, limited coaching, social expectations,
                and funding gaps — mean that talented young women rarely get the same opportunities
                as their male peers.
              </p>
              <p className="text-[#5a6478] text-base leading-relaxed">
                Forward Girls exists to change that. Through GSA's community infrastructure and
                the Ashfall United network, we deliver structured, high-quality football to girls
                across Monrovia — and create clear pathways from grassroots participation to
                competitive, professional opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* What we do */}
        <div className="bg-[#f5f7fc] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
                What We Do
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#01255f] leading-[1.1] mb-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Three Pillars of the Programme
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group bg-white border border-gray-100 p-7 lg:p-8 hover:border-[#01255f]/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#fee11b] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                  />
                  <div className="w-11 h-11 bg-[#f5f7fc] group-hover:bg-[#01255f] flex items-center justify-center mb-5 transition-colors duration-300">
                    <pillar.Icon className="w-5 h-5 text-[#01255f] group-hover:text-[#fee11b] transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#01255f] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5a6478] leading-relaxed">{pillar.description}</p>
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
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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
                    className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-all group ${
                      way.highlight
                        ? 'text-[#01255f] hover:gap-3'
                        : 'text-[#fee11b] hover:text-white hover:gap-3'
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
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div>
              <h3
                className="text-2xl font-bold text-[#01255f] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Questions about Forward Girls?
              </h3>
              <p className="text-[#5a6478] text-sm">We would love to hear from you.</p>
            </div>
            <a
              href={`mailto:${ORG_EMAIL}?subject=Forward Girls Enquiry`}
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
