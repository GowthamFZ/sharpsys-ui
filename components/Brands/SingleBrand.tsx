import React from "react";
import { Brand } from "@/types/brand";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name, imageLight } = brand;

  return (
    <>
      <div className="animate_top m-auto">
        <img
          className={imageLight}
          src={image}
          alt={name}
        />
      </div>
    </>
  );
};

export default SingleBrand;
