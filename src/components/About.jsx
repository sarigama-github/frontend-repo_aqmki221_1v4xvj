function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Your on-call operations partner</h2>
            <p className="mt-4 text-slate-600">
              We combine business administration expertise with paralegal discipline to deliver reliable, compliant, and efficient support. Whether you need ongoing help or a one-off project, we step in quickly and work within your systems.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-600" /> U.S.-based support</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-600" /> Clear communication and documentation</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-600" /> Confidential, secure workflows</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 rounded-lg bg-slate-100 h-24" />
              <div className="col-span-2 rounded-lg bg-slate-100 h-24" />
              <div className="col-span-2 rounded-lg bg-slate-100 h-24" />
              <div className="col-span-1 rounded-lg bg-slate-100 h-24" />
              <div className="col-span-3 rounded-lg bg-slate-100 h-28" />
            </div>
            <p className="mt-3 text-sm text-slate-500">Tool-agnostic: we adapt to your preferred platforms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
