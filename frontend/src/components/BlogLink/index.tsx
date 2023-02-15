import { Link } from "gatsby";
import React from "react";

interface BlogLinkProps {
  linkUrl: string;
}

export const BlogLink = ({ linkUrl }: BlogLinkProps) => (
  <div className="flex bg-white text-black gap-2 p-4 shadow hover:scale-105 transition-all cursor-pointer ">
    <Link to={linkUrl}>
      <figure className="max-w-64 h-48 bg-pink-200" />
      <div className="flex flex-col gap-2">
        <span className="text-gray-600">01.08.2023</span>
        <h1 className="text-2xl font-bold">Blogpost!</h1>
        <p className="text-xl">This is the description of the post</p>
      </div>
    </Link>
  </div>
);
