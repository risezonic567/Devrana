import React from 'react';
import FAQItem from './FAQItem'; // Assuming FAQItem.js is in the same directory

// Data structure (as defined in step 1)
const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, primarily used for single-page applications.",
    },
    {
        id: 2,
        question: "How do you use Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework. You apply styles by adding predefined classes directly to your HTML/JSX elements.",
    },
    {
        id: 3,
        question: "What is a React Hook?",
        answer: "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. The most common are useState and useEffect.",
    },
];

const FAQList = () => {
    return (
        <section className="p-8 bg-gray-50 ">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-serif text-center text-gray-900 mb-10">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Container */}
                <div className="bg-white shadow-xl rounded-lg p-6 divide-y divide-gray-100">
                    {faqData.map((item) => (
                        <FAQItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQList;

// To use this, you would import and render <FAQList /> in your main App.js or page component.