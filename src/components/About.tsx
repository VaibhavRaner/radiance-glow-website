
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-beauty-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">About Radiance Glow</h2>
            <div className="w-20 h-1 bg-beauty-gold mb-6"></div>
            <p className="text-beauty-dark mb-6">
              Welcome to <span className="font-semibold">Radiance Glow</span>, where beauty meets expertise. 
              Founded in 2012, we've been dedicated to enhancing your natural beauty for over a decade. 
              Our beauty parlour was born from a passion to create a sanctuary where clients can relax, 
              rejuvenate, and emerge feeling their absolute best.
            </p>
            <p className="text-beauty-dark mb-6">
              Our team of professionally trained beauticians bring years of experience and a keen 
              understanding of the latest beauty trends and techniques. We believe that every client 
              is unique, which is why we tailor our services to meet your specific needs and desires.
            </p>
            <p className="text-beauty-dark mb-6">
              At Radiance Glow, we pride ourselves on using premium products and maintaining the highest 
              standards of hygiene and safety. We're committed to ensuring that your time with us is not 
              just about looking good, but feeling exceptional too.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <h3 className="font-playfair text-4xl text-beauty-gold font-bold">10+</h3>
                <p className="text-beauty-dark/80">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-4xl text-beauty-gold font-bold">15k+</h3>
                <p className="text-beauty-dark/80">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-4xl text-beauty-gold font-bold">25+</h3>
                <p className="text-beauty-dark/80">Expert Beauticians</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beauty salon interior"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-beauty-gold text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-playfair text-xl">Your Beauty, Our Priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
