'use client';

import { useState } from "react";
import Image from "next/image"

export default function Slider() {
    const images = ["/assets/product-1.png", "/assets/product-2.png", "/assets/product-3.png"];
    const [currentImage, setCurrentImage] = useState(0);

    const handleClick = (index: number) => {
        setCurrentImage(index);
    }

    return (
        <div className="flex flex-col w-auto items-center justify-center relative">
            <div className="flex flex-col justify-center">
                <Image
                    src={images[currentImage] ?? ""}
                    alt="Product"
                    width={250}
                    height={200}
                    className="mt-[16px]"    
                />
            </div>
            <div className="flex w-20 py-2 px-4 h-8 border-[#E1E1E1] border-solid border-[1px] rounded-full absolute bottom-0 z-10 bg-[#FFFFFF]">
                {images.map((image, index) => (
                    <button key={index} onClick={() => handleClick(index)}>
                        <div className={`${currentImage === index ? 'bg-black' : 'bg-[#E1E1E1]'} w-2 h-2 rounded-full mr-2`}></div>
                    </button>
                ))}
            </div>
        </div>
    )
}
