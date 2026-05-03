import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '@/lib/data'
import MySwiper from './Swiper'

export default async function Feature() {


    const featureBooks = await features()

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>Why choose us ? </h1>
            </div>
          
                <MySwiper featureBooks={featureBooks} />
           
        </div>
    )
}
