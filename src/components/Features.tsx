
import React from 'react';
import { Users, Star, Clock, Camera } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ComponentType<any>,
  title: string,
  description: string
}) => {
  return (
    <div className="feature-card">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-beauty-pink text-beauty-gold">
          <Icon size={28} />
        </div>
      </div>
      <h3 className="font-playfair text-xl font-bold mb-2 text-beauty-dark">{title}</h3>
      <p className="text-beauty-dark/80">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Certified Beauticians",
      description: "Our team consists of highly trained and certified professionals passionate about beauty and client satisfaction."
    },
    {
      icon: Star,
      title: "Premium Products",
      description: "We use only high-quality, dermatologically tested products to ensure the best results and skin health."
    },
    {
      icon: Clock,
      title: "Affordable Pricing",
      description: "Enjoy premium beauty services at competitive prices with special packages and seasonal offers."
    },
    {
      icon: Camera,
      title: "Hygienic Environment",
      description: "We maintain the highest standards of cleanliness and use sanitized tools for a safe beauty experience."
    }
  ];

  return (
    <section className="section-padding bg-beauty-pink/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="w-20 h-1 bg-beauty-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center">
            At Radiance Glow, we are committed to excellence in everything we do. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
