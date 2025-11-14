import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#090812] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_20%_0%,rgba(217,70,239,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white">Mari Berkolaborasi</motion.h2>
        <p className="mt-3 text-white/70">Punya ide atau proyek? Kirimkan pesan dan saya akan kembali dalam 24 jam.</p>
        <form className="mt-8 grid gap-4 text-left">
          <input placeholder="Nama" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
          <input placeholder="Email" type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
          <textarea placeholder="Pesan" rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
          <button type="button" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20 transition">Kirim Pesan</button>
        </form>
      </div>
    </section>
  )
}
