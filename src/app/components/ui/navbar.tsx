'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import logo from '../../../../public/IMG_1554.JPG';
import Image from 'next/image';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

library.add(faBars, faX);

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className='bg-stone-100'>
      <nav className='container py-8'>
        <div className='flex justify-between'>
          <Link href={'/'}>
            <Image
              src={logo}
              height={50}
              width={50}
              alt=''
              style={{borderRadius: '5rem'}}
            />
          </Link>
          <div
            className={classNames(
              'z-50 duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'
            )}
          >
            <ul className='flex gap-4 my-auto'>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium uppercase text-stone-400'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/posts'
                  className='text-sm font-medium uppercase text-stone-400'
                >
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-6 md:hidden'>
            <FontAwesomeIcon
              onClick={toggleMenu}
              name='menu'
              className='cursor-pointer md:hidden h-8'
              icon='bars'
            />
          </div>
        </div>
      </nav>
      <div
        className={classNames(
          'absolute top-0 bg-black z-50 w-full text-5xl flex-col justify-content-center origin-top animate-open-menu',
          {hidden: !isOpen}
        )}
      >
        <div className='flex justify-end p-4'>
          <FontAwesomeIcon
            onClick={toggleMenu}
            name='menu'
            className='cursor-pointer md:hidden h-8 w-8 p-4'
            icon='x'
          />
        </div>
        <nav className='flex flex-col min-h-screen items-center py-8'>
          <ul className='flex flex-col gap-4 my-auto'>
            <li>
              <Link
                href='/'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/posts'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
