import Image from "next/image"
import WhiteSection from '../public/img/Img_PGSection.webp'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function MiddleWhite() {
    return (
        <>
            <div className="w-full bg-[#f1f1f3] flex flex-wrap justify-center">
                <div
                    className="bg-white mt-12 lg:mt-0 flex flex-wrap justify-center h-[750px] sm:h-[700px] md:h-[1130px] lg:h-[800px] items-center w-[96%] md:w-[94%] lg:w-[96%] 2xl:w-[98vw] rounded-[20px]">
                    <div className="w-[93%] lg:flex justify-center items-center sm:w-[580px] md:w-[670px] lg:w-[90%] xl:w-[1200px] h-[90%] md:h-[74%] lg:h-[80%] bg-[#f9f9fb] rounded-[20px]">
                        <div dir="rtl" className="flex flex-wrap justify-center lg:hidden">
                            <figure className="w-full h-[280px] md:h-[390px] flex justify-center">
                                <Image width={840} height={720} className="w-[280px] md:w-[420px] object-contain" src={WhiteSection} alt="WhiteSec" />
                            </figure>
                            <div className="flex gap-4 flex-wrap justify-center w-[90%]">
                                <h4 className="font-lightFont w-full text-center font-bold text-[14px] md:text-[15px] text-[#67605a]">IPG درگاه پرداخت اینترنتی
                                </h4>
                                <h3 dir="rtl" className="font-boldFont w-full text-center font-bold text-[20px] md:text-[28px]">مهندسی شده برای رشد و
                                    فروش بیش‌تر
                                </h3>
                                <p dir="rtl"
                                    className="text-[#67605a] font-lightFont font-bold text-[14px] text-center leading-[24px]">
                                    درگاه پرداخت زرین‌پال، با
                                    اتصال همزمان به درگاه‌های متنوع
                                    و معتبر بانکی (PSPها)، کاربران
                                    را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی
                                    هوشمند، باعث افزایش فروش و درصد تراکنش‌های موفق می‌شود.</p>
                                <div dir="rtl" className="w-full flex flex-wrap md:flex-nowrap justify-center mt-6 gap-2">
                                    <div className="w-full md:w-fit flex justify-center">
                                        <button
                                            className="w-[160px] h-[50px] cursor-pointer hover:bg-blue-800 rounded-[60px] font-lightFont font-bold text-[14px] bg-[#0a33ff] text-white ">ساخت
                                            درگاه
                                            پرداخت</button>
                                    </div>
                                    <div dir="ltr" className="w-full md:w-fit flex justify-center">
                                        <button
                                            className="w-[160px] h-[50px] cursor-pointer hover:bg-gray-200 flex flex-wrap justify-center items-center rounded-[60px] bg-[#f9f9fb] text-black border border-[#e1e1e6] font-lightFont font-bold text-[14px]">
                                            <div className="w-[80%]">
                                                <KeyboardBackspaceOutlinedIcon sx={{ marginRight: '15px' }} /><span>مطالعه بیشتر </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-full mt-8">
                                    <div className="flex flex-wrap w-[50%] gap-6">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] font-black flex justify-center">تسویه حساب روزانه <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] font-black flex justify-center">افزونه‌های متنوع <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap w-[50%] gap-6">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] font-black flex justify-center">کارمزد رایگان <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                        </div>
                                        <div className="w-full flex justify-center items-center" dir="rtl">
                                            <div className="text-[18px] font-black flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /> ۶
                                                درگاه
                                                همزمان</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-wrap w-[94%] h-[80%]">
                            <div className="flex flex-wrap justify-evenly w-full">
                                <div dir="rtl" className="w-[45%] flex flex-wrap justify-start items-center">
                                    <div className="flex flex-wrap items-center w-[500px] xl:h-[300px]">
                                        <div>
                                            <h4 className="font-lightFont w-full font-bold text-[14px] md:text-[15px] text-[#67605a]">IPG درگاه پرداخت اینترنتی
                                            </h4>
                                            <h3 dir="rtl" className="font-boldFont mt-[10px] w-full font-bold text-[20px] md:text-[28px]">مهندسی شده برای رشد و
                                                فروش بیش‌تر
                                            </h3>
                                            <p dir="rtl"
                                                className="text-[#67605a] mt-[20px] font-lightFont font-bold text-[14px] leading-[24px]">
                                                درگاه پرداخت زرین‌پال، با
                                                اتصال همزمان به درگاه‌های متنوع
                                                و معتبر بانکی (PSPها)، کاربران
                                                را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی
                                                هوشمند، باعث افزایش فروش و درصد تراکنش‌های موفق می‌شود.</p>
                                            <div dir="rtl" className="w-full flex flex-wrap md:flex-nowrap mt-10 gap-2">
                                                <div className="w-full md:w-fit flex justify-center">
                                                    <button
                                                        className="w-[160px] h-[50px] cursor-pointer hover:bg-blue-800 rounded-[60px] font-lightFont font-bold text-[14px] bg-[#0a33ff] text-white ">ساخت
                                                        درگاه
                                                        پرداخت</button>
                                                </div>
                                                <div dir="ltr" className="w-full md:w-fit flex justify-center">
                                                    <button
                                                        className="w-[160px] h-[50px] cursor-pointer hover:bg-gray-200 flex flex-wrap justify-center items-center rounded-[60px] bg-[#f9f9fb] text-black border border-[#e1e1e6] font-lightFont font-bold text-[14px]">
                                                        <div className="w-[80%]">
                                                            <KeyboardBackspaceOutlinedIcon sx={{ marginRight: '15px' }} /><span>مطالعه بیشتر </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <figure className="lg:w-[400px] xl:w-[38%] flex justify-center items-center">
                                    <Image width={840} height={720} className="xl:w-[500px]" src={WhiteSection} alt="WhiteSec" />
                                </figure>
                            </div>
                            <div className="w-full lg:mt-24 xl:mt-[16px]">
                                <div className="w-[100%] flex flex-wrap">
                                    <div className="w-[25%] flex justify-center items-center">
                                        <div className="text-[18px] font-black flex justify-center">افزونه‌های متنوع <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[25%] flex justify-center items-center" dir="rtl">
                                        <div className="text-[18px] font-black flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /> ۶
                                            درگاه
                                            همزمان</div>
                                    </div>
                                    <div className="w-[25%] flex justify-center items-center">
                                        <div className="text-[18px] font-black flex justify-center">تسویه حساب روزانه <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[25%] flex justify-center items-center">
                                        <div className="text-[18px] font-black flex justify-center">کارمزد رایگان <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
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