import React, { useState } from "react";
import { Layout } from "../templates/Layout";
import Checkbox from "../components/Inputs/Checkbox";
import TextInput from "../components/Inputs/TextInput";
import Radio from "../components/Inputs/Radio";
import Input from "../components/Inputs/Input";
import Sortable from "../views/apply-form/Sortable";

export type TForm = {
  name: string;
  email: string;
  username: string;
  phoneNumber: number | string;
  study: string;
  year: number | string;
  positions: string[];
  experience: string;
  about: string;
  save: boolean;
};

const ApplyForm = () => {
  const [form, setForm] = useState<TForm>({
    name: "",
    email: "",
    username: "",
    phoneNumber: "",
    study: "",
    year: "",
    positions: [],
    experience: "",
    about: "",
    save: false,
  });

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

  const handleChange = (
    newValue: string | number | boolean | string[],
    key: keyof TForm
  ) => {
    setForm((prevForm) => {
      const newForm = {
        ...prevForm,
        [key]: newValue,
      };
      return newForm;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Layout>
      <form onSubmit={onSubmit} className="flex justify-center">
        <div className="flex flex-col mt-24 w-3/5 gap-8">
          <section className=" flex flex-col gap-4">
            <Input
              name="name"
              placeholder="Name Nameson"
              value={form.name}
              onChange={(e) => handleChange(e.currentTarget.value, "name")}
            >
              Full name
            </Input>
            <Input
              type="email"
              name="email"
              placeholder="name.nameson@email.co"
              value={form.email}
              onChange={(e) => handleChange(e.currentTarget.value, "email")}
            >
              Email
            </Input>
            <Input
              name="username"
              placeholder="namenam"
              value={form.username}
              onChange={(e) => handleChange(e.currentTarget.value, "username")}
            >
              NTNU username (used for card access)
            </Input>
            <Input
              type="number"
              name="phone"
              placeholder="444 55 999"
              value={form.phoneNumber}
              onChange={(e) =>
                handleChange(
                  e.currentTarget.valueAsNumber
                    ? e.currentTarget.valueAsNumber
                    : e.currentTarget.value,
                  "phoneNumber"
                )
              }
            >
              Phone number
            </Input>
            <Input
              name="study"
              placeholder="Your study"
              value={form.study}
              onChange={(e) => handleChange(e.currentTarget.value, "study")}
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
                      value={form.year}
                      onClick={() => handleChange(year, "year")}
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
                        if (form.positions.includes(position)) {
                          handleChange(
                            form.positions.filter((pos) => pos !== position),
                            "positions"
                          );
                        } else {
                          handleChange(
                            [...form.positions, position],
                            "positions"
                          );
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
            {form.positions.length > 1 && (
              <div className="flex flex-col-reverse gap-2 mb-8">
                <div className="peer">
                  <Sortable value={form.positions} setValue={handleChange} />
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
              value={form.experience}
              onChange={(e) =>
                handleChange(e.currentTarget.value, "experience")
              }
            >
              Do you have any relevant experience or knowledge? (Please list
              earier experiences, such as military, volunteer work,
              organizations, personal projects, achievements, etc.)
            </TextInput>
            <TextInput
              name="about"
              placeholder="We want to know more about you. Why do you want to join Orbit NTNU?"
              value={form.about}
              onChange={(e) => handleChange(e.currentTarget.value, "about")}
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
                  onClick={() => handleChange(true, "save")}
                >
                  Yes
                </Radio>
                <Radio
                  name="save"
                  id="no"
                  value={"No"}
                  onClick={() => handleChange(false, "save")}
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
