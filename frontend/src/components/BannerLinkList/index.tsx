import React from "react";
import { BannerLink } from "../BannerLink/BannerLink";

export const BannerLinkList = () => (
  <ul>
    <li className="px-4 py-2">
      <BannerLink />
    </li>
    <li className="px-4 py-2">
      <BannerLink />
    </li>
    <li className="px-4 py-2">
      <BannerLink />
    </li>
  </ul>
);
