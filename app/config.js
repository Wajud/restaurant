//Foods

import Spag from "@/app/assets/foods/spag.jpg"
import Amala from "@/app/assets/foods/amala.jpg"
import FriedRice from "@/app/assets/foods/friedrice.jpg"
import Semo from "@/app/assets/foods/semo.jpg"
import YamChips from "@/app/assets/foods/yamchips.jpg"
import Chicken from "@/app/assets/foods/chicken.jpg"
import Banga from "@/app/assets/foods/banga.jpg"
import BeefStroganof from "@/app/assets/foods/beef stroganof.jpg"
import Bobotie from "@/app/assets/foods/bobotie.jpg"
import Falafel from "@/app/assets/foods/falafel.jpg"
import JollofRice from "@/app/assets/foods/jollof rice.jpg"
import Paella from "@/app/assets/foods/paella.jpg"
import PastaCarbonara from "@/app/assets/foods/pasta carbonara.jpg"
import PepperSoup from "@/app/assets/foods/peppersoup.jpg"
import PoundedYam from "@/app/assets/foods/pounded yam.jpg"
import Sushi from "@/app/assets/foods/sushi.jpg"
import Tacos from "@/app/assets/foods/tacos.jpg"
import YamPorridge from "@/app/assets/foods/yamchips.jpg"

//End of Foods

//Drinks

import BottleWater from "@/app/assets/drinks/bottle water.jpg"
import Chapman from "@/app/assets/drinks/chapman.jpg"
import Cocacola from "@/app/assets/drinks/cocacola.jpg"
import Fanta from "@/app/assets/drinks/fanta.jpg"
import Guiness from "@/app/assets/drinks/guiness stout.jpg"
import Heineken from "@/app/assets/drinks/heineken.jpg"
import Hennessy from "@/app/assets/drinks/hennessy.jpg"
import JackDaniels from "@/app/assets/drinks/jack daniels.jpg"
import LongIslandIcedTea from "@/app/assets/drinks/long island iced tea.jpg"
import Margarita from "@/app/assets/drinks/margarita.jpg"
import Pepsi from "@/app/assets/drinks/pepsi.jpg"
import SexOnTheBeach from "@/app/assets/drinks/sex on the beach.jpg"
import Smoothie from "@/app/assets/drinks/smoothie.jpg"
import Sprite from "@/app/assets/drinks/sprite.jpg"
import StarLager from "@/app/assets/drinks/star lager.jpg"
import Tequila from "@/app/assets/drinks/tequilla.jpg"
import Zobo from "@/app/assets/drinks/zobo.jpg"
import { SP } from "next/dist/shared/lib/utils"

//End of drinks






