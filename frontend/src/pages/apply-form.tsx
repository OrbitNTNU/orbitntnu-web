import React, { useState } from "react";
import { Layout } from "../templates/Layout";
import Checkbox from "../components/Inputs/Checkbox";
import TextInput from "../components/Inputs/TextInput";
import Radio from "../components/Inputs/Radio";
import Input from "../components/Inputs/Input";
import Sortable from "../views/apply-form/Sortable";

const ApplyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number | string>("");
  const [study, setStudy] = useState("");
  const [year, setYear] = useState<number | string>("");
  const [wantedPosition, setWantedPosition] = useState<String[]>([]);
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [save, setSave] = useState(false);

  const yearOfStudy = [1, 2, 3, 4, 5];
  const positions = [
    "Key Account Manager",
    "Website Design, UI/UX",
    "Event Manager",
    "Social Media Manager",
    "Graphic Designer",
    "Art Director",
    "Director of Photography",
    "Cinematographer and Video Manager",
    "Chief Marketing Officer (CMO)",
    "Sponsor Team Lead",
    "System Engineering Team Lead",
    "ADCS (Control Systems) Team Leader",
    "DevOps Team Leader",
    "Project Manager",
    "Human Resources Manager",
    "Place me where I belong",
  ];

  return (
    <Layout>
      <form className="flex justify-center">
        <div className="flex flex-col mt-24 w-3/5 gap-8">
          <section className=" flex flex-col gap-4">
            <Input
              name="name"
              placeholder="Name Nameson"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            >
              Full name
            </Input>
            <Input
              type="email"
              name="email"
              placeholder="name.nameson@email.co"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            >
              Email
            </Input>
            <Input
              name="username"
              placeholder="namenam"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            >
              NTNU username (used for card access)
            </Input>
            <Input
              type="number"
              name="phone"
              placeholder="444 55 999"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(
                  e.currentTarget.valueAsNumber
                    ? e.currentTarget.valueAsNumber
                    : e.currentTarget.value
                )
              }
            >
              Phone number
            </Input>
            <Input
              name="study"
              placeholder="Your study"
              value={study}
              onChange={(e) => setStudy(e.currentTarget.value)}
            >
              Field of study
            </Input>
            <div className="flex flex-col-reverse gap-2">
              <div className="flex gap-2 peer">
                {yearOfStudy.map((year) => {
                  return (
                    <Radio
                      name="year"
                      id={`year-${year}`}
                      key={`year-${year}`}
                      value={year}
                      onClick={() => setYear(year)}
                    >
                      {year}
                    </Radio>
                  );
                })}
              </div>
              <label
                htmlFor="year"
                className="text-sm mt-4 peer-hover:text-orbit-yellow"
              >
                Year of study
              </label>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <div className="flex flex-col-reverse gap-2 mb-5">
              <div className="peer grid grid-cols-4 gap-2">
                {positions.map((position) => {
                  return (
                    <Checkbox
                      name={position}
                      key={`position-${position}`}
                      value={position}
                      onChange={() => {
                        if (wantedPosition.includes(position)) {
                          setWantedPosition((prevPos) => {
                            return prevPos.filter((pos) => pos !== position);
                          });
                        } else {
                          setWantedPosition((prevPos) => [
                            ...prevPos,
                            position,
                          ]);
                        }
                      }}
                    >
                      {position}
                    </Checkbox>
                  );
                })}
              </div>
              <label
                htmlFor="positions"
                className="text-sm mt-4 peer-hover:text-orbit-yellow"
              >
                What position(s) do you wish to apply for?
              </label>
            </div>
            {wantedPosition.length > 1 && (
              <div className="flex flex-col-reverse gap-2 mb-8">
                <div className="peer">
                  <Sortable
                    value={wantedPosition}
                    setValue={setWantedPosition}
                  />
                </div>
                <label
                  htmlFor=""
                  className="text-sm peer-hover:text-orbit-yellow"
                >
                  Please rate the positions based on your preference
                </label>
              </div>
            )}
          </section>
          <section className="flex flex-col gap-4">
            <TextInput
              name="experience"
              placeholder="Tell us about your relevant experience and knowlege!"
              value={experience}
              onChange={(e) => setExperience(e.currentTarget.value)}
            >
              Do you have any relevant experience or knowledge? (Please list
              earier experiences, such as military, volunteer work,
              organizations, personal projects, achievements, etc.)
            </TextInput>
            <TextInput
              name="about"
              placeholder="We want to know more about you. Why do you want to join Orbit NTNU?"
              value={about}
              onChange={(e) => setAbout(e.currentTarget.value)}
            >
              Tell us a little bit about yourself, your hobbies, your motivation
              and why you want to join Orbit NTNU.
            </TextInput>
          </section>
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="save">
                Can we save your information and contact you if other Orbit
                opportunities arise later? We're recruiting twice a year, and we
                sometimes have positions appearing during the year!
              </label>
              <div className="flex gap-4">
                <Radio
                  name="save"
                  id="yes"
                  value={"Yes"}
                  onClick={() => setSave(true)}
                >
                  Yes
                </Radio>
                <Radio
                  name="save"
                  id="no"
                  value={"No"}
                  onClick={() => setSave(false)}
                >
                  No
                </Radio>
              </div>
            </div>
          </section>
          <button className="bg-orbit-blue hover:bg-blue-800 my-8 p-4 text-xl font-bold">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ApplyForm;
