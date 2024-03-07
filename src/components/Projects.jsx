import React from "react";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/addrecipe.png";
import project5 from "../assets/wedding.png";
import project7 from "../assets/bikeproject.png";
import project8 from "../assets/API.png";
import "./css/Home.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: project8,
      href: "https://github.com/badri119/API-Generator",
      href2: "https://api-generator-frontend.vercel.app/",
      title: "API Generator",
      text: "Created a fun API generator application where you can mess around with APIs and built a game to test your HTTP knowledge",
    },
    {
      id: 2,
      src: project7,
      href: "https://github.com/badri119/Fit-go",
      href2: "https://www.youtube.com/watch?v=5u-XRX5Rmng",
      title: "Fit.go",
      text: "I created an app for connecting people based on their outdoor activity preferences, inspired by my passion for cycling and outdoor adventures.",
    },
    {
      id: 3,
      src: project4,
      href: "https://github.com/badri119/Add-Recipe-Frontend",
      href2: "https://www.youtube.com/watch?v=v_g3jq2_uP0",
      title: "AddRecipe",
      text: "Built a website where users can add recipes and view other recipes",
    },
    {
      id: 4,
      src: project5,
      href: "https://github.com/badri119/Wedding-Website",
      href2: "https://www.jv-wedding.com/",
      title: "Wedding Website",
      text: "I designed and created a wedding website for my sister who got married recently!",
    },
    {
      id: 5,
      src: project3,
      href: "https://github.com/badri119/Search-Engine",
      title: "Java Search",
      text: "Created a Java-based Search Engine with keyword counting, web scraping, sorting, frequency analysis, and domain name extraction, integrated with a Javalin-based GUI",
    },
    {
      id: 6,
      src: project1,
      href: "https://github.com/badri119/UWinCare",
      title: "UWinCare",
      text: "A dyanmic full-stack mobile application for students to express their feelings anonymously and seek help",
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
          {projects.map(({ id, src, href, href2, title, text }) => (
            // <a href={href} target="_blank" rel="noreferrer"></a>
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-86">
              <div>
                <img
                  src={src}
                  alt=""
                  className="rounded-t-md duration-200 hover:scale-105 h-60 w-full object-cover bg-white"
                />
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-500 "></div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="w-100 px-6 pt-3 m-4 font-bold">{title}</p>
                <div className="px-5 pb-3">
                  <p className="">{text}</p>
                </div>
                <div className="flex justify-between gap-8 py-2">
                  <div className="">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-button hover:bg-blue-500 text-white font-bold py-2 px-4 hover:rounded inline-block hover:scale-105 hover:duration-500 duration-500"
                    >
                      Code
                    </a>
                  </div>
                  {href2 ? (
                    <div className="link-container">
                      <a
                        href={href2}
                        target="_blank"
                        rel="noreferrer"
                        className="link-button hover:bg-blue-500 text-white font-bold py-2 px-4 hover:rounded inline-block hover:scale-105 hover:duration-500 duration-500"
                      >
                        Demo
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
