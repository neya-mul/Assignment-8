'use client'
import UpdateInfo from '@/components/UpdateInfo'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

export default function Profile() {
  const { data: session } = authClient.useSession()
  const user = session?.user
  console.log(user);








  return (
    <div className=' min-h-screen flex justify-center items-center '>
      <div className='border h-fit mx-auto text-center p-20 space-y-10 max-w-[500px] w-full'>
        <div>
          {user ? <Image src={user.image} width={100} height={100} alt={user.name} className='rounded-full object-cover mx-auto' /> : <FaRegUser />}

        { user&& <h1 className='text-3xl'>{user.name}</h1>}
         {user && <p>{user.email}</p>}

        </div>
        <div>
          {/* <button>Edit</button> */}
          <UpdateInfo></UpdateInfo>
        </div>
      </div>
    </div>


  )
}
