import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef<HTMLFormElement>(null);
    const [messageStatus, setMessageStatus] = useState("");
    const [statusType, setStatusType] = useState<"success" | "error" | "">("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
            .then(() => {
                setMessageStatus("Message sent successfully!");
                setStatusType("success");
                formRef.current?.reset();
                setFormData({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setMessageStatus("");
                    setStatusType("");
                }, 5000);
            })
            .catch((error) => {
                setMessageStatus("Failed to send message");
                setStatusType("error");
                console.log(error);

                setTimeout(() => {
                    setMessageStatus("");
                    setStatusType("");
                }, 5000);
            });
    };

    return (
        <section>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Contact</h1>

            <p className="border-b-3 md:border-b-6 border-iconColor w-7 md:w-9 rounded-full my-2 md:my-5" />

            {/* Map */}
            <div className="border border-borderColor shadow-shadowColor h-60 md:h-95 rounded-2xl my-7 md:my-10">
                <iframe
                    // src="https://www.google.com/maps?q=18.9582,72.83216&z=12&output=embed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.701767127!2d72.71412823032124!3d19.082482211550335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1766949383446!5m2!1sen!2sin"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full rounded-2xl dark:invert dark:hue-rotate-180"
                ></iframe>
            </div>

            <h1 className="text-white text-2xl md:text-3xl font-bold text-left select-none w-fit">Contact Form</h1>

            <form ref={formRef} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-5 pt-6 md:pt-8">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-white/80 border border-borderColor shadow-shadowColor px-5 py-3 md:p-3.5 rounded-2xl select-none col-span-2 md:col-span-1"
                />

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-white/80 border border-borderColor shadow-shadowColor px-5 py-3 md:p-3.5 rounded-2xl select-none col-span-2 md:col-span-1"
                />

                <textarea
                    name="message"
                    id="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="text-white/80 border border-borderColor shadow-shadowColor p-4 rounded-2xl col-span-2 h-32 md:h-36 select-none resize-none"
                />

                <p className={`text-left min-h-6 w-fit
                    ${statusType === "success"
                        ? "text-green-500"
                        : statusType === "error"
                            ? "text-red-500"
                            : ""
                    }`}
                >
                    {messageStatus}
                </p>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`flex justify-center text-iconColor border border-borderColor shadow-shadowColor w-full md:w-fit p-4 rounded-2xl font-semibold select-none gap-2 col-span-2 md:ml-auto ${isFormValid ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                >
                    <IoSend className="-rotate-50 my-auto" />
                    Send Message
                </button>
            </form>
        </section>
    )
};