import React from 'react'
import { facilitiesItems } from '../common/Elements'
import { IoIosArrowRoundForward } from "react-icons/io";
//for rooms
const Rooms = () => {
  return (
    <div className=' bg-[#f4f4f4] container mx-auto font-poppins pt-10 pb-1 md:pt-20 md:pb-2 text-[#2a2a2a]' id="rooms">
    <section className='flex justify-between items-center border-b-2 pb-4 md:pb-10'>
    <h2 className=' text-[20px] md:text-xl lg:text-3xl w-[76%] md:w-auto'>Enjoy complete and best quality rooms </h2>
    <button className=' px-2 md:px-3 py-2 bg-[#191818] text-white rounded-md text-sm md:text-lg'>See More</button>
    </section>
    <div className='py-3 md:py-6 space-y-5 md:space-y-10'>
        {
            facilitiesItems.map((item,idx)=>{
                return(
                    <div key={item.id} className={`lg:grid grid-cols-2 ${idx<2 && "border-b-2"} py-5 border-gray-300 text-center lg:text-left`}>
                        <section className=' lg:w-[80%] lg:flex'>
                        <img src={item.image} alt="pool" className=' h-52 xl:h-60 w-[90%] md:w-[70%] lg:w-[93%] mx-auto lg:mx-0 rounded-tr-3xl rounded-bl-3xl hover:scale-110 duration-300'/>
                        <p className=' md:ml-6 text-xl mt-2'>{item.num}</p>
                        </section>
                        <section className='flex-1'>
                            <h2 className=' text-xl md:text-2xl font-medium'>{item.head}</h2>
                            <p className=' text-[#898989] font-normal pt-2 md:py-4 lg:w-[80%]'>{item.desc}</p>
                            <IoIosArrowRoundForward  className=' text-3xl md:text-6xl text-[#898989] mt-2 md:mt-9 hover:translate-x-3 duration-500'/>
                        </section>
                    </div>
                )
            })
        }
    </div>
      
    </div>
  )
}

export default Rooms
