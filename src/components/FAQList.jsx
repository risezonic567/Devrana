import React from 'react';
import FAQItem from './FAQItem'; // Assuming FAQItem.js is in the same directory

// Data structure (as defined in step 1)
const faqData = [
    {
        id: 1,
        question: "What are the standard Check-in and Check-out times?",
        answer: "The standard Check-in time is 12:00 PM (Noon), and the standard Check-out time is 12:00 PM (Noon). Early check-in or late check-out is often subject to availability and may incur extra charges.",
    },
    {
        id: 2,
        question: "Does the property allow pets?",
        answer: "yes, pets are generally allowed at Devrana Hotel/ Resort.",},
    {
        id: 3,
        question: "What is the cancellation policy?",
        answer: "The cancellation policy depends on the specific rate booked. Fully refundable room rates are typically available, allowing cancellation up to a few days before check-in. You should always confirm the exact terms of your specific booking.",
    },
    {
        id:4,
        question:"What types of identification are accepted at check-in, and are there any specific guest policies?",
        answer:"Accepted ID proofs usually include Passport, Aadhaar Card, and Driving License. Please note that for some properties under the name 'Devrana Resort,' unmarried couples are often not allowed, and guests with local IDs may not be accepted for reservation.",
        
    },
    {
        id:5,
        question:"Is parking available, and is Wi-Fi provided?",
        answer:"Yes, free self-parking is typically available on-site, and free Wi-Fi is provided in the rooms for gueests.", 
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