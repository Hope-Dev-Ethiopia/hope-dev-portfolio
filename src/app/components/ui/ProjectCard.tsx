import React, { useState } from "react";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import { Project } from "@/src/data/portfolio";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	React.useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isModalOpen]);

	return (
		<>
			<div className="group bg-primary rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
				<div className="relative overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-300">
						<button
							onClick={openModal}
							className="p-2 bg-white rounded-full text-accent hover:text-accent-hover transition-colors duration-200"
							aria-label="View project details"
						>
							<Maximize2 size={20} className="hover:cursor-pointer" />
						</button>
					</div>
					<div className="absolute top-0 right-0 m-4">
						<span
							className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize
              ${project.category === "web" ? "bg-blue-100 text-blue-600" : ""}
              ${
								project.category === "mobile"
									? "bg-green-100 text-green-600"
									: ""
							}
              ${
								project.category === "desktop"
									? "bg-purple-100 text-purple-600"
									: ""
							}
              ${
								project.category === "design" ? "bg-pink-100 text-pink-600" : ""
							}
            `}
						>
							{project.category}
						</span>
					</div>
				</div>
				<div className="p-6">
					<h3 className="text-xl font-bold text-foreground mb-2">
						{project.title}
					</h3>
					<p className="text-foreground mb-4 line-clamp-2">
						{project.description}
					</p>
					<div className="flex space-x-4">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent hover:text-accent-hover transition-colors duration-200 flex items-center"
							>
								<ExternalLink size={16} className="mr-1" />
								<span>Live Demo</span>
							</a>
						)}
						{project.repoUrl && (
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground hover:text-foreground transition-colors duration-200 flex items-center"
							>
								<Github size={16} className="mr-1" />
								<span>Repository</span>
							</a>
						)}
					</div>
				</div>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent bg-opacity-80">
					<div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
						<div className="p-4 bg-gray-50 flex justify-between items-center border-b">
							<h3 className="text-xl font-bold text-gray-900">
								{project.title}
							</h3>
							<button
								onClick={closeModal}
								className="text-gray-500 hover:text-gray-700 hover:cursor-pointer focus:outline-none"
								aria-label="Close modal"
							>
								<X size={24} />
							</button>
						</div>

						<div className="overflow-y-auto p-6 flex-grow">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-auto mb-6 rounded-lg"
							/>

							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-900 mb-2">
									Project Overview
								</h4>
								<p className="text-gray-600">{project.description}</p>
							</div>

							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-900 mb-2">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{project.features && (
								<div className="mb-6">
									<h4 className="text-lg font-semibold text-gray-900 mb-2">
										Key Features
									</h4>
									<ul className="list-disc pl-5 text-gray-600 space-y-1">
										{project.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
							)}
						</div>

						<div className="p-4 bg-gray-50 border-t flex justify-end space-x-4">
							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 bg-accent text-foreground rounded-lg hover:bg-accent-hover transition-colors duration-200 flex items-center"
								>
									<ExternalLink size={16} className="mr-2" />
									<span>Visit Live Site</span>
								</a>
							)}
							{project.repoUrl && (
								<a
									href={project.repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 border border-gray-300 text-primary rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center"
								>
									<Github size={16} className="mr-2" />
									<span>View Repository</span>
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProjectCard;
