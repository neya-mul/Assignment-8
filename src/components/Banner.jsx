import React from 'react'
import banner from '../../public/images/banner.png'
import Link from 'next/link'

export default function Banner() {
  return (
     <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${banner.src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
            <p className="mb-5 text-md">
              Welcome to BookNest—your home for exploring stories, sharing knowledge, and borrowing books with ease.
            </p>
            <Link href='all-books'> <button className="btn bg-gray-500 rounded-2xl">Browse Now</button></Link>
          </div>
        </div>
      </div>
  )
}
