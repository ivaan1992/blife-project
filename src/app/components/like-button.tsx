import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className="flex flex-row border-solid border-[#E1E1E1] border-[1px] rounded-full bg-[#FFFFFF]">
            <button
                onClick={handleLike}
                
                className="flex w-16 h-8 items-center"
            >
                {liked ? 
                    <FaHeart size={18} color="#FF8E8E" className="ml-2" />
                    : <FaRegHeart size={18} color="#FF8E8E" className="ml-2" />
                }
                <span className="text-sm font-bold ml-2">
                    {liked ? 23 : 22}
                </span>
            </button>
        </div>
    )
}
