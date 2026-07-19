import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef<HTMLFormElement>(null);
    const [messageStatus, setMessageStatus] = useState("");
    const [statusType, setStatusType] = useState<"success" | "error" | "">("");
    const [errors, setErrors] = useState({
        name: false,
        email: false,
    });
    const [isSending, setIsSending] = useState(false);

    const validateName = (name: string) => {
        const nameRegex = /^[A-Za-z ]{3,}$/;

        return nameRegex.test(name.trim());
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailRegex.test(email.trim());
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "name") {
            setErrors((prev) => ({
                ...prev,
                name: value === "" ? false : !validateName(value),
            }));
        }

        if (name === "email") {
            setErrors((prev) => ({
                ...prev,
                email: value === "" ? false : !validateEmail(value),
            }));
        }
    };

    const isFormValid =
        validateName(formData.name) &&
        validateEmail(formData.email) &&
        formData.message.trim().length > 0;

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;
        if (!isFormValid) return;

        setIsSending(true);

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
            })
            .catch((error) => {
                setMessageStatus("Failed to send message.");
                setStatusType("error");
                console.log(error);
            })
            .finally(() => {
                setIsSending(false);

                setTimeout(() => {
                    setMessageStatus("");
                    setStatusType("");
                }, 5000);
            });
    };

    return (
        <section>
            <h1 className="font-Degular text-white text-2xl md:text-4xl text-left select-none w-fit">Contact</h1>
            <p className="h-0.75 md:h-1.5 bg-linear-to-r from-iconColor to-yellow-500 w-7 md:w-10 rounded-full my-2 md:my-4" />

            <div className="mt-6 mb-6 md:mb-28">
                <h2 className="font-Degular text-white text-xl md:text-2xl text-left select-none mb-2">Let's Connect</h2>
                <p className="font-Lato text-white/70 text-sm md:text-base text-left">
                    I am currently open for full-time Frontend Developer roles. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message below. I'll get back to you as soon as possible!
                </p>
            </div>

            <h1 className="font-Degular text-white text-2xl md:text-3xl text-left select-none w-fit">Send a Message</h1>

            <form ref={formRef} onSubmit={sendEmail} className="grid md:grid-cols-2 pt-4 md:pt-6">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`font-Lato text-white/80 text-sm md:text-base border shadow-shadowColor px-5 py-3 md:p-3.5 rounded-2xl select-none col-span-2 md:col-span-1 mb-5 md:mr-5 bg-transparent ${errors.name ? "border-red-500" : "border-borderColor"}`}
                />

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`font-Lato text-white/80 text-sm md:text-base border shadow-shadowColor px-5 py-3 md:p-3.5 rounded-2xl select-none col-span-2 md:col-span-1 mb-5 bg-transparent ${errors.email ? "border-red-500" : "border-borderColor"}`}
                />

                <textarea
                    name="message"
                    id="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="font-Lato text-white/80 text-sm md:text-base border border-borderColor shadow-shadowColor p-4 rounded-2xl col-span-2 h-32 md:h-36 select-none resize-none bg-transparent"
                />

                <p className={`font-Lato text-left min-h-6 w-fit my-3 text-sm md:text-base
                    ${statusType === "success"
                        ? "text-green-500"
                        : statusType === "error"
                            ? "text-red-500"
                            : "text-white"
                    }`}
                >
                    {messageStatus}
                </p>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`flex justify-center text-iconColor font-Degular border border-borderColor shadow-shadowColor w-full md:w-fit px-8 py-3 rounded-2xl select-none gap-2 col-span-2 md:ml-auto transition-colors hover:bg-borderColor ${isFormValid ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                >
                    {isSending ? (
                        <>
                            <AiOutlineLoading3Quarters className="animate-spin my-auto" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <IoSend className="-rotate-12 my-auto" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </section>
    );
};