import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { OpenNav } from './OpenNav';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { Link } from 'gatsby';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className='bg-black text-white p-4'>
      <Link to='/'>
        <StaticImage
          src='../../images/orbitimage.png'
          alt='Orbit'
          className='w-32'
          placeholder='none'
        />
      </Link>

      {toggle ? (
        <OpenNav handleToggle={handleToggle} />
      ) : (
        <FaBars
          onClick={handleToggle}
          className='absolute right-4 top-8 cursor-pointer'
        />
      )}
    </nav>
  );
};
