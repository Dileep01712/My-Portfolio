import { useState, type JSX } from "react";
import { tabs, type TabKey } from "../data/tabs";

import About from "../sections/About";
import Resume from "../sections/Resume";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";



const tabComponents: Record<TabKey, JSX.Element> = {
    about: <About />,
    resume: <Resume />,
    portfolio: <Portfolio />,
    contact: <Contact />,
};

export default function MainContent() {
    const [activeTab, setActiveTab] = useState<TabKey>("about");

    return (
        <section className="flex-1 bg-cardColor border border-borderColor rounded-2xl p-4 md:px-7.5 md:py-9">
            <div className="flex fixed md:absolute bottom-0 md:bottom-auto md:top-15 left-0 md:left-auto md:right-[158.5px] bg-secondaryColor border border-borderColor rounded-t-2xl md:rounded-t-none md:rounded-tr-2xl md:rounded-bl-2xl px-7 md:px-12 py-5 gap-8 md:gap-10 w-full md:w-auto z-10">
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