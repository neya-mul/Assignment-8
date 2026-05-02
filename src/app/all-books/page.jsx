import BookCard from '@/components/BookCard';
import { getBooks } from '@/lib/books'
import React from 'react'

export default async function AllBooks() {
  const books = await getBooks()
  // console.log(books);

  return (
    <div className=' mt-30'>
      <div className='text-center'>
        <h1 className='text-6xl'>All Books</h1>
        <p className='max-w-[800px] mx-auto my-3'>"Every book you read is a life you didn't have to live to learn from. Open one, and you open a door to a thousand worlds, a thousand minds, a thousand versions of who you could become."</p>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                > 
                  {/* <rect width="20" height="16" x="2" y="4" rx="2"></rect> */}
                  {/* <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> */}
                </g>
              </svg>
              <input type="email" placeholder="Search by title" required />
            </label>
            {/* <div className="validator-hint hidden">Enter valid email address</div> */}
          </div>
          <button className="btn btn-neutral join-item">Search</button>
        </div>
      </div>

    
        {/* booke */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5'>
          {
            books.map(book => <BookCard book={book} key={book.id}></BookCard>)
          }
        </div>
   

    </div>
  )
}
