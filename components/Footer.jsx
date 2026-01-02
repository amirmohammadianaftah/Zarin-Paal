import Image from "next/image"
import footerImage from '../public/img/img-enamad@3x.png'
import logoFooter from '../public/img/zarinpal-logo.svg'
import telegram from '../public/img/telegram.svg'
import aparat from '../public/img/aparat.svg'
import twitter from '../public/img/X.svg'
import instagram from '../public/img/insta.svg'
import linkd from '../public/img/link.svg'

export default function Footer() {
    return (
        <>
            <div className="w-full flex flex-wrap justify-center xl:mt-6">
                <div className="flex w-full justify-center">
                    <div className="flex w-full xl:w-[1200px] flex-wrap justify-evenly xl:justify-between h-[920px] md:h-[720px] lg:h-[500px]">
                        <div className="w-[35%] lg:w-[30%] xl:w-[20%] md:*:ml-16 xl:flex justify-start items-start xl:*:ml-0 h-[920px] md:h-[700px] lg:h-[500px]">
                            <figure className="w-[200px] h-[200px] xl:flex justify-start items-start">
                                <Image src={footerImage} alt="Footer-Img" className="w-[90px] cursor-pointer object-contain" width={120} height={140} />
                            </figure>
                        </div>
                        <div className="hidden lg:flex md:h-[720px] lg:h-[440px] lg:w-[20%] xl:w-[30%]">
                            <div className="w-full flex flex-wrap items-start h-full">
                                <div className="w-full flex justify-end items-start flex-wrap text-[18px] font-black">خدمات بیشتر
                                    <ul className="w-full **:mt-3">
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">نئوزین</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌اکسپرس</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌پلاس</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌کراد</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌دکس</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:w-[20%] md:h-[720px] lg:h-[440px] lg:w-[18%] xl:w-[20%]">
                            <div className="w-full flex flex-wrap items-start h-full">
                                <div className="w-full flex justify-end items-start flex-wrap text-[18px] font-black">زرین‌پال
                                    <ul className="w-full **:mt-3">
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">تماس با ما</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">پیگیری تراکنش</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">درباره ما</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">حریم خصوصی</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">قوانین و مقررات</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[40%] h-[920px] md:flex flex-wrap md:h-[720px] lg:h-[440px] lg:w-[25%] xl:w-[20%] md:*:mr-16 xl:*:mr-0">
                            <div className="w-full flex flex-wrap">
                                <div className="w-full flex justify-end flex-wrap text-[18px] font-black">منابع
                                    <ul className="w-full **:mt-3">
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">درگاه پرداخت اینترنتی</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">بانکداری باز</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">تسویه مستقیم</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">پیرو</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">توسعه‌دهندگان</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">اپلیکیشن موبایل</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">وبلاگ</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">دربافت شماره شبا</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">سوالات متداول</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">همکاری در فروش</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">کشف باگ زرین‌پال</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">تعرفه‌ها</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <div className="w-full flex justify-end flex-wrap text-[18px] font-black mt-10">زرین‌پال
                                    <ul className="w-full **:mt-3">
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">تماس با ما</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">پیگیری تراکنش</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">درباره ما</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">حریم خصوصی</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">قوانین و مقررات</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:hidden">
                                <div className="w-full flex justify-end flex-wrap text-[18px] font-black mt-10 md:mt-2">خدمات بیشتر
                                    <ul className="w-full **:mt-3">
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">نئوزین</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌اکسپرس</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌پلاس</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌کراد</li>
                                        <li className="w-full cursor-pointer hover:text-blue-600 flex justify-end flex-wrap text-[14px] font-normal text-[#625c55]">زرین‌دکس</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div dir="rtl" className="w-full h-[160px] xl:h-auto md:h-[90px] xl:w-[1200px] flex flex-wrap justify-center items-center md:items-start">
                        <div className="w-full md:mt-4 xl:mt-0 xl:mb-10 flex flex-wrap justify-center md:justify-between md:items-center">
                            <div className="flex w-full md:justify-start md:mr-16 xl:mr-0 md:w-[40%] flex-wrap justify-center">
                                <figure className="w-[100px] cursor-pointer">
                                    <Image src={logoFooter} className="object-cover" alt="LogoFooter" width={180} height={100} />
                                </figure>
                            </div>
                            <div className="mt-8 md:mt-0 md:w-[40%] md:ml-16 xl:ml-0">
                                <ul className="flex flex-wrap justify-center md:justify-end">
                                    <li className="w-[24px] cursor-pointer mr-3">
                                        <Image src={telegram} alt="TelegramIcon" width={44} height={40} />
                                    </li>
                                    <li className="w-[24px] cursor-pointer mr-3">
                                        <Image src={instagram} alt="InstagramIcon" width={44} height={40} />
                                    </li>
                                    <li className="w-[24px] cursor-pointer mr-3">
                                        <Image src={linkd} alt="LinkIcon" width={44} height={40} />
                                    </li>
                                    <li className="w-[24px] cursor-pointer mr-3">
                                        <Image src={twitter} alt="XIcon" width={44} height={40} />
                                    </li>
                                    <li className="w-[24px] cursor-pointer mr-3 ml-3">
                                        <Image src={aparat} alt="AparatIcon" width={44} height={40} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}