import React, { useState } from "react";
import classNames from "classnames";

interface IInputLabel extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  id: string;
  children: React.ReactNode;
}

const InputLabel = ({
  type,
  id,
  children,
  placeholder,
  name,
  checked,
}: IInputLabel) => {
  const style = classNames("flex", {
    "flex-col mt-2 mb-4":
      type === "text" || type === "number" || type === "email",
    "flex-row": type === "radio" || type === "checkboox",
  });

  const inputStyle = classNames({
    hidden: type === "radio" || type === "checkbox",
  });

  const labelStyle = classNames({
    "inline-block p-4 cursor-pointer": type === "radio" || type === "checkbox",
    "bg-red-600 hover:bg-red-400":
      (type === "radio" || type === "checkbox") && !checked,
    "bg-blue-300": (type === "radio" || type === "checkbox") && checked,
  });
  return (
    <div className={style}>
      <label className={`py-2 ${labelStyle}`} htmlFor={id}>
        {children}
      </label>
      <input
        className={`p-2 ${inputStyle}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLabel;
