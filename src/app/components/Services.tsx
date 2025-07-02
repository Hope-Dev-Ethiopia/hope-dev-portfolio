'use client';

import React from "react";
import { Code, Smartphone, Monitor, Layout } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code className="h-8 w-8 text-accent" />,
    description: "We create responsive, modern websites and web applications using the latest technologies.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    description: "Native and cross-platform mobile apps that deliver exceptional UX on iOS and Android.",
  },
  {
    title: "Desktop Applications",
    icon: <Monitor className="h-8 w-8 text-accent" />,
    description: "Powerful desktop software with robust functionality and intuitive interfaces.",
  },
  {
    title: "UX/UI Design",
    icon: <Layout className="h-8 w-8 text-accent" />,
    description: "User-centered designs that combine aesthetics with functionality to engage users.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary font-[family-name:var(--font-mont)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary text-accent rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground">
            We offer comprehensive digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-foreground mb-4">{service.description}</p>
              <button className="text-accent hover:underline font-medium">
                More Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
