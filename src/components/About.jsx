import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0a12] py-24">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tentang Saya</h2>
          <p className="mt-4 text-white/70">
            Saya suka membangun antarmuka dengan estetika cyberpunk, animasi halus, dan
            struktur kode yang rapi. Fokus pada aksesibilitas, konsistensi desain, dan
            pengalaman pengguna yang memikat.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">React / Vite</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Tailwind CSS</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Framer Motion</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Radix UI</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 shadow-xl" />
      </div>
    </section>
  )
}
