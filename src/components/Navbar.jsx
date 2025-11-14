import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div onClick={() => scrollTo('hero')} className="cursor-pointer select-none text-white font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Flames</span>
            <span className="text-white/80">.Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('projects')} className="text-white/80 hover:text-white transition">Projects</button>
            <button onClick={() => scrollTo('about')} className="text-white/80 hover:text-white transition">About</button>
            <button onClick={() => scrollTo('contact')} className="text-white/80 hover:text-white transition">Contact</button>
            <div className="h-6 w-px bg-white/10" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
            <a href="mailto:hello@example.com" className="text-white/80 hover:text-white"><Mail size={18} /></a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2 text-sm">
              <button onClick={() => scrollTo('projects')} className="text-left text-white/80 hover:text-white py-2">Projects</button>
              <button onClick={() => scrollTo('about')} className="text-left text-white/80 hover:text-white py-2">About</button>
              <button onClick={() => scrollTo('contact')} className="text-left text-white/80 hover:text-white py-2">Contact</button>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
                <a href="mailto:hello@example.com" className="text-white/80 hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
