"use client";
import Image from "next/image";
import React from "react";

import { Card, Carousel } from "../ui/apple-cards-carousel";
export function Insights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 md:mt-36 mt-56">
      <h2 className="max-w-7xl pl-10  mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Latest Insights
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
   
  {
    
    title: "",
    src: "/images/insights1.png",

  },
  {
    title: "",
    src:"/images/insights2.png",

   
  },
  {
    title: "",
    src: "/images/insights3.png",
   
  },
  


  
];
