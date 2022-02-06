import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-black text-white text-center p-4'>
      <StaticImage
        src='../../images/orbitimage.png'
        alt='Orbit'
        className='w-16 mb-8'
        placeholder='none'
      />

      <div className='mb-4 text-gray-400'>
        <p>Orbit NTNU</p>
        <p>O.S Bragstad plass 2B</p>
        <p>4 etg. Rom B406</p>
        <p>7034 Trondheim</p>
      </div>

      <p className='text-xl'>Orbit NTNU © {year}</p>
    </footer>
  );
};
