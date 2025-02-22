"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/app/assets/drinks/drinks banner.jpg";
import { drinks } from "../config";


const page = () => {
  const drinkCategories = ["All", "Alcoholic", "Non-Alcoholic", "Cocktail", "Soft Drink"];
  const [drinkState, setDrinkState] = useState(drinks)
  const [isCurrentCategory, setIsCurrentCategory] = useState("")


  const filterDrinks = (category) => {
    if(category === "All"){
        setDrinkState(drinks)
        setIsCurrentCategory(category)
        return
    }
    const currentdrinks = drinks.filter(drink=> drink.category.toLowerCase()=== category.toLowerCase())
    setDrinkState(currentdrinks)
    setIsCurrentCategory(category)
  }


  function formatCurrency(amount, currency = "NGN", locale = "en-ng") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  }

  return (
    <div className="pt-16">
      <div className="relative">
        <Image
          src={banner}
          alt="banner Image"
          className="w-full h-[70vh] object-cover"
        />
        <div className="z-20 absolute top-0 left-0 w-full h-[70vh] grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
          <div className="max-w-[85%] mx-auto ">
            <h1 className="text-red-400 text-5xl font-bold">
            Raise Your Glass to Great Taste!
            </h1>
            <p className="text-white mt-5 text-lg">
            From refreshing cocktails to classic favorites, our drinks menu is crafted to delight every sip. Whether you’re unwinding or celebrating, there’s a perfect drink waiting for you.
            </p>
          </div>

          </div>
    
        </div>
      </div>

      <div className="pt-20 pb-10">
        <h1 className="text-4xl font-semibold text-center text-red-400">Our Drinks Collection</h1>
        <section className="max-w-[90%] mx-auto py-4 flex flex-wrap gap-4 justify-center">
          {drinkCategories.map((category) => (
            <p
              key={category}
              className={`w-fit px-2 py-1 rounded-md  text-white cursor-pointer ${isCurrentCategory.toLowerCase() === category.toLowerCase() ? "bg-green-600" : "bg-red-400 hover:bg-red-500"}`}
              onClick={()=> filterDrinks(category)}
            >
              {category}
            </p>
          ))}
        </section>

        <section className="max-w-[90%] mx-auto py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {drinkState.map((drinkItem, index) => (
            <div
              key={index}
              className="shadow-md rounded-md flex flex-col bg-gray-100 py-4 hover:bg-gray-200 transition-all"
            >
              <Image
                src={drinkItem.image}
                className="w-48 h-48 mx-auto rounded-full object-cover"
                alt={drinkItem.name}
              />
              <div className="flex-1 flex justify-between items-center bg-red-400 px-2 mt-4 mb-2">
                <h2 className="py-2 font-semibold">{drinkItem.name}</h2>
                <p>{formatCurrency(drinkItem.price)}</p>
              </div>
              <p className="px-2 py-4 text-sm">
                {drinkItem.description}
              </p>   
              <Link href="/" className="block w-fit mx-auto px-4 py-1 text-white bg-red-400 rounded-full">Order Now</Link>           
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;
