import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/11/28/11/54/bed-6830011_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/08/17/23/45/hotel-420260_960_720.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="bg-[#f4f4f4]" id="gallery">
      <div className="container mx-auto pt-3 md:pt-10">
        <h1 className=" text-center font-poppins text-[28px] md:text-[35px] font-semibold pt-4 text-gray-800 hover:translate-y-2 duration-300">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 md:mt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden hover:scale-105 duration-500 ${
                index === 0 || index === 2
                  ? "col-span-1 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              <img
                src={image.src}
                alt={`Image ${index}`}
                className="w-full object-cover h-48 sm:h-60 md:h-72 lg:h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
