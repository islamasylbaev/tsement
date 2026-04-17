"use client";


import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    "/img/sklad/projects/1.jpg",
    "/img/sklad/projects/2.jpg",
    "/img/sklad/projects/3.jpg",
    "/img/sklad/projects/4.jpg",
    "/img/sklad/projects/5.jpg",
    "/img/sklad/projects/6.jpg",
    "/img/sklad/projects/7.jpg",
    "/img/sklad/projects/8.jpg",
];

export default function ProjectsBlock() {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-[1536px] mx-auto px-4">

                <div className="relative rounded-2xl overflow-hidden">

                    {/* ОРАНЖЕВЫЙ БЛОК */}
                    <div className="absolute top-0 left-0 z-10">
                        <div className="bg-orange-500/90 backdrop-blur-sm text-white px-6 py-4 rounded-br-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Готовые объекты
                            </h2>
                        </div>
                    </div>

                    {/* СЛАЙДЕР */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop
                        className="rounded-2xl"
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-[400px] md:h-[760px]">
                                    <Image
                                        src={src}
                                        alt="project"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>

        </section>
    );
}