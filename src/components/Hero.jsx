function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Business Administration & Paralegal Support
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Rescue Desks Business & Paralegal helps entrepreneurs, law firms, and busy professionals stay organized and compliant. We handle the admin and legal support, so you can focus on growth.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition">Book a Free Consultation</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50 transition">Explore Services</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Fast turnaround
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Confidential & secure
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-white p-6 grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="h-8 w-32 rounded bg-slate-200" />
                  <div className="h-8 w-40 rounded bg-slate-200" />
                  <div className="h-36 w-full rounded-xl bg-slate-100" />
                </div>
                <div className="space-y-3">
                  <div className="h-8 w-24 rounded bg-slate-200" />
                  <div className="h-8 w-28 rounded bg-slate-200" />
                  <div className="h-36 w-full rounded-xl bg-slate-100" />
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-lg bg-slate-100" />
                  <div className="h-20 rounded-lg bg-slate-100" />
                  <div className="h-20 rounded-lg bg-slate-100" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">Admin, filings, and document support handled with care.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
