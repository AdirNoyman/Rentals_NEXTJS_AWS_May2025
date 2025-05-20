import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div className='fixed mb-0 top-0 left-0 w-full z-50 shadow-xl bg-black'>
      <div className='flex justify-between items-center w-full py-4 px-8 text-blue-500'>
        <div className='flex items-center gap-4 md:gap-6'>
          <Link
            href='/'
            className='cursor-pointer hover:!text-primary-300'
            scroll={false}
          >
            <div className='flex items-center gap-3'>
              <Image
                src='/logo.svg'
                alt='Rently logo'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div className='text-xl font-bold'>
                RENT
                <span className='text-purple-400 font-light hover:!text-primary-300'>
                  ME
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className='text-xs hidden md:block text-white'>
          Your one-stop solution for all your property needs
        </p>
        <div className='flex items-center gap-5'>
          <Link href='/sign-in'>
            <Button
              variant='outline'
              className='text-white border-blue-500 bg-blue-600 hover:bg-blue-500 hover:text-white rounded-lg hover:cursor-pointer h-8'
            >
              Sign In
            </Button>
          </Link>
          <Link href='/sign-up'>
            <Button
              variant='secondary'
              className='text-white bg-orange-700 border-orange-600 hover:bg-orange-900 hover:text-white rounded-lg hover:cursor-pointer h-8'
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
