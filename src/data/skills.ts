export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
        category: "Backend & DB",
        skills: ["Node.js", "Express", "FastAPI", "MongoDB"],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "VS Code"],
    },
];