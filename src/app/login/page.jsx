import React from 'react'

export default function Login() {
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-10 h-[40vh] ">
                <h1 className='text-center text-3xl'>Please Login</h1>

                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    )
}
