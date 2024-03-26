import ProductCard from "./product-card"
import PromotionalImage from "./promotion"

export default function BlifePage() {
    return (
        <div className="w-full h-full justify-between">
            <div className="flex flex-wrap">
                <PromotionalImage />
            </div>
            <div className="w-screen flex flex-wrap px-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}