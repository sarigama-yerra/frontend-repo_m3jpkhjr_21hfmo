import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[#07050a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/80 mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-br from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
            Membangun pengalaman digital berkelas dengan sentuhan futuristik
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70">
            Saya adalah Frontend Engineer yang fokus pada UI modern, performa, dan animasi halus. Mari wujudkan ide Anda menjadi produk yang memukau.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20 transition">
              Lihat Proyek
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              Kontak Saya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
