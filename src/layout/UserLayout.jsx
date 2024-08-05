import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSwipeable } from "react-swipeable";
import Dots from "../components/Dots";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import VennDiagram from "../components/VennDiagram";
import Services from "../pages/Services";
import Rooms from "../pages/Rooms";
import ScrolltopButton from "../common/SrolltopButton";
import ScrollNav from "../components/ScrollNav";
import About from "../pages/About";

const UserLayout = () => {
  const images = [
    "https://i.pinimg.com/originals/d4/b9/64/d4b96401e23007ed49ce5b25bba7dd9f.jpg",
    "https://th.bing.com/th/id/R.fd7b996f2e00e3715d4211863b2fdabf?rik=hNpMMNtcoHdgdQ&riu=http%3a%2f%2fwww.bestwesternplusmeridian.com%2fContent%2fimages%2fQueen-Room.jpg&ehk=KCbSmDyFZVzRHEPvo3ervhhEh3CHbDcQQbR%2btZeyFuo%3d&risl=&pid=ImgRaw&r=0",
    "https://i.pinimg.com/originals/54/47/c7/5447c76323d6f6f93c24eba837587b97.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "right") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  //SrollToTop Visibility Behaviour
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 180) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" bg-[#fafafa]" {...swipeHandlers} >
      <div id="home"
        className=" bg-cover bg-no-repeat bg-center font-poppins text-center relative text-gray-100 duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <header className=" container mx-auto py-2">
          <Navbar/>
        </header>
        <ScrollNav/>
        <main className=" mt-20 pb-20 md:mt-40 md:pb-40 w-[85%] sm:w-[90%] md:w-full mx-auto md:mx-0">
          <h3 className=" text-[20px] md:text-5xl py-3 md:py-6 leading-relaxed">
            Helping You Finding The Most
            <br /> Comfortable Place
          </h3>
          <p className=" font-light text-[12px] md:text-xl ">
            It is a long established fact that a reader will be distracted by
            the readable <br /> content of the page when looking at its layout
          </p>
        </main>
        <Dots currentIndex={currentIndex} images={images} />
      </div>
      <div className=" py-4 md:py-10 z-0 bg-[#f4f4f4]">
      <Home/>
      <div id="gallery">
      <Gallery />
      </div>
      <div id="services">
      <VennDiagram />
      <Services /> 
      </div>
      <Rooms />      
      <About/>
      </div>
      <footer className=" py-6 lg:py-12 bg-[#191818] text-white">
         <Footer/>
      </footer>
      <ScrolltopButton isVisible={isVisible} />
    </div>
  );
};

export default UserLayout;
