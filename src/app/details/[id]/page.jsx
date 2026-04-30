import React from 'react'

export default async function Details({params}) {
  const id = await params
  console.log(id);
  
  return (
    <div>Details</div>
  )
}
