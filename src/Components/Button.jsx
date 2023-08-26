import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 py-4 px-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconURL}
        alt="arrowRightIcon"
        className="ml-2 w-5 h-5 rounded-full"
      />
    </button>
  );
};

export default Button;
