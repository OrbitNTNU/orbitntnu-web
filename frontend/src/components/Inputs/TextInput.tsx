import React from "react";

interface ITextInput extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  children: React.ReactNode;
  name: string;
  cols?: number;
  rows?: number;
  error?: boolean;
}

const TextInput = ({
  children,
  name,
  cols,
  rows,
  placeholder,
  value,
  onChange,
  error,
  className,
}: ITextInput) => {
  return (
    <div className="flex flex-col-reverse gap-1">
      <textarea
        name={name}
        id={name}
        cols={cols ? cols : 30}
        rows={rows ? rows : 10}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-white/10 px-4 py-2 outline-none peer w-auto h-44 ${className} ${
          error ? "border border-red-500" : ""
        }`}
      ></textarea>
      <label
        htmlFor={name}
        className={`peer-focus:text-orbit-yellow text-sm ${
          error ? "text-red-500" : ""
        }`}
      >
        {children}
      </label>
    </div>
  );
};

export default TextInput;
