import { WhatImDoing } from "./WhatImDoing";

export default function About() {
    return (
        <div className="w-full md:w-auto">
            <h1 className="font-Degular text-white text-2xl md:text-4xl text-left select-none w-fit">About Me</h1>

            <p className="h-0.75 md:h-1.5 bg-linear-to-r from-iconColor to-yellow-500 w-7 md:w-10 rounded-full my-2 md:my-4" />

            <div className="my-5 md:my-10 space-y-4">
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
                <WhatImDoing />
            </div>
        </div>
    );
}
