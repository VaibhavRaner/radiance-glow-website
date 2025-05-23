import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    time: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const message = `Hi Radiance Glow, I'd like to book an appointment.\n\nName: ${formData.name}\nService: ${formData.service}\nPreferred Time: ${formData.time}\nPhone: ${formData.phone}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Contact Us</h2>
          <div className="w-20 h-1 bg-beauty-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center">
            Have questions or ready to book an appointment? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6 text-beauty-dark">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-beauty-dark mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-beauty-pink/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-gold/50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-beauty-dark mb-2">Service Interested</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-beauty-pink/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-gold/50"
                >
                  <option value="">Select a service</option>
                  <option value="Haircut & Styling">Haircut & Styling</option>
                  <option value="Hair Spa & Treatments">Hair Spa & Treatments</option>
                  <option value="Facials & Skincare">Facials & Skincare</option>
                  <option value="Waxing & Threading">Waxing & Threading</option>
                  <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Mehendi Art">Mehendi Art</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="time" className="block text-beauty-dark mb-2">Preferred Time</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-beauty-pink/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-gold/50"
                  placeholder="e.g., Tomorrow at 2 PM"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-beauty-dark mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-beauty-pink/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-gold/50"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                className="whatsapp-button w-full"
              >
                <Phone size={20} />
                <span>Book via WhatsApp</span>
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6 text-beauty-dark">Visit Our Salon</h3>
            
            <div className="bg-beauty-light p-6 rounded-lg mb-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-beauty-pink rounded-full mr-4 text-beauty-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-beauty-dark">Address</h4>
                  <p className="text-beauty-dark/80">Vasmat Road Parbhani 431401, Maharastra</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="p-2 bg-beauty-pink rounded-full mr-4 text-beauty-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-beauty-dark">Phone</h4>
                  <p className="text-beauty-dark/80">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-beauty-pink rounded-full mr-4 text-beauty-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-beauty-dark">Working Hours</h4>
                  <p className="text-beauty-dark/80">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-beauty-dark/80">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 shadow-lg">
              <iframe 
                src="https://maps.google.com/maps?q=Vasmat%20Road%20Parbhani%20431401%2C%20Maharastra&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Radiance Glow Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
