import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "./ui/Link";
import Image from "next/image";
import Logo from "@/public/HopeLogo.png";

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const navLinks = [
		{ name: "About", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Team", href: "#team" },
		{ name: "Portfolio", href: "#portfolio" },
		{ name: "Testimonials", href: "#testimonials" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header
			className={`fixed w-full z-50 font-[family-name:var(--font-poppins)] transition-all duration-300 ${
				isScrolled ? "bg-primary shadow-md py-2" : "bg-transparent py-4"
			}`}
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<Image src={Logo} alt="hope_logo" width={35} height={35} />
						<span className="text-2xl font-bold uppercase text-foreground">
							hope
						</span>
					</div>

					{/* desktop Nav*/}
					<nav className="hidden md:flex space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={`font-medium transition-colors duration-200 ${
									isScrolled
										? "text-foreground hover:text-accent-hover"
										: "text-foreground hover:text-accent"
								}`}
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* mobile nav button */}
					<button
						className="md:hidden p-2 text-foreground focus:outline-none"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* mobile menu */}
				{isMenuOpen && (
					<div className="md:hidden pt-4 pb-2 absolute top-full left-0 right-0 bg-primary shadow-md">
						<nav className="flex flex-col space-y-3 px-4">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-foreground hover:text-accent py-2 font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
