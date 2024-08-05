import React from "react";
import { venDiagram } from "../common/Elements";

const VennDiagram = () => {
  return (
    <div className=" bg-[#191818] text-white mt-6 md:mt-20 py-6 md:py-20 font-poppins">
    <div className=" lg:flex container mx-auto justify-between text-center lg:text-left">
      <section>
        <h2 className=" border-b-2 py-4 text-lg md:text-2xl md:leading-normal">
          Hotels with the best<br/> service and quality always
        </h2>
        <p className=" py-2 hover:animate-bounce">⭐⭐⭐⭐⭐ 5.0</p>
        <p className=" text-sm text-gray-500 pb-2 md:pb-0">a five-star hotel</p>
      </section>
      <div className=" flex relative justify-center lg:justify-start">
        {venDiagram.map((item,idx) => {
          return (
            <section key={idx} className={`rounded-full hover:scale-125 text-[#888787] hover:text-white duration-300 lg:border-2 border-gray-300 text-center px-10 content-center md:relative ${idx<2 && "-right-7"} ${idx<1 && "left-14"}`}>
              <p className=" text-lg font-medium text-white">{item.num} </p>
              <p className=" text-[9px] font-normal ">{item.desc}</p>
            </section>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default VennDiagram;
