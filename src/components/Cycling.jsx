import React from "react";
import Bike1 from "../assets/bike1.png";

const Cycling = () => {
  return (
    <div name="cycling">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            Cycling!
          </p>
        </div>
        <p className=" text-justify text-xl mb-10">
          Cycling holds an irresistible charm for me as it seamlessly combines
          my passions into one exhilarating experience. The wind rushing through
          my hair as I pedal brings an unmatched sense of freedom, intertwined
          with the anticipation of indulging in delightful treats like donuts
          and ice creams along the way. The rhythm of the wheels on the pavement
          is my gateway to exploration, leading me to undiscovered corners and
          hidden gems in new places. Conquering challenging hills feeds my
          appetite for both adventure and accomplishment, reminding me of my
          inner strength. With each turn of the pedal, I relish the harmonious
          balance between savoring life's pleasures and nurturing my health,
          making cycling not just a hobby, but a way of embracing the world with
          all my senses.
        </p>
        <div>
          <img
            src={Bike1}
            alt="cyclist"
            className=" rounded-2xl ml-auto mr-auto mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Cycling;
