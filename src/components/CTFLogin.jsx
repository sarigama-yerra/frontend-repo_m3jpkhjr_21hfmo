import { useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CTFLogin({ onAuthed }) {
  const [mode, setMode] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const url = mode === 'login' ? `${API}/auth/login` : `${API}/auth/register`
      const body = mode === 'login' ? { email: form.email, password: form.password } : form
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Gagal otentikasi')
      }
      const data = await res.json()
      onAuthed(data.user)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07050a] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.16),transparent_45%)]" />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-200 bg-clip-text text-transparent">Capture The Flag</h1>
          <p className="mt-2 text-white/60">Masuk untuk mulai menaklukkan tantangan.</p>
        </div>

        <div className="mb-4 grid grid-cols-2 rounded-full bg-black/30 p-1 border border-white/10">
          <button onClick={() => setMode('login')} className={`rounded-full px-4 py-2 text-sm transition ${mode==='login' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'}`}>Login</button>
          <button onClick={() => setMode('register')} className={`rounded-full px-4 py-2 text-sm transition ${mode==='register' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'}`}>Register</button>
        </div>

        <form onSubmit={submit} className="grid gap-3">
          {mode === 'register' && (
            <input value={form.username} onChange={(e)=>setForm({...form, username: e.target.value})} placeholder="Username" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" required />
          )}
          <input value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" required />
          <input value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} type="password" placeholder="Password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" required />
          {error && <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg px-3 py-2">{error}</div>}
          <motion.button whileTap={{ scale: 0.98 }} disabled={loading} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20 transition disabled:opacity-60">
            {loading ? 'Memproses...' : (mode === 'login' ? 'Masuk' : 'Daftar')}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
