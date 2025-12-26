import { IoBook} from "react-icons/io5";
import { skills } from "../data/skills";

export default function Resume() {
    return (
        <section>
            <h1 className="text-white text-3xl font-bold text-left">Resume</h1>

            <p className="border-b-6 border-iconColor w-9 rounded-full my-5" />

            {/* Education Icon */}
            <div className="flex my-8">
                <p className="bg-cardColor p-3.5 rounded-xl shadow-shadowColor">
                    <IoBook title="Education" className="text-iconColor h-4.5 w-4.5" />
                </p>

                <div className="pl-5 my-auto">
                    <p className="text-white text-2xl text-left font-bold select-none">
                        Education
                    </p>
                </div>
            </div>

            <div className="relative pl-14.25 space-y-7">
                <div className="absolute left-5.75 -top-8 bottom-6 border border-borderColor" />

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <h3 className="text-white font-semibold text-left">
                        M.L. Dahanukar College of Commerce
                    </h3>
                    <p className="text-iconColor text-sm mt-1 text-left">
                        2022 – 2025
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left">
                        Bachelor of Science in Information Technology under Mumbai University.
                    </p>
                </div>

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <h3 className="text-white font-semibold text-left">
                        N G Junior College of Commerce
                    </h3>
                    <p className="text-iconColor text-sm mt-1 text-left">
                        2020 – 2022
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left">
                        Completed Higher Secondary education with focus on commerce.
                    </p>
                </div>

                <div className="relative pl-3">
                    <span className="absolute -left-10.25 top-2 h-4 w-4 rounded-full bg-iconColor border-4 border-borderColor" />

                    <h3 className="text-white font-semibold text-left">
                        GSB Shri I. J. Patel High School
                    </h3>
                    <p className="text-iconColor text-sm mt-1 text-left">
                        2017 – 2020
                    </p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed text-left">
                        Secondary school education with strong academic foundation.
                    </p>
                </div>

            </div>

            {/* Experience */}
            {/* <div className="flex my-8">
                <p className="bg-cardColor p-3.5 rounded-xl shadow-shadowColor">
                    <IoBriefcaseOutline title="Experience" className="text-iconColor h-4.5 w-4.5" />
                </p>

                <div className="pl-5 my-auto">
                    <p className="text-white text-2xl text-left font-bold select-none">
                        Experience
                    </p>
                </div>
            </div> */}

            <h1 className="text-white text-2xl font-bold text-left my-8">
                My Skills
            </h1>
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