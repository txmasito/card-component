import React from "react";
import Button from "./Button";

function Information() {
  return (
    <div className="minResp:max-w-[50%] p-5 minResp:p-[32px]">
      <p className="text-[12px] uppercase font-montserrat tracking-[5px] text-start mb-[20px] text-darkGrayishBlue">Perfume</p>
      <h1 className="font-fraunces text-[30px] text-start leading-8 mb-5 text-veryDarkBlue">Gabrielle Essence Eau De Parfum</h1>
      <p className="text-darkGrayishBlue text-start text-[14px] font-montserrat mb-5 leading-[23px]">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="flex flex-wrap gap-3 items-center mb-6">
        <p className="text-[28px] font-fraunces text-darkCyan">$149.99</p>
        <p className="font-montserrat text-darkGrayishBlue line-through text-[14px]">$169.99</p>
      </div>
      <Button />
    </div>
  );
}

export default Information;
