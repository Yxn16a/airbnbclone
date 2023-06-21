import React from "react";
import Image from "next/image";
function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 space-x-4 rounded-xl
    cusor-pointer hover:bg-gray-100 hover:scale-105 transition  transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          className="rounded-lg h-16 w-16"
          src={img}
          fill
        
          alt="hello"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
