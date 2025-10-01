import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    // State to track if the answer is visible
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            {/* Question Header */}
            <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-indigo-600 focus:outline-none transition duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                {/* Chevron Icon for visual cue */}
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-indigo-600' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            {/* Answer Content - Conditionally rendered */}
            {isOpen && (
                <div className="mt-3 text-gray-600 pr-6 animate-fadeIn">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;

// NOTE: For the smooth transition, you would typically need a custom
// transition group or a separate library for height-based animation in a real
// production app, but 'animate-fadeIn' (a custom Tailwind utility or standard opacity)
// provides a basic visual cue here.