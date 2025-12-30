import { expertise } from "../data/expertise";

export const WhatImDoing = () => {
    return (
        expertise.map((expertise, index) => {
            const Icon = expertise.icon;

            return (
                < div key={index} className="flex bg-miniCardColor p-6 rounded-2xl w-full shadow-shadowColor" >
                    <Icon className="text-iconColor h-16 w-16 my-auto mr-5" />
                    <div className="space-y-0.5">
                        <h1 className="font-Degular text-xl text-white text-left select-none">
                            {expertise.title}
                        </h1>
                        <p className="font-Lato text-white/80 text-left text-sm md:text-base select-none">
                            {expertise.description}
                        </p>
                    </div>
                </ div >
            );
        })
    )
}
