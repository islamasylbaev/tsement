"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/Container";
import {FaWhatsapp} from "react-icons/fa";

const images = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
];

export default function About() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="pt-10 md:pt-20 pb-0 bg-white dark:bg-gray-900 overflow-hidden">
            <Container>

                <div className="bg-blue-100 dark:bg-gray-800 rounded-2xl p-8 shadow">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* SLIDER */}
                        <div className="relative">

                            <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
                                <Image
                                    src={images[current]}
                                    alt="Завод"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* arrows */}
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded hover:bg-white"
                            >
                                ‹
                            </button>

                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded hover:bg-white"
                            >
                                ›
                            </button>

                            {/* dots */}
                            <div className="flex justify-center gap-2 mt-4">
                                {images.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${
                                            i === current ? "bg-orange-500" : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>

                        </div>

                        {/* TEXT */}
                        <div>

                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                ЖБИ изделия в Астане — Цемент-Снаб НС
                            </h2>

                            <p className="text-s text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Компания ТОО «Цемент-Снаб НС» производит и поставляет железобетонные изделия (ЖБИ)
                                высокого качества. В нашем ассортименте: сваи, перемычки, прогоны, лестничные площадки и
                                марши, кольца, крышки, днища, лотки и элементы снегозадержания.
                            </p>

                            <p className="text-s text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Мы работаем по стандартам ГОСТ и обеспечиваем доставку по Астане и регионам Казахстана.
                                Выполняем как стандартные заказы, так и индивидуальное производство под задачи клиента.
                            </p>

                            <p className="text-s text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                Благодаря собственному производству бетона, строгому контролю качества и соблюдению
                                сроков, наша продукция востребована среди частных заказчиков, строительных компаний и
                                крупных подрядчиков.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex gap-4">

                                <a
                                    href="https://wa.me/77089117554"
                                    target="_blank"
                                    className="text-l flex items-center gap-2 bg-green-400 hover:bg-green-600 text-white px-3 py-1.5 text-sm rounded-lg"
                                >
                                    <FaWhatsapp className="w-5 h-5 shrink-0"/>
                                    <span>WhatsApp</span>
                                </a>

                                <a
                                    href="/catalog"
                                    className="text-s border border-gray-300 px-6 py-3 rounded-lg bg-orange-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                                >
                                    Смотреть каталог
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}