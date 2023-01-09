import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <button
    className="bg-blue-600 font-bold py-2 px-4 w-full md:max-w-64 hover:bg-blue-800"
    onClick={onClick}
  >
    {label}
  </button>
);
