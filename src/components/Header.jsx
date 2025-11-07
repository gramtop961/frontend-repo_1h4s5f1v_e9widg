import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d12]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Industrix Tech</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#industries" className="hover:text-white transition">Industries</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 transition">Contact</a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-200"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2 rounded-lg border border-white/10 bg-[#0c111a] p-2">
              <a href="#solutions" className="rounded-md px-3 py-2 hover:bg-white/5">Solutions</a>
              <a href="#industries" className="rounded-md px-3 py-2 hover:bg-white/5">Industries</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-white/5">About</a>
              <a href="#contact" className="rounded-md bg-white/10 px-3 py-2 text-center hover:bg-white/20">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
