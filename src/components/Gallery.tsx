import React, { useState } from 'react';
import { Images, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3",
      alt: "Salon Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3",
      alt: "Hair Styling"
    },
    {
      src: "https://images.unsplash.com/photo-1607779097040-813a901e833f?ixlib=rb-4.0.3",
      alt: "Facial Treatment"
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3",
      alt: "Manicure"
    },
    {
      src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3",
      alt: "Makeup Application"
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3",
      alt: "Bridal Makeup"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Our Gallery</h2>
          <div className="w-20 h-1 bg-beauty-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center">
            Take a look at our salon ambiance and the beautiful transformations we create for our lovely clients.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-64 object-cover"
            />
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} className="text-beauty-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors"
          >
            <ChevronRight size={20} className="text-beauty-dark" />
          </button>
          <div className="flex justify-center mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentIndex ? "bg-beauty-gold" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919876543210?text=Hi%20Radiance%20Glow%2C%20I%27d%20like%20to%20see%20more%20of%20your%20work."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-beauty-gold hover:bg-beauty-gold/90 text-white font-semibold py-3 px-8 rounded-full transition-all"
          >
            <Images size={20} />
            <span>View Full Gallery</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
