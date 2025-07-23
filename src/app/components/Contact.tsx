"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

interface FormState {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormState>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			setTimeout(() => setSubmitStatus("idle"), 5000);
		}, 1500);
	};

	return (
		<section
			id="contact"
			className="py-20 bg-secondaryBg font-[family-name:var(--font-mont)]"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<span className="inline-block px-3 py-1 bg-primary text-accent rounded-full text-sm font-medium mb-4">
						Contact Us
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Get In Touch
					</h2>
					<p className="max-w-2xl mx-auto text-lg text-gray-400">
						Have a project in mind or want to learn more about our services?
						We&apos;d love to hear from you.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="bg-primary rounded-lg shadow-lg p-8">
						<h3 className="text-2xl font-bold text-foreground mb-6">
							Send Us a Message
						</h3>

						{submitStatus === "success" && (
							<div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
								Thank you for your message! We&apos;ll get back to you as soon
								as possible.
							</div>
						)}

						{submitStatus === "error" && (
							<div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
								There was an error sending your message. Please try again later.
							</div>
						)}

						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-gray-300 font-medium mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
										errors.name ? "border-red-500" : "border-gray-600"
									}`}
									placeholder="John Doe"
								/>
								{errors.name && (
									<p className="mt-1 text-red-500 text-sm">{errors.name}</p>
								)}
							</div>

							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-gray-300 font-medium mb-2"
								>
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
										errors.email ? "border-red-500" : "border-gray-600"
									}`}
									placeholder="john@example.com"
								/>
								{errors.email && (
									<p className="mt-1 text-red-500 text-sm">{errors.email}</p>
								)}
							</div>

							<div className="mb-4">
								<label
									htmlFor="subject"
									className="block text-gray-300 font-medium mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
										errors.subject ? "border-red-500" : "border-gray-600"
									}`}
									placeholder="Project Inquiry"
								/>
								{errors.subject && (
									<p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
								)}
							</div>

							<div className="mb-6">
								<label
									htmlFor="message"
									className="block text-gray-300 font-medium mb-2"
								>
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={5}
									className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
										errors.message ? "border-red-500" : "border-gray-600"
									}`}
									placeholder="Tell us about your project..."
								/>
								{errors.message && (
									<p className="mt-1 text-red-500 text-sm">{errors.message}</p>
								)}
							</div>

							<button
								type="submit"
								className="w-full bg-accent text-white py-3 px-4 rounded-lg hover:bg-accent-hover hover:cursor-pointer transition-colors duration-300 flex items-center justify-center font-medium"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<span className="flex items-center">
										<svg
											className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</span>
								) : (
									<span className="flex items-center">
										<Send className="mr-2 h-5 w-5" />
										Send Message
									</span>
								)}
							</button>
						</form>
					</div>

					<div>
						<div className="bg-primary rounded-lg shadow-lg p-8 mb-8">
							<h3 className="text-2xl font-bold text-gray-300 mb-6">
								Contact Information
							</h3>

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="bg-secondary p-3 rounded-full mr-4">
										<Mail className="h-6 w-6 text-accent" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-gray-300 mb-1">
											Email Us
										</h4>
										<a
											href="mailto:hopedevethiopia@gmail.com"
											className="text-accent hover:underline"
										>
											hopedevethiopia@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-secondary p-3 rounded-full mr-4">
										<Phone className="h-6 w-6 text-accent" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-gray-300 mb-1">
											Call Us
										</h4>
										<a
											href="tel:+251990978776"
											className="text-accent hover:underline"
										>
											+251990978776
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-secondary p-3 rounded-full mr-4">
										<MapPin className="h-6 w-6 text-accent" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-gray-300 mb-1">
											Visit Us
										</h4>
										<p className="text-gray-400">
											Bole Megenagna,
											<br />
											Addis Ababa
											<br />
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-primary rounded-lg shadow-lg p-8">
							<h3 className="text-xl font-bold text-gray-400 mb-4">
								Working Hours
							</h3>
							<ul className="space-y-2">
								<li className="flex justify-between">
									<span className="text-gray-600">Monday - Friday:</span>
									<span className="font-medium">9:00 AM - 6:00 PM</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600">Saturday:</span>
									<span className="font-medium">By appointment</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600">Sunday:</span>
									<span className="font-medium">Closed</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
