import React from 'react';

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <button className='bg-blue-50'>{label}</button>
);
