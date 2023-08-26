import React from "react";

const Button = ({ label, iconURL, style }) => {
  return (
    <button
      className={`${
        style
          ? "bg-white border-slate-gray border-2 text-slate-gray flex justify-center items-center gap-2  py-4 px-4 font-montserrat text-lg leading-none rounded-full"
          : " flex justify-center items-center gap-2  py-4 px-4 font-montserrat text-lg leading-none rounded-full   bg-coral-red  text-white border-coral-red"
      } `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRightIcon"
          className={`ml-2 w-5 h-5 rounded-full `}
        />
      )}
    </button>
  );
};

export default Button;
