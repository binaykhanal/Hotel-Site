import React from 'react'

const Dots = ({ currentIndex, images }) => {
    return (
      <div className="flex justify-center py-5">
        {images.map((_, index) => (
          <div key={index} className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full duration-700 ${
            index === currentIndex ? 'bg-gray-100 scale-125' : 'bg-gray-400'}`}/>
        ))}
      </div>
    );
  }

export default Dots
