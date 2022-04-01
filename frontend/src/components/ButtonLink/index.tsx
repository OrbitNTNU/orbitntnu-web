import { Link } from "gatsby";
import React from "react";

interface ButtonLinkProps {
  label: string;
  url: string;
}

export const ButtonLink = ({ label, url }: ButtonProps) => (
  <Link
    to={url}
    className="bg-blue-600 font-bold py-2 px-4 w-32 text-center md:text-xl block"
  >
    {label}
  </Link>
);
