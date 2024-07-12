// components/SpeakerCard.tsx
import React from 'react';
import Image from 'next/image';

interface SpeakerCardProps {
  name: string;
  image: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, image }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-24 h-24 md:w-32 md:h-32'>
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className='rounded-full object-cover'
        />
      </div>
    </div>
  );
};

export default SpeakerCard;
