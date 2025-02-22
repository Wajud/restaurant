import Image from "next/image";
import restaurantImage from "@/app/assets/resto.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
    <div className="relative">
    <div className="absolute top-0 left-0 w-full h-[70vh] bg-[rgba(0,0,0,0.7)] z-20"></div>

      <Image src={restaurantImage} className="w-full h-[70vh] object-cover" alt="restaurant imag" />
      <div className="absolute top-0 left-0 w-full h-[70vh]  z-30 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl text-center  font-bold text-red-400">Welcome to Holmes Hotel</h1>
        <p className="text-center py-4">Experience luxury and comfort at our hotel. Elegant rooms, exceptional service and a relaxing ambiance await you.</p>
      </div>
    </div>
    <div className="pt-20 pb-12 px-12">
    <h2 className="text-red-500 font-semibold text-2xl text-center">Savour the Flavour with Delicious Food and Refreshing Drinks</h2>
    <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 p-6 items-stretch">
      <Link href={"/foods"} className="bg-gray-100 h-full shadow-md p-8 transition-all hover:scale-105 rounded-md">
      <div className="flex flex-col items-center text-center py-8 ">
        <Image src={restaurantImage} className="w-40 h-40 rounded-full" alt="food image" />
        <h3 className="pt-8 pb-6 font-semibold">Foods</h3>
        <p>Enjoy the rich flavours of our carefully prepared dishes. From hearty meals to light bites, every dish is crafted to satisfy your cravings and leave you wanting more.</p>
      </div>
      </Link>
      <Link href={"/drinks"} className="bg-gray-100 h-full shadow-md p-8 transition-all hover:scale-105 rounded-md">
      <div className="flex flex-col items-center text-center py-8">
        <Image src={restaurantImage} className="w-40 h-40 rounded-full" alt="drinks image" />
        <h3 className="pt-8 pb-6 font-semibold">Drinks</h3>
      <p>Discover a refreshing selection of drinks, from timeless classics to exciting new flavors. Whatever your taste, we have the perfect drink for you.</p>
      </div>
      </Link>
    </div>
    </div>
    </div>
  );
}
