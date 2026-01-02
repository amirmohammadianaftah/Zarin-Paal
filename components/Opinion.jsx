import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Image from 'next/image';
import opImg1 from '../public/img/saeed-abdollahiha.jpg'
import opImg2 from '../public/img/manuel-ohanjanians.jpg'
import opImg3 from '../public/img/amir-piroudin.jpg'
import opImg4 from '../public/img/amir-tavakoli-haghighi.jpg'
import opImg5 from '../public/img/mohammad-khani.jpg'
import opImg6 from '../public/img/ali-haji-mohammadi.jpg'

export default function Opinion() {
    return (
        <>
            <div className="w-full bg-[#f1f1f3] flex flex-wrap justify-center h-[720px] md:h-fit xl:h-fit items-center">
                <div className="flex flex-wrap justify-center items-start w-[92%] md:w-[84%] xl:w-[1200px] h-[80%] md:mt-24 rounded-[40px]">
                    <div className="w-full flex flex-wrap justify-center items-center h-[100px]">
                        <div className="w-full">
                            <h4 className="w-full flex justify-center font-black text-[20px] md:text-[28px]">نظر کاربران درباره زرین‌پال</h4>
                            <h5 className="w-full flex justify-center font-black text-[14px] mt-[16px]">بازتاب تجربه پذیرندگان از خدمات زرین‌پال</h5>
                        </div>
                    </div>
                    <div dir="rtl" className="w-full overflow-hidden h-[476px] md:h-fit flex flex-wrap">
                        <div className="h-[390px] md:h-fit mt-[30px] md:justify-between overflow-x-auto md:overflow-hidden overflow-y-hidden flex flex-nowrap md:flex-wrap gap-5 md:gap-0">
                            <div
                                className="w-[360px] md:w-[49%] xl:w-[390px] h-full md:h-[340px] xl:h-[380px] flex-shrink-0 bg-[#fbfbfc] rounded-[35px] flex flex-wrap justify-center">
                                <div className="w-[89%] xl:w-[84%] flex flex-wrap h-full">
                                    <div className='flex flex-wrap items-stretch'>
                                        <div className="w-full mt-[40px]">
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <p className="text-[14px] mt-[20px] text-[rgb(83,80,80)] font-black w-full leading-[26px] xl:leading-[30px]">سهولت فرایند پرداخت در زرین‌پال این امکان را می‌دهد تا کاربر با کمترین
                                                کلیک و
                                                حس
                                                خوب، خرید خود را نهایی کند.</p>
                                        </div>
                                        <div className='w-full flex flex-wrap items-end'>
                                            <div className="flex mb-[40px] flex-wrap h-[60px]">
                                                <Image width={60} height={65} src={opImg1} alt="OpinionImg1" />
                                                <div className="flex flex-wrap w-[60%] items-center mr-4">
                                                    <div className="w-full text-[14px] font-black">سعید عبدالهی‌ها</div>
                                                    <div className="w-full text-[14px] text-[#6f5f7b] font-black">هم بنیانگذار آمیرزا و باقلوا</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[360px] md:w-[49%] xl:w-[390px] h-full md:h-[340px] xl:h-[380px] flex-shrink-0 bg-[#fbfbfc] rounded-[35px] flex flex-wrap justify-center">
                                <div className="w-[89%] xl:w-[84%] flex flex-wrap h-full">
                                    <div className='flex flex-wrap items-stretch'>
                                        <div className="w-full mt-[40px]">
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <p className="text-[14px] mt-[20px] text-[rgb(83,80,80)] font-black w-full leading-[26px] xl:leading-[30px]">تسویه حساب منظم، پشتیبانی اختصاصی و بروزرسانی به موقع از ویژگی‌های کار با زرین‌پال است.</p>
                                        </div>
                                        <div className='w-full flex flex-wrap items-end'>
                                            <div className="flex mb-[40px] flex-wrap h-[60px]">
                                                <Image width={60} height={65} src={opImg2} alt="OpinionImg2" />
                                                <div className="flex flex-wrap w-[60%] items-center mr-4">
                                                    <div className="w-full text-[14px] font-black">مانوئل اوهانجانیانس</div>
                                                    <div className="w-full text-[14px] text-[#6f5f7b] font-black">مدیرعامل و هم‌بنیانگذار ایسمینار</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[360px] md:w-[49%] xl:w-[390px] md:mt-4 xl:mt-0 h-full md:h-[340px] xl:h-[380px] flex-shrink-0 bg-[#fbfbfc] rounded-[35px] flex flex-wrap justify-center">
                                <div className="w-[89%] xl:w-[84%] flex flex-wrap h-full">
                                    <div className='flex flex-wrap items-stretch'>
                                        <div className="w-full mt-[40px]">
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <p className="text-[14px] mt-[20px] text-[rgb(83,80,80)] font-black w-full leading-[26px] xl:leading-[30px]">گزارش گیری عالی، امکان پیگیری تراکنش‌ها، تسویه حساب سریع و تفکیک درآمدها کار را بسیار آسان کرده است.</p>
                                        </div>
                                        <div className='w-full flex flex-wrap items-end'>
                                            <div className="flex mb-[40px] flex-wrap h-[60px]">
                                                <Image width={60} height={65} src={opImg3} alt="OpinionImg3" />
                                                <div className="flex flex-wrap w-[60%] items-center mr-4">
                                                    <div className="w-full text-[14px] font-black">امیر پیرودین</div>
                                                    <div className="w-full text-[14px] text-[#6f5f7b] font-black">هم‌‌بنیانگذار اپ استور اناردونی</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[360px] md:w-[49%] xl:w-[390px] md:mt-4 h-full md:h-[340px] xl:h-[380px] flex-shrink-0 bg-[#fbfbfc] rounded-[35px] flex flex-wrap justify-center">
                                <div className="w-[89%] xl:w-[84%] flex flex-wrap h-full">
                                    <div className='flex flex-wrap items-stretch'>
                                        <div className="w-full mt-[40px]">
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <p className="text-[14px] mt-[20px] text-[rgb(83,80,80)] font-black w-full leading-[26px] xl:leading-[30px]">پشتیبانی قوی، امنیت و حس شهرت زرین‌پال، یکی از دلایل همکاری با زرین‌پال است و کاربران با اطمینان کامل از امنیت درگاه و بدون چون و چرا و خیالی آسوده خرید خود را به راحتی انجام می‌دهند.</p>
                                        </div>
                                        <div className='w-full flex flex-wrap items-end'>
                                            <div className="flex mb-[40px] flex-wrap h-[60px]">
                                                <Image width={60} height={65} src={opImg4} alt="OpinionImg4" />
                                                <div className="flex flex-wrap w-[60%] items-center mr-4">
                                                    <div className="w-full text-[14px] font-black">
                                                        امیر توکلی حقیقی</div>
                                                    <div className="w-full text-[14px] text-[#6f5f7b] font-black">تیم کوییز آوکینگز</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[360px] md:w-[49%] xl:w-[390px] md:mt-4 h-full md:h-[340px] xl:h-[380px] flex-shrink-0 bg-[#fbfbfc] rounded-[35px] flex flex-wrap justify-center">
                                <div className="w-[89%] xl:w-[84%] flex flex-wrap h-full">
                                    <div className='flex flex-wrap items-stretch'>
                                        <div className="w-full mt-[40px]">
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <p className="text-[14px] mt-[20px] text-[rgb(83,80,80)] font-black w-full leading-[26px] xl:leading-[30px]">از همان ابتدای شروع به کار جابینجا تاکنون، سرویس خوب زرین‌پال تبدیل به یکی از بخش‌های کسب و کار ما شده است. ارائه‌ی ابزارهای گزارش‌گیری عالی، پشتیبانی منحصر به فرد و پیشرو بودن در خلق تجربه‌ی خرید آسان، زرین‌پال را تبدیل به راهکار اصلی ما برای پرداخت آنلاین کرده است.</p>
                                        </div>
                                        <div className='w-full flex flex-wrap items-end'>
                                            <div className="flex mb-[40px] flex-wrap h-[60px]">
                                                <Image width={65} height={65} className='rounded-[50%]' src={opImg5} alt="OpinionImg5" />
                                                <div className="flex flex-wrap w-[60%] items-center mr-4">
                                                    <div className="w-full text-[14px] font-black">
                                                        محمدرضا خانی</div>
                                                    <div className="w-full text-[14px] text-[#6f5f7b] font-black">مدیرعامل و هم‌بنیانگذار جابینجا</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[360px] md:w-[49%] xl:w-[390px] md:mt-4 h-full md:h-[340px] xl:h-[380px] flex-shrink-0 bg-[#fbfbfc] rounded-[35px] flex flex-wrap justify-center">
                                <div className="w-[89%] xl:w-[84%] flex flex-wrap h-full">
                                    <div className='flex flex-wrap items-stretch'>
                                        <div className="w-full mt-[40px]">
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <StarOutlinedIcon sx={{ fontSize: '18px', color: '#ffd60a', marginRight: '3px' }} />
                                            <p className="text-[14px] mt-[20px] text-[rgb(83,80,80)] font-black w-full leading-[26px] xl:leading-[30px]">زرین‌پال نه فقط بخاطر کاربرد درگاه پرداخت، بخاطر داشتن تیم قوی و فراهم کردن زیرساخت بسیار کاربردی، بهترین گزینه برای انتخاب به عنوان درگاه پرداخت می‌باشد.</p>
                                        </div>
                                        <div className='w-full flex flex-wrap items-end'>
                                            <div className="flex mb-[40px] flex-wrap h-[60px]">
                                                <Image width={65} height={65} className='rounded-[50%]' src={opImg6} alt="OpinionImg6" />
                                                <div className="flex flex-wrap w-[60%] items-center mr-4">
                                                    <div className="w-full text-[14px] font-black">
                                                        علی حاجی محمدی</div>
                                                    <div className="w-full text-[14px] text-[#6f5f7b] font-black">بنیانگذار ژاکت</div>
                                                </div>
                                            </div>
                                        </div>
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