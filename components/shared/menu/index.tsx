import React from 'react';
import MenuItem from './menu-item';

interface MenuProps {
  isScrolled?: boolean;
}

const categoryOne = [
  { id: 1, value: 'Мастер класс' },
  { id: 2, value: 'Тренинги' },
  { id: 3, value: 'Интеллектуальные шоу' },
  { id: 4, value: 'Вечера' },
  { id: 5, value: 'Конкурсы' },
  { id: 6, value: 'Марафоны' },
];

const categoryTwo = [
  { id: 1, value: 'Маркетинг' },
  { id: 2, value: 'Образование' },
  { id: 3, value: 'ИТ' },
  { id: 4, value: 'Культура' },
  { id: 5, value: 'Бизнес' },
  { id: 6, value: 'Дизайн' },
];

const Menu: React.FC<MenuProps> = ({ isScrolled }) => {
  return (
    <div className={`${isScrolled ? 'ml-16' : 'mr-0'}`}>
      <ul className='flex items-center list-none'>
        {categoryOne.map((item) => (
          <MenuItem key={item.id} value={item.value} />
        ))}
      </ul>
      <ul className='flex items-center list-none'>
        {categoryTwo.map((item) => (
          <MenuItem key={item.id} value={item.value} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
