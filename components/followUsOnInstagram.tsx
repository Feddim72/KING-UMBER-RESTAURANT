import Image from "next/image";
import React from "react";

export const FollowUsOnInstagram = () => {
  return (
    <div className="py-24 px-3 flex flex-col items-center justify-center text-gray-8 tablet:py-10">
      <h6 className=" mb-10 text-6xl">Follow us on Instagram</h6>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <Image alt="image"
          src={"/eats_8.jpeg"}
          width={302}
          height={218}
          objectFit="cover"
        />
        <Image alt="image"
          src={"/eats_7.jpeg"}
          width={302}
          height={218}
          objectFit="cover"
        />
        <Image alt="image"
          src={"/eats_10.jpg"}
          width={302}
          height={218}
          objectFit="cover"
        />
        <Image alt="image" src={"/eats_2.jpg"} width={302} height={218} objectFit="cover" />
        <Image alt="image" src={"/eats_3.jpg"} width={302} height={218} objectFit="cover" />
        <Image alt="image" src={"/eats_4.jpg"} width={302} height={218} objectFit="cover" />
        <Image alt="image" src={"/eats_5.jpg"} width={302} height={218} objectFit="cover" />
        <Image alt="image" src={"/eats_9.jpg"} width={302} height={218} objectFit="cover" />
      </div>
    </div>
  );
};
