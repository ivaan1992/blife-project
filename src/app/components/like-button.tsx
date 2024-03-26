import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
    
        <div className="mx-72">
            <div className="flex flex-row border-solid border-[#E1E1E1] border-[1px] rounded-full bg-[#FFFFFF] w-16 h-8 justify-center items-center" onClick={handleLike}>
                <button className= "w-8 flex justify-center">
                    {liked ? 
                        // 
                       <FaHeart size={18} color="#FF8E8E" />
                        : 
                        <FaRegHeart size={18} color="#FF8E8E" />
                    }
                </button>
                <span className="text-sm font-bold">
                    {liked ? 23 : 22}
                </span>
            </div>
        </div>
    )
}
