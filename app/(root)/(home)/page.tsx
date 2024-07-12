import React from 'react';
import Menu from '../../../components/shared/menu';
import Ad from '../../../components/shared/ad';
import CardList from '../../../components/shared/card-list';
import Filter from '../../../components/shared/filter';

const Home = () => {
  return (
    <div>
      <Menu />
      <div className='mt-24'>
        <Ad />
        <Filter />
        <CardList />
      </div>
    </div>
  );
};

export default Home;