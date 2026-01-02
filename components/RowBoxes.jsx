import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';

export default function RowBoxes() {
    return (
        <>
            <div className="w-full flex justify-center items-center bg-[#f1f1f1]">
                <div className="w-full lg:container h-full flex flex-wrap justify-center items-center lg:h-[490px]">
                    <div dir="rtl"
                        className="w-[100%] sm:w-[94%] gap-4 lg:gap-0 h-full flex flex-wrap justify-center sm:justify-between lg:w-[96%] lg:items-center xl:w-[1200px]">
                        <div
                            className="w-[92%] sm:w-[47%] h-[200px] lg:w-[23%] xl:w-[286px] sm:h-[270px] lg:h-[310px] bg-[#fbfbfc] rounded-[25px] sm:mr-[10px] lg:m-0">
                            <div className="w-full h-full flex flex-wrap justify-center items-center">
                                <div className="flex flex-wrap justify-center items-center">
                                    <div className="w-full flex justify-center"><CheckCircleOutlineIcon sx={{ fontSize: '30px' }} />
                                    </div>
                                    <h4 className="font-bold text-[20px] text-[#19191a] mt-[20px] mb-[16px]">
                                        ضمانت پرداخت</h4>
                                    <p
                                        className="text-center font-lightFont font-bold text-[14px] text-[#525252] w-[90%] sm:w-[240px] md:w-[350px] lg:w-[85%] leading-[26px]">
                                        درگاه پرداخت
                                        زرین‌پال،
                                        تجربه‌ی پرداخت
                                        اینترنتی
                                        آسان، سریع و امن
                                        را
                                        به مشتریان کسب و کار ها
                                        هدیه می‌دهد.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[92%] sm:w-[47%] h-[200px] lg:w-[23%] xl:w-[286px] sm:h-[270px] lg:h-[310px] bg-[#fbfbfc] rounded-[25px] sm:ml-[10px] lg:m-0">
                            <div className="w-full h-full flex flex-wrap justify-center items-center">
                                <div className="flex flex-wrap justify-center items-center">
                                    <div className="w-full flex justify-center"><SwapHorizontalCircleOutlinedIcon sx={{ fontSize: '30px' }} />
                                    </div>
                                    <h4 className="font-bold text-[20px] text-[#19191a] mt-[20px] mb-[16px]">
                                        مسیردهی هوشمند</h4>
                                    <p
                                        className="text-center font-lightFont font-bold text-[14px] text-[#525252] w-[90%] sm:w-[240px] md:w-[350px] lg:w-[90%] leading-[26px]">
                                        امکان اتصال
                                        به ۶
                                        درگاه
                                        پرداخت معتبر،
                                        باعث می‌شود
                                        کاربران به
                                        بهترین درگاه پرداخت با بالاترین میزان تراکنش موفق هدایت شوند.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[92%] sm:w-[47%] h-[200px] lg:w-[23%] xl:w-[286px] sm:h-[270px] lg:h-[310px] bg-[#fbfbfc] rounded-[25px] sm:mr-[10px] lg:m-0">
                            <div className="w-full h-full flex flex-wrap justify-center items-center">
                                <div className="flex flex-wrap justify-center items-center">
                                    <div className="w-full flex justify-center"><SecurityOutlinedIcon sx={{ fontSize: '30px' }} /></div>
                                    <h4 className="font-bold text-[20px] text-[#19191a] mt-[20px] mb-[16px]">
                                        امنیت پرداخت</h4>
                                    <p
                                        className="text-center font-lightFont font-bold text-[14px] text-[#525252] w-[90%] sm:w-[240px] md:w-[350px] lg:w-[85%] leading-[26px]">
                                        درگاه امن
                                        زرین‌پال، امنیت
                                        اطلاعات
                                        بانکی افراد در
                                        هنگام پرداخت‌های
                                        اینترنتی را تضمین می‌کند.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-[92%] sm:w-[47%] h-[200px] lg:w-[23%] xl:w-[286px] sm:h-[270px] lg:h-[310px] bg-[#fbfbfc] rounded-[25px] sm:ml-[10px] lg:m-0">
                            <div className="w-full h-full flex flex-wrap justify-center items-center">
                                <div className="flex flex-wrap justify-center items-center">
                                    <div className="w-full flex justify-center">
                                        <HeadphonesOutlinedIcon sx={{ fontSize: '30px', border: '3px solid black', borderRadius: '10px' }} />
                                    </div>
                                    <h4 className="font-bold text-[20px] text-[#19191a] mt-[20px] mb-[16px]">
                                        پشتیبانی ۲۴/۷</h4>
                                    <p
                                        className="text-center font-lightFont font-bold text-[14px] text-[#525252] w-[90%] sm:w-[240px] md:w-[350px] lg:w-[85%] leading-[26px]">
                                        تیم پشتیبانی
                                        زرین‌پال به
                                        صورت ۲۴ ساعته
                                        در ۷ روز
                                        هفته، آماده‌ی
                                        پاسخگویی و راهنمایی کاربران است.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}