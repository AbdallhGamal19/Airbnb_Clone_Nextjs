import Image from "next/image";
import { listingCardProps } from "../../interfaces/app.ts";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
const ListingCard = ({
  title,
  description,
  img,
  total,
  price,
  star,
  location,
}: Omit<listingCardProps, "long" | "lat">) => {
  return (
    <div className="flex py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out">
      {/* Image Section */}
      <div className=" relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={
            img == "https://links.papareact.com/hz2"
              ? "https://links.papareact.com/8w2"
              : img
          }
          fill
          className="rounded-2xl object-cover"
          alt="Listing Card"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        {/* Location and Heart Icon */}
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        {/* Title */}
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        {/* Description */}
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        {/* Rating and Pricing */}
        <div className="flex justify-between items-end pt-5">
          <div className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            <p>{star}</p>
          </div>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
