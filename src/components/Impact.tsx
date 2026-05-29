'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

type Stat = { numeric: number; suffix?: string; label: string }

const stats: Stat[] = [
  { numeric: 500, suffix: '+',  label: 'Young people reached annually' },
  { numeric: 5,   suffix: '+',  label: 'Years of community programmes' },
  { numeric: 1,                 label: 'Active initiative (growing)' },
  { numeric: 100, suffix: '%',  label: 'Community-led leadership' },
]

function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  const start = useCallback(() => {
    if (started.current) return
    started.current = true
    const t0 = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  return { count, start }
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const { count, start } = useCountUp(stat.numeric)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(start, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [start, delay])

  return (
    <div
      ref={ref}
      className="bg-[#01255f] px-6 py-10 sm:px-8 sm:py-12 text-center hover:bg-[#1a3a7a] transition-colors cursor-default"
    >
      <p
        className="text-5xl sm:text-6xl font-black text-[#fee11b] mb-3 tabular-nums leading-none"
        style={{ fontFamily: 'var(--font-heading)' }}
        aria-label={`${count}${stat.suffix ?? ''}`}
      >
        <span>{count}</span>
        {stat.suffix && <span className="text-3xl sm:text-4xl">{stat.suffix}</span>}
      </p>
      <p className="text-white/60 text-sm leading-snug max-w-[12rem] mx-auto">{stat.label}</p>
    </div>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-[#01255f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="mb-12 sm:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span aria-hidden="true" className="h-px w-8 bg-[#fee11b]" />
            <span className="text-[#fee11b] text-[10px] uppercase tracking-[0.2em] font-bold">Our Impact</span>
            <span aria-hidden="true" className="h-px w-8 bg-[#fee11b]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Changing Lives Through Sport
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 120} />
          ))}
        </div>

        <div className="mt-10 sm:mt-14 bg-white/5 border border-white/10 p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div className="max-w-xl">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Help Us Do More
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Every donation directly funds youth programmes, training resources, and the coaches
              and mentors who make it all possible. Your support has a direct, measurable impact.
            </p>
          </div>
          <Link
            href="/donate"
            className="shrink-0 bg-[#fee11b] hover:bg-[#e5ca10] active:scale-[0.98] text-[#01255f] px-8 py-4 font-black text-sm tracking-wide uppercase transition-all whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>

      </div>
    </section>
  )
}
