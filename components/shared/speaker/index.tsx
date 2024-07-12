// components/SpeakerList.tsx
import React from 'react';
import SpeakerCard from './speaker-card';

const speakers = [
  { name: 'Speaker 1', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 2', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 3', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 4', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 5', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 6', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 7', image: 'https://via.placeholder.com/150' },
  { name: 'Speaker 8', image: 'https://via.placeholder.com/150' },
];

const SpeakerList: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='md:flex md:justify-between md:items-center'>
        <div className='mb-8 md:mb-0 md:w-1/2'>
          <h1 className='text-2xl font-bold mb-4'>СПИКЕРЫ НА БЛИЖАЙШИЕ ДАТЫ</h1>
          <p className='text-gray-700 mb-4'>
            Ищете вдохновение и новые знания? Ознакомьтесь с нашими спикерами и направлениями
            ближайших мероприятий.
          </p>
          <p className='text-gray-700 mb-8'>
            Выберите понравившегося спикера, зарегистрируйтесь и получите ценные инсайты от
            экспертов. Не упустите шанс развиваться и расти вместе с нами!
          </p>
          <button className='px-6 py-2 border rounded-3xl text-[#131313]'>
            Все спикеры на ближайшие даты
          </button>
        </div>
        <div className='grid grid-cols-3'>
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} name={speaker.name} image={speaker.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerList;
