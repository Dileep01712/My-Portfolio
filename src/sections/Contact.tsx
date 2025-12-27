import { IoSend } from "react-icons/io5";

export default function Contact() {
    return (
        <section>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Contact</h1>

            <p className="border-b-3 md:border-b-6 border-iconColor w-7 md:w-9 rounded-full my-2 md:my-5" />

            {/* Map */}
            <div className="border border-borderColor shadow-shadowColor h-60 md:h-95 rounded-2xl my-7 md:my-10"></div>

            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Contact Form</h1>
            <div className="grid md:grid-cols-2 gap-5 pt-6 md:pt-8">
                <input type="text" name="name" id="name" placeholder="Full name" className="text-white/80 border border-borderColor shadow-shadowColor px-5 py-3 md:p-3.5 rounded-2xl select-none col-span-2 md:col-span-1" />

                <input type="email" name="email" id="email" placeholder="Email address" className="text-white/80 border border-borderColor shadow-shadowColor px-5 py-3 md:p-3.5 rounded-2xl select-none col-span-2 md:col-span-1" />

                <textarea name="message" id="message" placeholder="Your message" className="text-white/80 border border-borderColor shadow-shadowColor p-4 rounded-2xl col-span-2 h-32 md:h-36 select-none resize-none" />

                <button className="flex justify-center text-iconColor border border-borderColor shadow-shadowColor w-full md:w-fit p-4 rounded-2xl font-semibold select-none gap-2 cursor-pointer col-span-2 md:ml-auto">
                    <IoSend className="-rotate-50 my-auto" />
                    Send Message
                </button>
            </div>
        </section>
    )
};