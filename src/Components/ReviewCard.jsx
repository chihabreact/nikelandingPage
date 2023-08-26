import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        className="rounded-full object-cover h-[120px] w-[120px]"
        alt={customerName}
      />
      <p className="text-center gap-2.5 mt-6 max-w-sm info-text justify-center">
        {feedback}
      </p>
      <div className="flex">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt=""
        />
        <p className="text-xl mt-1 font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
