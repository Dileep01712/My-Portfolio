export type Skill = {
    name: string;
    percent: number;
}

export interface Skills {
    name: string;
    percentage: number;
}

export const skills: Skills[] = [
    {
        name: "Web Design",
        percentage: 70
    },
    {
        name: "React",
        percentage: 60
    },
    {
        name: "Tailwind CSS",
        percentage: 70
    },
    {
        name:
            "JavaScript",
        percentage: 60
    },
    {
        name: "Git & GitHub",
        percentage: 50
    },
];