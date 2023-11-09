import React, { useState } from "react";
import { Layout } from "../templates/Layout";
import Checkbox from "../components/Inputs/Checkbox";
import TextInput from "../components/Inputs/TextInput";
import Radio from "../components/Inputs/Radio";
import Input from "../components/Inputs/Input";
import Sortable from "../views/apply-form/Sortable";
import { normalize } from "../utils/normalizePhoneNumber";
import studiesData from "../../static/ntnuStudies/ntnuStudies.json";
import { graphql } from "gatsby";

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
  additionalComments: string | null;
  save: boolean;
};

const ApplyForm = ({ data }) => {
  const { sanityApplicationform } = data;
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
    additionalComments: null,
    save: false,
  });

  const [error, setError] = useState<string[]>([]);

  const [studies, setStudies] = useState(studiesData);

  const [accordion, setAccordion] = useState(false);

  const yearOfStudy = [1, 2, 3, 4, 5];
  const positions = sanityApplicationform.positions;

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

  const checkErrors = () =>
    setError(
      Object.keys(form).filter((key) => {
        if (key === "positions") return form.positions.length === 0;
        if (key === "additionalComments") return false;
        return form[key] === "";
      })
    );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkErrors();
    if (error.length > 0) return;
    console.log(error);
  };

  const updateError = (key: keyof TForm) => {
    if (error.includes(key)) return true;
    return false;
  };

  return (
    <Layout>
      <form className="flex justify-center" onSubmit={handleFormSubmit}>
        <section className="flex flex-col mt-24 w-3/5 gap-4">
          <Input
            name="name"
            placeholder="Name Nameson"
            value={form.name}
            onChange={updateForm("name")}
            error={updateError("name")}
          >
            Full name
          </Input>
          <Input
            type="email"
            name="email"
            placeholder="name.nameson@email.co"
            value={form.email}
            onChange={updateForm("email")}
            error={updateError("email")}
          >
            Email
          </Input>
          <Input
            name="username"
            placeholder="namenam"
            value={form.username}
            onChange={updateForm("username")}
            error={updateError("username")}
          >
            NTNU username (used for card access)
          </Input>
          <Input
            type="text"
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
            error={updateError("phoneNumber")}
          >
            Phone number
          </Input>
          <div
            onFocus={() => setAccordion(true)}
            onBlur={() => setAccordion(false)}
            className="flex flex-col relative w-full md:w-96"
          >
            <Input
              name="study"
              placeholder="Your study"
              value={form.study}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  study: e.target.value,
                }));
                setStudies(
                  studiesData.filter((study) =>
                    study.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                );
              }}
              error={updateError("study")}
            >
              Field of study
            </Input>
            {accordion && (
              <ul className="bg-black overflow-auto max-h-72 absolute top-16 w-full text-sm md:w-96 px-2 p-2 rounded scrollbar-hide">
                {studies.map((study) => (
                  <li
                    key={study.code}
                    className="py-2 md:py-1 cursor-pointer hover:bg-orbit-yellow px-2 rounded"
                    onMouseOver={() => {
                      setForm((prev) => ({ ...prev, study: study.name }));
                    }}
                  >
                    {study.name}, {""}
                    <span className="font-extrabold">{study.code}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col-reverse gap-2">
            <div className="flex flex-col md:flex-row gap-2 peer">
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
                    error={updateError("year")}
                  >
                    {chosenYear}
                  </Radio>
                );
              })}
            </div>
            <label
              htmlFor="year"
              className={`text-sm mt-4 peer-hover:text-orbit-yellow ${
                updateError("year") ? "text-red-500" : ""
              }`}
            >
              Year of study
            </label>
          </div>
          <div className="flex flex-col-reverse gap-2 mb-5">
            <div className="peer grid md:grid-cols-4 gap-2">
              {positions.map((position) => {
                return (
                  <Checkbox
                    name={position}
                    key={`position-${position}`}
                    value={position}
                    onChange={() =>
                      setForm((prev) => {
                        let newPos = prev.positions.includes(position)
                          ? prev.positions.filter((pos) => pos !== position)
                          : [...prev.positions, position];
                        return {
                          ...prev,
                          positions: newPos,
                        };
                      })
                    }
                    error={updateError("positions")}
                  >
                    {position}
                  </Checkbox>
                );
              })}
            </div>
            <label
              htmlFor="positions"
              className={`text-sm mt-4 peer-hover:text-orbit-yellow ${
                updateError("positions") ? "text-red-500" : ""
              }`}
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
            error={updateError("experience")}
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
            error={updateError("about")}
          >
            Tell us a little bit about yourself, your hobbies, your motivation
            and why you want to join Orbit NTNU.
          </TextInput>
          <TextInput
            name="comments"
            value={form.additionalComments ? form.additionalComments : ""}
            className="h-14"
            placeholder="Not required"
            onChange={updateForm("additionalComments")}
          >
            Do you have any additional comments you would like to mention in
            your application?
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
                onChange={() => setForm((prev) => ({ ...prev, save: true }))}
              >
                Yes
              </Radio>
              <Radio
                name="save"
                id="no"
                checked={!form.save}
                onChange={() => setForm((prev) => ({ ...prev, save: false }))}
              >
                No
              </Radio>
            </div>
          </div>
          <button className="bg-orbit-blue hover:bg-orbit-yellow my-8 py-4 px-6 rounded">
            Submit
          </button>
        </section>
      </form>
    </Layout>
  );
};

export default ApplyForm;

export const query = graphql`
  query ApplicationFormQuery {
    sanityApplicationform {
      positions
    }
  }
`;
