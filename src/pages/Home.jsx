import React from "react";
import { partNers } from "../common/Elements";

const Home = () => {
  return (
      <div className=" bg-[#f4f4f4] drop-shadow-md">
        <div className=" flex grayscale justify-between container mx-auto ">
          {partNers.map((item) => {
            return (
              <section key={item.id}>
                <img src={item.img} alt="partners" className=" h-12 md:h-24" />
              </section>
            );
          })}
        </div>
      </div>
  );
};

export default Home;