//End of food images import
export const foods = [
    {
        name: "Spaghetti",
        category: "Intercontinental",
        image: Spag,
        price: 40000,
        description: "Delicious, saucy, and satisfying—taste perfection in every spaghetti bite!"
    },
    {
        name: "Sushi",
        category: "Intercontinental",
        image: Sushi,
        price: 36000,
        description: "Fresh seafood and rice, expertedly rolled with seaweed and delicate flavors."
    },
    {
        name: "Tacos",
        category: "Intercontinental",
        image: Tacos,
        price: 20000,
        description: "Soft or crispy tortillas filled with spiced meat, fresh veggies and zesty sauces."
    },
    {
        name: "Sliced Yam",
        category: "Traditional",
        image: YamChips,
        price: 30000,
        description: "Fluffy, tender and aromatic. Our rice is a comforting side dish, perfectly pairing with various cuisines"
    },
    {
        name: "Chicken",
        category: "Traditional",
        image: Chicken,
        price: 30000,
        description: "Tender, flavorful poultry, grilled, fried or stewed to perfection."
    },
    {
        name: "Pasta Carbonara",
        category: "Intercontinental",
        image: PastaCarbonara,
        price: 25000,
        description: "Creamy, cheesy pasta with crispy pancetta and a rich egg-based sauce."
    },
    {
        name: "Paella",
        category: "Intercontinental",
        image: Paella,
        price: 19000,
        description: "Saffron-infused rice loaded with seafood, meats and vibrant Mediterranean flavors."
    },
    {
        name: "Beef Stroganoff",
        category: "Intercontinental",
        image: BeefStroganof,
        price: 55000,
        description: "Sauteed beef in a creamy mushroom sauce, served over buttery noodles."
    },
    {
        name: "Amala",
        category: "Swallow",
        image: Amala,
        price: 17000,
        description: "Soft, Stretchy yam flour swallow, Enjoy with rich flavorful soups."
    },
    {
        name: "Bobotie",
        category: "Intercontinental",
        image: Bobotie,
        price: 21000,
        description: "Spiced minced meat baked with a golden, egg-based topping."
    },
    {
        name: "Pounded Yam",
        category: "Swallow",
        image: PoundedYam,
        price: 22000,
        description: "Smooth yam mash paired with rich vegetables soup."
    },
    {
        name: "Jollof Rice",
        category: "Traditional",
        image: JollofRice,
        price: 15000,
        description: "Spicy tomato-based rice dish with rich flavors and smoky undertones."
    },
    {
        name: "Fried rice",
        category: "Traditional",
        image: FriedRice,
        price: 200000,
        description: "Fluffy, tender and aromatic. Our rice is a comforting side dish, perfectly pairing with various cuisines"
    },
    {
        name: "Yam Porridge",
        category: "Traditional",
        image: YamPorridge,
        price: 15000,
        description: "Soft yam cooked in a rich, spiced tomato sauce."
    },
   
    {
        name: "Semovita",
        category: "Swallow",
        image: Semo,
        price: 21000,
        description: "Smooth wheat swallow perfect for rich soups and stews."
    },
    {
        name: "Banga Soup and Starch",
        category: "Swallow",
        image: Banga,
        price: 21000,
        description: "Palm nut soup with fresh seafood, served with stretchy starch"
    },
    {
        name: "Pepper Soup",
        category: "Traditional",
        image: PepperSoup,
        price: 15000,
        description: "Spicy, aromatic broth with tender fish or meat cuts."
    },
    
    {
        name: "Falafel",
        category: "Intercontinental",
        image: Falafel,
        price: 31000,
        description: "Crispy chickpea fritters served with fresh pita, tahini and vibrant herbs."
    },
   
]


export const drinks = [
    { name: "Long Island Iced Tea", price: 7000, category: "Cocktail", image: LongIslandIcedTea },
    { name: "Star Lager", price: 1000, category: "Alcoholic", image: StarLager },
    { name: "Fanta", price: 500, category: "Soft Drink", image: Fanta },
    { name: "Sex on the Beach", price: 6500, category: "Cocktail", image: SexOnTheBeach },
    { name: "Guinness Stout", price: 1200, category: "Alcoholic", image: Guiness },
    { name: "Heineken", price: 1500, category: "Alcoholic", image: Heineken },
    { name: "Sprite", price: 500, category: "Soft Drink", image: Sprite },
    { name: "Jack Daniel's", price: 14000, category: "Alcoholic", image: JackDaniels },
    { name: "Pepsi", price: 500, category: "Soft Drink", image: Pepsi },
    { name: "Zobo", price: 1500, category: "Non-Alcoholic", image: Zobo },
    { name: "Bottled Water", price: 300, category: "Soft Drink", image: BottleWater },
    
  

    { name: "Smoothie", price: 3000, category: "Non-Alcoholic", image: Smoothie },
  
  

    { name: "Tequila Sunrise", price: 5000, category: "Cocktail", image: Tequila },
  

  

    { name: "Coca-Cola", price: 500, category: "Soft Drink", image: Cocacola },
    { name: "Chapman", price: 2500, category: "Non-Alcoholic", image: Chapman },
    { name: "Hennessy VS", price: 15000, category: "Alcoholic", image: Hennessy },

    { name: "Margarita", price: 6000, category: "Cocktail", image: Margarita },
  ];
  
