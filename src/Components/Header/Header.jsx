import React, { useEffect, useState } from "react";
import './Heder.css'
import img from "../Image/joseph-gonzalez.jpg";

const Header = () => {
 
  
  return (
    <div>
      <div className="flex lg:justify-between container mx-auto header mb-4">
        <p className="font-semibold text-2xl ">Knowledge cafe</p>
        <img className="  h-14 " src={img} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Header;
