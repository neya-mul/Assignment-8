import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '@/lib/data'

export default async function Feature() {


    const featureBooks = await features()

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>Why choose us ? </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 container mx-auto my-10 p-5' >
                {
                    featureBooks.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    )
}
