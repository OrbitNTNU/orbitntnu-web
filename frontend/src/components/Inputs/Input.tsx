import React, { useState } from "react";
import "./inputs.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  name: string;
  type?: "email" | "password" | "text" | "number" | "tel";
  valid: boolean;
}

const Input = ({
  children,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  valid,
}: IInput) => {
  const standard = "bg-white/10";
  const error = "";
  const styling = `${valid ? standard : error}`;
  return (
    <div className="flex flex-col-reverse gap-1">
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className={`px-4 py-2 outline-none peer w-full md:w-96`}
      />
      <label htmlFor={name} className="text-sm peer-focus:text-orbit-yellow">
        {children}
      </label>
    </div>
  );
};

export default Input;
