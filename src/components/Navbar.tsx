import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className='flex items-center justify-between'>
      <Link href='/'>
        <div className='relative h-[75px] w-[150px] cursor-pointer md:h-[100px] md:w-[200px]'>
          <Image src='/assets/logo.svg' layout='fill' objectFit='contain' />
        </div>
      </Link>

      <div className='flex items-center space-x-6'>
        <Link href='/login'>
          <p className='cursor-pointer text-sm font-medium text-gray-200 transition-colors hover:text-gray-400 md:text-base'>
            Login
          </p>
        </Link>

        <button
          onClick={() => push('/create')}
          type='button'
          className='primary-btn'
        >
          Get started
        </button>
      </div>
    </nav>
  );
};