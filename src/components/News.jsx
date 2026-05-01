import React from 'react'
import Marquee from 'react-fast-marquee'


export default function News() {
    const marqueeItems = [
        {
            id: 1,
            type: "new_arrival",
            text: "The Silent Forest"
        }

    ]

  
    return (
        <Marquee className='flex gap-4 p-4 bg-base-300 mt-30'>
            <span className='mx-9'> New arraival :{marqueeItems.map(news => <span className='text-xl font-bold' key={news.id}>{news.text} </span>)} </span> ||
            <span className='mx-9'> Special discount on <span className='text-xl font-bold'>Membership</span> </span>
        </Marquee>
    )
}
