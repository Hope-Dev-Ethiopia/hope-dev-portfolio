"use client";
import React, { useState } from "react";
import { projects, ProjectCategory } from "@/src/data/portfolio";
import ProjectCard from "@/src/app/components/ui/ProjectCard";

const Portfolio: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
		"all"
	);

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	const categories: Array<ProjectCategory | "all"> = [
		"all",
		"web",
		"mobile",
		"desktop",
		"design",
	];

	return (
		<section
			id="portfolio"
			className="py-20 bg-secondaryBg font-[family-name:var(--font-mont)]"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<span className="inline-block px-3 py-1 bg-accent text-foreground rounded-full text-sm font-medium mb-4">
						Portfolio
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Our Recent Work
					</h2>
					<p className="max-w-2xl mx-auto text-lg text-foreground">
						Explore our portfolio of successful projects that showcase our
						expertise and creative approach.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveFilter(category)}
							className={`px-5 py-2 rounded-full transition-colors hover:cursor-pointer duration-300 ${
								activeFilter === category
									? "bg-accent text-foreground"
									: "bg-primary text-foreground hover:bg-secondary hover:cursor-pointer"
							}`}
						>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
