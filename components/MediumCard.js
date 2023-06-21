import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105
    tranform transition duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image src={img} fill className="rounded-xl"
          style={{ objectFit: "cover" }}
        alt="Image"/>
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
