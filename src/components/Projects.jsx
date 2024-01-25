import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/addrecipe.png";
import project5 from "../assets/wedding.png";
import project6 from "../assets/theperks2.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: project4,
      href: "https://github.com/badri119/Add-Recipe-Frontend",
      Text: "AddRecipe",
    },
    {
      id: 2,
      src: project5,
      href: "https://github.com/badri119/Wedding-Website",
      href2: "https://www.jv-wedding.com/",
      Text: "Wedding Website",
    },
    {
      id: 3,
      src: project3,
      href: "https://github.com/badri119/Search-Engine",
      Text: "Java Search",
    },
    {
      id: 4,
      src: project1,
      href: "https://github.com/badri119/UWinCare",
      Text: "UWinCare",
    },
    {
      id: 5,
      src: project2,
      href: "https://github.com/badri119/FoodHunter-Recommendation-Engine",
      Text: "FoodHunter",
    },
    {
      id: 6,
      src: project6,
      href: "https://theperks.ai/",
      Text: "ThePerksAi",
    },
  ];
  return (
    <div name="portfolio">
      <div className="max-w-screen-lg p-4 pb-12 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out the stuff that I worked on:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, href, href2, Text }) => (
            <a href={href} target="_blank" rel="noreferrer">
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg h-86"
              >
                <div>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 h-60 w-full object-cover bg-white"
                  />
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-500 "></div>
                </div>
                <div className="flex items-center justify-center">
                  <p className="w-100 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold hover:text-gray-600">
                    {Text}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
