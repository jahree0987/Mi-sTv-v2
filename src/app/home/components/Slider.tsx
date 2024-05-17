import React from "react";
import { cardData } from "../cardData";
import Slider from "react-slick";
import SingleCard from "./SingleCard";

interface SliderListProps {
  header: string;
  cardData: any[];
  caption: string
}

const SliderList = ({ header, cardData, caption }: SliderListProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className=" w-[100%] h-[auto] ">
      <h2 className="text-3xl text-white mt-10 ml-3" >{header}</h2>
      <p className="text-gray-400 text-sm ml-3" >{caption} </p>
      <div className="slider-container mt-10 w-[98%] p-10">
        <Slider {...settings} className="pl-4">
          {cardData.map((data: any, index: any) => {
            return (
              <div key={index}>
                <SingleCard
                  cardImage={data.cardImage}
                  title={data.title}
                  reviews={data.reviews}
                  description={data.description}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderList;
