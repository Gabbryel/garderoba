import React from "react";
import Image from "next/image";
import wardrobe from "@/public/landing.png";
import Features from "@/components/HomeFeatures";
import HomePartners from "./HomePartners";
import HomeLocations from "./HomeLocations";
import HomeGallery from "./HomeGallery";
const HomePage = () => {
  return (<>
    <section className="w-full h-max relative">
      <div className="relative grid grid-cols-1 lg:grid-cols-5 h-max w-full text-4xl items-center justify-items-center">
        <Image src={wardrobe} alt='garderoba profesionala pentru evenimente' className='col-span-5 h-dvh min-w-full object-cover'/>
        <div className="h-full w-full bg-customIndigo absolute"></div>
        <div className="absolute">
          <h1 className="text-center text-white text-6xl md: text-4xl xl:text-8xl 2xl:text-10xl col-span-5 font-black p-2">Garderobă Profesională</h1>
          <h3 className="text-center text-white text-lg md:text-2xl xl:text-2xl 2xl:text-4xl col-span-5 font-thin mt-2">Perfect adaptabilă evenimentului organizat de tine</h3>
        </div>
      </div>
    </section>
    <Features />
    <HomeGallery />
    <HomePartners />
  </>
  );
};

export default HomePage;
