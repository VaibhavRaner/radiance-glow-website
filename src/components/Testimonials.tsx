
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, rating, image }: {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-playfair font-bold text-beauty-dark">{name}</h4>
          <p className="text-beauty-dark/70 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-beauty-gold fill-beauty-gold" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-beauty-dark/80 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      quote: "The team at Glory Beauty Parlour always delivers exceptional service. Their attention to detail and friendly atmosphere keeps me coming back!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
    },
    {
      name: "Ananya Patel",
      role: "Bridal Client",
      quote: "My bridal makeup was absolutely stunning! Everyone complimented how natural yet glamorous I looked. Thank you for making my special day perfect!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3"
    },
    {
      name: "Neha Gupta",
      role: "First-time Client",
      quote: "I was nervous about trying a new salon, but the staff made me feel so comfortable. The haircut exceeded my expectations!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
    },
    {
      name: "Ritu Desai",
      role: "Regular Client",
      quote: "The facial treatment here is magical! My skin has never looked better. The aesthetician was knowledgeable and gave great advice for my skin type.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-beauty-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <div className="w-20 h-1 bg-beauty-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center">
            Hear what our satisfied clients have to say about their experience at Glory Beauty Parlour.
          </p>
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className="relative md:hidden">
          <TestimonialCard {...testimonials[currentIndex]} />
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-beauty-gold/10 hover:bg-beauty-gold/20 text-beauty-gold p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-beauty-gold/10 hover:bg-beauty-gold/20 text-beauty-gold p-2 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Testimonial Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
