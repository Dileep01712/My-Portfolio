import { useState, type JSX } from "react";
import { tabs, type TabKey } from "../data/tabs";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const tabComponents: Record<TabKey, JSX.Element> = {
    about: <About />,
    resume: <Resume />,
    projects: <Projects />,
    contact: <Contact />,
};

export default function MainContent() {
    const [activeTab, setActiveTab] = useState<TabKey>("about");

    return (
        <section className="relative flex-1 bg-cardColor border border-borderColor rounded-2xl p-4 md:px-7.5 md:py-9">
            <div
                className="fixed bottom-0 left-1/2 -translate-x-1/2 lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:translate-x-0 flex justify-around bg-secondaryColor border border-borderColor rounded-t-2xl lg:rounded-t-none lg:rounded-tr-2xl lg:rounded-bl-2xl gap-8 md:gap-10 px-7 lg:px-12 py-5 w-full lg:w-auto z-10"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`font-Degular transition cursor-pointer select-none ${activeTab === tab.id ? "text-iconColor" : "text-white/80 hover:text-white/65"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div>
                {tabComponents[activeTab]}
            </div>
        </section>
    );
}