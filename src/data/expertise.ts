import type { IconType } from "react-icons";
import {
    IoBrushOutline,
    IoCodeSlashOutline,
    IoColorPaletteOutline,
    IoSpeedometerOutline
} from "react-icons/io5";

export interface Expertise {
    title: string;
    description: string;
    icon: IconType;
}

export const expertise: Expertise[] = [
    {
        title: "Web design",
        description: "The most modern and high-quality design made at a professional level.",
        icon: IoBrushOutline,
    },
    {
        title: "Web development",
        description: "High-quality development of sites at the professional level.",
        icon: IoCodeSlashOutline,
    },
    {
        title: "UI / UX Optimization",
        description: "Enhancing UX with clean design and smooth interactions.",
        icon: IoColorPaletteOutline,
    },
    {
        title: "Performance & SEO",
        description: "Fast-loading, SEO-optimized websites focused on performance & discoverability.",
        icon: IoSpeedometerOutline,
    },
];