import React from 'react'
import { IoIosStar } from 'react-icons/io'

export default function RatingCard({ rating }) {
    return (
        <div className="card max-w-96 w-full bg-base-100 card-xl shadow-sm border">

            <div>
                
            </div>
            <div className="card-body">
                <h2 className="card-title">{rating.book_title}</h2>
                <p>Author : {rating.author}</p>
               
                <span className='flex items-center'>Rating : {rating.rating} <IoIosStar /> </span>
            </div>
        </div>
    )
}
