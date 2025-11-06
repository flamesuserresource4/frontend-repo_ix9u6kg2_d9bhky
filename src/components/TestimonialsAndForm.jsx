import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      'Flagler gave me hope when I had none. The staff treated me like family and kept me safe through detox.',
    name: 'J.M., Alumni',
  },
  {
    quote:
      'The dual-diagnosis focus changed everything. I finally understood my anxiety and how to manage it.',
    name: 'A.S., Alumni',
  },
  {
    quote:
      'Beautiful, calm environment and real clinical support. I felt respected from day one.',
    name: 'R.K., Alumni',
  },
];

const TestimonialsAndForm = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        {/* Testimonials */}
        <div aria-label="Testimonials" className="">
          <div className="flex items-center gap-3">
            <div className="text-amber-500 text-xl" aria-hidden="true">★ ★ ★ ★ ☆</div>
            <p className="text-sm text-slate-600">Google Rating 4.3/5</p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <blockquote className="text-slate-800 text-lg leading-relaxed">“{testimonials[active].quote}”</blockquote>
            <p className="mt-4 text-slate-500">— {testimonials[active].name}</p>

            <div className="mt-6 flex gap-3">
              <button onClick={prev} className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50" aria-label="Previous testimonial">Previous</button>
              <button onClick={next} className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50" aria-label="Next testimonial">Next</button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-600" aria-label="Accreditation and insurance logos">
            <span className="inline-flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-emerald-500" aria-hidden="true" />JCAHO</span>
            <span className="inline-flex items-center gap-2"><span className="h-5 w-5 rounded bg-emerald-300" aria-hidden="true" />LegitScript</span>
            <span className="inline-flex items-center gap-2"><span className="h-5 w-10 rounded bg-slate-300" aria-hidden="true" />Aetna</span>
            <span className="inline-flex items-center gap-2"><span className="h-5 w-10 rounded bg-slate-300" aria-hidden="true" />Cigna</span>
            <span className="inline-flex items-center gap-2"><span className="h-5 w-10 rounded bg-slate-300" aria-hidden="true" />BCBS</span>
          </div>
        </div>

        {/* Verify Insurance Form */}
        <div id="insurance-form" aria-label="Verify Insurance" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Take the First Step Toward Recovery</h3>
          <p className="mt-1 text-slate-600">Insurance can cover up to 100% of treatment costs. Takes just 2 minutes to verify.</p>

          <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Insurance verification form">
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Full Name</span>
              <input type="text" name="name" required className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Jane Doe" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Phone Number</span>
              <input type="tel" name="phone" required className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="(561) 555-1234" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Insurance Provider</span>
              <input type="text" name="provider" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Aetna, Cigna, BCBS..." />
            </label>

            <button type="submit" className="mt-2 rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300">Verify Insurance</button>
            <a href="tel:+1561867xxxx" className="text-center rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 hover:bg-emerald-100">Call Now</a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndForm;
