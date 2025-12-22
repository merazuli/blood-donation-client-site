import React from 'react';
import { Heart, Users, Droplet } from 'lucide-react';

const FeaturedSection = () => {
    const features = [
        {
            icon: <Droplet className="w-10 h-10 text-red-600" />,
            title: 'Donate Blood, Save Lives',
            description: 'Your small act of donating blood can save multiple lives. Be a hero today.'
        },
        {
            icon: <Users className="w-10 h-10 text-purple-600" />,
            title: 'Join as a Donor',
            description: 'Register as a donor and get notified whenever someone in your area needs blood.'
        },
        {
            icon: <Heart className="w-10 h-10 text-pink-600" />,
            title: 'Community Impact',
            description: 'Be part of a community that spreads hope and care through blood donation.'
        },
    ];

    return (
        <section className="max-w-7xl mx-auto p-6 my-12">
            <h2 className="text-3xl font-bold text-center text-[#435585] mb-10">
                Why Donate Blood?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 text-center transform transition hover:scale-105"
                    >
                        <div className="flex justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#435585]">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedSection;
