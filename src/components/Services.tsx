
import React from 'react';
import { Scissors, Camera, Star } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: React.ComponentType<any>, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="service-card">
      <div className="mb-4 text-beauty-gold">
        <Icon size={32} />
      </div>
      <h3 className="font-playfair text-xl font-bold mb-2 text-beauty-dark">{title}</h3>
      <p className="text-beauty-dark/80">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Haircut & Styling",
      description: "Transform your look with our expert cuts, styling, and coloring services tailored to your face shape and personality."
    },
    {
      icon: Star,
      title: "Hair Spa & Treatments",
      description: "Revitalize your hair with our nourishing spa treatments that repair damage and restore natural shine and strength."
    },
    {
      icon: Camera,
      title: "Facials & Skincare",
      description: "Rejuvenate your skin with our specialized facials designed to address specific skin concerns and promote a healthy glow."
    },
    {
      icon: Star,
      title: "Waxing & Threading",
      description: "Achieve smooth, hair-free skin with our gentle waxing and precise threading services performed by skilled professionals."
    },
    {
      icon: Star,
      title: "Manicure & Pedicure",
      description: "Pamper your hands and feet with our luxurious manicures and pedicures that exfoliate, moisturize, and beautify."
    },
    {
      icon: Camera,
      title: "Bridal Makeup Packages",
      description: "Make your special day unforgettable with our comprehensive bridal packages that ensure you look your absolute best."
    },
    {
      icon: Star,
      title: "Mehendi (Henna) Art",
      description: "Adorn your hands with intricate traditional or contemporary henna designs created by our talented artists."
    },
    {
      icon: Camera,
      title: "Body Polishing",
      description: "Experience full-body rejuvenation with our polishing treatments that exfoliate and illuminate your skin."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Our Beauty Services</h2>
          <div className="w-20 h-1 bg-beauty-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty and provide a rejuvenating experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919876543210?text=Hi%20Radiance%20Glow%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-beauty-gold hover:bg-beauty-gold/90 text-white font-semibold py-3 px-8 rounded-full transition-all"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
