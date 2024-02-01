import React from "react";
import github from "../assets/github.jpeg";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div name="contact">
      <div className=" max-w-screen-lg p-30 mx-auto flex flex-col w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
        </div>

        <div className=" flex flex-col px-16 md:px-0 md:flex-row gap-10 justify-center py-7">
          {/* LinkedIn Box */}
          <div className=" hover:scale-105 duration-500 shadow-lg shadow-blue-500 max-w-md rounded-lg overflow-hidden py-12 mb-6 w-full sm:w-96 text-center">
            <div className=" flex justify-center content-center">
              <img
                className="w-28 h-28 rounded-full"
                src={linkedin}
                alt="linkedin"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Connect on LinkedIn</h2>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/badrinath-vasudevan-3a3335163/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block hover:scale-105 duration-500"
              >
                Visit Profile
              </a>
            </div>
          </div>
          {/* GitHub*/}
          <div className=" hover:scale-105 duration-500 shadow-lg shadow-white max-w-md rounded-lg overflow-hidden py-12 mb-6 w-full sm:w-96 text-center">
            <div className=" flex justify-center content-center">
              <img
                className="w-28 h-28 rounded-full"
                src={github}
                alt="github"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Check out my GitHub</h2>
            <div className="flex justify-center">
              <a
                href="https://github.com/badri119"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block hover:scale-105 duration-500"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
