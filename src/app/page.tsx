"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Services />
			<Team />
			<Testimonials />
			<Footer />
		</div>
	);
}
