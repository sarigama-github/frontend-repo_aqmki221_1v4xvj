import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 text-white font-bold grid place-items-center">R</div>
            <span className="font-semibold text-slate-900">Rescue Desks</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3.5 py-2 text-white font-medium hover:bg-blue-700 transition">Get Help</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            <span className="sr-only">Toggle menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block px-2 py-2 rounded hover:bg-slate-100">Services</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-slate-100">About</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-slate-100">Contact</a>
            <a href="#contact" className="block px-2 py-2 rounded bg-blue-600 text-white">Get Help</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
