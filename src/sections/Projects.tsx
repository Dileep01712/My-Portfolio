import { projects } from "../data/projects";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
    return (
        <section>
            <h1 className="font-Degular text-white text-2xl md:text-4xl text-left select-none w-fit">Projects</h1>
            <p className="h-0.75 md:h-1.5 bg-linear-to-r from-iconColor to-yellow-500 w-7 md:w-10 rounded-full my-2 md:my-4" />

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-5 md:mt-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col border border-borderColor shadow-shadowColor rounded-2xl p-2 overflow-hidden bg-[#1a1a1a]"
                    >
                        <div className="relative w-full aspect-video overflow-hidden border-b border-borderColor">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute w-full h-full object-cover select-none"
                                draggable={false}
                            />
                        </div>

                        <h1 className="font-Degular text-white text-lg select-none mx-2 my-2 line-clamp-1">
                            {project.title}
                        </h1>
                        <p className="font-Lato text-white/70 text-left text-sm md:text-base select-none line-clamp-3 mx-2">
                            {project.description}
                        </p>

                        <div className="flex items-center mx-2 my-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-2 text-sm font-Lato text-white border border-borderColor rounded-2xl hover:bg-borderColor transition-colors w-full justify-center select-none"
                                >
                                    <FiGithub /> Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}