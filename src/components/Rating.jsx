import React from 'react'
import RatingCard from './RatingCard'




export default function Rating() {

    const ratings = [
        {
            "review_id": "BN-9021",
            "book_title": "The Midnight Library",
            "author": "Matt Haig",
            "user": {
                "username": "ReadWithAlex",
                "avatar_url": "https://booknest.com/avatars/alex.jpg",
                "is_verified_purchase": true
            },
            "rating": 5,
            "review_content": "A beautiful exploration of regret and the paths not taken. This book literally changed my perspective on life. BookNest's delivery was super fast too!",
            "date_posted": "2026-04-15",
            "likes": 24
        },
        {
            "review_id": "BN-9022",
            "book_title": "Project Hail Mary",
            "author": "Andy Weir",
            "user": {
                "username": "SciFi_Sam",
                "avatar_url": "https://booknest.com/avatars/sam.jpg",
                "is_verified_purchase": true
            },
            "rating": 5,
            "review_content": "If you loved The Martian, you'll adore this. The science is crunchy but accessible, and the friendship at the heart of the story is pure gold.",
            "date_posted": "2026-04-22",
            "likes": 118
        },
        {
            "review_id": "BN-9023",
            "book_title": "The Silent Patient",
            "author": "Alex Michaelides",
            "user": {
                "username": "MysteryMaven",
                "avatar_url": "https://booknest.com/avatars/mystery.jpg",
                "is_verified_purchase": false
            },
            "rating": 3,
            "review_content": "The twist was definitely unexpected, but the pacing in the middle felt a bit sluggish for a thriller. Still a decent weekend read.",
            "date_posted": "2026-04-28",
            "likes": 9
        },
        {
            "review_id": "BN-9024",
            "book_title": "Circe",
            "author": "Madeline Miller",
            "user": {
                "username": "HistoryBuff99",
                "avatar_url": "https://booknest.com/avatars/hb99.jpg",
                "is_verified_purchase": true
            },
            "rating": 4,
            "review_content": "Miller's prose is lyrical and haunting. Giving a voice to a 'villain' of Greek mythology was brilliant. Highly recommend for fans of Retellings.",
            "date_posted": "2026-05-01",
            "likes": 42
        }
    ]
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl'>Ratings </h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5'>
                {ratings.map(rating => <RatingCard key={rating.review_id} rating={rating}></RatingCard>)}
            </div>
        </div>
    )
}
