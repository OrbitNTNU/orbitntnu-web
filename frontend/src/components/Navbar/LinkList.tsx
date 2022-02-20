import React from "react";
import { Link } from "gatsby";

export const LinkList = () => (
  <ul className="text-white absolute top-7 left-44 text-lg">
    <li className="inline-block mr-4">
      <Link to="/">SelfieSat</Link>
    </li>
    <li className="inline-block mr-4">
      <Link to="/">FRAMSAT-1</Link>
    </li>
    <li className="inline-block mr-4">
      <Link to="/">Sub-Orbital</Link>
    </li>
  </ul>
);
