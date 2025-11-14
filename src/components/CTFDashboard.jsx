import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Flag, Shield, Lock, BarChart3 } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CTFDashboard({ user }) {
  const [challenges, setChallenges] = useState([])
  const [selected, setSelected] = useState(null)
  const [flag, setFlag] = useState('')
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const fetchAll = async () => {
    const [cRes, sRes] = await Promise.all([
      fetch(`${API}/challenges`).then(r=>r.json()),
      fetch(`${API}/stats`).then(r=>r.json()),
    ])
    setChallenges(cRes.challenges || [])
    setLeaderboard(sRes.leaderboard || [])
  }

  useEffect(()=>{ fetchAll() },[])

  const categories = useMemo(()=>{
    const counts = {}
    for (const c of challenges) {
      counts[c.category] = (counts[c.category]||0) + 1
    }
    return Object.entries(counts).map(([name, total]) => ({ name, total }))
  }, [challenges])

  const submitFlag = async () => {
    if (!selected || !flag) return
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${API}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user._id, challenge_id: selected._id, flag })
      })
      const data = await res.json()
      if (data.correct) {
        setMessage('✅ Flag benar! Skor kamu bertambah.')
        await fetchAll()
      } else {
        setMessage('❌ Flag salah, coba lagi!')
      }
    } catch (e) {
      setMessage('Terjadi kesalahan pengiriman flag.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-[#090812] pt-20 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(217,70,239,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Dashboard CTF</h2>
            <p className="text-white/60">Selamat datang, {user.username || user.email}. Skor: <span className="text-cyan-300 font-semibold">{user.score ?? 0}</span></p>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Trophy className="text-yellow-300" size={20} />
            <span>Leaderboard live dan statistik kategori</span>
          </div>
        </div>

        {/* Stats + Chart */}
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-white/70 mb-3"><BarChart3 size={18} /><span>Distribusi Kategori</span></div>
            <div className="h-40 grid items-end gap-2 grid-cols-5">
              {categories.map((c, i) => (
                <motion.div key={c.name} initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="origin-bottom rounded-md bg-gradient-to-t from-fuchsia-500/70 to-cyan-400/70" style={{ height: `${20 + Math.min(60, c.total * 20)}%` }} title={`${c.name}: ${c.total}`} />
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/60">
              {categories.map(c => (<span key={c.name} className="px-2 py-1 rounded-full bg-black/40 border border-white/10">{c.name} ({c.total})</span>))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white/70"><Flag size={18} /><span>Daftar Tantangan</span></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {challenges.map((c, i) => (
                <motion.button key={c._id} onClick={()=>setSelected(c)} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className={`text-left rounded-xl border ${selected?._id===c._id?'border-cyan-400/60':'border-white/10'} bg-white/5 p-4 hover:bg-white/10 transition`}> 
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{c.title}</h3>
                    <span className="text-xs text-white/60">{c.points} pts</span>
                  </div>
                  <div className="mt-1 text-xs text-white/60">{c.category} • {c.difficulty}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Challenge Reader + Submit */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2 min-h-[220px]">
            {!selected ? (
              <div className="h-full flex items-center justify-center text-white/50">Pilih tantangan untuk melihat detail.</div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-white/80"><Shield size={18} /><h3 className="font-semibold">{selected.title}</h3></div>
                <p className="mt-2 text-white/70 whitespace-pre-wrap">{selected.description}</p>
              </div>
            )}
          </motion.div>

          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-white/70 mb-2"><Lock size={18} /><span>Submit Flag</span></div>
            <input value={flag} onChange={e=>setFlag(e.target.value)} placeholder="CTF{...}" className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <button onClick={submitFlag} disabled={!selected || loading} className="mt-3 w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg disabled:opacity-50">{loading? 'Mengirim...' : 'Kirim'}</button>
            {message && <div className="mt-2 text-sm text-white/80">{message}</div>}
          </motion.div>
        </div>

        {/* Leaderboard */}
        <div className="mt-10">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><Trophy className="text-yellow-300" size={18} />Leaderboard</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {leaderboard.map((u, i) => (
              <motion.div key={u._id} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                <div className="text-white/80"><span className="text-white/40 mr-2">#{i+1}</span>{u.username || u.email}</div>
                <div className="text-cyan-300 font-semibold">{u.score ?? 0} pts</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
