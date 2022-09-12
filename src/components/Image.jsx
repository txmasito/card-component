import React from "react";

function Image() {
  return (
    <div className="w-[100%] min-h-[250px] bg-no-repeat bg-cover bg-[url('/src/assets/image-product-desktop.jpg')] maxResp:bg-[url('/src/assets/image-product-mobile.jpg')]"></div>
  );
}

export default Image;
