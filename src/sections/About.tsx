import {
    IoBrushOutline,
    IoCodeSlashOutline,
    IoColorPaletteOutline,
    IoSpeedometerOutline
} from "react-icons/io5";

export default function About() {
    return (
        <div className="w-full md:w-auto">
            <h1 className="font-Degular text-white text-2xl md:text-3xl text-left select-none w-fit">About Me</h1>

            <p className="border-b-3 md:border-b-6 border-iconColor w-7 md:w-9 rounded-full my-2 md:my-5" />

            <div className="space-y-4">
                <p className="font-Lato md:leading-relaxed text-white/80 text-left select-none">
                    I’m a web developer focused on creating modern, responsive, and accessible web applications. I enjoy building clean interfaces that provide a smooth user experience.
                </p>

                <p className="font-Lato md:leading-relaxed text-white/80 text-left select-none">
                    As a beginner, I’m actively learning through hands-on projects and experimentation. I focus on writing readable code and improving performance and usability. I’m motivated to grow and take on new challenges as a developer.
                </p>
            </div>

            {/* What I'm doing */}
            <h1 className="font-Degular text-white text-2xl text-left mt-10 select-none w-fit">What I'm doing</h1>
            <div className="grid md:grid-cols-2 mt-6 gap-5 md:gap-8">
                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoBrushOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="space-y-0.5">
                        <h1 className="font-Degular text-xl text-white text-left select-none">
                            Web design
                        </h1>
                        <p className="font-Lato text-white/80 text-left select-none">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                </div>

                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoCodeSlashOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="space-y-0.5">
                        <h1 className="font-Degular text-xl text-white text-left select-none">
                            Web development
                        </h1>
                        <p className="font-Lato text-white/80 text-left select-none">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>

                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoColorPaletteOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="space-y-0.5">
                        <h1 className="font-Degular text-xl text-white text-left select-none">
                            UI / UX Optimization
                        </h1>
                        <p className="font-Lato  text-white/80 text-left select-none">
                            Enhancing UX with clean design and smooth interactions.
                        </p>
                    </div>
                </div>

                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoSpeedometerOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="space-y-0.5">
                        <h1 className="font-Degular text-xl text-white text-left select-none">
                            Performance & SEO
                        </h1>
                        <p className="font-Lato text-white/80 text-left select-none">
                            Fast-loading, SEO-optimized websites focused on performance & discoverability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
