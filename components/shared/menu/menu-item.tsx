import React from 'react';

interface MenuItemProps {
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ value }) => {
  return <li className='mr-2 text-sm hover:underline cursor-pointer'>{value}</li>;
};

export default MenuItem;
