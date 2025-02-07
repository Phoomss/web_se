"use client";
import React from "react";
import { PiStudent } from "react-icons/pi";

const CardMenu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <div className="card bg-gradient-to-r bg-[#C70039] hover:bg-[#92002A] text-white hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer shadow-xl w-full h-[250] flex flex-col justify-between">
        <div className="card-body items-center text-center p-6 flex-grow justify-center">
          <PiStudent className="text-6xl mb-4" />
          <h2 className="card-title text-xl font-semibold">ผู้สนใจเข้าศึกษา</h2>
        </div>
        
      </div>
      <div className="card bg-gradient-to-r  bg-[#C70039] hover:bg-[#FF5733] text-white hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer shadow-xl w-full h-[250px] flex flex-col justify-between">
        <div className="card-body items-center text-center p-6 flex-grow justify-center">
          <PiStudent className="text-6xl mb-4" />
          <h2 className="card-title text-xl font-semibold">นักศึกษาปัจจุบัน</h2>
        </div>
        
      </div>
      <div className="card bg-gradient-to-r  bg-[#C70039] hover:bg-[#92002A] text-white hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer shadow-xl w-full h-[250px] flex flex-col justify-between">
        <div className="card-body items-center text-center p-6 flex-grow justify-center">
          <PiStudent className="text-6xl mb-4" />
          <h2 className="card-title text-xl font-semibold">อาจารย์ประจำสาขา</h2>
        </div>
       
      </div>
      <div className="card bg-gradient-to-r  bg-[#C70039] hover:bg-[#FF5733] text-white hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer shadow-xl w-full h-[250px] flex flex-col justify-between">
        <div className="card-body items-center text-center p-6 flex-grow justify-center">
          <PiStudent className="text-6xl mb-4" />
          <h2 className="card-title text-xl font-semibold">ศิษย์เก่า</h2>
        </div>
      
      </div>
    </div>
  );
};

export default CardMenu;
