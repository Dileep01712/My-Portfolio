import type { IconType } from "react-icons";
import {
    IoLocation,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5";

export interface DetailItem {
    name: string;
    value?: string;
    link?: string;
    icon: IconType;
    type?: "email" | "link" | "text";
}

export const personalDetails: DetailItem[] = [
    {
        name: "EMAIL",
        value: "dy3398214@gmail.com",
        icon: IoMail,
        type: "email",
    },
    {
        name: "LOCATION",
        value: "Vile Parle (W), Mumbai, Maharashtra, India",
        icon: IoLocation,
        type: "text",
    },
];

export const profileLinks: DetailItem[] = [
    {
        name: "GitHub",
        link: "https://github.com/Dileep01712",
        icon: IoLogoGithub,
        type: "link",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dileep-yadav-9b947727b",
        icon: IoLogoLinkedin,
        type: "link",
    },
];
