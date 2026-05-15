import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CardType = {
  name: string;
  imgUrl: string;
  href: string;
};

export default function Card(props: CardType) {
  return (
    <Link
      href={props.href}
      className="
        block
        rounded-2xl
        overflow-hidden
        bg-white
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      <Image
        src={props.imgUrl}
        width={260}
        height={160}
        alt={props.name}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {props.name}
        </h2>
      </div>
    </Link>
  );
}