export type TabKey = "about" | "resume" | "projects" | "contact";

export interface Tabs {
    id: TabKey;
    label: string;
}

export const tabs: Tabs[] = [
    {
        id: "about",
        label: "About"
    },
    {
        id: "resume",
        label: "Resume"
    },
    {
        id: "projects",
        label: "Projects"
    },
    {
        id: "contact",
        label: "Contact"
    },
];