import type { DetailItem } from "../data/details";

interface DetailsProps {
    items: DetailItem[];
}

export const Details = ({ items }: DetailsProps) => {
    return (
        <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:flex gap-6">
            {items.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div key={index} className="flex transition-opacity duration-500" >
                        <span className="p-3.5 rounded-xl shadow-shadowColor h-fit my-auto">
                            <Icon className="text-iconColor h-4.5 w-4.5" />
                        </span>

                        <div className="pl-5 my-auto">
                            {item.type !== "link" && item.name && (
                                <p className="font-Degular text-white/60 text-xs text-left select-none">
                                    {item.name}
                                </p>
                            )}

                            {item.type === "email" && item.value && (
                                <a
                                    href={`mailto:${item.value}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-Lato text-white text-left select-none"
                                >
                                    {item.value}
                                </a>
                            )}

                            {item.type === "text" && item.value && (
                                <p className="font-Lato text-sm text-white text-left">
                                    {item.value}
                                </p>
                            )}

                            {item.type === "link" && item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-Degular text-white text-left cursor-pointer"
                                >
                                    {item.name}
                                </a>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
