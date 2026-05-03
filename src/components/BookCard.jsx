import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BookCard({ book }) {
    return (
        <div className="book-card max-w-96 w-full border border-white/8 rounded-2xl overflow-hidden shadow-sm  mx-auto my-10 p-5"
        style={{background:'#1C1B1F'}}>
            <figure className='relative w-[160] h-56 mx-auto rounded'>
                <Image
                    src={book.image_url}
                    alt="Shoes"
                    width={200}
                    height={200}
                    className='object-cover book-image' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.description}</p>
                <div className="card-actions justify-end">
                   <Link href={`/details/${book.id}`}> <button className="book-btn btn bg-gray-500">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}
