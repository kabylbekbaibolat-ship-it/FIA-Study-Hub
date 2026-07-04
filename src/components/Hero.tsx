import { useState } from 'react'
import Logo from './Logo'
import { ArrowIcon, CloseIcon, InstagramIcon, MenuIcon } from './icons'
import portrait from '../assets/baibo-portrait-bw.jpg'

const EMAIL = 'kabylbekbaibolat@gmail.com'
const MAILTO = `mailto:${EMAIL}`
const INSTAGRAM_HANDLE = '077.kbl'
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: MAILTO },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
]

const FEATURE_PILLS = ['Entrepreneur', 'Developer', 'Problem Solver']

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-neutral-950 text-white">
      {/*
        Media background. An <img> is used here since the uploaded asset is a
        photo. To use a looping clip instead, swap this for:
        <video autoPlay loop muted playsInline preload="auto" .../>
        keeping the same object-cover + object-position classes.
      */}
      <img
        src={portrait}
        alt="Portrait of Baibo"
        className="absolute inset-0 h-full w-full object-cover [object-position:80%_center] md:[object-position:right_center] lg:[object-position:center_center] animate-fade-in"
      />

      {/* Legibility scrims: darken bottom + left where content sits. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"
      />

      {/* Content layer */}
      <div className="absolute inset-0 z-10 flex flex-col px-4 py-4 sm:px-10 sm:py-8 lg:px-12">
        {/* ---------- Top navigation ---------- */}
        <header className="flex items-start justify-between gap-4">
          {/* Left glass nav pill */}
          <nav className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-md sm:gap-4 sm:px-4">
            <a href="#" className="flex items-center gap-2.5" aria-label="Baibo home">
              <Logo className="h-7 w-7 text-white" />
              <span className="font-askan text-xl leading-none tracking-wide sm:text-2xl">
                Baibo
              </span>
            </a>

            <span aria-hidden className="mx-0.5 hidden h-5 w-px bg-white/15 sm:block" />

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="grid h-8 w-8 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {menuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Right — desktop only: Instagram + primary CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 text-white/90 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
            >
              Work with Me
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* Mobile / dropdown menu (glassmorphism) */}
        {menuOpen && (
          <div className="mt-3 w-full max-w-xs animate-fade-up rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-md">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                    <ArrowIcon className="h-4 w-4 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ---------- Main content, bottom-aligned ---------- */}
        <div className="mt-auto flex w-full flex-col gap-8 pb-2 sm:pb-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {/* Left column */}
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Baibo
            </p>

            <h1 className="font-askan text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Creating impact
              <br />
              through innovation.
            </h1>

            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-white/70 sm:text-lg">
              I'm Baibo — an entrepreneur and developer turning bold ideas into
              products people actually use. I design, build, and ship with a
              relentless focus on clarity, craft, and real-world impact.
            </p>

            {/* Call to action */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition-all hover:bg-white/90"
              >
                Contact Me
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/20 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
              >
                <InstagramIcon className="h-4 w-4" />
                @{INSTAGRAM_HANDLE}
              </a>
            </div>

            {/* Feature pills — mobile / tablet */}
            <ul className="mt-8 flex flex-wrap gap-2.5 lg:hidden">
              {FEATURE_PILLS.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-light text-white/80 backdrop-blur-md"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — feature pills, desktop, aligned right */}
          <ul className="hidden animate-fade-up flex-col items-end gap-3 lg:flex">
            {FEATURE_PILLS.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm font-light text-white/80 backdrop-blur-md transition-colors hover:border-white/25 hover:text-white"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
