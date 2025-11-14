import { useState } from 'react'
import Navbar from './components/Navbar'
import CTFLogin from './components/CTFLogin'
import CTFDashboard from './components/CTFDashboard'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {!user ? (
        <CTFLogin onAuthed={setUser} />
      ) : (
        <CTFDashboard user={user} />
      )}
    </div>
  )
}

export default App
