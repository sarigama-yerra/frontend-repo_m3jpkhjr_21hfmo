import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="border-t border-white/10 bg-[#07050a]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Flames Portfolio</p>
            <p className="text-white/40">Built with ♥️ vibes</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
