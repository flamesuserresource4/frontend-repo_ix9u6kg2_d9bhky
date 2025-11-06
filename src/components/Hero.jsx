import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleVerifyClick = () => {
    const el = document.getElementById('insurance-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section aria-label="Hero" className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
        <div className="max-w-2xl text-white">
          <p className="text-sm uppercase tracking-widest text-emerald-200/80 font-medium">You're in the right place</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Safe, Compassionate Drug & Alcohol Detox in West Palm Beach
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            Boutique 20-bed facility with 24/7 medical staff and holistic dual-diagnosis care.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleVerifyClick}
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Verify Insurance"
            >
              Verify Insurance
            </button>
            <a
              href="tel:+1561867xxxx"
              className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-6 py-3 text-base font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Call 24/7 at (561) 867-xxxx"
            >
              ☎️ Call 24/7 – (561) 867-xxxx
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-slate-200/90" aria-label="Trust bar with accreditations and insurance logos">
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="text-sm">JCAHO Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded bg-emerald-300" aria-hidden="true" />
              <span className="text-sm">LegitScript Certified</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-block h-6 w-10 rounded bg-white/30" aria-hidden="true" />
              <span className="text-sm">Most Insurance Accepted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
