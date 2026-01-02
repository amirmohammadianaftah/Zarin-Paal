import Image from "next/image"
import BlackSection from '../public/img/Img_Devdocs.webp'
import NorthWestOutlinedIcon from '@mui/icons-material/NorthWestOutlined';

export default function MiddleBlack() {
    return (
        <>
            <div className="w-full bg-[#f1f1f3] flex flex-wrap justify-center">
                <div
                    className="bg-black flex flex-wrap justify-center h-[700px] mt-4 lg:mt-12 sm:h-[700px] md:h-[1100px] lg:h-[800px] items-center w-[96%] md:w-[94%] lg:w-[96%] 2xl:w-[98vw] rounded-[20px]">
                    <div className="w-[93%] lg:flex justify-center items-center sm:w-[580px] md:w-[670px] lg:w-[90%] xl:w-[1200px] h-[90%] md:h-[80%] lg:h-[74%] bg-[#19191a] rounded-[20px]">
                        <div className="flex flex-wrap lg:hidden justify-center">
                            <figure className="w-full h-[280px] md:h-[380px] flex justify-center">
                                <Image width={1184} height={960} src={BlackSection} className="w-[300px] md:w-[440px] object-contain" alt="BlackSec" />
                            </figure>
                            <div className="w-[90%] gap-4 flex flex-wrap justify-center">
                                <h4 className="font-lightFont font-bold text-[14px] md:text-[15px] w-full text-center text-[#bdb8b6]">توسعه‌دهندگان</h4>
                                <h3 dir="rtl" className="font-boldFont font-bold text-[20px] md:text-[28px] w-full text-white lg:text-[28px] text-center leading-[38px]">
                                    راهنمای کامل و جامع
                                    سرویس‌ها و API های زرین‌پال
                                </h3>
                                <p dir="rtl"
                                    className="text-[#bdb8b6] font-lightFont font-bold text-[14px] text-center leading-[26px]">
                                    زرین‌پال با کمک افزونه‌ها و نمونه کدهای آماده درگاه پرداخت زرین‌پال، دردسرهای افزودن
                                    به سایت و نیاز به کدنویسی را به حداقل رسانده است.</p>
                                <div className="w-full flex flex-wrap justify-center mt-8 md:mt-6"><button
                                    className="w-[130px] cursor-pointer hover:bg-gray-200 h-[50px] flex flex-wrap justify-center items-center rounded-[60px]  bg-[#ffffff] text-black font-lightFont font-bold text-[14px]">
                                    مستندات فنی</button>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-center w-full mt-8 md:mt-10">
                                <div className="flex flex-wrap justify-end m-1 w-[50%] gap-2">
                                    <div className="w-[290px] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">افزونه‌ها <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[290px] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">مستندات درگاه پرداخت  <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-start m-1 w-[50%] gap-2">
                                    <div className="w-[290px] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">SDK مستندات <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[290px] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">API مستندات <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-wrap w-[94%] h-[80%]">
                            <div className="flex flex-wrap justify-evenly w-full">
                                <figure className="lg:w-[400px] xl:w-[38%] flex justify-center items-center">
                                    <Image width={840} height={720} className="xl:w-[500px]" src={BlackSection} alt="WhiteSec" />
                                </figure>
                                <div dir="rtl" className="w-[45%] flex flex-wrap justify-start items-center">
                                    <div className="flex flex-wrap items-center w-[500px] xl:h-[300px]">
                                        <div>
                                            <h4 className="font-lightFont font-bold text-[14px] md:text-[15px] w-full text-[#bdb8b6]">توسعه‌دهندگان</h4>
                                            <h3 className="font-boldFont mt-5 font-bold text-[20px] lg:text-[28px] w-full text-white leading-[38px]">
                                                راهنمای کامل و جامع
                                                سرویس‌ها و API های زرین‌پال
                                            </h3>
                                            <p dir="rtl"
                                                className="text-[#bdb8b6] mt-6 font-lightFont font-bold text-[14px] leading-[26px]">
                                                زرین‌پال با کمک افزونه‌ها و نمونه کدهای آماده درگاه پرداخت زرین‌پال، دردسرهای افزودن
                                                به سایت و نیاز به کدنویسی را به حداقل رسانده است.</p>
                                            <div className="w-full flex flex-wrap mt-8"><button
                                                className="w-[130px] cursor-pointer hover:bg-gray-200 h-[50px] flex flex-wrap justify-center items-center rounded-[60px]  bg-[#ffffff] text-black font-lightFont font-bold text-[14px]">
                                                مستندات فنی</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap items-center">
                                <div className="w-[100%] flex justify-center gap-2 flex-wrap">
                                    <div className="w-[22%] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">افزونه‌ها <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[22%] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">مستندات درگاه پرداخت  <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', ml: { lg: '5px', xl: '18px' } }} /></div>
                                    </div>
                                    <div className="w-[22%] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">SDK مستندات <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[22%] rounded-[15px] text-white hover:bg-neutral-500 cursor-pointer bg-[#2c2c2d] h-[70px] flex justify-center items-center">
                                        <div className="flex justify-center">API مستندات <NorthWestOutlinedIcon sx={{ color: 'white', fontSize: '18px', marginLeft: '10px' }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}