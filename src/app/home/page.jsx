import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import News from '@/components/News'
import { getBooks } from '@/lib/books'
import Banner from '@/components/Banner'
import FeaturedBooks from '@/components/FeaturedBooks'

export default function Home() {



  return (


    <div>
      {/* <News></News> */}
      <Banner></Banner>
      {/* featured books */}
      <FeaturedBooks></FeaturedBooks>

    </div>

  )
}
