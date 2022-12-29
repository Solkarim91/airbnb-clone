import Image from "next/image";
import { MediumCardItem } from "../pages/types/types";

export const MediumCard = ({ img, title }: MediumCardItem) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" alt="/" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};
