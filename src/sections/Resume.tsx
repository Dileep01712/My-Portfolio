import { IoBook, IoBriefcaseOutline } from "react-icons/io5";
import { educations } from "../data/educations";
import { experiences } from "../data/experience";
import { skills } from "../data/skills";

export default function Resume() {
    return (
        <section>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Resume</h1>

            <p className="border-b-3 md:border-b-6 border-iconColor w-7 md:w-9 rounded-full my-2 md:my-5" />

            {/* Education Icon */}
            <div className="flex my-8">
                <p className="bg-cardColor p-3.5 rounded-xl shadow-shadowColor">
                    <IoBook title="Experience" className="text-iconColor h-4.5 w-4.5" />
                </p>

                <div className="pl-5 my-auto">
                    <p className="text-white text-2xl text-left font-bold select-none">
                        Education
                    </p>
                </div>
            </div>

            {/* Education List */}
            <div className="relative pl-14.25 space-y-7">
                <div className="absolute left-5.75 -top-8 bottom-12 md:bottom-6 border border-borderColor" />

                {educations.map((education, index) => (
                    <div key={index} className="relative pl-3">
                        <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                        <h3 className="text-white font-semibold text-left">
                            <a
                                href={education.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {education.title}
                            </a>
                        </h3>
                        <p className="text-iconColor text-sm mt-1 text-left select-none">
                            {education.year}
                        </p>
                        <p className="text-white/70 text-sm mt-1 leading-relaxed text-left select-none">
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
                    <p className="text-white text-2xl text-left font-bold select-none">
                        Practical Experience
                    </p>
                </div>
            </div>

            {/* Project's Experience */}
            <div className="relative pl-14.25 space-y-7">
                <div className="absolute left-5.75 -top-8 bottom-23 md:bottom-6 border border-borderColor" />

                {experiences.map((experience, index) => (
                    <div key={index} className="relative pl-3">
                        <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                        <h3 className="text-white font-semibold text-left">
                            <a
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {experience.title}
                            </a>
                        </h3>

                        <p className="text-white/70 text-sm mt-1 leading-relaxed text-left select-none">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>

            <h1 className="text-white text-2xl font-bold text-left my-8 select-none w-fit">
                My Skills
            </h1>
            {/* List of skills */}
            <div className="border border-borderColor shadow-shadowColor rounded-2xl p-6 space-y-5 h-fit">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                            <p className="text-white font-semibold select-none">{skill.name}</p>
                            <p className="text-white/60 select-none">{skill.percent}%</p>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-iconColor to-yellow-500 rounded-full"
                                style={{ width: `${skill.percent}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};