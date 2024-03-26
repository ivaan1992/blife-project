'use client';

import { useCart } from "../context/cart-context";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import LikeButton from "./like-button";
import DiscountAd from "./discount-ad";
import Slider from "./slider";
import StarRating from "./star-rating";

export default function ProductCard() {

    const { cartCount, setCartCount } = useCart();

    const addToCart = () => {
        setCartCount(cartCount + 1);
    }

    return (
        <div className="flex px-10 py-16 relative">
            <div className="flex flex-col border-solid border-[#E1E1E1] border-[1px] w-[340px] h-[514px] screen bg-[#F9F9F9] rounded-lg">
                <div className="absolute my-4 flex flex-col">
                    <LikeButton />
                    <DiscountAd />
                </div>
                <div className="flex flex-col items-center bg-[#FFFFFF] w-full h-4/5 rounded-lg border-b-[#E1E1E1] border-b-[1px]">
                    <Slider />
                    <div className="flex justify-between items-center w-4/5 ">
                        <p className="font-bold flex flex-col">
                                Citrate Mag
                            <span className="font-light text-xs mt-[5px]">
                                240 Cápsulas | 800 Mg
                            </span>
                        </p>
                        <p className="font-bold flex flex-col">
                                $273.00
                            <span className="font-light text-xs mt-[5px] text-end line-through">
                                $134.00
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row w-4/5 mt-4">
                        <StarRating />
                    </div>
                </div>
                <div className="flex px-6 py-6 justify-between">
                    <div className="flex flex-col">
                        <p className="text-sm uppercase">
                            comparte
                        </p>
                        <div className="flex justify-between mt-[5px]">
                            <FaFacebook size={18} className="cursor-pointer"/>
                            <IoLogoTwitter size={18} className="cursor-pointer" />
                            <FiInstagram size={18} className="cursor-pointer" />
                        </div>    
                    </div>
                    <div className="flex w-2/4 justify-center">
                        <button
                            onClick={addToCart}
                            className="border-solid border-yellow-500 border-2 w-[100px] rounded-full bg-[#FFFFFF]">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}