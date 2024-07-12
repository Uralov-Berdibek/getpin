import Image from 'next/image';
import React from 'react';
import AdImage from '../../public/images/ad.jpg';

const Ad = () => {
  return (
    <Image
      src={AdImage}
      alt='Image'
      width={1010}
      height={80}
      className='mt-[100px] h-[80px] object-cover'
    />
  );
};

export default Ad;
