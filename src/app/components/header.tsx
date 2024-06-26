'use client';

import Image from "next/image"
import { useState } from "react"
import { useCart } from "../context/cart-context";
import style from "~/styles/responsive.module.css";

export default function Header(){
    const { cartCount } = useCart();

    const [selected, setSelected] = useState("promotions");

    return (
        <header className={`flex flex-row justify-between items-center px-12 py-12 h-16 ${style.header}`}>
            <div className="flex">
                <Image 
                    src="/assets/logo.jpg"
                    alt="Logo"
                    width={165}
                    height={50}
                 />
            </div>
            <div className="flex">
                <p className={`cursor-pointer font-bold rounded-full w-32 text-center  ${selected === 'products' ?  'bg-yellow-500' : '' }`}
                    onClick={() => setSelected('products')}
                >
                    Productos
                </p>
                <p className={`cursor-pointer font-bold rounded-full w-32 text-center ${selected === 'promotions' ?  'bg-yellow-500' : '' }`}
                    onClick={() => setSelected('promotions')}
                >
                    Promociones
                </p>
                <p className={`cursor-pointer font-bold rounded-full w-32 text-center  ${selected === 'us' ?  'bg-yellow-500' : '' }`}
                    onClick={() => setSelected('us')}
                >
                    Nosotros
                </p>
            </div>
            <div className="flex flex-row">
                <Image
                    src="/assets/search-icon.png"
                    alt="Search"
                    width={20}
                    height={20}
                    className="mr-4 cursor-pointer"
                />
                <Image
                    src="/assets/user-icon.png"
                    alt="User"
                    width={20}
                    height={20}
                    className="mr-4 cursor-pointer"
                />
                <div className="relative">
                    <Image
                        src="/assets/shopping-bag-icon.png"
                        alt="Shopping Bag"
                        width={20}
                        height={20}
                        className="mr-4 cursor-pointer"
                    />
                        {cartCount === 0 ? (
                            null
                        ) :  (
                            <span className="absolute top-0 right-0 mt-[-10px] bg-red-500 text-white rounded-full text-xs text-center w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                </div>
            </div>
        </header>
    )
}