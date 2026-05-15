import React from 'react';
import Link from 'next/link'


export default async function Page({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book } = await params;

  return (
    <div>Your Favurit Book: {book}
     <Link href="/books">Back</Link>
    </div>
    
  );
}