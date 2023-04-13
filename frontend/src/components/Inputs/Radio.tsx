import React from "react";

interface IRadio {
  children: React.ReactNode;
  name: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLLabelElement>;
  value: number | string;
  required?: boolean;
}

const Radio = ({ children, name, id, onClick, value, required }: IRadio) => {
  return (
    <div className="flex flex-row">
      <input
        type="radio"
        id={id}
        name={name}
        required={required}
        className="h-0 w-0 peer"
        value={value}
      />
      <label
        htmlFor={id}
        onClick={onClick}
        className="inline-block px-4 py-2 cursor-pointer bg-orbit-blue hover:bg-blue-800 rounded peer-checked:bg-orbit-yellow w-full md:w-24 text-center peer-focus-visible:outline"
      >
        {children}
      </label>
    </div>
  );
};

export default Radio;
