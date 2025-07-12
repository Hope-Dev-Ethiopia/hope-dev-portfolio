"use client";
import React from "react";
import { Award, Users, Code, Heart } from "lucide-react";

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="py-20 bg-primary font-[family-name:var(--font-mont)]"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<span className="inline-block px-3 py-1 bg-secondary text-accent rounded-full text-sm font-medium mb-4">
						About Us
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Who We Are
					</h2>
					<p className="max-w-2xl mx-auto text-lg text-foreground">
						We&apos;re a team of passionate developers and designers creating
						exceptional digital experiences that solve real-world problems.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<img
							src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Our team collaborating"
							className="rounded-lg shadow-lg w-full"
						/>
					</div>
					<div>
						<h3 className="text-2xl font-bold text-foreground mb-6">
							Our Mission
						</h3>
						<p className="text-foreground mb-8">
							At Hope, we believe in the power of technology to transform ideas
							into impactful solutions. Our mission is to partner with our
							clients to bring their visions to life through innovative software
							development and captivating design.
						</p>

						<div className="space-y-6">
							<div className="flex items-start">
								<div className="bg-secondary p-3 rounded-full mr-4">
									<Award className="h-6 w-6 text-accent" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-foreground mb-1">
										Quality First
									</h4>
									<p className="text-foreground">
										We never compromise on quality, ensuring every project meets
										the highest standards.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-secondary p-3 rounded-full mr-4">
									<Users className="h-6 w-6 text-accent" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-foreground mb-1">
										Client-Centered
									</h4>
									<p className="text-foreground">
										Your success is our success. We prioritize clear
										communication and collaboration.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-secondary p-3 rounded-full mr-4">
									<Code className="h-6 w-6 text-accent" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-foreground mb-1">
										Technical Excellence
									</h4>
									<p className="text-foreground">
										Our team stays at the forefront of technology to deliver
										cutting-edge solutions.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-secondary p-3 rounded-full mr-4">
									<Heart className="h-6 w-6 text-accent" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-foreground mb-1">
										Passion-Driven
									</h4>
									<p className="text-foreground">
										We love what we do, and it shows in the care and attention
										we give to every project.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
