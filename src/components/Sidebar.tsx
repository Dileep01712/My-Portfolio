import { useEffect, useState } from "react";
import {
    IoArrowDown,
    IoArrowUp,
    IoCalendar,
    IoLocation,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 786);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleToggle = () => {
        if (isSmallScreen) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <aside className="w-full md:w-68.75 shrink-0 mb-4 md:mb-0">
            <div className="sticky top-6 bg-cardColor border border-borderColor rounded-3xl p-4 md:p-6">

                <div className="flex md:block items-start">
                    <button
                        onClick={handleToggle}
                        className="lg:hidden absolute top-0 right-0 bg-linear-to-br from-iconColor/40 via-avatarColor to-cardColor p-3 rounded-tr-3xl rounded-bl-3xl cursor-pointer">
                        {isOpen ? (
                            <IoArrowUp className="text-iconColor" />
                        ) : (
                            <IoArrowDown className="text-iconColor" />
                        )}
                    </button>

                    <img src="/avatar.png" alt="avatar" className="w-20 h-20 md:w-37 md:h-37 mx-0 md:mx-auto rounded-3xl md:rounded-4xl bg-avatarColor md:mt-9 select-none" />

                    <div className="grid grid-rows-2 my-auto gap-2 pl-5">
                        <h2 className="font-Degular text-white text-2xl md:text-3xl font-semibold text-center md:mt-6 w-fit md:mx-auto">
                            Dileep Yadav
                        </h2>

                        <p className="font-Lato text-xs text-white/90 text-center md:mt-4.5 bg-secondaryColor p-1.5 w-26 md:w-32 md:mx-auto rounded-lg select-none h-fit">
                            Web Developer
                        </p>
                    </div>
                </div>


                {isSmallScreen && (
                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-500" : "max-h-0"}`}>
                        {/* Divider */}
                        <p className="border-b my-8 mx-1 border-borderColor transition-all duration-500" />

                        {/* Personal Info */}
                        <div className="h-fit w-54.5 mx-1 flex flex-col gap-6">
                            <div className="flex transition-opacity duration-500" style={{ opacity: isOpen ? 1 : 0 }}>
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoMail title="EMAIL" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <p className="font-Degular text-white/60 text-xs text-left select-none">
                                        EMAIL
                                    </p>
                                    <a
                                        href="mailto:dy3398214@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-Lato text-sm text-white"
                                    >
                                        dy3398214@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex transition-opacity duration-500" style={{ opacity: isOpen ? 1 : 0 }}>
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoCalendar title="BIRTHDAY" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <p className="font-Degular text-white/60 text-xs text-left select-none">
                                        BIRTHDAY
                                    </p>
                                    <p className="font-Lato text-sm text-white mt-0.5 select-none">
                                        17<sup>th</sup> August 2004
                                    </p>
                                </div>
                            </div>

                            <div className="flex transition-opacity duration-500" style={{ opacity: isOpen ? 1 : 0 }}>
                                <p className="p-3.5 rounded-xl my-auto shadow-shadowColor">
                                    <IoLocation title="LOCATION" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <p className="font-Degular text-white/60 text-xs text-left select-none">
                                        LOCATION
                                    </p>
                                    <p className="font-Lato text-sm text-white text-left mt-0.5">
                                        Mumbai, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <p className="border-b my-8 mx-1 border-borderColor transition-all duration-500" />

                        {/* Other Profiles */}
                        <div className="h-fit w-54.5 mx-1 flex flex-col gap-6">
                            <div className="flex transition-opacity duration-500" style={{ opacity: isOpen ? 1 : 0 }}>
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoLogoGithub title="Github" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <a
                                        href="https://github.com/Dileep01712"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className="font-Degular text-white select-none">
                                            GitHub
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="flex transition-opacity duration-500" style={{ opacity: isOpen ? 1 : 0 }}>
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoLogoLinkedin title="Linkedin" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <a
                                        href="https://www.linkedin.com/in/dileep-yadav-9b947727b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className="font-Degular text-white select-none">
                                            LinkedIn
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!isSmallScreen && (
                    <>
                        <p className="border-b my-8 mx-1 border-borderColor" />

                        {/* Personal Info */}
                        <div className="h-fit w-54.5 mx-1">
                            <div className="flex my-8">
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoMail title="EMAIL" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <p className="font-Degular text-white/60 text-[13px] text-left select-none">
                                        EMAIL
                                    </p>
                                    <a
                                        href="mailto:dy3398214@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-Lato text-sm text-white"
                                    >
                                        dy3398214@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex my-6">
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoCalendar title="BIRTHDAY" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <p className="font-Degular text-white/60 text-[12px] text-left select-none">
                                        BIRTHDAY
                                    </p>
                                    <p className="font-Lato text-sm text-white mt-0.5 select-none">
                                        17<sup>th</sup> August 2004
                                    </p>
                                </div>
                            </div>
                            <div className="flex my-6">
                                <p className="p-3.5 rounded-xl my-auto shadow-shadowColor">
                                    <IoLocation title="LOCATION" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <p className="font-Degular text-white/60 text-xs text-left select-none">
                                        LOCATION
                                    </p>
                                    <p className="font-Lato text-sm text-white mt-0.5 text-left">
                                        Mumbai, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="border-b my-8 mx-1 border-borderColor" />

                        {/* Other profile's */}
                        <div className="h-fit w-54.5 mx-1">
                            <div className="flex">
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoLogoGithub title="Github" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <a href="https://github.com/Dileep01712" target="_blank" rel="noopener noreferrer" >
                                        <p className="font-Degular text-white select-none">
                                            GitHub
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="flex mt-8 mb-3">
                                <p className="p-3.5 rounded-xl shadow-shadowColor">
                                    <IoLogoLinkedin title="Linkedin" className="text-iconColor h-4.5 w-4.5" />
                                </p>
                                <div className="pl-5 my-auto">
                                    <a href="https://www.linkedin.com/in/dileep-yadav-9b947727b/" target="_blank" rel="noopener noreferrer" >
                                        <p className="font-Degular text-white select-none">
                                            LinkedIn
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}
