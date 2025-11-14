import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'Platform e-commerce dengan tema cyberpunk dan animasi mikro yang halus.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Holo Dashboard',
    desc: 'Dasbor analitik dengan grafik interaktif dan efek kaca futuristik.',
    tags: ['Vite', 'Recharts', 'Radix UI'],
    link: '#'
  },
  {
    title: 'Orbit Docs',
    desc: 'Dokumentasi developer dengan navigasi keyboard dan tema gelap.',
    tags: ['Docusaurus', 'MDX'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0a0911] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,0,255,0.06),transparent_50%),radial-gradient(circle_at_90%_20%,rgba(0,255,255,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Proyek Pilihan</h2>
          <p className="mt-2 text-white/60">Koleksi karya dengan fokus pada aksesibilitas, performa, dan visual yang berani.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl group-hover:bg-cyan-500/20 transition" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  {p.title}
                  <ExternalLink size={16} className="opacity-60 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs rounded-full bg-black/40 border border-white/10 text-white/70 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
