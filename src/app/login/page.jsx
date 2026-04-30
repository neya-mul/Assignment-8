import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-10  ">
                <h1 className='text-center text-3xl'>Please Login</h1>

                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <p className='text-sm mt-3'>Don't have any account? <span className='text-blue-300'><Link href='/register'>Register</Link></span></p>
            </fieldset>
        </div>
    )
}
