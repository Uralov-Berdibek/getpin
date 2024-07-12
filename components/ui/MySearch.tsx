import React from 'react';
import { FiSearch } from 'react-icons/fi';

const MySearch = () => {
  return (
    <div className='flex items-center ml-16'>
      <FiSearch className='mr-1 text-lg font-medium' />
      <input
        type='text'
        className='border-none outline-none text-sm text-slate-950 font-medium placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 bg-transparent'
        placeholder='Поиск'
      />
    </div>
  );
};

export default MySearch;
