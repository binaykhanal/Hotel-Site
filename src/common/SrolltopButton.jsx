import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { LiaLocationArrowSolid } from 'react-icons/lia';

const ScrolltopButton = ({ isVisible }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 900,
      smooth: true,
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-6 md:right-5 px-2 py-1.5 md:px-3 md:py-2 rounded-tr-xl rounded-bl-xl bg-neutral-700 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      style={{ zIndex: 1000 }}
      aria-label="Scroll To Top"
    >
      <LiaLocationArrowSolid size={30} color="white" />
    </button>
  );
};

export default ScrolltopButton;
