import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!formData.email) {
            toast.error("Email is required!");
            return; // Prevent form submission
        }

        if (!formData.name) {
            toast.error("Name is required!");
            return; // Prevent form submission
        }

        if (!formData.message) {
            toast.error("Message is required!");
            return; // Prevent form submission
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/contact-us`, formData);
            toast.success(response.data.message);
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            toast.error("There was an error submitting your form. Please try again later.");
            console.error("Error submitting form:", error);
        }

        console.log("Form Submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
