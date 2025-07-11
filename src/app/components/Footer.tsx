'use client';

import React from "react";
import Image from "next/image";
import Logo from "@/public/HopeLogo.png";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-foreground py-14 font-[family-name:var(--font-poppins)]">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Hope Logo" width={32} height={32} />
            <span className="text-xl font-bold uppercase">HOPE</span>
          </div>
          <p className="text-sm leading-relaxed">
            We build beautiful, functional digital experiences that help businesses thrive in the digital world.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Desktop Applications</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#team" className="hover:text-accent transition-colors">Our Team</a></li>
            <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li>Bole Megenagna, Addis Ababa, Ethiopia</li>
            <li>hopedevethiopia@gmail.com</li>
            <li>+251 998 765 342</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary mt-12 pt-6 text-center text-sm text-foreground">
        © 2025 Hope. All rights reserved. &nbsp;
        <a href="#" className="hover:text-accent">Privacy Policy</a> | <a href="#" className="hover:text-accent">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
