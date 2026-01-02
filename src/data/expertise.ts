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
        title: "Frontend Development",
        description: "Building responsive and interactive web interfaces using React, TypeScript, and modern CSS frameworks.",
        icon: IoCodeSlashOutline,
    },
    {
        title: "UI Implementation",
        description: "Translating designs into clean, accessible, and user-friendly interfaces with attention to detail.",
        icon: IoColorPaletteOutline,
    },
    {
        title: "Performance Optimization",
        description: "Improving load times, component efficiency, and overall user experience in web applications.",
        icon: IoSpeedometerOutline,
    },
    {
        title: "API Integration",
        description: "Integrating frontend applications with backend APIs and handling data flow effectively.",
        icon: IoBrushOutline,
    },
];
