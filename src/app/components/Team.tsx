'use client';

import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const team = [
  {
    name: "JO",
    role: "AI Magician",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Tewobsta",
    role: "Web Dev & Problem Solver",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Henok",
    role: "App Architect with a Desktop Edge",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Tsion",
    role: "UX-focused Developer & Designer",
    img: "https://randomuser.me/api/portraits/women/76.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Yeshrun",
    role: "Full Stack Mobile Wizard",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="py-20 bg-primary font-[family-name:var(--font-mont)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-accent rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the Experts
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground">
            Our talented team is dedicated to delivering exceptional results on
            every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-primary"
              />
              <h3 className="text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>

              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
