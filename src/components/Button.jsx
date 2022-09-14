import React from "react";
import { IoCartOutline } from "react-icons/io5";

function Button() {
  return (
    <button className="h-[50px] w-full bg-darkCyan flex items-center justify-center gap-2 rounded-lg text-White font-montserrat font-medium transition-all hover:bg-hoverDarkCyan text-[14px]">
      <IoCartOutline className="text-[24px]" />
      Add to Cart
    </button>
  );
}

export default Button;
