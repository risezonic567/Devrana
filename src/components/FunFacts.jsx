import React, { useEffect, useState } from "react";

const countersData = [
    { id: 1, count: 150, suffix: "+", title: "Booking Month" },
    { id: 2, count: 2000, suffix: "k+", title: "Visitors Daily" },
    { id: 3, count: 95, suffix: "%", title: "Positive Feedback" },
    { id: 4, count: 30, suffix: "+", title: "Award Winning" },
];

export default function FunFacts() {
    const [counts, setCounts] = useState(countersData.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prev) =>
                prev.map((val, i) =>
                    val < countersData[i].count ? val + Math.ceil(countersData[i].count / 100) : val
                )
            );
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-gray-100 text-center">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {countersData.map((counter, i) => (
                    <div key={counter.id} className="flex flex-col items-center">
                        <div className="flex items-baseline justify-center space-x-1 mb-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{counts[i]}</h2>
                            <span className="text-3xl md:text-4xl font-semibold text-red-500">{counter.suffix}</span>
                        </div>
                        <p className="text-gray-700 font-medium">{counter.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
