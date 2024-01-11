import React, { useState, useTransition } from "react";
import Avatar from "../assets/avatar.png";
import Tab from "../components/Tab";
import "./css/About.css";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <p className="wave_text">
        Javascript, HTML, CSS, Python, React, Tailwind, Ionic, Node, MongoDB,
        MySQL, PostgresSQL
      </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Windsor</li>
        <li>SRM Insitiute of Science and Technology</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: <p>Cycling, Playing football and Pizza Crawling</p>,
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white lg:h-screen">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16  sm:py-16">
          <img
            src={Avatar}
            width={500}
            height={600}
            className="rounded-md"
            alt="Avater"
          ></img>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg text-justify ">
              I sparked my interest in computer science while others found it
              boring in school. Beyond games and music, I was fascinated by the
              vast data it stored. The question of how computer technology would
              shape the future intrigued me, leading me to decide to pursue a
              career in the field.
            </p>
            <div className="flex flex-row mt-8 gap-8">
              <Tab
                selectTab={() => handleChange("skills")}
                active={tab === "skills"}
              >
                <p className="text-lg font-bold">Skills</p>
              </Tab>
              <Tab
                selectTab={() => handleChange("education")}
                active={tab === "education"}
              >
                <p className="text-lg font-bold">Education</p>
              </Tab>
              <Tab
                selectTab={() => handleChange("hobbies")}
                active={tab === "hobbies"}
              >
                <p className="text-lg font-bold"> Interests</p>
              </Tab>
            </div>

            <div className="mt-8">
              {Tab_Data.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
