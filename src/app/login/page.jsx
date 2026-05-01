'use client'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'

export default function Login() {


    const loginButton = async (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        // const image = e.target.image.value
        const password = e.target.password.value
        const email = e.target.email.value
        // console.log(name, image, password, email);

        const { data, error } = await authClient.signIn.email({
            // name: name, // required
            email: email, // required
            password: password, // required
            // image: image,
            rememberMe: true,
            callbackURL: "/home",
        });
        // console.log(data, error)
        if (error) {
            alert(error.message)
        }
        else {
            alert("Login Successfully")
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <form action="" onSubmit={loginButton}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-10 h-[40vh] ">
                    <h1 className='text-center text-3xl'>Please Login</h1>

                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" name='email'/>

                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" name='password'/>

                    <button className="btn btn-neutral mt-4" type='submit'>Login</button>
                    <p className='text-sm mt-3'>Don't have any account? <span className='text-blue-300'><Link href='/register'>Register</Link></span></p>
                </fieldset>
            </form>
        </div>
    )
}
