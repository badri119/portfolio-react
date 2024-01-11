import React from "react";

const Tab = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-white border-b border-red-600"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default Tab;
