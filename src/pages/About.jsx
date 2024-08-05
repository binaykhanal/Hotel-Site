import React from 'react'
import vector from "../assets/vector.png"

const About = () => {
  return (
    <div className=' mx-auto container'>
    <div className=' flex flex-col lg:flex-row justify-between items-center font-poppins my-2 lg:my-5 border-t-2 border-gray-300 py-2 lg:py-5' id="about"
    >
    <div className=' w-full lg:w-[50%] relative z-30 pb-4 lg:pb-0'>
      <h1 className=' font-semibold hover:translate-y-2 duration-300 text-xl text-[#5a60f1] text-center lg:text-left'>ABOUT US</h1>
      <section className=' w-full lg:w-[84%]'>
      <p className=' font-semibold text-xl lg:text-3xl text-[#485064] my-4'>Helping customer finding <br/> best rooms.</p>
      <p className=' text-center lg:text-justify bg-white text-neutral-700 px-3 lg:px-7 py-3 lg:py-5 rounded-tr-[30px] rounded-bl-[30px]'>Laboris non cupidatat non ex sit laboris culpa. Dolore sunt et dolor reprehenderit minim minim enim ut duis ipsum quis. Do ut nostrud dolore sit ut.
      Pariatur ullamco ad magna anim laboris. Nostrud exercitation sunt excepteur incididunt dolore laboris id adipisicing id nisi esse velit dolor nostrud. Nisi exercitation proident est in ipsum. Ipsum adipisicing pariatur velit aute eu proident ut consectetur. Esse aliqua tempor et tempor commodo.
      Officia ut sint Lorem proident ut. Esse et elit magna ad reprehenderit enim id consectetur veniam ad aliqua cillum.</p>
      </section>
    </div>
    <div  className='bg-cover bg-no-repeat bg-top p-0 lg:p-6 flex-1'>
        <img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom" className='w-[88%] mx-auto lg:mx-0 lg:w-auto lg:h-[400px] rounded-tl-[52px] rounded-br-[52px] hover:scale-110 duration-500'/>
    </div>
    </div>
    
    <div className='flex flex-col-reverse lg:flex-row-reverse  items-center font-poppins my-2 lg:my-5 py-2 lg:py-5' id="about"
    >
    <div className=' w-full lg:w-[50%] relative z-30 pb-4 lg:pb-0'>
      <section className=' w-full lg:w-[84%] lg:ml-[13%]' >
      <p className=' font-semibold text-xl lg:text-3xl text-[#485064] my-4'>Helping customer finding <br/> affordable prices.</p>
      <p className=' text-center lg:text-justify bg-white text-neutral-700 px-3 lg:px-7 py-3 lg:py-5 rounded-tr-[30px] rounded-bl-[30px]'>Laboris non cupidatat non ex sit laboris culpa. Dolore sunt et dolor reprehenderit minim minim enim ut duis ipsum quis. Do ut nostrud dolore sit ut.
      Pariatur ullamco ad magna anim laboris. Nostrud exercitation sunt excepteur incididunt dolore laboris id adipisicing id nisi esse velit dolor nostrud. Nisi exercitation proident est in ipsum. Ipsum adipisicing pariatur velit aute eu proident ut consectetur. Esse aliqua tempor et tempor commodo.
      Officia ut sint Lorem proident ut. Esse et elit magna ad reprehenderit enim id consectetur veniam ad aliqua cillum.</p>
      <button className=' bg-[#5a60f1] px-5 py-2 text-white mt-4 lg:mt-6 font-medium rounded-tl-[10px] rounded-br-[10px] hover:scale-110 duration-500 w-full lg:w-auto'>Start Booking</button>
      </section>
    </div>
    <div className=' p-0 lg:p-6 flex-1'>
        <img src="https://th.bing.com/th/id/R.e4a42a0f9ecc265df256683df0eaca32?rik=ysWVPISCtwX5Hw&pid=ImgRaw&r=0" className='w-[88%] mx-auto lg:mx-0 lg:w-auto lg:h-[400px] rounded-tr-[52px] rounded-bl-[52px] hover:scale-110 duration-500'/>
    </div>
    </div>
    </div>
  )
}

export default About
