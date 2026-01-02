import Image from "next/image"
import blueImage from '../public/img/Img_Collection.webp'
import logo from '../public/img/img-zarinpallogo.svg'

export default function BlueBack() {
    return (
        <>
            <div className="w-full bg-[#f1f1f3] flex flex-wrap justify-center">
                <div
                    className="bg-[#0a33ff] overflow-hidden relative flex flex-wrap justify-center mt-20 h-[560px] lg:mt-12 sm:h-[700px] w-[96%] md:w-[94%] lg:w-[96%] 2xl:w-[98vw] rounded-[20px]">
                    <div className="">
                        <svg
                            className="absolute left-1/2 -translate-x-1/2
                                bottom-[-230px] sm:bottom-[-120px]
                                w-[1100px] sm:w-[1200px] md:w-[1400px] h-[620px]
                                z-0 pointer-events-none"
                            viewBox="0 0 1200 620" fill="none" aria-hidden="true"
                        >
                            <circle cx="600" cy="600" r="310" stroke="white" strokeOpacity=".12" strokeWidth="2" />
                            <circle cx="600" cy="600" r="385" stroke="white" strokeOpacity=".08" strokeWidth="2" />
                            <circle cx="600" cy="600" r="460" stroke="white" strokeOpacity=".05" strokeWidth="2" />
                        </svg>
                        <div className="">
                            <div className="gap-10 mt-24 flex flex-wrap justify-center items-start">
                                <div className="w-full flex flex-wrap justify-center">
                                    <figure className="w-[60px] h-[60px] rounded-[18px] bg-white flex justify-center items-center">
                                        <Image alt="Logo" src={logo} />
                                    </figure>
                                </div>
                                <h4 className="text-white text-[20px] lg:text-[28px] text-center font-bold w-full">به خانواده یک میلیونی زرین‌پال بپیوندید</h4>
                                <h5 className="text-white text-[14px] text-center font-bold w-full">یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما</h5>
                                <button className="w-[170px] h-[45px] font-bold text-[14px] rounded-[40px] bg-[#ffffff]">همین حالا شروع کنید</button>
                            </div>
                        </div>
                        <div>
                            <figure>
                                <Image priority
                                    className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 h-auto
                                        w-[520px] sm:w-[640px] md:w-[760px]" src={blueImage} alt="ZarinPal" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}