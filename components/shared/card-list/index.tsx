'use client';
import React, { useState } from 'react';
import { cardsData } from './data';
import Card from './card';

const CardList = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 4);
  };

  return (
    <div className='mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {cardsData.slice(0, visibleCards).map((card, index) => (
          <Card
            key={index}
            date={card.date}
            time={card.time}
            category={card.category}
            title={card.title}
            authors={card.authors}
            video={card.video}
            seat={card.seat}
            price={card.price}
            address={card.address}
            publishDate={card.publishDate}
          />
        ))}
      </div>
      {visibleCards < cardsData.length && (
        <div className='text-center mt-4 mb-2'>
          <button
            className='px-4 py-2 bg-white w-full text-[#131313] text-sm'
            onClick={handleLoadMore}
          >
            Загрузить еще
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
