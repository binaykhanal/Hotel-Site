import React,{useState} from "react";
import { Card } from "antd";
import { CiWifiOn, CiParking1, CiDumbbell } from "react-icons/ci";
import { IoRestaurant, IoCafe } from "react-icons/io5";
import { MdPool, MdSpa, MdRoomService, MdSportsBar } from "react-icons/md";
import { FaConciergeBell, FaShuttleVan } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { GrLounge } from "react-icons/gr";

const amenities = [
  {
    icon: <CiWifiOn size={30} />,
    title: "Free Wifi",
    description: "Free wifi available throughout the hotel",
    iconBgColor: "bg-emerald-400",
  },
  {
    icon: <CiParking1 size={30} />,
    title: "Parking Space",
    description: "Secure parking space available for guests",
    iconBgColor: "bg-yellow-500",
  },
  {
    icon: <IoRestaurant size={30} />,
    title: "Restaurant",
    description: "Fine dining restaurant with gourmet meals",
    iconBgColor: "bg-green-500",
  },
  {
    icon: <GrLounge size={30} />,
    title: "Lounge",
    description: "A lounge is a room where people can sit and relax.",
    iconBgColor: "bg-teal-500",
  },
  {
    icon: <IoBedSharp size={30} />,
    title: "Rooms",
    description: "Most comfortable rooms that you can get",
    iconBgColor: "bg-red-500",
  },
  {
    icon: <MdSpa size={30} />,
    title: "Spa",
    description: "Revitalizing spa treatments and massages",
    iconBgColor: "bg-purple-500",
  },
  {
    icon: <MdSportsBar size={30} />,
    title: "Bar",
    description: "Enjoy drinks at our well-stocked bar",
    iconBgColor: "bg-pink-500",
  },
  {
    icon: <IoCafe size={30} />,
    title: "Cafeteria",
    description: "Relax with coffee and snacks at our café",
    iconBgColor: "bg-indigo-500",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="bg-[#f4f4f4] pt-5 font-poppins">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-semibold pt-3 md:pt-5 pb-5 md:pb-10 text-gray-800 hover:translate-y-2 duration-300">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className={`flex flex-col items-center justify-center p-5 shadow-lg cursor-default duration-500 ${hoveredIndex === index ? 'scale-110 bg-neutral-700' : ''}`}
              style={{
                height: "100%",
                maxWidth: "300px",
                borderTopRightRadius:"40px",
                borderTopLeftRadius:"0px",
                borderBottomRightRadius:"0px",
                borderBottomLeftRadius:"40px",
                margin: "auto",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className={`flex flex-col items-center justify-center h-full duration-500 ${hoveredIndex === index ? 'translate-y-6 text-white' : ''}`}>
                <h2
                  className={`text-4xl mb-3 p-3 rounded-full ${hoveredIndex === index ? 'bg-blue-500 text-white' : `${amenity.iconBgColor} text-black ` } `}
                >
                  {amenity.icon}
                </h2>
                <h3 className={`text-2xl font-semibold mb-2 text-center font-poppins ${hoveredIndex === index ? 'text-white' : 'text-black'}`}>
                  {amenity.title}
                </h3>
                <p className={`text-center font-poppins ${hoveredIndex === index ? 'text-white' : 'text-black'}`}>
                  {amenity.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

