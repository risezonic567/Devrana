import React from "react";

export default function TermsAndCondition() {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-20">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">

                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Terms & Conditions
                </h1>
                <p className="text-gray-600 mb-6">
                    Devrana Resort, Restaurant & Events
                </p>

                {/* Intro */}
                <p className="text-gray-700 leading-relaxed mb-6">
                    These Terms & Conditions govern the use of the Devrana Resort website and
                    its related services, including hotel, restaurant, and event bookings.
                    By accessing or using our services, you acknowledge that you have read,
                    understood, and agree to be bound by these terms.
                </p>

                {/* Section 1 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Bookings & Reservations
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>All bookings are subject to availability.</li>
                    <li>Confirmation is required via email or phone.</li>
                    <li>Prices and offers may change without prior notice.</li>
                </ul>

                {/* Section 2 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Payments
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Full payment is required at the time of booking unless agreed otherwise.</li>
                    <li>Accepted payment methods include credit/debit cards, UPI, and net banking.</li>
                </ul>

                {/* Section 3 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Cancellations & Refunds
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>All cancellations must comply with our Refund & Cancellation Policy.</li>
                    <li>Refunds will be processed within the timeline specified in the policy.</li>
                </ul>

                {/* Section 4 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    4. Conduct & Responsibilities
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Guests must adhere to resort rules and regulations.</li>
                    <li>Devrana reserves the right to refuse service in cases of misconduct.</li>
                </ul>

                {/* Section 5 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    5. Events & Packages
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Event packages are subject to terms agreed upon at the time of booking.</li>
                    <li>Additional services may incur extra charges.</li>
                </ul>

                {/* Section 6 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    6. Liability
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Devrana is not responsible for loss or damage of personal belongings.</li>
                    <li>
                        We are not liable for circumstances beyond our reasonable control,
                        including natural disasters or government restrictions.
                    </li>
                </ul>

                {/* Section 7 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    7. Intellectual Property
                </h2>
                <p className="text-gray-700 mb-6">
                    All website content, including text, images, and logos, is the intellectual
                    property of Devrana Resort. Unauthorized use or reproduction is strictly
                    prohibited.
                </p>

                {/* Section 8 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    8. Governing Law
                </h2>
                <p className="text-gray-700 mb-6">
                    These terms are governed by the laws of India. Any disputes shall be subject
                    to the jurisdiction of courts in Muzaffarnagar, Uttar Pradesh.
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
