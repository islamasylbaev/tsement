"use client";

import { Truck, Factory, FileCheck, Users } from "lucide-react";
import { Container } from "@/components/Container";
import Link from "next/link";

const items = [
    {
        title: "Работаем напрямую",
        desc: "Без посредников, выгодные цены",
        icon: <Factory size={24} />,
        href: "https://wa.me/77089117554",
        external: true,
    },
    {
        title: "Индивидуальный подход",
        desc: "Подберём решение под ваш объект",
        icon: <Users size={24} />,
        href: "/catalog/custom",
    },
    {
        title: "Быстрая доставка",
        desc: "Собственный автопарк",
        icon: <Truck size={24} />,
        href: "/about/delivery",
    },
    {
        title: "Все документы",
        desc: "Сертификаты и паспорта качества",
        icon: <FileCheck size={24} />,
        href: "/about/licenses",
    },
];

export default function Advantages() {
    return (
        <section className="relative py-8 md:py-16 rounded-2xl overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <img
                    src="/img/6.jpg"
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            <Container>
                <div className="relative">

                    {/* TITLE */}
                    <h2 className="
                        text-2xl md:text-3xl
                        font-bold text-center
                        mb-6 md:mb-12
                        text-white
                    ">
                        Преимущества работы с нами
                    </h2>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                        {items.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                                className="group"
                            >
                                <div className="
                                    bg-white
                                    p-4 md:p-6
                                    rounded-xl
                                    shadow-md
                                    hover:shadow-xl
                                    transition
                                    cursor-pointer
                                    group-hover:-translate-y-1
                                ">

                                    <div className="mb-3 md:mb-4 text-orange-500">
                                        {item.icon}
                                    </div>

                                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2 group-hover:text-orange-500">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs md:text-sm text-gray-600">
                                        {item.desc}
                                    </p>

                                    {/* CTA hint */}
                                    <p className="text-xs text-orange-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                                        Подробнее →
                                    </p>

                                </div>
                            </Link>
                        ))}

                    </div>

                </div>
            </Container>
        </section>
    );
}