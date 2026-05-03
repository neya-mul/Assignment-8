import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function UpdateInfo() {

  const update = async (e) => {
    e.preventDefault()
    e.target.reset()
    document.getElementById('modal').checked = false;
    const name = e.target.name.value.trim()
    const image = e.target.image.value.trim()
    await authClient.updateUser({
      image: image,
      name:name
    })
  }
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">Edit Info</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form action="" onSubmit={update} className='max-w-xl w-full mx-auto'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border md:p-10 p-6  ">
              <h1 className='text-center text-3xl'>Update Your Info</h1>

              <label className="label">Name</label>
              <input type="text" className="input w-full" placeholder="Name" name='name' />

              <label className="label">Iamge</label>
              <input type="url" className="input w-full" placeholder="Url" name='image' />

              <button className="btn btn-neutral mt-4" type='submit'>Update</button>
              {/* <p className='text-sm mt-3'>Don't have any account? <span className='text-blue-300'><Link href='/register'>Register</Link></span></p> */}

              {/* <div className="divider">OR</div> */}
              {/* <button type='button' className='btn btn-neutral w-full border flex items-center'><FaGoogle />
                Log in with Google</button> */}
            </fieldset>

          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  )
}
