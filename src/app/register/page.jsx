'use client'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'

export default function Register() {

    const registerButton = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const password = e.target.password.value
        const email = e.target.email.value
        // console.log(name, image, password, email);

        const { data, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: image,
            callbackURL: "/login",
        });
        console.log(data, error)
        if(error){
            alert(error.message)
        }
        else{
            alert("Registered Successfully...")
        }
    }




    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <form action="" onSubmit={registerButton}>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-10 ">
                    <h1 className='text-center text-3xl'>Please Register</h1>

                    <label className="label">Name</label>
                    <input type="text" className="input w-full" placeholder="Name" name='name' />

                    <label className="label">Image URL</label>
                    <input type='url' className="input w-full" placeholder="Image URL" name='image' />



                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" name='password' />

                    <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>

                </fieldset>
            </form>
        </div>
    )
}
