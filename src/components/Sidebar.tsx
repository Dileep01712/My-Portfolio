import {
    IoCalendar,
    IoLocation,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5";

export default function Sidebar() {
    return (
        <aside className="w-68.75 shrink-0">
            <div className="sticky top-6 bg-cardColor border border-borderColor rounded-3xl p-6">

                <img src="/avatar.png" alt="avatar" className="w-37 h-37 mx-auto rounded-4xl bg-avatarColor mt-9 select-none" />

                <h2 className="text-white text-3xl font-semibold text-center mt-6">
                    Dileep Yadav
                </h2>

                <p className="text-xs font-semibold text-white/90 text-center mt-4.5 bg-secondaryColor p-1.5 w-32 mx-auto rounded-lg select-none">
                    Web Developer
                </p>

                <p className="border-b my-8 mx-1 border-borderColor" />

                {/* Personal Info */}
                <div className="h-fit w-52 mx-1">
                    <div className="flex my-8">
                        <p className="p-3.5 rounded-xl shadow-shadowColor">
                            <IoMail title="EMAIL" className="text-iconColor h-4.5 w-4.5" />
                        </p>

                        <div className="pl-5">
                            <p className="text-white/60 text-xs text-left font-semibold select-none mt-1.5">
                                EMAIL
                            </p>
                            <a
                                href="mailto:dy3398214@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white mt-0.5 cursor-pointer"
                            >
                                dy3398214@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex my-6">
                        <p className="p-3.5 rounded-xl shadow-shadowColor">
                            <IoCalendar title="BIRTHDAY" className="text-iconColor h-4.5 w-4.5" />
                        </p>

                        <div className="pl-5">
                            <p className="text-white/60 text-xs text-left font-semibold select-none mt-1.5">
                                BIRTHDAY
                            </p>
                            <p className="text-sm text-white mt-0.5">
                                17<sup>th</sup> August 2004
                            </p>
                        </div>
                    </div>

                    <div className="flex my-6">
                        <p className="p-3.5 rounded-xl my-auto shadow-shadowColor">
                            <IoLocation title="LOCATION" className="text-iconColor h-4.5 w-4.5" />
                        </p>

                        <div className="pl-5">
                            <p className="text-white/60 text-xs text-left font-semibold select-none mt-1.5">
                                LOCATION
                            </p>
                            <p className="text-sm text-white mt-0.5 text-left">
                                Mumbai, Maharashtra, India
                            </p>
                        </div>
                    </div>

                </div>

                <p className="border-b my-8 mx-1 border-borderColor" />

                {/* Other profile's */}
                <div className="h-fit w-52 mx-1">
                    <div className="flex">
                        <p className="p-3.5 rounded-xl shadow-shadowColor">
                            <IoLogoGithub title="Github" className="text-iconColor h-4.5 w-4.5" />
                        </p>

                        <div className="pl-5 my-auto">
                            <a
                                href="https://github.com/Dileep01712"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="text-white text-base font-semibold select-none">
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
                            <a
                                href="https://www.linkedin.com/in/dileep-yadav-9b947727b/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="text-white text-base font-semibold select-none">
                                    LinkedIn
                                </p>
                            </a>
                        </div>
                    </div>                    
                </div>
            </div>
        </aside>
    );
}
