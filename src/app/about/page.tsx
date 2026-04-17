"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AboutLayout from "@/components/AboutLayout";
const images = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
];

export default function AboutPage() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <AboutLayout>
        <div className="bg-gray-100  min-h-screen">
            <div className="max-w-[1536px] mx-auto px-4 flex gap-6">

                <div className="flex-1 flex flex-col gap-6">
                    <div className="relative h-[350px] rounded-xl overflow-hidden">
                        <Image
                            src={images[current]}
                            alt="factory"
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded"
                        >
                            ←
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded"
                        >
                            →
                        </button>
                    </div>

                    {/* TEXT */}
                    <div className="bg-white  rounded-xl p-6 border text-gray-700 leading-relaxed">

                        <h2 className="text-2xl font-bold mb-4 text-gray-900 ">
                            Цемент-Снаб НС
                        </h2>

                        <p className="mb-4">
                            ТОО «Цемент-Снаб НС» – динамично развивающаяся производственная компания, осуществляющая свою деятельность с 2005 года, один из лидеров по производству ЖБИ.
                        </p>

                        <p className="mb-4">
                            Поставляем стандартные железобетонные изделия в любом объеме, а также выполняем индивидуальные заказы.
                        </p>

                        <p className="mb-4">
                            Благодаря высокому качеству продукции и соответствию стандартам ГОСТ, наша продукция востребована частными заказчиками и строительными компаниями.
                        </p>

                        {/* ADVANTAGES */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-3 text-lg">Преимущества:</h3>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li>• Работаем напрямую без посредников</li>
                                <li>• Индивидуальный подход</li>
                                <li>• Всё включено</li>
                                <li>• Онлайн заявки</li>
                                <li>• Доставка в срок</li>
                                <li>• Полный пакет документов</li>
                                <li>• Прохождение СЭЗ</li>
                                <li>• Сертификаты качества</li>
                            </ul>
                        </div>

                    </div>

                    {/* CERTIFICATES */}
                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-4">*/}
                    {/*    <Image src="/img/cert/1.jpg" alt="" width={400} height={500} className="rounded-lg" />*/}
                    {/*    <Image src="/img/cert/2.jpg" alt="" width={400} height={500} className="rounded-lg" />*/}
                    {/*    <Image src="/img/cert/3.jpg" alt="" width={400} height={500} className="rounded-lg" />*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
        </AboutLayout>
    );
}