'use client'

import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { ORG_EMAIL, ORG_FACEBOOK, ORG_INSTAGRAM, ORG_LINKEDIN } from '@/lib/constants'

const socials = [
  {
    label: 'Instagram',
    href: ORG_INSTAGRAM,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: ORG_FACEBOOK,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: ORG_LINKEDIN,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-sm text-[#0d0d0d] placeholder-gray-400 focus:outline-none focus:border-[#01255f] transition-colors'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#fee11b] shrink-0" />
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#fee11b] bg-[#01255f] px-3 py-1.5">
                Contact
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#01255f] leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get in Touch
            </h2>
            <p className="text-[#5a6478] text-base leading-relaxed mb-10">
              Whether you want to partner with us, make a donation enquiry, explore collaboration,
              or simply learn more about what we do — we would love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#f5f7fc] group-hover:bg-[#01255f] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#01255f] group-hover:text-[#fee11b] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5a6478] mb-0.5">Email</p>
                  <a
                    href={`mailto:${ORG_EMAIL}`}
                    className="text-[#01255f] font-medium hover:text-[#fee11b] transition-colors text-sm"
                  >
                    {ORG_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#f5f7fc] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#01255f]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5a6478] mb-0.5">Location</p>
                  <p className="text-[#01255f] font-medium text-sm">Monrovia, Liberia</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#5a6478] mb-4">Follow us</p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 border border-gray-200 hover:border-[#01255f] hover:bg-[#01255f] text-[#5a6478] hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#f5f7fc] border border-gray-100 p-5 sm:p-8 lg:p-10">
            <h3
              className="text-xl font-bold text-[#01255f] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Send a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                window.location.href = `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(
                  'Enquiry from website'
                )}&body=${encodeURIComponent(
                  `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
                )}`
              }}
              className="space-y-7"
            >
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5a6478] mb-2">
                  Name <span className="text-[#fee11b]">*</span>
                </label>
                <input
                  required
                  name="name"
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5a6478] mb-2">
                  Email <span className="text-[#fee11b]">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5a6478] mb-2">
                  Message <span className="text-[#fee11b]">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#01255f] hover:bg-[#011840] active:scale-[0.98] text-white py-4 text-sm font-bold tracking-wide transition-all group"
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
