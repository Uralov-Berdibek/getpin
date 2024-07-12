'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiMicrophoneOff, CiMicrophoneOn } from 'react-icons/ci';

interface CardProps {
  date: string;
  time: string;
  category: string;
  title: string;
  authors: { name: string; image: string }[];
  video: string;
  seat: string;
  price: string;
  address: string;
  publishDate: string;
}

const Card: React.FC<CardProps> = ({
  date,
  time,
  category,
  title,
  authors,
  video,
  seat,
  price,
  address,
  publishDate,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      className='card p-4 bg-white rounded-xl space-y-2 text-sm md:text-base transition-all duration-300 hover:shadow-lg'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center justify-between'>
        <span className='text-sm font-light text-[#131313]'>
          {date} | {time}
        </span>
        <span className='text-sm font-light text-[#131313] border px-2 py-1 rounded-2xl'>
          {category}
        </span>
      </div>
      <div className='flex justify-between'>
        <div className='w-[70%]'>
          <p
            className={`inline text-2xl font-medium text-[#131313] ${
              isHovered ? 'bg-blue-500 text-white p-2' : ''
            }`}
          >
            {title}
          </p>
          <div className='flex items-center -space-x-4'>
            {authors.map((author, index) => (
              <div key={author.name} className={index !== 0 ? '-ml-4' : ''}>
                <Image
                  src={author.image}
                  alt={author.name}
                  width={64}
                  height={64}
                  className={`rounded-full w-16 h-16 object-cover mt-2 ${
                    index !== 0 ? 'relative z-0' : 'z-10'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`relative w-[30%] h-0 pb-[30%] ${isHovered ? 'inline-block' : 'hidden'}`}>
          <video
            src={video}
            className='absolute inset-0 w-full h-full rounded-full object-cover'
            poster='https://github.com/shadcn.png'
            autoPlay
            muted={isMuted}
            loop
          ></video>
          <div
            onClick={handleSoundToggle}
            className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white backdrop-saturate-200 p-2 rounded-full cursor-pointer'
          >
            {isMuted ? (
              <span role='img' aria-label='sound off'>
                <CiMicrophoneOff />
              </span>
            ) : (
              <span role='img' aria-label='sound on'>
                <CiMicrophoneOn />
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div>
          <p className='text-xs text-[#131313] mt-4'>Месть:</p>
          <span className='text-base text-[#131313]'>{seat}</span>
        </div>
        <div>
          <p className='text-xs text-[#131313] mt-4'>Цена:</p>
          <span className='text-base text-[#131313]'>{price}</span>
        </div>
        <div>
          <p className='text-xs text-[#131313] mt-4'>Адресс:</p>
          <span className={`text-base text-[#131313] ${isHovered ? 'underline' : ''}`}>
            {address}
          </span>
        </div>
      </div>

      <div className='text-gray-400 text-xs mt-12'>
        <p>Дата публикации: {publishDate}</p>
      </div>
    </div>
  );
};

export default Card;
