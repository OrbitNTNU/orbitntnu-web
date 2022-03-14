import React from "react";

interface ProfileCardProps {
  title: string;
  name: string;
  email: string;
  phonenumber: number;
}

export const ProfileCard = ({ title, name, email, phonenumber }: ProfileCardProps) => (
    <figure className="bg-blue-600 font-bold py-2 px-4 w-full md:max-w-64">
        <p>{title}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phonenumber}</p>
    </figure>
);