import React from 'react';
import Header from '../../components/shared/header';
import Footer from '../../components/shared/footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className='container max-w-[1010px] w-full mx-auto mt-[90px]'>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
