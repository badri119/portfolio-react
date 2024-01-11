import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-slate-400 sm:text-lg rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default Navigation;
