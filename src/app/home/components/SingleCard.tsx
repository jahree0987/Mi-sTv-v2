import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import React from "react";

interface SingleCardProps {
  cardImage: string;
  title: string;
  description: string;
  reviews: number;
}

const SingleCard = ({
  cardImage,
  title,
  description,
  reviews,
}: SingleCardProps) => {
  console.log("CARD IMAGE", cardImage);
  return (
    <>
      <div
        className=" group card"
        style={{
          backgroundImage: `url(${cardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative p-4 bg-black bg-opacity-50 rounded-md h-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="text-white text-2xl ">{title}</h4>
          <p className="text-white text-xs">{description}</p>
          <div className="flex justify-center mt-2 items-center gap-3">
            <p className="text-white text-sm">{reviews}</p>
            <StarIcon color={"yellow"} />
            <button>
              <ChevronRightIcon /> Play now
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-white mt-3">{title}</h3>
      <p className="text-gray-400 text-xs">Sub | Dub</p>
    </>
  );
};

export default SingleCard;
