import React from 'react';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import { Link } from 'gatsby';

interface OpenNavProps {
  handleToggle: (toggle: boolean) => void;
}

export const OpenNav = ({ handleToggle }: OpenNavProps) => {
  const links = [
    { text: 'Home', slug: '/' },
    { text: 'Missions', slug: '/missions' },
    { text: 'Teams', slug: '/teams' },
    { text: 'About Us', slug: '/about-us' },
    { text: 'Sponsors', slug: '/sponsors' },
    { text: 'Contact', slug: '/contact' },
    { text: 'Join', slug: '/join' },
  ];

  const getSelectedStatus = (slug: string) =>
    window.location.pathname === slug ? 'text-orange-400' : '';

  return (
    <React.Fragment>
      <div className='absolute w-full h-screen top-0 right-0 bg-black opacity-30' />

      <div className='absolute w-1/2 h-screen right-0 top-0 bg-black opacity-100 text-right p-4'>
        <FaTimes
          onClick={handleToggle}
          className='absolute top-8 right-4 cursor-pointer'
        />
        <ul className='pt-16'>
          {links.map((link) => (
            <li
              key={link.slug}
              className={`mb-2 text-xl ${getSelectedStatus(link.slug)}`}
            >
              <Link to={link.slug}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
