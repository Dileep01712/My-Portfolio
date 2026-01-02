import { WhatImDoing } from "./WhatImDoing";

export default function About() {
    return (
        <div className="w-full md:w-auto">
            <h1 className="font-Degular text-white text-2xl md:text-4xl text-left select-none w-fit">About Me</h1>

            <p className="h-0.75 md:h-1.5 bg-linear-to-r from-iconColor to-yellow-500 w-7 md:w-10 rounded-full my-2 md:my-4" />

            <div className="my-5 md:my-10 space-y-4">
                <p className="font-Lato md:leading-relaxed text-white/80 text-left select-none">
                    I’m a frontend-focused web developer who enjoys building modern, responsive, and user-friendly web applications. I work mainly with React, TypeScript, and Tailwind CSS to create clean interfaces with smooth user experiences.
                </p>

                <p className="font-Lato md:leading-relaxed text-white/80 text-left select-none">
                    I learn by building real projects, experimenting with features, and improving existing code. My focus is on writing clean, readable code, optimizing performance, and understanding how frontend connects with backend APIs. I’m continuously improving my skills and aiming to grow into a strong full-stack developer.
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
