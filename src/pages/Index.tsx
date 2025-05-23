
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SpecialOffer from '@/components/SpecialOffer'; // Import remains the same
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Radiance Glow Beauty Parlour | Your Beauty Journey Begins Here";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Radiance Glow Beauty Parlour offers premium beauty services including haircuts, styling, facials, makeup, and bridal packages in Mumbai. Book your appointment today!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SpecialOffer /> {/* Moved here, right below Hero */}
      <About />
      <Services />
      {/* SpecialOffer component removed from its previous position */}
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
