import React, { useState } from "react";
import { Layout } from "../templates/Layout";
import Checkbox from "../components/Inputs/Checkbox";
import TextInput from "../components/Inputs/TextInput";
import Radio from "../components/Inputs/Radio";
import Input from "../components/Inputs/Input";
import Sortable from "../views/apply-form/Sortable";
import { normalize } from "../utils/normalizePhoneNumber";

export type TForm = {
  name: string;
  email: string;
  username: string;
  phoneNumber: string;
  study: string;
  year: number | string;
  positions: String[];
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

  const updateForm = (key: keyof TForm) => {
    return function (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <section className="flex flex-col mt-24 w-3/5 gap-4">
          <Input
            name="name"
            placeholder="Name Nameson"
            value={form.name}
            onChange={updateForm("name")}
          >
            Full name
          </Input>
          <Input
            type="email"
            name="email"
            placeholder="name.nameson@email.co"
            value={form.email}
            onChange={updateForm("email")}
          >
            Email
          </Input>
          <Input
            name="username"
            placeholder="namenam"
            value={form.username}
            onChange={updateForm("username")}
          >
            NTNU username (used for card access)
          </Input>
          <Input
            type="number"
            name="phone"
            placeholder="444 55 999"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm((prev) => {
                let newNum = normalize(e.target.value, prev.phoneNumber);
                return {
                  ...prev,
                  phoneNumber: newNum,
                };
              })
            }
          >
            Phone number
          </Input>
          <Input
            name="study"
            placeholder="Your study"
            value={form.study}
            onChange={updateForm("study")}
          >
            Field of study
          </Input>
          <div className="flex flex-col-reverse gap-2">
            <div className="flex gap-2 peer">
              {yearOfStudy.map((chosenYear) => {
                return (
                  <Radio
                    name="year"
                    id={`year-${chosenYear}`}
                    key={`year-${chosenYear}`}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        year: chosenYear,
                      }))
                    }
                  >
                    {chosenYear}
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
          <div className="flex flex-col-reverse gap-2 mb-5">
            <div className="peer grid grid-cols-4 gap-2">
              {positions.map((position) => {
                return (
                  <Checkbox
                    name={position}
                    key={`position-${position}`}
                    value={position}
                    onChange={() =>
                      setForm((prev) => {
                        console.log(form);
                        let newPos = prev.positions.includes(position)
                          ? prev.positions.filter((pos) => pos !== position)
                          : [...prev.positions, position];
                        return {
                          ...prev,
                          positions: newPos,
                        };
                      })
                    }
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
                <Sortable value={form.positions} setValue={setForm} />
              </div>
              <label
                htmlFor=""
                className="text-sm peer-hover:text-orbit-yellow"
              >
                Please rate the positions based on your preference
              </label>
            </div>
          )}
          <TextInput
            name="experience"
            placeholder="Tell us about your relevant experience and knowledge!"
            value={form.experience}
            onChange={updateForm("experience")}
          >
            Do you have any relevant experience or knowledge? (Please list
            earier experiences, such as military, volunteer work, organizations,
            personal projects, achievements, etc.)
          </TextInput>
          <TextInput
            name="about"
            placeholder="We want to know more about you. Why do you want to join Orbit NTNU?"
            value={form.about}
            onChange={updateForm("about")}
          >
            Tell us a little bit about yourself, your hobbies, your motivation
            and why you want to join Orbit NTNU.
          </TextInput>
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
                onClick={() => setForm((prev) => ({ ...prev, save: true }))}
              >
                Yes
              </Radio>
              <Radio
                name="save"
                id="no"
                onClick={() => setForm((prev) => ({ ...prev, save: false }))}
              >
                No
              </Radio>
            </div>
          </div>
          <button
            onClick={() => console.log(form)}
            className="bg-orbit-blue hover:bg-orbit-yellow my-8 py-4 px-6 rounded"
          >
            Submit
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default ApplyForm;
