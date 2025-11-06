import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Programs from './components/Programs';
import TestimonialsAndForm from './components/TestimonialsAndForm';
import FAQFooter from './components/FAQFooter';

function App() {
  return (
    <div className="font-inter text-slate-900 bg-white">
      <Hero />
      <Benefits />
      <Programs />
      {/* Facility & Amenities could be added as a slider with images; using testimonials to emphasize proof */}
      <TestimonialsAndForm />
      <FAQFooter />
    </div>
  );
}

export default App;
