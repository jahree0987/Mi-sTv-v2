"use client";
import React from "react";
import Hero from "./components/Hero";
import { data } from "./data";
import { StarIcon } from "@chakra-ui/icons";
import SingleCard from "./components/SingleCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "../home/cardData.js";
import { cardData2 } from "../home/cardData2";
import { cardData3 } from "../home/cardData3";
import { cardData4 } from "../home/cardData4";

import SliderList from "./components/Slider";
const Home = () => {
  return (
    <>
      <Hero data={data} />;
      <SliderList
        header="Latest Anime"
        caption="When Anime is life!"
        cardData={cardData}
      />
      <SliderList
        header="Most Recommended"
        caption="Go! OTAKU "
        cardData={cardData2}
      />
      <SliderList
        header="Mi-chan's recommendation"
        caption="MIMI CHAN!!!"
        cardData={cardData3}
      />
      <SliderList
        header="Best Anime So Far"
        caption="YAY"
        cardData={cardData4}
      />
    </>
  );
};

export default Home;
