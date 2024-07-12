// components/ArticleCard.tsx
import React from 'react';
import { sliceText } from '../../../lib/utils';

interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, description }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md space-y-4'>
      <div className='text-gray-500 text-sm'>{date}</div>
      <h2 className='text-xl font-bold text-gray-900'>{sliceText(title, 16)}</h2>
      <p className='text-gray-700'>{sliceText(description, 126)}</p>
      <button className='mt-4 px-4 py-2 text-black'>читать далее</button>
    </div>
  );
};

export default ArticleCard;
