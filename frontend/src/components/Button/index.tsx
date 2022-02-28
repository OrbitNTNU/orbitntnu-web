import React from "react";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <button className="bg-blue-600 text-white py-2 px-4">{label}</button>
);
