import React from 'react'
import Link from 'next/link'


export default function Page() {

  const UrduId = 'urdu-book'
  return (
    <div>
        <h2>Finance</h2>
        <h2>Math</h2>
        <h2>English</h2>
        <h1>
           <Link href={`/books/${UrduId}`}> Urdu</Link>
          </h1>
        


    </div>
  )
}
