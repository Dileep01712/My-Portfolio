import type { JSX } from "react";

export default function Portfolio(): JSX.Element {
    return (
        <section>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Portfolio</h1>

            <p className="border-b-3 md:border-b-6 border-iconColor w-7 md:w-9 rounded-full my-2 md:my-5" />

            {/* Projects */}
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="border border-borderColor shadow-shadowColor rounded-2xl pb-2 overflow-hidden">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icon.png" alt="Project-Image" className="w-full object-contain mx-auto rounded-xl select-none transition duration-300 transform-gpu origin-center hover:scale-105" />
                    </a>
                    <h1 className="text-white text-lg font-bold select-none pt-2">Sanvia</h1>
                </div>

                <div className="border border-borderColor shadow-shadowColor rounded-2xl pb-2 overflow-hidden">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icon.png" alt="Project-Image" className="w-full object-contain mx-auto rounded-xl select-none transition duration-300 transform-gpu origin-center hover:scale-105" />
                    </a>
                    <h1 className="text-white text-lg font-bold select-none pt-2">Sanvia</h1>
                </div>

                <div className="border border-borderColor shadow-shadowColor rounded-2xl pb-2 overflow-hidden">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icon.png" alt="Project-Image" className="w-full object-contain mx-auto rounded-xl select-none transition duration-300 transform-gpu origin-center hover:scale-105" />
                    </a>
                    <h1 className="text-white text-lg font-bold select-none pt-2">Sanvia</h1>
                </div>

                <div className="border border-borderColor shadow-shadowColor rounded-2xl pb-2 overflow-hidden">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icon.png" alt="Project-Image" className="w-full object-contain mx-auto rounded-xl select-none transition duration-300 transform-gpu origin-center hover:scale-105" />
                    </a>
                    <h1 className="text-white text-lg font-bold select-none pt-2">Sanvia</h1>
                </div>

                <div className="border border-borderColor shadow-shadowColor rounded-2xl pb-2 overflow-hidden">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icon.png" alt="Project-Image" className="w-full object-contain mx-auto rounded-xl select-none transition duration-300 transform-gpu origin-center hover:scale-105" />
                    </a>
                    <h1 className="text-white text-lg font-bold select-none pt-2">Sanvia</h1>
                </div>
            </div>
        </section >
    )
};