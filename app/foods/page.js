"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/app/assets/foods/banner.jpg";
import { foods } from "../config";


const page = () => {
  const foodCategories = ["All", "Intercontinental", "Swallow", "Traditional"];
  const [foodState, setFoodState] = useState(foods)
  const [isCurrentCategory, setIsCurrentCategory] = useState("")


  const filterFoods = (category) => {
    if(category === "All"){
        setFoodState(foods)
        setIsCurrentCategory(category)
        return
    }
    const currentFoods = foods.filter(food=> food.category.toLowerCase()=== category.toLowerCase())
    setFoodState(currentFoods)
    setIsCurrentCategory(category)
  }


  function formatCurrency(amount, currency = "NGN", locale = "en-ng") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  }

  return (
    <div className="bg-gray-50 pt-16">
      <div className="relative">
        <Image
          src={banner}
          alt="banner Image"
          className="w-full h-[70vh] object-cover"
        />
        <div className="z-20 bg-[rgba(0,0,0,0.4)] to-blue-500 absolute top-0 left-0 w-full h-[70vh] flex justify-center items-center flex-col text-center">
          <div className="max-w-[90%] md:max-w-[85%] mx-auto ">
            <h1 className="text-red-400 text-5xl font-bold">
              Every Meal Tells a Story of Flavor
            </h1>
            <p className="text-white mt-5 text-lg">
              From sizzling appetizers to mouthwatering mains and decadent
              desserts, our menu is designed to take your taste buds on an
              unforgettable journey. Every bite is crafted with fresh
              ingredients and culinary passion.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20 pb=10">
        <h1 className="text-4xl font-semibold text-center text-red-400">Our Foods</h1>
        <section className="max-w-[90%] mx-auto py-4 flex flex-wrap gap-4 justify-center">
          {foodCategories.map((category) => (
            <p
              key={category}
              className={`w-fit px-2 py-1 rounded-md  text-white cursor-pointer ${isCurrentCategory.toLowerCase() === category.toLowerCase() ? "bg-green-600" : "bg-red-400 hover:bg-red-500"}`}
              onClick={()=> filterFoods(category)}
            >
              {category}
            </p>
          ))}
        </section>

        <section className="max-w-[90%] mx-auto py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {foodState.map((foodItem, index) => (
            <div
              key={index}
              className="shadow-md rounded-md flex flex-col bg-gray-100 py-4 hover:bg-gray-200 transition-all"
            >
              <Image
                src={foodItem.image}
                className="w-48 h-48 mx-auto rounded-full object-cover"
                alt={foodItem.name}
              />
              <div className="flex-1 flex justify-between items-center bg-red-400 px-2 mt-4 mb-2">
                <h2 className="py-2 font-semibold">{foodItem.name}</h2>
                <p>{formatCurrency(foodItem.price)}</p>
              </div>
              <p className="px-2 py-4 text-sm">
                {foodItem.description}
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
