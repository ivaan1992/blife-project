import Image from "next/image"

export default function PromotionalImage() {
    return (
        <div className="flex w-screen">
            <div className="relative w-screen">
                <Image
                    src="/assets/body-image.png"
                    alt="Promotion"
                    layout="responsive"
                    width={500}
                    height={400}
                />
            </div>
            <div className="absolute top-40 right-40 flex">
                <Image
                    src="/assets/banner.png"
                    alt="Banner"
                    layout="responsive"
                    width={50}
                    height={40}
                />
            </div>
        </div>
    )
}