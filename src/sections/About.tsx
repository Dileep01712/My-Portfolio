import {
    IoBrushOutline,
    IoCodeSlashOutline,
    IoColorPaletteOutline,
    IoSpeedometerOutline
} from "react-icons/io5";

export default function About() {
    return (
        <section>
            <h1 className="text-white text-3xl font-bold text-left">About Me</h1>

            <p className="border-b-6 border-iconColor w-9 rounded-full my-5" />

            <p className="text-white/80 leading-relaxed text-left">
                I’m a web developer focused on creating modern, responsive, and accessible web applications. I enjoy building clean interfaces that provide a smooth user experience.
            </p>
            <br />
            <p className="text-white/80 leading-relaxed text-left">
                As a beginner, I’m actively learning through hands-on projects and experimentation. I focus on writing readable code and improving performance and usability. I’m motivated to grow and take on new challenges as a developer.
            </p>

            {/* What I'm doing */}
            <h1 className="text-white text-2xl font-bold text-left mt-10">What I'm doing</h1>
            <div className="grid grid-cols-2 my-6 gap-8">
                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoBrushOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="text-left">
                        <h1 className="text-xl font-bold text-white">
                            Web design
                        </h1>
                        <p className="mt-2 text-white/80">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                </div>

                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoCodeSlashOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="text-left">
                        <h1 className="text-xl font-bold text-white">
                            Web development
                        </h1>
                        <p className="mt-2 text-white/80">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>

                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoColorPaletteOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="text-left">
                        <h1 className="text-xl font-bold text-white">
                            UI / UX Optimization
                        </h1>
                        <p className="mt-2 text-white/80">
                            Enhancing UX with clean design and smooth interactions.
                        </p>
                    </div>
                </div>

                <div className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor">
                    <IoSpeedometerOutline className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="text-left">
                        <h1 className="text-xl font-bold text-white">
                            Performance & SEO
                        </h1>
                        <p className="mt-2 text-white/80">
                            Fast-loading, SEO-optimized websites focused on performance & discoverability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
