import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section>
            <h1 className="font-Degular text-white text-2xl md:text-4xl text-left select-none w-fit">Projects</h1>

            <p className="h-0.75 md:h-1.5 bg-linear-to-r from-iconColor to-yellow-500 w-7 md:w-10 rounded-full my-2 md:my-4" />

            {/* Projects */}
            <div className="grid md:grid-cols-3 gap-8 mt-5 md:mt-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-borderColor shadow-shadowColor rounded-2xl p-0 overflow-hidden">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full aspect-video overflow-hidden transition-transform duration-300 hover:scale-[1.05]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute w-full h-full object-contain select-none text-white font-Lato"
                                    draggable={false}
                                />
                            </div>
                        </a>

                        <h1 className="font-Degular text-white text-lg select-none pt-2 mx-2.5 line-clamp-1">
                            {project.title}
                        </h1>

                        <p className="font-Lato text-white/70 text-left text-sm md:text-base select-none line-clamp-2 mx-2.5 mb-3">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section >
    )
};