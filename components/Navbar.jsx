'use client'
import Image from "next/image"
import logoImg from '../public/img/zarinpal-logo.svg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function Navbar() {
    return (
        <>
            <div className="w-full h-[60px] flex justify-center items-center">
                <div className="h-full w-[90%] flex justify-between lg:justify-center items-center">
                    <div className="h-full w-full flex flex-wrap lg:w-[1200px]">
                        <div className="w-[60%] lg:w-[20%] h-full flex flex-wrap justify-start">
                            <div className="w-[50px] h-[60px] flex flex-wrap justify-start items-center lg:hidden">
                                <div
                                    className="w-[35px] mr-3 h-[35px] flex flex-wrap justify-center items-center cursor-pointer">
                                    <MenuOutlinedIcon sx={{ fontSize: '22px' }} />
                                </div>
                            </div>
                            <div className="w-[120px] lg:[180px] h-full flex flex-wrap items-center justify-start lg:ml-0">
                                <button
                                    className="w-[120px] h-[40px] bg-[#0a33ff] hover:bg-blue-800 rounded-[30px] flex flex-wrap justify-center items-center cursor-pointer">
                                    <a href="" className="font-lightFont font-bold text-white text-[14px]">ورود یا ثبت‌نام</a>
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:w-[60%] h-full">
                            <ul dir="rtl" className="w-full h-full flex flex-wrap items-center justify-center">
                                <li
                                    className="font-bold text-[#5f5f5f] lg:w-[22%] xl:w-[150px] items-center text-[14px] cursor-pointer hover:bg-gray-50 h-[70%] rounded-[30px] flex flex-wrap justify-center mr-[15px]">
                                    درگاه
                                    پرداخت اینترنتی</li>
                                <li
                                    className="font-bold text-[#5f5f5f] lg:w-[16%] xl:w-[120px] items-center text-[14px] cursor-pointer hover:bg-gray-50 h-[70%] rounded-[30px] flex flex-wrap justify-center mr-[15px]">
                                    توسعه‌دهندگان
                                </li>
                                <li
                                    className="font-bold text-[#5f5f5f] lg:w-[16%] xl:w-[120px] items-center text-[14px] cursor-pointer hover:bg-gray-50 h-[70%] rounded-[30px] flex flex-wrap justify-center mr-[15px]">
                                    پیگیری
                                    تراکنش</li>
                                <li
                                    className="font-bold text-[#5f5f5f] lg:w-[12%] xl:w-[70px] items-center text-[14px] cursor-pointer hover:bg-gray-50 h-[70%] rounded-[30px] flex flex-wrap justify-center mr-[15px]">
                                    تعرفه‌ها
                                </li>
                                <li
                                    className="font-bold text-[#5f5f5f] lg:w-[14%] xl:w-[80px] items-center text-[14px] cursor-pointer hover:bg-gray-50 h-[70%] rounded-[30px] flex flex-wrap justify-center mr-[15px]">
                                    تماس با ما
                                </li>
                            </ul>
                        </div>
                        <div className="w-[40%] h-full lg:w-[20%]">
                            <figure className="w-full h-full flex flex-wrap justify-end items-center">
                                <Image width={110}
                                    height={32} className="object-cover w-[110px] mr-[15px] lg:mr-0 cursor-pointer" src={logoImg}
                                    alt="logo" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}