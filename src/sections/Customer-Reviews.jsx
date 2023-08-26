import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        what are <span className="text-coral-red ">Customers </span>
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our stisfied customers about their exceptional
        experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
