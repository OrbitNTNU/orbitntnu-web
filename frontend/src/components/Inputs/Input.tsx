import React, { useState } from "react";
import "./inputs.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  name: string;
  type?: "email" | "password" | "text" | "number";
}

const Input = ({
  children,
  name,
  type,
  placeholder,
  value,
  onChange,
}: IInput) => {
  return (
    <div className="flex flex-col-reverse gap-1">
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white/10 px-4 py-2 outline-none peer w-96"
      />
      <label htmlFor={name} className="text-sm peer-focus:text-orbit-yellow">
        {children}
      </label>
    </div>
  );
};

export default Input;
