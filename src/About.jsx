import React from "react";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <p className="mb-4">
                    Welcome to our platform! We are passionate about creating a space where gaming enthusiasts can explore, play, and connect.
                </p>
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                    Our mission is to provide a seamless gaming experience with an extensive collection of games and a user-friendly interface.
                </p>
                <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-300">
                    <li>Wide range of high-quality games.</li>
                    <li>Dedicated to privacy and user satisfaction.</li>
                    <li>Accessible and responsive design for all devices.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
