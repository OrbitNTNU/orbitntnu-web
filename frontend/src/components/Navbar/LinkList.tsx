import React from "react";
import { Link } from "gatsby";

export const LinkList = () => (
  <ul className="text-white absolute top-4 left-44 text-ml">
    <li className="inline-block mr-4 decoration-2 hover:underline">
      <Link to="/">SelfieSat</Link>
    </li>
    <li className="inline-block mr-4 decoration-2 hover:underline">
      <Link to="/">FRAMSAT-1</Link>
    </li>
    <li className="inline-block mr-4 decoration-2 hover:underline">
      <Link to="/">Sub-Orbital</Link>
    </li>
  </ul>
);
