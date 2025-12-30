import { IoBook, IoBriefcaseOutline } from "react-icons/io5";
import { educations } from "../data/educations";
import { experiences } from "../data/experience";
import { skills } from "../data/skills";

export default function Resume() {
    return (
        <section>
            <h1 className="font-Degular text-white text-2xl md:text-4xl text-left select-none w-fit">Resume</h1>

            <p className="h-0.75 md:h-1.5 bg-linear-to-r from-iconColor to-yellow-500 w-7 md:w-10 rounded-full my-2 md:my-4" />

            {/* Education Icon */}
            <div className="flex my-5 md:my-10">
                <p className="bg-cardColor p-3.5 rounded-xl shadow-shadowColor">
                    <IoBook title="Experience" className="text-iconColor h-4.5 w-4.5" />
                </p>

                <div className="pl-5 my-auto">
                    <p className="font-Degular text-white text-2xl text-left select-none">
                        Education
                    </p>
                </div>
            </div>

            {/* Education List */}
            <div className="relative pl-14.25 space-y-7">
                <div className="absolute left-5.75 -top-5.5 md:-top-9.75 bottom-12 md:bottom-7 border border-borderColor" />
                {educations.map((education, index) => (
                    <div key={index} className="relative pl-3 space-y-0.5 md:space-y-1">
                        <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                        <h3 className="font-Lato text-white text-left">
                            <a
                                href={education.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {education.title}
                            </a>
                        </h3>

                        <p className="font-Lato text-iconColor text-sm text-left select-none">
                            {education.year}
                        </p>

                        <p className="font-Lato text-white/70 text-sm md:text-base leading-relaxed text-left select-none">
                            {education.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Practical Experience */}
            <div className="flex my-8">
                <p className="bg-cardColor p-3.5 rounded-xl shadow-shadowColor">
                    <IoBriefcaseOutline title="Experience" className="text-iconColor h-4.5 w-4.5" />
                </p>

                <div className="pl-5 my-auto">
                    <p className="font-Degular text-white text-2xl text-left select-none">
                        Practical Experience
                    </p>
                </div>
            </div>

            {/* Project's Experience */}
            <div className="relative pl-14.25 space-y-7">
                <div className="absolute left-5.75 -top-7.75 bottom-28 md:bottom-7 border border-borderColor" />
                {experiences.map((experience, index) => (
                    <div key={index} className="relative pl-3 space-y-0.5 md:space-y-1">
                        <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                        <h3 className="font-Lato text-white text-left">
                            <a
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {experience.title}
                            </a>
                        </h3>

                        <p className="font-Lato text-white/70 text-sm md:text-base leading-relaxed text-left select-none">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>

            <h1 className="font-Degular text-white text-2xl text-left my-8 select-none w-fit">My Skills</h1>
            {/* List of skills */}
            <div className="border border-borderColor shadow-shadowColor rounded-2xl p-4 space-y-5">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                            <p className="font-Lato text-white select-none">{skill.name}</p>
                            <p className="font-Lato text-white/60 select-none">{skill.percentage}%</p>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-iconColor to-yellow-500 rounded-full"
                                style={{ width: `${skill.percentage}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};