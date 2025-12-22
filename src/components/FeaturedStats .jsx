import React from "react";
import { Users, CreditCard, Droplet } from "lucide-react";

const FeaturedStats = () => {
    const cards = [
        {
            title: "Total Users (Donors)",
            value: 1200,
            icon: <Users size={48} className="text-white" />,
            bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
        },
        {
            title: "Total Funding",
            value: "$25,000",
            icon: <CreditCard size={48} className="text-white" />,
            bg: "bg-gradient-to-r from-green-500 to-green-700",
        },
        {
            title: "Total Blood Donation Requests",
            value: 450,
            icon: <Droplet size={48} className="text-white" />,
            bg: "bg-gradient-to-r from-pink-500 to-pink-700",
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center gap-4 p-12 rounded-2xl shadow-2xl ${card.bg}`}
                    >
                        <div className="p-6 bg-white rounded-full">{card.icon}</div>
                        <p className="text-4xl md:text-5xl font-bold text-white">{card.value}</p>
                        <p className="text-xl text-white/90 text-center">{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedStats;
