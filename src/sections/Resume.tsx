import { IoBook, IoBriefcaseOutline } from "react-icons/io5";
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

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="text-white font-semibold text-left">
                            M.L. Dahanukar College of Commerce
                        </h3>
                    </a>
                    <p className="text-iconColor text-sm mt-1 text-left select-none">
                        2022 – 2025
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left select-none">
                        Bachelor of Science in Information Technology under Mumbai University.
                    </p>
                </div>

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="text-white font-semibold text-left">
                            N G Junior College of Commerce
                        </h3>
                    </a>
                    <p className="text-iconColor text-sm mt-1 text-left select-none">
                        2020 – 2022
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left select-none">
                        Completed Higher Secondary education with focus on commerce.
                    </p>
                </div>

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="text-white font-semibold text-left">
                            GSB Shri I. J. Patel High School
                        </h3>
                    </a>
                    <p className="text-iconColor text-sm mt-1 text-left select-none">
                        2017 – 2020
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left select-none">
                        Secondary school education with strong academic foundation.
                    </p>
                </div>

            </div>

            {/* Experience */}
            <div className="flex my-8">
                <p className="bg-cardColor p-3.5 rounded-xl shadow-shadowColor">
                    <IoBriefcaseOutline title="Experience" className="text-iconColor h-4.5 w-4.5" />
                </p>

                <div className="pl-5 my-auto">
                    <p className="text-white text-2xl text-left font-bold select-none">
                        Experience
                    </p>
                </div>
            </div>
            {/* <div className="relative pl-14.25 space-y-7">
                <div className="absolute left-5.75 -top-8 bottom-6 border border-borderColor" />

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="text-white font-semibold text-left">
                            M.L. Dahanukar College of Commerce
                        </h3>
                    </a>
                    <p className="text-iconColor text-sm mt-1 text-left select-none">
                        2022 – 2025
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left select-none">
                        Bachelor of Science in Information Technology under Mumbai University.
                    </p>
                </div>
            </div> */}

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