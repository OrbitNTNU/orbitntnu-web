import { Link } from "gatsby";
import React from "react";
import { Button } from "../Button";

export const JoinUsHero = () => (
  <div className="bg-gray-900 py-16 px-8 text-center flex justify-center">
    <div className="max-w-64 md:max-w-xl">
      <h1 className="text-3xl font-bold uppercase">We are recruiting!</h1>
      <p className="my-8 text-lg">
        Check out our open positions and apply by 22 January!
      </p>
      <Link to="/join">
        <Button label="READ MORE" />
      </Link>
    </div>
  </div>
);
