'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from '../../public/images/logo.png';
import MySearch from '../ui/MySearch';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Menu from './menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[90px] z-20 px-6 py-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center'>
        <Image src={Logo} alt='Image' width={120} height={30} />
        {!isScrolled && <MySearch />}
        {isScrolled && <Menu isScrolled={isScrolled} />}
      </div>
      <div className='flex items-center'>
        <Button className='bg-yellow-500 px-3 py-1 rounded-md mr-2'>Добавить объявления</Button>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
