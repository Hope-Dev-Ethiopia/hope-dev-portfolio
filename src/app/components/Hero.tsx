import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "./ui/Link";

const Hero: React.FC = () => {
	return (
		<section className="relative h-screen flex items-center bg-secondary font-[family-name:var(--font-mont)] from-blue-50 to-sky-50">
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
			<div className="container mx-auto px-4 md:px-6 z-10">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="md:w-1/2 mb-12 md:mb-0">
						<h1 className="text-4xl md:text-5xl text-foreground lg:text-6xl font-bold leading-tight mb-4">
							We Build
							<span className="text-accent"> Digital </span>
							Solutions That
							<span className="text-accent"> Inspire</span>
						</h1>
						<p className="text-xl text-foreground mb-8 max-w-xl">
							Hope is a team of passionate developers and designers creating
							beautiful, functional, and user-friendly digital experiences.
						</p>
						<div className="flex space-x-4">
							<Link
								href="#services"
								className="px-6 py-3 bg-accent text-foreground rounded-lg hover:bg-accent-hover transition-colors duration-300 font-medium flex items-center"
							>
								Our Services
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
							<Link
								href="#contact"
								className="px-6 py-3 border-2 border-accent text-foreground rounded-lg hover:bg-primary transition-colors duration-300 font-medium"
							>
								Contact Us
							</Link>
						</div>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<div className="relative">
							<div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full absolute -top-4 -left-4 opacity-10 animate-pulse"></div>
							<img
								src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Team collaboration"
								className="w-full max-w-md rounded-lg shadow-2xl relative z-10"
							/>
							<div className="w-32 h-32 bg-teal-400 rounded-full absolute -bottom-6 -right-6 opacity-20 animate-pulse"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
