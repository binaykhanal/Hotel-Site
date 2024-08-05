import React, { useState } from "react";
import { footerList1 } from "../common/Elements";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/LogoHt.jpeg"

const Footer = () => {
  const [form,setForm]=useState({email:""})
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit=()=>{
    //POST Method logic here
    console.log("email:",form);
    alert("Email Sent")
  }
  return (
    <div className="container mx-auto">
    <div className=" lg:flex font-poppins border-b-2 border-[#888787] pb-8 space-y-3 text-center lg:text-left">
      <div className=" lg:w-[25%]">
        <section className=" flex items-center gap-x-1 justify-center lg:justify-start">
        <img src={logo} alt="logo"  className= " h-[55px] md:h-[65px] rounded-full grayscale"/>
        <span>
        <h1 className=" font-semibold text-xl">LOD PALACE </h1>
        <p className=" text-[#888787] text-[10px] font-semibold">FOOD, DRINK & STAY
        </p>
        </span>
        </section>
        <p className=" text-[#888787] pt-4">
          2024 Kalanki <br /> NW, Washington,DC 23006
        </p>
      </div>
      <div className="flex-1">
      <section className="grid grid-cols-3 gap-y-4 md:gap-y-6 lg:w-[90%] text-sm md:text-lg ">
        {footerList1.map((item) => (  
            <p key={item.id}>{item.title}</p>
        ))}
      </section>
      </div>
      <div className=" w-[96%] lg:w-[26%] mx-auto lg:mx-0">
        <h2 className=" text-lg">Subscribe Our<br/> Newsletter</h2>
        <section className=" flex border-b-2 border-[#888787] mt-2.5 md:mt-4 py-2 items-center justify-between">
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className=" bg-[#191818] placeholder-[#888787] text-sm md:flex-1
        py-2" type="email" required/>
        <GoArrowUpRight className=" text-white md:text-[#888787] text-3xl" onClick={handleSubmit}/>
        </section>
      </div>
    </div>
    <div className=" flex justify-between pt-4 md:pt-8 text-[#888787] font-poppins text-xs md:text-lg ">
     <h1 className="w-[70%] md:w-[50%]">@2024 LOD PALACE. All rights reserved</h1>
     <section className=" flex justify-between gap-x-6">
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
     </section>
    </div>
    </div>
  );
};

export default Footer;
