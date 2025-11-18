function Services() {
  const items = [
    {
      title: 'Business Administration',
      desc: 'Scheduling, invoicing, email management, data entry, and process documentation to keep operations smooth.',
      points: ['Virtual assistance', 'Calendar & inbox', 'Invoicing & billing', 'Reports & dashboards'],
    },
    {
      title: 'Paralegal Support',
      desc: 'Drafting, formatting, and organizing legal documents under attorney supervision with rigorous attention to detail.',
      points: ['Legal research', 'Document preparation', 'E-filing support', 'Case organization'],
    },
    {
      title: 'Business Filings',
      desc: 'LLC/Corp formation support, annual reports, licenses, and compliance reminders across states.',
      points: ['Entity formation', 'Registered agent liaison', 'Annual compliance', 'Licensing assistance'],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600">Flexible support packages tailored to your workflow and deadlines.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {it.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
