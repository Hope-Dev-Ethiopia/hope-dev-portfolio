"use client";
import React, { useState, useEffect } from "react";
import { MdFitScreen } from "react-icons/md";
import { Code, Smartphone, Monitor, Layout, X } from "lucide-react";

const services = [
	{
		title: "Web Development",
		icon: <Code className="h-8 w-8 text-accent" />,
		description:
			"We create responsive, modern websites and web applications using the latest technologies.",
		features: [
			"Frontend development (React, Vue, Angular)",
			"Backend development (Node.js, Python, Ruby)",
			"E-commerce solutions",
			"Progressive Web Apps (PWAs)",
		],
	},
	{
		title: "Mobile App Development",
		icon: <Smartphone className="h-8 w-8 text-accent" />,
		description:
			"Native and cross-platform mobile apps that deliver exceptional UX on iOS and Android.",
		features: [
			"Native iOS development (Swift)",
			"Native Android development (Kotlin)",
			"Cross-platform development (React Native, Flutter)",
			"App Store optimization and deployment",
		],
	},
	{
		title: "Desktop Applications",
		icon: <Monitor className="h-8 w-8 text-accent" />,
		description:
			"Powerful desktop software with robust functionality and intuitive interfaces.",
		features: [
			"Cross-platform desktop apps (Electron)",
			"Windows applications (.NET)",
			"macOS applications (Swift)",
			"Linux applications",
		],
	},
	{
		title: "UX/UI Design",
		icon: <Layout className="h-8 w-8 text-accent" />,
		description:
			"User-centered designs that combine aesthetics with functionality to engage users.",
		features: [
			"User research and personas",
			"Wireframing and prototyping",
			"Visual design and branding",
			"Usability testing and iteration",
		],
	},
];

const Services: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
	const [modalTitle, setModalTitle] = useState("");

	const handleShowModal = (title: string, features: string[]) => {
		setModalTitle(title);
		setActiveFeatures(features);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setActiveFeatures([]);
	};

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [showModal]);

	return (
		<section
			id="services"
			className="py-20 bg-secondary font-[family-name:var(--font-mont)]"
		>
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
							<button
								onClick={() => handleShowModal(service.title, service.features)}
								className="text-accent hover:underline hover:cursor-pointer flex justify-center items-center gap-3 font-medium"
							>
								More Details{" "}
								<MdFitScreen className="text-2xl hover:underline " />
							</button>
						</div>
					))}
				</div>
			</div>

			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
					<div className="fixed inset-0 z-40 bg-transparent bg-opacity-50"></div>
					<div className="bg-foreground z-50 rounded-lg shadow-lg max-w-md w-full p-6 relative">
						<button
							onClick={handleCloseModal}
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
						>
							<X className="w-5 h-5 hover:cursor-pointer" />
						</button>
						<h3 className="text-xl font-semibold mb-4 text-primary">
							{modalTitle}
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
							{activeFeatures.map((feature, idx) => (
								<li key={idx}>{feature}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</section>
	);
};

export default Services;
