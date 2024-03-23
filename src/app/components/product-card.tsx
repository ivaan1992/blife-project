'use client';

import Image from "next/image"
import { useState } from "react"
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { on } from "events";



export default function ProductCard() {

    return (
        <div className="flex w-screen px-16 py-16 border-solid border-black border-2">
            <div className="flex flex-col border-solid border-[#E1E1E1] border-2 w-[340px] h-[514px] screen bg-[#F9F9F9] rounded-lg">
                <div className="flex flex-col items-center bg-[#FFFFFF] w-full h-4/5 rounded-lg border-[#E1E1E1]">
                    <Image
                        src="/assets/card-image.png"
                        alt="Product"
                        width={200}
                        height={200}
                        className="mt-[12px]"    
                    />
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
                            
                            className="border-solid border-yellow-500 border-2 w-[100px] rounded-full bg-[#FFFFFF]">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}