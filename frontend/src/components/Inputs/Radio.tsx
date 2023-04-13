import React from "react";

interface IRadio {
  children: React.ReactNode;
  name: string;
  id: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio = ({ children, name, id, onClick, checked, onChange }: IRadio) => {
  return (
    <div className="flex flex-row">
      <input
        type="radio"
        id={id}
        name={name}
        className="hidden peer"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        onClick={onClick}
        className="inline-block px-4 py-2 cursor-pointer bg-orbit-blue hover:bg-blue-800 rounded peer-checked:bg-orbit-yellow w-24 text-center"
      >
        {children}
      </label>
    </div>
  );
};

export default Radio;