import React from "react";
import main from "../assets/main.png";
import "./css/Home.css";
const Home = () => {
  return (
    <section>
      <div
        name="home"
        className=" h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-700"
      >
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-12 md:h-screen h-3/4">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
                <span className="text-transparent bg-clip-text style_text_main">
                  Hello, I am{" "}
                </span>
                <br />
                <span>Badrinath Vasudevan</span>
              </h1>
              <p className="text-white text-base sm:text-lg lg:text-xl mb-6 px-10 md:px-0">
                I am a developer with strong interest in both Frontend and
                Backend development.
              </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <img
                  className="rounded-md absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  src={main}
                  alt="Main_Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
