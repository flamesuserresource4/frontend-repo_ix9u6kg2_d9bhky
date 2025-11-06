import React from 'react';

const faqs = [
  {
    q: 'What types of addiction do you treat?',
    a: 'We treat alcohol, opioids, benzodiazepines, stimulants, and co-occurring mental health conditions with individualized care plans.'
  },
  {
    q: 'Can I bring my phone?',
    a: 'Yes, phones are typically allowed during designated times to support loved ones while maintaining a therapeutic environment.'
  },
  {
    q: 'How long does treatment last?',
    a: 'Length varies by clinical need. Detox averages 5–10 days; residential stays often range from 20–45 days.'
  },
  {
    q: 'Do you accept my insurance?',
    a: 'We work with most major providers and can verify benefits in minutes.'
  }
];

const FAQFooter = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white">
          {faqs.map((item, idx) => (
            <details key={idx} className="group p-6 open:bg-slate-50 first:rounded-t-xl last:rounded-b-xl">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-base font-medium text-slate-900">{item.q}</span>
                <span className="ml-4 text-slate-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Start Your Journey to Recovery Today</h3>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#insurance-form" className="rounded-md bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700" onClick={(e) => { e.preventDefault(); const el = document.getElementById('insurance-form'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Verify Insurance</a>
            <a href="tel:+1561867xxxx" className="rounded-md border border-emerald-200 bg-emerald-50 px-6 py-3 text-emerald-700 hover:bg-emerald-100">Call 24/7</a>
          </div>

          <div className="mt-10 text-slate-600">
            <p>1803 S Australian Ave, West Palm Beach, FL</p>
            <div className="mt-2 flex items-center justify-center gap-4 text-sm">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:underline">Licensing Info</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 sm:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-3">
          <a href="tel:+1561867xxxx" className="text-center rounded-md bg-emerald-50 text-emerald-700 py-2 font-medium">📞 Call Now</a>
          <button onClick={() => { const el = document.getElementById('insurance-form'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="text-center rounded-md bg-emerald-600 text-white py-2 font-medium">✅ Verify Insurance</button>
        </div>
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        'name': 'Flagler Health and Wellness',
        'url': typeof window !== 'undefined' ? window.location.origin : 'https://flagler.example',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '1803 S Australian Ave',
          'addressLocality': 'West Palm Beach',
          'addressRegion': 'FL',
          'postalCode': '33401',
          'addressCountry': 'US'
        },
        'telephone': '+1-561-867-0000',
        'medicalSpecialty': ['AddictionMedicine', 'MentalHealth'],
        'image': typeof window !== 'undefined' ? window.location.origin + '/cover.jpg' : '',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.3',
          'reviewCount': '146'
        }
      }) }} />
    </section>
  );
};

export default FAQFooter;
