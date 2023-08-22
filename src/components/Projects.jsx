import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: project3,
      href:'https://github.com/badri119/Search-Engine',
    },
    {
      id: 2,
      src: project1,
      href: 'https://github.com/badri119/UwinCare-Frontend',
    },
    {
      id: 3,
      src: project2,
      href:'https://github.com/badri119/FoodHunter-Recommendation-Engine',
    },
    
    
  ];
  return (
    <div
    name="projects"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p className="py-6">Check out the stuff that I worked on:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src, href }) => (
          <a href = {href} target="_blank" rel="noreferrer">
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects