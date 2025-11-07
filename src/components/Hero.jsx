import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72vh] items-center py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="pointer-events-none absolute -inset-20 -z-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Industrial technology that scales with your ambition
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              We build intelligent systems for factories, energy, and logistics—
              engineered for reliability, security, and performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">
                Get a demo
              </a>
              <a href="#solutions" className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                Explore solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0d12]/40 via-transparent to-[#0a0d12]" />
    </section>
  );
}
