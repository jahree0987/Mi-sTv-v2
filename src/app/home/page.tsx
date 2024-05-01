"use client";
import React from "react";
import image from "./assets/Anohana.jpg";
import Image from "next/image";
import { ChevronRightIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Tab, TabList, Tabs, Tooltip } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";
import Hero from "./components/Hero";
import { data } from "./data";
const Home = () => {
  return <Hero data={data} />;
};

export default Home;
