import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-10 h-screen">
      <img src="/rect24.png" alt="Logo" />

      <Link to="/shop" className="flex gap-2 items-center justify-center p-3 px-6 rounded-full from-[#0085FF] to-[#000699] bg-gradient-to-r text-white">
        <img src="/kisicon.png" alt="Kisicon" className='w-6'/>
        <p className='font-bold'> Webshop</p>
      </Link>
    </main>
  )
}

export default App
