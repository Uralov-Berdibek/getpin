import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegCalendar } from 'react-icons/fa';
import { GiWatch } from 'react-icons/gi';
const Filter = () => {
  return (
    <div className='flex items-center mt-6'>
      <button className='flex items-center mr-6'>
        <FaMapMarkerAlt className='mr-2' /> Регион
      </button>
      <button className='flex items-center mr-6'>
        <FaRegCalendar className='mr-2' /> Дата
      </button>
      <button className='flex items-center mr-6'>
        <GiWatch className='mr-2' /> Время
      </button>
      <div className='flex items-center mr-4'>
        <input
          className='mr-1'
          id='money'
          type='radio'
          defaultChecked
          name='money'
          value='Платный'
        />
        <label htmlFor='money'>Платный</label>
      </div>
      <div className='flex items-center mr-4'>
        <input className='mr-1' id='free' type='radio' name='money' value='Бесплатный' />
        <label htmlFor='free'>Бесплатный</label>
      </div>
    </div>
  );
};

export default Filter;
