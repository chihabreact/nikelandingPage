import React from "react";
import { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
const HeroSection = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className=" flex xl:flex-row gap-10 max-container flex-col justify-center min-h-screen  w-full "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          our summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white  xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />{" "}
          <span className="text-coral-red inline-block mt-3 ">Nike </span>
          <span> Shoes</span>
        </h1>
        <p className="sm:max-w-sm font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6">
          Disover stylish Nike arrivals , quality comfort, and innovation for
          your active life
        </p>
        <Button label="shop now" iconURL={arrowRight}></Button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold ">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen
                       max-xl:py-40 bg-primary bg-cover bg-hero bg-center   "
      >
        <img
          src={bigShoeImg}
          alt="bigshoe1"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
        <div className="flex sm:gap-6 gap-4 absolute sm:left-[10%] max-sm:px-6 -bottom-[5%]">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                bigShoeImg={bigShoeImg}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
              ></ShoeCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
