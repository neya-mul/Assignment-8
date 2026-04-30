import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BookCard({ book }) {
    return (
        <div className="card bg-base-100 max-w-96 shadow-sm border mx-auto my-10">
            <figure className='relative rounded-none w-[160] h-56 mx-auto bg-red-800'>
                <Image
                    src={book.image_url}
                    alt="Shoes"
                    width={200}
                    height={200}
                    className='object-cover' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.description}</p>
                <div className="card-actions justify-end">
                   <Link href={`/details/${book.id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}
