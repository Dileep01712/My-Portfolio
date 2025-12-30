import Sanvia from "../assets/sanvia.webp";
import PromptSlide from "../assets/promptslide.webp";
import CloudNotes from "../assets/cloudnotes.webp";
import FinanceDashboard from "../assets/financedashboard.webp";
import MyOnlineMeal from "../assets/myonlinemeal.webp";

export interface Projects {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const projects: Projects[] = [
    {
        title: "Sanvia",
        description: "Sanvia is a modern, responsive music streaming website inspired by JioSaavn. Built with Next.js 14, Tailwind CSS, and ShadCN UI, it uses an unofficial JioSaavn API to deliver a seamless, cross-device music experience.",
        image: Sanvia,
        link: "https://github.com/Dileep01712/Sanvia",
    },
    {
        title: "PromptSlide",
        description: "''PromptSlide: Automated AI-Powered Presentation Generator'' PromptSlide is an innovative tool designed to transform your text prompts into professional PowerPoint presentations effortlessly. Leveraging the power of AI, PromptSlide automates the creation of slides, making it an invaluable asset for educators, business professionals, and anyone need.",
        image: PromptSlide,
        link: "https://github.com/Dileep01712/PromptSlide",
    },
    {
        title: "CloudNotes",
        description: "CloudNotes is a react web-app for effortless note management. Create, update, and delete notes seamlessly. User-friendly interface for efficient note-taking, perfect for organizing thoughts and tasks. Similar to Google Notes.",
        image: CloudNotes,
        link: "https://github.com/Dileep01712/CloudNotes",
    },
    {
        title: "Finance Dashboard",
        description: "The Finance-Dashboard project provides real- time insights into financial data, offering a comprehensive view of key metrics and trends.It features interactive visualizations and customizable reports for stakeholders to monitor expenses, revenue, and financial health efficiently.Additionally, it includes a predictive analytics module that forecast",
        image: FinanceDashboard,
        link: "https://github.com/Dileep01712/Finance-Dashboard",
    },
    {
        title: "My Online Meal",
        description: "Welcome to MyOnlineMeal, your ultimate destination for hassle-free online food ordering! Explore a diverse menu curated with culinary expertise, offering a delightful array of dishes crafted by our skilled chefs.",
        image: MyOnlineMeal,
        link: "https://github.com/Dileep01712/My-Online-Meal",
    }
];