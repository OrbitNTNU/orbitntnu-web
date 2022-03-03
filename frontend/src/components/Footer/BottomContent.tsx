import React from "react";

interface BottomContentProps {
  year: number;
}

export const BottomContent = ({ year }: BottomContentProps) => (
  <div className="flex bg-gray-800 p-4">
    <p className="w-1/2">Orbit NTNU © {year}</p>
    <ul className="flex w-1/2">
      <li>GitHub</li>
      <li>Instagram</li>
      <li>FaceBook</li>
    </ul>
  </div>
);
