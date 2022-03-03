import React from "react";
import { BottomContent } from "./BottomContent";
import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white">
      <div className="flex bg-gray-900 p-4 align-middle justify-center ">
        <LeftContent />
        <RightContent />
      </div>
      <BottomContent year={year} />
    </footer>
  );
};
