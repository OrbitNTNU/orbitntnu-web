import React, { useState } from "react";
import { Layout } from "../templates/Layout";
import InputLabel from "../components/InputLabel";

const ApplyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState<number>();
  const [study, setStudy] = useState<number>();
  const [year, setYear] = useState<number>();
  const [wantedPositions, setWantedPositions] = useState([]);
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [save, setSave] = useState<boolean>();

  const years = [1, 2, 3, 4, 5];
  const positions = [
    "Key Account Manager",
    "Website Design, UI/UX",
    "Event Manager",
    "Social Media Manager",
    "Graphic Designer",
    "Art Director",
    "Director of Photography",
    "Cinemotographer and Video Manager",
    "Does not matter / Place me where I belong",
    "Chief Marketing Officer (CMO)",
  ];
  return (
    <Layout>
      <section className="mt-16 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
        <form className="flex flex-col">
          <InputLabel type="text" id="name" value={name}>
            Full name
          </InputLabel>
          <InputLabel type="email" id="email">
            Email
          </InputLabel>
          <InputLabel type="text" id="username">
            NTNU Student username (will be used for card access)
          </InputLabel>
          <InputLabel type="number" id="phone">
            Phone number
          </InputLabel>
          <InputLabel type="text" id="study">
            Field of study
          </InputLabel>
          <p>Year of study</p>
          <div className="flex justify-evenly">
            {years.map((year) => {
              return (
                <InputLabel
                  className="text-center"
                  key={`year-${year}`}
                  type="radio"
                  id={`year-${year}`}
                  name="study-year"
                >
                  {year}
                </InputLabel>
              );
            })}
          </div>
          <ul>
            <p>What position(s) do you wish to apply for?</p>
            {positions.map((position) => {
              return (
                <li key={position} className="my-2">
                  <InputLabel type="checkbox" id={position}>
                    {position}
                  </InputLabel>
                </li>
              );
            })}
          </ul>
          {/* TODO: rank wanted positions 
                    <label htmlFor="rate">
            If several, please rate the teams based on which you prefer to join.
            (Ignore this question if not)
          </label>
          */}
          <InputLabel type="text" id="experience">
            Do you have any relevant experience or knowledge? (Please list
            earier experiences, such as military, volunteer work, organizations,
            personal projects, achievements, etc.)
          </InputLabel>
          <InputLabel type="text" id="about">
            Tell us a little bit about yourself, your hobbies, your motivation
            and why you want to join Orbit NTNU.
          </InputLabel>
          <p>
            Can we save your information and contact you if other Orbit
            opportunities arise later? We're recruiting twice a year, and we
            sometimes have positions appearing during the year!
          </p>
          <ul className="flex gap-6">
            <li>
              <InputLabel type="radio" id="save" name="save">
                Yes
              </InputLabel>
            </li>
            <li>
              <InputLabel type="radio" id="save" name="save">
                No
              </InputLabel>
            </li>
          </ul>
        </form>
      </section>
    </Layout>
  );
};

export default ApplyForm;
