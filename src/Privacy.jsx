import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
                <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                <ul className="list-disc list-inside mb-4 text-gray-300">
                    <li>Personal information provided by you, such as name, email, etc.</li>
                    <li>Usage data and analytics collected automatically.</li>
                </ul>
                <h2 className="text-xl font-semibold mb-4">How We Use Information</h2>
                <p className="mb-4">
                    We use your information to provide and improve our services, communicate with you, and ensure platform security.
                </p>
                <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, update, or delete your personal information. Contact us for any concerns.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
