
import React from 'react';
import { Tag, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const SpecialOffer = () => {
  const offerEndDate = "31st May, 2025"; // Current year is 2025

  return (
    <section id="special-offer" className="section-padding bg-beauty-pink/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-beauty-dark">
            <Tag className="inline-block mr-3 -mt-2 text-beauty-gold" size={40} />
            Limited Time Special Offer!
          </h2>
          <div className="w-20 h-1 bg-beauty-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-beauty-dark font-semibold mb-4">
            <CalendarDays className="inline-block mr-2 -mt-1 text-beauty-gold" size={28} />
            Offer Valid Upto {offerEndDate}
          </p>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Don't miss out on our exclusive deals. Pamper yourself with our premium services at special prices!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Special Offer Background - Orange Flowers"
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
             <div className="absolute -top-4 -left-4 bg-beauty-gold text-white p-3 rounded-full shadow-lg transform rotate-[-15deg]">
              <Tag size={32} />
            </div>
          </div>
          <div className="order-2 md:order-1">
            <h3 className="font-playfair text-3xl font-bold mb-6 text-beauty-dark">Get 20% Off On All Facials!</h3>
            <p className="text-beauty-dark/90 mb-4 text-lg">
              Rejuvenate your skin with our signature facials and enjoy a flat <strong>20% discount</strong>. 
              Whether you're looking for deep cleansing, hydration, or an anti-aging treatment, our experts are here to help you glow.
            </p>
            <p className="text-beauty-dark/80 mb-6">
              This offer includes:
            </p>
            <ul className="list-disc list-inside text-beauty-dark/80 mb-8 space-y-2">
              <li>Gold Facial</li>
              <li>Diamond Brightening Facial</li>
              <li>Herbal Skin Purifying Facial</li>
              <li>Anti-Acne Treatment Facial</li>
            </ul>
            <a href="#contact">
              <Button size="lg" className="bg-beauty-gold hover:bg-beauty-gold/90 text-white font-semibold">
                Book Your Glow Up Now
              </Button>
            </a>
            <p className="text-sm text-beauty-dark/70 mt-4">
              *Terms and conditions apply. Offer valid for a limited time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
