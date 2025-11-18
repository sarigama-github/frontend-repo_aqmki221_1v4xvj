import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      service: form.get('service'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Failed to submit')
      }

      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-600">Tell us about your needs. We’ll respond within one business day.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select name="service" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select a service</option>
                  <option>Business Administration</option>
                  <option>Paralegal Support</option>
                  <option>Business Filings</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button type="submit" disabled={status==='loading'} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 disabled:opacity-60">
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-600">Thanks! We’ll be in touch shortly.</p>}
              {status === 'error' && <p className="text-red-600">{error}</p>}
            </div>
          </form>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold text-slate-900">Why work with us</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Responsive and reliable</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Clear processes and documentation</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Confidential handling of sensitive data</li>
            </ul>
            <div className="mt-6 text-sm text-slate-600">
              <p>Email: hello@rescuedesks.com</p>
              <p>Hours: Mon-Fri, 9am–5pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
