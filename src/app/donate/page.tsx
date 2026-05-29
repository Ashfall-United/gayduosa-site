import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DonateForm from '@/components/DonateForm'
import { ORG_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Donate',
  description: `Support ${ORG_NAME}. Your donation helps young people in Liberia access sport, education, and community programmes that create lasting opportunity.`,
}

const COVER_IMAGE =
  'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/PSA.jpg'

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Cover — extends under the transparent navbar */}
        <div className="relative bg-[#01255f] overflow-hidden">
          <Image
            src={COVER_IMAGE}
            alt="GSA youth programme — donate to support young people in Liberia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#01255f] via-[#01255f]/80 to-[#01255f]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01255f]/85 via-transparent to-[#01255f]/55" />

          {/* Dot texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Content — pt accounts for fixed navbar */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-18 lg:pb-24">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Make a <span className="text-[#fee11b]">Difference</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
              Choose an amount, tell us who you are, and complete your gift. Your support directly
              funds youth programmes, education, and the mentors who make it all possible.
            </p>
          </div>
        </div>

        {/* Donate form */}
        <div className="bg-[#f5f7fc] py-10 sm:py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 w-full min-w-0">
            <DonateForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
