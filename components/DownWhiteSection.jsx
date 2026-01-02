import Image from "next/image"
import WhiteSection from '../public/img/DownMiddle.webp'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function DownWhiteSection() {
    return (
        <>
            <div className="w-full bg-[#f1f1f3] flex flex-wrap justify-center">
                <div
                    className="bg-white mt-6 md:mt-14 flex flex-wrap justify-center h-[710px] sm:h-[700px] md:h-[1000px] lg:h-[880px] items-center w-[96%] md:w-[94%] lg:w-[96%] 2xl:w-[98vw] rounded-[20px]">
                    <div className="w-[93%] flex lg:flex justify-center md:items-center sm:w-[580px] md:w-[670px] lg:w-[90%] xl:w-[1200px] h-[84%] md:h-[78%] lg:h-[74%] bg-[#f9f9fb] rounded-[20px]">
                        <div dir="rtl" className="flex flex-wrap justify-center lg:hidden">
                            <figure className="w-full h-[280px] md:h-[370px] flex justify-center">
                                <Image width={840} height={720} className="w-[280px] md:w-[380px] object-contain" src={WhiteSection} alt="WhiteSec" />
                            </figure>
                            <div className="flex h-[320px] flex-wrap sm:items-start justify-center w-[90%]">
                                <div className="mt-4 md:mt-0">
                                    <h4 className="font-lightFont w-full text-center font-bold text-[14px] md:text-[15px] text-[#67605a]">اپلیکیشن موبایل
                                    </h4>
                                    <h3 dir="rtl" className="font-boldFont mt-4 md:mt-4 w-full text-center font-bold text-[20px] md:text-[28px]">زرین‌پال من؛ مدیریت درگاه پرداخت
                                    </h3>
                                    <p dir="rtl"
                                        className="text-[#67605a] mt-6 md:mt-4 font-lightFont font-bold text-[14px] text-center leading-[24px]">
                                        اپلیکیشن کاربردی زرین‌پال من، علاوه بر تمام ویژگی‌های وب‌سایت زرین‌پال، برای تجربه کاربری بهتر در گوشی‌های هوشمند بومی‌سازی شده است.</p>
                                    <div dir="rtl" className="w-full mt-10 md:mt-8 flex flex-wrap md:flex-nowrap justify-center">
                                        <div className="w-full md:w-fit flex justify-center">
                                            <button
                                                className="w-[160px] h-[50px] cursor-pointer hover:bg-blue-800 rounded-[60px] font-lightFont font-bold text-[14px] bg-[#0a33ff] text-white ">
                                                دانلود اپلیکیشن</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-full mt-10">
                                    <div className="flex flex-wrap w-[50%] gap-6">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} />
                                                مدیریت تراکنش‌ها
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} />
                                                مدیریت محصولات
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap w-[50%] gap-6">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} />
                                                مدیریت تسویه‌‌حساب‌‌ها
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <div className="text-[18px] flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} />
                                                ارتباط سریع با پشتیبانی
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-wrap w-[94%] h-[80%]">
                            <div className="flex flex-wrap justify-evenly w-full">
                                <div dir="rtl" className="lg:w-[50%] xl:w-[45%] flex flex-wrap justify-start items-center">
                                    <div className="flex flex-wrap items-center w-[500px] xl:h-[300px]">
                                        <div>
                                            <h4 className="font-lightFont w-full font-bold text-[14px] md:text-[15px] text-[#67605a]">اپلیکیشن موبایل
                                            </h4>
                                            <h3 dir="rtl" className="font-boldFont mt-[10px] w-full font-bold text-[20px] lg:text-[26px] xl:text-[28px]">زرین‌پال من؛ مدیریت درگاه پرداخت
                                            </h3>
                                            <p dir="rtl"
                                                className="text-[#67605a] mt-[20px] font-lightFont font-bold text-[14px] leading-[24px]">
                                                اپلیکیشن کاربردی زرین‌پال من، علاوه بر تمام ویژگی‌های وب‌سایت زرین‌پال، برای تجربه کاربری بهتر در گوشی‌های هوشمند بومی‌سازی شده است.</p>
                                            <div dir="rtl" className="w-full flex flex-wrap md:flex-nowrap mt-10 gap-2">
                                                <div className="w-full md:w-fit flex justify-center">
                                                    <button
                                                        className="w-[160px] h-[50px] cursor-pointer hover:bg-blue-800 rounded-[60px] font-lightFont font-bold text-[14px] bg-[#0a33ff] text-white ">
                                                        دانلود اپلیکیشن
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <figure className="lg:w-[400px] xl:w-[45%] flex justify-center items-center">
                                    <Image width={840} height={720} className="xl:w-[400px]" src={WhiteSection} alt="WhiteSec" />
                                </figure>
                            </div>
                            <div className="w-full lg:mt-10 xl:mt-[16px]">
                                <div className="w-[100%] flex flex-wrap">
                                    <div className="w-[25%] flex justify-center items-center">
                                        <div className="text-[18px] font-black flex justify-center">ارتباط با پشتیبانی <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[25%] flex justify-center items-center" dir="rtl">
                                        <div className="text-[18px] font-black flex justify-center"><CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} />
                                            مدیریت محصولات
                                        </div>
                                    </div>
                                    <div className="w-[25%] flex justify-center items-center">
                                        <div className="text-[18px] font-black flex justify-center">مدیریت حساب‌‌ها <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
                                    </div>
                                    <div className="w-[25%] flex justify-center items-center">
                                        <div className="text-[18px] font-black flex justify-center">مدیریت تراکنش‌ها <CheckOutlinedIcon sx={{ color: '#0a33ff', marginLeft: '10px' }} /></div>
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