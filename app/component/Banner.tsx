import Image from "next/image";
import bunner from "@/public/images/banner.webp";
const Banner = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mt-0">
      <div className="absolute top-0 left-0 w-full h-full  bg-black bg-opacity-50"></div>
      <Image
        src={bunner}
        alt="bunner image"
        className="object-cover object-cente -z-10 "
        fill
      />
      <div className=" absolute top-1/2 w-full  text-center">
        <p className="sm:text-lg md:text-2xl mb-3 font-semibold  text-white">
          Not sure where to go? Perfect
        </p>
        <button className="bg-white rounded-full  text-purple-500 px-10 py-4 shadow-md shadow-gray-600 font-bold">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
