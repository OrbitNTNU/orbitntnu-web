import React from "react";
import "./inputs.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  name: string;
  type?: "email" | "password" | "text" | "number";
  error?: boolean;
}

const Input = ({
  children,
  name,
  type,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
}: IInput) => {
  return (
    <div
      className={`flex flex-col-reverse gap-1 ${error ? "text-red-500" : ""}`}
    >
      <input
        autoComplete="off"
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-white/10 px-4 py-2 outline-none peer w-full md:w-96 ${
          error ? "border border-red-500" : ""
        }`}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <label htmlFor={name} className="text-sm peer-focus:text-orbit-yellow">
        {children}
      </label>
    </div>
  );
};

export default Input;
