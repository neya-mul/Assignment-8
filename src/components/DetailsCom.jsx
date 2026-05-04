'use client'
import { authClient } from '@/lib/auth-client'
// import { getBooks } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
// import {DetailsCom} from '../components/DetailsCom'

export default function DetailsCom({detail}) {

    //   const book = await getBooks()
    //   const { id } = await params
    //   const detail = book.find(b => b.id == id)
    //   console.log(detail);
    
    const {data: session} = authClient.useSession()
    const handleBorrow = () =>{
        if(session){
            alert('borrowed successfully')
        }
    }

    return (

        <div className="hero min-h-screen py-30  px-4 sm:px-6 lg:px-0">
            {/* <DetailsCom></DetailsCom> */}
            <div className="hero-content flex flex-col lg:flex-row gap-10 container mx-auto detail p-20 rounded-2xl ">
                <Image
                    width={200}
                    height={400}
                    alt={detail.title}
                    src={detail.image_url}
                     className="detail-image max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{detail.title}</h1>
                    <p className="py-2 text-xl">{detail.description}</p>
                    <p className='text-xl'>Writter name : {detail.author}</p>
                    <p> Category : {detail.category}</p>
                    <p>Available Quantity : {detail.available_quantity}</p>
                    <button onClick={handleBorrow} className="btn button bg-gray-500 my-3">Borrow this Book</button>
                </div>
            </div>
        </div>
    )
}
