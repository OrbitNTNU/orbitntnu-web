import React from "react";

interface ICheckbox {
  children: React.ReactNode;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Checkbox = ({ children, name, onChange, value }: ICheckbox) => {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        id={name}
        name={name}
        className="h-0 w-0 peer"
        onChange={onChange}
        value={value}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-center text-center px-4 py-2 cursor-pointer bg-orbit-blue hover:bg-blue-800 rounded peer-checked:bg-orbit-yellow w-44 peer-focus-visible:outline"
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
