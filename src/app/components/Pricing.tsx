"use client";
import React, { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { pricingPlans } from "@/src/data/pricing";
import { Link } from "./ui/Link";

const Pricing: React.FC = () => {
	const [isAnnual, setIsAnnual] = useState(true);

	return (
		<section
			id="pricing"
			className="py-20 bg-primary font-[family-name:var(--font-mont)]"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<span className="inline-block px-3 py-1 bg-secondary text-accent rounded-full text-sm font-medium mb-4">
						Pricing
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Transparent Pricing for Your Projects
					</h2>
					<p className="max-w-2xl mx-auto text-lg text-foreground">
						Choose the perfect plan for your needs. No hidden fees, no
						surprises.
					</p>

					<div className="flex items-center justify-center mt-8 mb-12">
						<span
							className={`mr-3 ${
								isAnnual ? "text-foreground" : "text-accent font-medium"
							}`}
						>
							Monthly
						</span>
						<button
							onClick={() => setIsAnnual(!isAnnual)}
							className="relative inline-flex hover:cursor-pointer h-6 w-12 items-center rounded-full bg-accent"
						>
							<span className="sr-only">Toggle billing frequency</span>
							<span
								className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
									isAnnual ? "translate-x-7" : "translate-x-1"
								}`}
							></span>
						</button>
						<span
							className={`ml-3 ${
								isAnnual ? "text-accent font-medium" : "text-foreground"
							}`}
						>
							Annual <span className="text-accent">(Save 20%)</span>
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{pricingPlans.map((plan, index) => (
						<div
							key={index}
							className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
								plan.popular
									? "relative z-10 border-2 border-accent transform scale-105 md:scale-110"
									: "border border-foreground"
							}`}
						>
							{plan.popular && (
								<div className="bg-accent text-foreground text-center py-2 font-medium">
									Most Popular
								</div>
							)}

							<div className="p-8">
								<h3 className="text-xl font-bold text-foreground mb-4">
									{plan.name}
								</h3>
								<p className="text-gray-600 mb-6">{plan.description}</p>

								<div className="mb-6">
									<span className="text-4xl font-bold text-gray-700">
										${isAnnual ? plan.priceAnnual : plan.priceMonthly}
									</span>
									<span className="text-gray-600">
										/{isAnnual ? "year" : "month"}
									</span>
								</div>

								<Link
									href="#contact"
									className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
										plan.popular
											? "bg-accent text-foreground hover:bg-accent-hover"
											: "bg-primary border border-accent text-foreground hover:bg-secondary"
									}`}
								>
									Get Started
								</Link>
							</div>

							<div className="bg-secondaryBg p-8">
								<h4 className="font-medium text-foreground mb-4">
									What&apos;s included:
								</h4>
								<ul className="space-y-4">
									{plan.features.map((feature, idx) => (
										<li key={idx} className="flex items-start">
											<Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
											<span className="text-gray-400">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 max-w-3xl mx-auto bg-secondaryBg rounded-lg p-6">
					<div className="flex items-start">
						<HelpCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
						<div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Need a custom solution?
							</h3>
							<p className="text-gray-400 mb-4">
								We offer tailored solutions for businesses with specific
								requirements. Our team will work closely with you to understand
								your needs and create a custom package.
							</p>
							<Link
								href="#contact"
								className="text-accent font-medium hover:underline"
							>
								Contact us for custom pricing →
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
