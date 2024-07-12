// components/Footer.tsx
import React from 'react';
import { FaTelegramPlane, FaPhoneAlt, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className='py-8 border-t border-gray-200'>
      <div className='container mx-auto px-4'>
        <div className='mb-8 md:mb-0'>
          <h2 className='text-2xl font-bold mb-4'>Getpin</h2>
          <p className='text-gray-600 mb-4'>Собирайся, учись, развлекайся – всё в одном месте!</p>
        </div>
        <div className='md:flex justify-between md:space-x-12'>
          <div className='grid grid-cols-2 gap-x-5 '>
            <a
              href='#'
              className='w-[50px] h-[50px] flex justify-center items-center text-gray-600 hover:text-gray-800 transition bg-white rounded-full'
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href='#'
              className='w-[50px] h-[50px] flex justify-center items-center text-gray-600 hover:text-gray-800 transition bg-white rounded-full'
            >
              <FaPhoneAlt size={24} />
            </a>
            <a
              href='#'
              className='w-[50px] h-[50px] flex justify-center items-center text-gray-600 hover:text-gray-800 transition bg-white rounded-full'
            >
              <FaInstagram size={24} />
            </a>
            <a
              href='#'
              className='w-[50px] h-[50px] flex justify-center items-center text-gray-600 hover:text-gray-800 transition bg-white rounded-full'
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className='flex flex-col'>
            <div className='mb-8 md:mb-0'>
              <h3 className='text-lg font-semibold mb-2'>Наш телефон</h3>
              <p className='text-gray-600'>+998 90 000-00-00</p>
            </div>
            <div className='mb-8 md:mb-0'>
              <h3 className='text-lg font-semibold mb-2'>Электронная почта</h3>
              <p className='text-gray-600'>info@gmail.com</p>
            </div>
          </div>
          <div className='w-[800px]'>
            <p className='text-gray-600'>
              Наша платформа предоставляет уникальную возможность организаторам мероприятий быстро и
              эффективно привлекать аудиторию. Здесь вы можете разместить свои объявления о
              предстоящих мероприятиях, мастер-классах и семинарах, привлекая внимание потенциальных
              участников.
            </p>
            <p className='text-gray-600 mt-4'>
              Пользователи обязаны соблюдать правила пользования сайтом. Размещение объявлений
              бесплатно с учетом условий использования.
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 mt-8 border-t border-gray-200 pt-4'>
        <div className='md:flex md:justify-between md:items-center'>
          <p className='text-gray-600'>Copyright © 2024</p>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800 transition'>
              Terms of Use
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800 transition'>
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
