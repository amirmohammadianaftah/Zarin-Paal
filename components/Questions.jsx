"use client";

import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function Questions() {
    const [open, setOpen] = useState(null);
    const toggle = (id) => setOpen((p) => (p === id ? null : id));

    const rowH = "h-[120px]";
    const items = [
        {
            id: 1,
            q: "چگونه در زرین‌پال ثبت‌نام کنم؟",
            a: (
                <>
                    <div>۱. به صفحه‌ی «زرین‌پال من» بروید.</div>
                    <div>۲. نام، نام خانوادگی و شماره‌ی همراه را وارد کنید.</div>
                    <div>۳. کد پیامک‌شده را در بخش مربوطه وارد کنید.</div>
                    <div>۴. پس از ورود به پنل مدیریتی خود در زرین‌پال، نسبت به تکمیل اطلاعات اقدام نمایید.</div>
                </>
            ),
        },
        {
            id: 2,
            q: "چگونه درگاه پرداخت بسازم؟",
            a: (
                <>
                    <div>۱. پس از ورود به حساب کاربری خود در زرین‌پال، روی آیکونِ پیشخوان کلیک کنید.</div>
                    <div>۲. سپس گزینه‌ی درخواست درگاه پرداخت را انتخاب نمایید.</div>
                    <div>۳. در پنجره‌ی «افزودن درگاه پرداخت»، آدرس وب‌سایت خود را وارد کنید.</div>
                    <div>۴. عنوان وب‌سایت، شماره تماس پشتیبانی و دسته‌بندی حوزه‌ی فعالیت خود را مشخص کنید.</div>
                    <div>۵. حساب بانکی موردنظرتان را جهت تسویه‌حساب وارد کنید.</div>
                </>
            ),
        },
        {
            id: 3,
            q: "تسویه‌حساب چه زمانی انجام می‌شود؟",
            a: (
                <>
                    پس از کسر کارمزد هنگام هر تراکنش، مبلغ پرداختی حداکثر یک روز پس از انجام تراکنش و تا ساعت ۱۱ صبح، به حساب شخص واریز شده و تسویه‌حساب انجام می‌شود. لازم به توضیح است که تسویه‌حساب در روزهای تعطیل رسمی، انجام نمی‌شود.
                </>
            ),
        },
        {
            id: 4,
            q: "چگونه با پشتیبانی زرین‌پال تماس بگیرم؟",
            a: <>به دو روش «ارسال تیکت» و «تماس تلفنی» می‌توانید با کارشناسان امور مشتریان زرین‌پال در ارتباط باشید. از منوی سمت راست پیشخوان خود، روی گزینه‌ی تیکت‌ها کلیک کنید.<br />
                در صورتی‌که پاسخ سوال خود را در «گزینه‌های دیگر» پیدا نکردید، با انتخاب گزینه‌ی تیکت جدید، پرسش خود را مطرح کنید.<br />
                حداکثر زمان پاسخ‌گویی به تیکت‌ها، ۱۲ ساعت است، چنان‌چه در این بازه پیامی دریافت نکردید، با کارشناسان امور مشتریان زرین‌پال، با شماره تلفن ۰۲۱۴۵۶۲۸۰۰۰ تماس بگیرید.</>,
        },
    ];

    return (
        <div className="w-full h-fit lg:h-[1000px] bg-[#f1f1f3] flex flex-wrap justify-center items-center">
            <div className="w-[94%] md:w-[84%] xl:w-[1200px] flex flex-wrap">
                <div className="w-full bg-[#f1f1f3] flex flex-wrap justify-center h-[80px] items-center">
                    <h4 className="w-full font-black flex justify-center text-[20px] lg:text-[30px]">
                        سوالات متداول
                    </h4>
                </div>

                <div dir="rtl" className="w-full lg:flex flex-wrap justify-center">
                    {items.map((it) => {
                        const isOpen = open === it.id;
                        return (
                            <div
                                key={it.id}
                                className="min-h-[120px] bg-white lg:w-[720px] mt-4 w-full rounded-[25px] overflow-hidden"
                            >
                                <div className={`w-[90%] md:w-[85%] mx-auto ${rowH} flex items-center justify-between`}>
                                    <h5
                                        onClick={() => toggle(it.id)}
                                        aria-expanded={isOpen}
                                        className="font-black text-[18px] cursor-pointer"
                                    >
                                        {it.q}
                                    </h5>

                                    <button
                                        onClick={() => toggle(it.id)}
                                        aria-label="toggle"
                                        className="w-[34px] h-[34px] grid place-items-center"
                                    >
                                        <span
                                            className={`inline-flex transition-transform cursor-pointer duration-200 ease-in-out ${isOpen ? "rotate-180" : ""
                                                }`}
                                        >
                                            <ExpandMoreOutlinedIcon sx={{ fontSize: 34 }} />
                                        </span>
                                    </button>
                                </div>

                                <div
                                    className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                              ${isOpen ? "max-h-[800px]" : "max-h-0"}`}
                                    style={{ willChange: "max-height" }}
                                >
                                    <div className="w-[90%] md:w-[85%] mx-auto pb-4">
                                        <div className="text-[13.5px] font-black leading-[28px]">{it.a}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="w-full flex flex-wrap justify-center mt-[40px]">
                    <button className="h-[50px] font-black w-[160px] bg-white rounded-[30px] hover:bg-gray-200 cursor-pointer">مطالعه بیشتر</button>
                </div>
            </div>
        </div>
    );
}
