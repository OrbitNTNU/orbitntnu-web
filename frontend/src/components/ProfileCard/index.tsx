import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface ProfileCardProps {
  title: string;
  name: string;
  email: string;
  phonenumber: number;
}

export const ProfileCard = ({
  title,
  name,
  email,
  phonenumber,
}: ProfileCardProps) => (
  <figure className="bg-gray-900 w-48 p-4 flex flex-col">
    <StaticImage
      src="../../images/ceo.png"
      alt="Small Logo"
      className="w-40 h-40 rounded-full m-auto mb-2"
    />
    <p className="text-orange-500 -mb-2">{title}</p>
    <p className="text-xl">{name}</p>
    <p className="font-thin">{email}</p>
    <p className="font-thin">{phonenumber}</p>
  </figure>
);
