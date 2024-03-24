import React, { useState } from "react";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

export default function StarRating() {
    const [rating, setRating] = useState(0);

    return (
        <div className="flex flex-row justify-start">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i} className="cursor-pointer">
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none'}}
                        />
                        {ratingValue <= rating ? 
                            <RiStarSFill size={20} color="#ffc107" /> : 
                            <RiStarSLine size={20} color="#e4e5e9" />
                        }
                    </label>
                );
            })}
        </div>
    );
}