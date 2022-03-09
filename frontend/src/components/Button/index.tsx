import React from "react";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <button className="bg-blue-600 font-bold py-2 px-4 w-full md:max-w-64">
    {label}
  </button>
);
