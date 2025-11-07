export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#090d12] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-white font-semibold">Industrix Tech</h4>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              We partner with industrial leaders to design, build, and scale secure technology systems.
            </p>
          </div>
          <div>
            <h5 className="text-slate-300 font-medium">Company</h5>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white transition">Industries</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-300 font-medium">Get in touch</h5>
            <p className="mt-2 text-sm text-slate-400">hello@industrix.tech</p>
            <div className="mt-4">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition">Contact sales</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Industrix Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
