import ProductCard from "./product-card"
import PromotionalImage from "./promotion"

export default function BlifePage() {
    return (
        <div className="w-full h-full justify-between">
            <PromotionalImage />
            <div className="flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}