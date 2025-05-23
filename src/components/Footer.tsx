
import React from 'react';
import { Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beauty-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">Radiance Glow</h3>
            <p className="mb-6 text-white/80">
              Your premier destination for all beauty services. We're dedicated to enhancing your natural beauty and providing a relaxing experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-beauty-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-beauty-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-beauty-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-beauty-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-beauty-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-beauty-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Book an Appointment</h3>
            <p className="text-white/80 mb-4">
              Ready to transform your look? Book an appointment with us today.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Radiance%20Glow%2C%20I%27d%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all inline-block"
            >
              <Phone size={18} />
              <span>Book on WhatsApp</span>
            </a>
            <p className="mt-4 text-white/80">
              Or call us: +91 9876543210
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Radiance Glow Beauty Parlour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
