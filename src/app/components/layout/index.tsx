import React from 'react';
import Navbar from '../ui/navbar';

const Layout = ({children}: any): React.JSX.Element => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer className='bg-stone-100 text-sm font-medium uppercase text-stone-400 px-8 py-4'>
        <div className='container'>
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
