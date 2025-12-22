import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 ">
            <h2 className="text-3xl font-bold text-center text-[#435585] mb-6">
                Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-red-600" />
                        <span className="text-lg font-medium">+880 1234 567890</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="w-6 h-6 text-purple-600" />
                        <span className="text-lg font-medium">info@blooddonation.com</span>
                    </div>
                    <p className="text-gray-500 mt-4">
                        We are here to help. Send us a message and we will get back to you
                        as soon as possible.
                    </p>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded-lg p-6 flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-[#435585] text-white hover:bg-[#2f3d6b] w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
