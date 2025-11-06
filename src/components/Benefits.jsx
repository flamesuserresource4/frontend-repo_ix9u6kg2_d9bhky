import React from 'react';

const benefits = [
  {
    title: 'Boutique 20-Bed Facility',
    desc: 'Personalized care in a private, restorative environment.',
  },
  {
    title: 'Dual-Diagnosis Expertise',
    desc: 'Integrated mental health and addiction treatment for lasting recovery.',
  },
  {
    title: '24/7 Medical Support',
    desc: 'Safe, comfortable detox with continuous monitoring.',
  },
  {
    title: 'Most Insurance Accepted',
    desc: 'Insurance may cover up to 100% of treatment costs.',
  },
];

const Benefits = () => {
  return (
    <section aria-label="Why Choose Flagler" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Why Choose Flagler</h2>
        <p className="mt-2 text-slate-600">Calm, compassionate, and medically supervised care when you need it most.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
