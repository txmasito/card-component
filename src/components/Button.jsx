import React from "react";
import { IoCartOutline } from "react-icons/io5";

function Button() {
  return (
    <button className="h-[50px] w-full bg-darkCyan flex items-center justify-center gap-2 rounded-lg text-White font-montserrat font-medium transition-all hover:bg-hoverDarkCyan">
      <IoCartOutline className="text-[24px]"/>
      <p className="font-bold">Add to Cart</p>
    </button>
  );
}

export default Button;
