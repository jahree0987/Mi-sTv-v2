import React, { useEffect, useState } from "react";

import { ChevronRightIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Tab, TabList, Tabs, Tooltip, useStatStyles } from "@chakra-ui/react";

interface Featured {
  image: string;
  titleImage: string;
  title: string;
  genre: string;
  description: string;
}
interface HeroProps {
  data: Featured[];
}

const Hero = ({ data }: HeroProps) => {
  const [current, setCurrent] = useState(data[0]);


  const setCurrentWithDelay = (item: Featured) => {
    setTimeout(() => {
      setCurrent(item);
    }, 300); // Adjust delay time as needed (300 milliseconds in this example)
  };
  return (
    <>
      <div
        className="h-[90vh]  bg-opacity-25 flex items-center"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className=" w-[30%] bg-black bg-opacity-50 p-10">
          <img
            src={current.titleImage}
            alt="title"
            className=" h-30 w-50"
          ></img>

          <h2 className="text-white text-[50px]">{current.title}</h2>
          <p className="text-white text-xs">{current.description}</p>
          <span className="text-gray-200  ">*16 + {current.genre}</span>
          <div className="flex gap-3 mt-5">
            <button>
              <ChevronRightIcon /> Play now
            </button>
            <Tooltip label="Add to wishlist" color={"white"}>
              <button className="bg-opacity-0 border border-orange-500 border-solid ">
                <SmallAddIcon color={"#F47521"} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>{" "}
      <Tabs position="relative" variant="unstyled" className="mt-[-40px]">
        <TabList className="flex gap-2 justify-center">
          {/* <button
            className="w-20 h-3  rounded-sm"
            onClick={() => setCurrent(data[0])}
          ></button>
          <button className="w-20 h-3  rounded-sm" onClick={() => setCurrent(data[1])}></button>
          <button className="w-20 h-3  rounded-sm" onClick={() => setCurrent(data[2])}></button> */}
          {data.map((item, index) => (
            <button
              key={index}
              className="w-20 h-3 rounded-sm"
              onClick={() => setCurrentWithDelay(item)}
            ></button>
          ))}
          {/* <Tab className="w-20 h-3  rounded-sm"></Tab>
          <Tab className="w-20 h-3 rounded-sm"></Tab>
          <Tab className="w-20 h-3 rounded-sm"></Tab> */}
        </TabList>
      </Tabs>
    </>
  );
};

export default Hero;
