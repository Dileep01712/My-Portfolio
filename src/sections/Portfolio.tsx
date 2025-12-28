import { projects } from "../data/projects";

export default function Portfolio() {
    return (
        <section>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Portfolio</h1>

            <p className="border-b-3 md:border-b-6 border-iconColor w-7 md:w-9 rounded-full my-2 md:my-5" />

            {/* Projects */}
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-borderColor shadow-shadowColor rounded-2xl p-0 overflow-hidden">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.05]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full min-h-36.5 object-contain select-none text-white"
                                    draggable={false}
                                />
                            </div>
                        </a>

                        <h1 className="text-white text-lg font-bold select-none pt-2">
                            {project.title}
                        </h1>

                        <p className="text-white/70 text-sm text-left select-none line-clamp-2 mx-2.5 mb-3">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section >
    )
};