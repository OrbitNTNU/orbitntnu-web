import React from "react";

interface CountdownBoxProps {
  num: number;
  type: string;
}

export const CountdownBox = ({ num, type }: CountdownBoxProps) => (
  <div className="mr-4 bg-gray-800 bg-opacity-60 flex flex-col text-center w-16 h-16 md:w-24 md:h-24 justify-center">
    <span className="text-2xl mt-1 md:text-4xl">{num}</span>
    <span className="font-thin">{type}</span>
  </div>
);
