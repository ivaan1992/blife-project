import Image from "next/image";
import style from "~/styles/responsive.module.css";

export default function PromotionalImage() {
    return (
        <div className={`flex w-screen p-0 m-0`}>
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