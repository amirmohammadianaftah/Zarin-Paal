export default function MoveSlider() {
    const logos = [
        { src: "/img/ponisha.svg", alt: "ponisha" },
        { src: "/img/hostiran.png", alt: "hostiran" },
        { src: "/img/kargozari.png", alt: "kargozarikaramad" },
        { src: "/img/isminar.svg", alt: "isminar" },
        { src: "/img/sibapp.svg", alt: "sibapp" },
        { src: "/img/khanomi.png", alt: "khanomi" },
        { src: "/img/anardoni.png", alt: "Spotify" },
    ];

    const items = [...logos, ...logos];

    return (
        <div className="relative w-full bg-[#f1f1f1]">
            <section className="py-10 sm:py-12">
                <div className="relative md:mt-8 flex items-center mx-auto lg:w-[90%] xl:w-[1160px] max-w-7xl overflow-hidden group smooth-fade">
                    {/* edge fading (mask) INSIDE the 80% container */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l" />

                    <div className="marquee">
                        <ul className="marquee-track flex items-center gap-16 pr-16">
                            {items.map((item, i) => (
                                <li key={i} className="shrink-0">
                                    <div className="relative w-[115px] h-[56px]">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="h-10 w-auto opacity-80 grayscale transition-all duration-300 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <style>
                {`
                    .marquee { direction: ltr; }
                    .marquee-track {
                        display: inline-flex;
                        min-width: max-content;
                        animation: marquee 27s linear infinite;
                        }
                        .group:hover .marquee-track { animation-play-state: paused; }
                        @keyframes marquee {
                            from { transform: translateX(0); }
                            to   { transform: translateX(-50%); }
                            }
                            
                            /* ===== Responsive tuning ===== */
                            @media (max-width: 640px) {
                                .marquee-track { gap: 2.5rem; animation-duration: 30s; }
                                }
                        .smooth-fade{
                            -webkit-mask-image: linear-gradient(
                                to right,
                                transparent 0%,
                                #000 10%,
                                #000 90%,
                                transparent 100%
                            );
                        mask-image: linear-gradient(
                            to right,
                            transparent 0%,
                            #000 10%,
                            #000 90%,
                            transparent 100%
                        )};
                `}
            </style>
        </div>
    );
}
