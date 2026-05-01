import React from 'react'
import FeatureCard from './FeatureCard'

export default function Feature() {


    const features = [
        {
            id: 1,
            title: "Eco-Friendly Reading",
            description: "Reduce paper waste by sharing books within your community instead of buying new copies.",
            icon: "https://img.icons8.com/color/96/leaf.png",
            color: "#4CAF50"
        },
        {
            id: 2,
            title: "Zero Cost",
            description: "Access thousands of titles without the price tag of a bookstore. Reading shouldn't be a luxury.",
            icon: "https://img.icons8.com/color/96/wallet.png",
            color: "#FFD700"
        },
        {
            id: 3,
            title: "Connect with Neighbors",
            description: "Meet fellow bookworms in your area through our local 'Nest' pickup points.",
            icon: "https://img.icons8.com/color/96/group.png",
            color: "#2196F3"
        },
        {
            id: 4,
            title: "Smart Reminders",
            description: "Never worry about late fees with our automated SMS and email return notifications.",
            icon: "https://img.icons8.com/color/96/appointment-reminders.png",
            color: "#FF5722"
        }
    ];

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>Why choose us ? </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 container mx-auto my-10 p-5' >
                {
                    features.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    )
}
