import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import PricingBanner from './components/PricingBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <VideoSection />
        <Testimonials />
        <PricingBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
