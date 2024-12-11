import React from 'react'
import { useParams } from 'react-router'

export default function User() {
    const { userId} = useParams();
  return (
    <div className='bg-gray-500 p-4 text-white'>User: {userId}</div>
  )
}