export type TabKey = "about" | "resume" | "portfolio" | "contact";

export const tabs: {id: TabKey, label: string}[] = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];