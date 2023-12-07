import React from "react";

const About = () => {
  return (
    <div name="about">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className=" text-justify text-xl mt-5">
          My name is Badri and I am a developer with strong interest in both
          Frontend and Backend development.{" "}
          <span className="text-teal-400">
            How I ignited curiosity in the field of computer science;
          </span>{" "}
          While all my friends complained about the computer science lectures in
          school to be boring, I eagerly awaited it every week, not just for
          games that were played or the music we listened to, an enormous amount
          of data it stores, although that was a large part of it. Rather, it
          was because of the information it gave me. Thereupon was a question
          that always lingered in the back of my mind - how will the computer
          and its technology shape the future? At that point, I had made my
          decision to work on something that is related to the field of
          computers. Creating interfaces and mechanisms for the flow and access
          of information is something that really caught my eye.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
