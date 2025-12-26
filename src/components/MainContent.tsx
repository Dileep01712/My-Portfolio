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
        <section className="flex-1 bg-cardColor border border-borderColor rounded-2xl px-7.5 py-9">
            <div className="flex absolute top-15 right-[158.5px] bg-secondaryColor border border-borderColor rounded-tr-2xl rounded-bl-2xl px-12 py-5 gap-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`font-semibold transition cursor-pointer ${activeTab === tab.id ? "text-iconColor" : "text-white/80 hover:text-white/65"}`}
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