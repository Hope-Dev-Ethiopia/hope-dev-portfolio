'use client';

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hope transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates.",
    name: "Michael Roberts",
    role: "CEO, Tech24",
  },
  {
    quote:
      "The team at Hope exceeded our expectations. They listened, understood, and delivered a sleek solution on time.",
    name: "Lily Mekuria",
    role: "CTO, SoftFusion",
  },
  {
    quote:
      "Their creative ideas and professional execution were impressive. Highly recommended for design and dev work.",
    name: "Kaleb Zewdu",
    role: "Product Manager, InnovateX",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-secondary font-[family-name:var(--font-mont)]"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary text-accent rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p>Don't just take our word for it. Here's what our clients have to
            say about working with us</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-secondary text-foreground hover:text-accent p-2 rounded-full shadow-md hidden md:block"
          >
            <ChevronLeft />
          </button>

          <div className="bg-primary p-8 rounded-lg shadow-md text-center">
            <Quote className="w-8 h-8 text-accent mx-auto mb-6 opacity-30" />
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            <p className="text-accent font-semibold">{testimonials[current].name}</p>
            <p className="text-foreground text-sm">{testimonials[current].role}</p>
          </div>

          <button
            onClick={next}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-secondary text-foreground hover:text-accent p-2 rounded-full shadow-md hidden md:block"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-accent" : "bg-foreground opacity-30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
