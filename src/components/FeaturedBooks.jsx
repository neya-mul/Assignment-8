import { getBooks } from '@/lib/books';
import React from 'react'
import BookCard from './BookCard';

export default async function FeaturedBooks() {
      const books = await getBooks()


  return (
    <div className='my-10'>
        <div>
            <h1 className='text-center text-6xl'>Our Featured Books</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                books.slice(0,4).map(book=> <BookCard book={book} key={book.id}></BookCard>)
            }
        </div>
    </div>
  )
}
