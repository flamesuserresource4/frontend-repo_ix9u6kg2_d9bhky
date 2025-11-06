import React from 'react';
import { Shield, Home, Brain, Pill, Heart } from 'lucide-react';

const programs = [
  {
    icon: Shield,
    title: 'Medical Detox',
    desc: 'Physician-led detox to manage withdrawal safely.',
  },
  {
    icon: Home,
    title: 'Residential Treatment',
    desc: 'Structured daily therapy and recovery routines.',
  },
  {
    icon: Brain,
    title: 'Dual Diagnosis',
    desc: 'Address substance use and mental health together.',
  },
  {
    icon: Pill,
    title: 'Medication-Assisted Therapy',
    desc: 'Evidence-based medications to support stability.',
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    desc: 'Yoga, art therapy, nutrition, and mindfulness.',
  },
];

const Programs = () => {
  return (
    <section aria-label="Treatment Programs" className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Treatment Programs</h2>
        <p className="mt-2 text-slate-600">Comprehensive, accredited care tailored to you.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition transform hover:-translate-y-1 hover:shadow-md focus-within:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600 ring-1 ring-emerald-100">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
                <p className="mt-3 text-slate-600">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
