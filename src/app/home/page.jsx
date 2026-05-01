import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import News from '@/components/News'
import { getBooks } from '@/lib/books'
import Banner from '@/components/Banner'
import FeaturedBooks from '@/components/FeaturedBooks'
import Feature from '@/components/Feature'
import Rating from '@/components/Rating'

export default function Home() {



  return (


    <div>
      {/* <News></News> */}
      <Banner></Banner>
      {/* featured books */}
      <FeaturedBooks></FeaturedBooks>
      <Rating></Rating>
      <Feature></Feature>

    </div>

  )
}
