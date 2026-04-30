import React from 'react'

export default function Register() {
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-10 ">
                <h1 className='text-center text-3xl'>Please Register</h1>

                <label className="label">Name</label>
                <input type="text" className="input w-full" placeholder="Name" />

                <label className="label">Image URL</label>
                <input type='url' className="input w-full" placeholder="Image URL" />



                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>

            </fieldset>
        </div>
    )
}
