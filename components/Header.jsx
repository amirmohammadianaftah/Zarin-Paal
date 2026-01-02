'use client'

import Image from "next/image"
import headerImg from '../public/img/img-mainhero.webp'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

export default function Header() {
    return (
        <>
            <div className="flex w-full 2xl:h-[96vh] flex-wrap justify-center items-center bg-[#f1f1f1]">
                <div className="w-[96%] mt-2 flex justify-center items-center min-[1520px]:w-[98%] min-[2560px]:w-[99%] h-[90%] 2xl:h-[98%] rounded-[30px] bg-[#19191a]">
                    <div dir="rtl" className="w-full xl:w-[1200px] flex flex-wrap">
                        <div className="w-full lg:w-[50%] flex justify-center">
                            <div className="w-[90%] lg:w-full flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-0 lg:items-center mt-8">
                                <div className="hidden lg:flex flex-wrap gap-6">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 w-[335px] h-[35px] px-3
                                        rounded-full text-[12px] text-white/90 leading-none
                                         bg-white/10 ring-1 ring-white/15 backdrop-blur-sm
                                         hover:bg-white/30 hover:ring-white/25 cursor-pointer transition whitespace-nowrap">
                                        <AutoAwesomeRoundedIcon fontSize="small" className="text-yellow-300 -mt-0.5" />
                                        <span className="text-white/80">زرین‌پال امروز بدون مرز است،</span>
                                        <span className="mx-1 h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                                        <span className="font-semibold text-white/90">مطالعه بیشتر</span>
                                    </button>
                                    <h3 className="w-full text-center lg:text-start font-bold text-[36px] text-white">بیش از ۱۵ سال انتخاب مطمئن کسب‌وکار‌های آنلاین</h3>
                                    <p className="w-full text-center lg:text-start font-bold text-[14px] text-white">زرین‌پال، به عنوان اولین پرداخت‌یار کشور، با به‌کارگیری استانداردهای جدید در ارائه خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه می‌کند.</p>
                                    <button className="bg-[#0a33ff] font-bold text-[14px] rounded-[30px] flex justify-center items-center text-white w-[130px] h-[50px] ">ورود یا ثبت‌نام</button>
                                </div>
                                <button
                                    type="button"
                                    className="lg:hidden inline-flex items-center gap-2 w-[335px] h-[35px] px-3
                                        rounded-full text-[12px] text-white/90 leading-none
                                         bg-white/10 ring-1 ring-white/15 backdrop-blur-sm
                                         hover:bg-white/30 hover:ring-white/25 cursor-pointer transition whitespace-nowrap">
                                    <AutoAwesomeRoundedIcon fontSize="small" className="text-yellow-300 -mt-0.5" />
                                    <span className="text-white/80 lg:hidden ">زرین‌پال امروز بدون مرز است،</span>
                                    <span className="mx-1 h-1 w-1 lg:hidden rounded-full bg-white/30" aria-hidden="true" />
                                    <span className="font-semibold lg:hidden text-white/90">مطالعه بیشتر</span>
                                </button>
                                <h3 className="w-full text-center lg:hidden lg:text-start font-bold text-[24px] text-white">بیش از ۱۵ سال انتخاب مطمئن کسب‌وکار‌های آنلاین</h3>
                                <p className="w-full text-center lg:hidden lg:text-start font-bold text-[14px] text-white">زرین‌پال، به عنوان اولین پرداخت‌یار کشور، با به‌کارگیری استانداردهای جدید در ارائه خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه می‌کند.</p>
                                <button className="bg-[#0a33ff] lg:hidden font-bold text-[14px] rounded-[30px] flex justify-center items-center text-white w-[130px] h-[50px] ">ورود یا ثبت‌نام</button>
                            </div>
                        </div>
                        <figure className="w-full mb-4 lg:w-[50%] flex justify-center">
                            <Image src={headerImg} priority alt="HeaderImage" className="z-10
                                w-[350px] lg:w-[600px] h-auto
                                drop-shadow-[0_0_200px_rgba(255,255,255,.45) drop-shadow-[0_0_160px_rgba(59,130,246,.60)]" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}