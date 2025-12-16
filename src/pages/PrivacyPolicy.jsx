import React, { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-20">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-28">

                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Privacy Policy
                </h1>
                <p className="text-gray-600 mb-6">
                    Devrana Resort & Hospitality
                </p>

                {/* Intro */}
                <p className="text-gray-700 leading-relaxed mb-6">
                    Devrana Resort respects your individual right to privacy and is committed
                    to protecting your personal information. This Privacy Policy explains how
                    we collect, use, and safeguard your data when you visit our website or use
                    our services.
                </p>

                {/* Section 1 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Information We Collect
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Booking and payment details</li>
                    <li>Website usage data (cookies, IP address, analytics)</li>
                    <li>Service requests and event inquiries</li>
                </ul>

                {/* Section 2 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>To manage bookings and reservations</li>
                    <li>To respond to your inquiries and requests</li>
                    <li>To improve our website and services</li>
                    <li>To send promotional offers (only with your consent)</li>
                </ul>

                {/* Section 3 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Sharing of Information
                </h2>
                <p className="text-gray-700 mb-3">
                    We do not sell or trade your personal information. Your data may be shared
                    only with trusted partners for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Payment processing</li>
                    <li>Event and hospitality services</li>
                    <li>Legal and regulatory compliance</li>
                </ul>

                {/* Section 4 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    4. Cookies & Tracking
                </h2>
                <p className="text-gray-700 mb-6">
                    Cookies and analytics tools help us improve your browsing experience and
                    understand user behavior. You can manage cookie preferences through your
                    browser settings at any time.
                </p>

                {/* Section 5 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    5. Data Security
                </h2>
                <p className="text-gray-700 mb-6">
                    We implement reasonable security measures to protect your personal data
                    from unauthorized access, disclosure, or destruction.
                </p>

                {/* Section 6 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    6. Your Rights
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your personal information</li>
                </ul>

                {/* Section 7 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    7. Updates to This Policy
                </h2>
                <p className="text-gray-700 mb-6">
                    We may update this Privacy Policy from time to time. Any changes will be
                    posted on this page along with the updated date.
                </p>

                {/* Contact */}
                <div className="border-t pt-6 mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 mb-1">
                        📞 Phone: <span className="font-medium">7060301700 | 7455800321</span>
                    </p>
                    <p className="text-gray-700">
                        📧 Email: <span className="font-medium">Devrananh58@gmail.com</span>
                    </p>
                </div>

            </div>
        </div>
    );
}
