import { useState } from "react";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import Avatar from "../assets/avatar.webp";
import { Details } from "../sections/Details";
import { personalDetails, profileLinks } from "../data/details";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <aside className="w-full lg:w-71 shrink-0 mb-4 lg:mb-0">
            <div className="sticky top-6 bg-cardColor border border-borderColor rounded-3xl p-4 md:p-6">

                <div className="flex lg:block items-start">
                    <button
                        onClick={handleToggle}
                        className="lg:hidden absolute top-0 right-0 bg-linear-to-br from-iconColor/40 via-avatarColor to-cardColor p-3 rounded-tr-3xl rounded-bl-3xl cursor-pointer">

                        <span className="md:hidden">
                            {isOpen ? (
                                <IoArrowUp className="text-iconColor" />
                            ) : (
                                <IoArrowDown className="text-iconColor" />
                            )}
                        </span>

                        <span className="hidden md:block text-iconColor font-Degular select-none">
                            Show Details
                        </span>
                    </button>

                    <img src={Avatar} alt="Your picture" className="w-20 h-20 md:w-37 md:h-37 mx-0 lg:mx-auto rounded-3xl lg:rounded-4xl bg-avatarColor lg:mt-9 font-Lato text-white select-none" />

                    <div className="grid grid-rows-2 my-auto gap-2 pl-5">
                        <h2 className="font-Degular text-white text-2xl md:text-3xl font-semibold text-center lg:mt-6 w-fit md:mx-auto">
                            Dileep Yadav
                        </h2>

                        <p className="font-Lato text-xs text-white/90 text-center md:my-1.5 bg-secondaryColor px-2.5 py-1.5 w-fit h-fit lg:mx-auto rounded-lg select-none">
                            Frontend Developer
                        </p>
                    </div>
                </div>

                <div className={`overflow-hidden origin-top transition-all duration-500 ease-in-out lg:max-h-full lg:opacity-100 lg:scale-y-100 lg:pointer-events-auto ${isOpen ? "opacity-100 scale-y-100 max-h-250" : "opacity-0 scale-y-0 max-h-0 pointer-events-none"}`}>
                    {/* Divider */}
                    <p className="border-b my-8 mx-1 border-borderColor transition-all duration-500" />

                    {/* Personal Info */}
                    <Details items={personalDetails} />

                    {/* Divider */}
                    <p className="border-b my-8 mx-1 border-borderColor transition-all duration-500" />

                    {/* Other Profiles */}
                    <Details items={profileLinks} />
                </div>
            </div>
        </aside>
    );
}
