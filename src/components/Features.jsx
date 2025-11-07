import { Shield, Cpu, BarChart3, Cog } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Zero-trust architecture, end-to-end encryption, and rigorous compliance baked into every layer.'
  },
  {
    icon: Cpu,
    title: 'Intelligent automation',
    desc: 'Real-time analytics and ML-driven optimization to reduce downtime and improve throughput.'
  },
  {
    icon: BarChart3,
    title: 'Operational visibility',
    desc: 'Unified dashboards and alerts that surface the right signal at the right time.'
  },
  {
    icon: Cog,
    title: 'Industrial-grade',
    desc: 'Hardened systems engineered for harsh environments and 24/7 uptime.'
  }
];

export default function Features() {
  return (
    <section id="solutions" className="relative border-t border-white/10 bg-[#0b1017] py-20">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-500/10 to-transparent blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for modern industry</h2>
          <p className="mt-4 text-slate-400">From factory floors to national grids, our platform delivers measurable results.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-cyan-500/40 hover:shadow-[0_0_40px_-10px] hover:shadow-cyan-500/30">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
