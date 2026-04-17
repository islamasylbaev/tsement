"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import AboutLayout from "@/components/AboutLayout";

const menu = [
    "О компании",
    "Лицензии",
    "Доставка",
];

const links: any = {
    "О компании": "/about",
    "Лицензии": "/about/licenses",
    "Доставка": "/about/delivery",
};

export default function DeliveryPage() {

    const pathname = usePathname();

    return (
        <AboutLayout>
            <div className="bg-gray-100  min-h-screen">
                <div className="max-w-[1536px] mx-auto px-4 flex gap-6">
                    <div className="flex-1">

                        <div
                            className="bg-white  rounded-xl p-6 border flex flex-col lg:flex-row gap-6 items-center">

                            {/* IMAGE */}
                            <div className="relative w-full lg:w-1/2 h-[300px] rounded-xl overflow-hidden">
                                <Image
                                    src="/img/delivery.png"
                                    alt="Доставка ЖБИ"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="flex-1">

                                <h2 className="text-2xl font-bold mb-4 text-gray-900 ">
                                    Доставка по городу Астана
                                </h2>

                                <p className="text-gray-600 mb-4">
                                    Компания ТОО «Цемент-Снаб НС» осуществляет доставку железобетонных изделий
                                    по городу Астана. Мы используем собственный автопарк,
                                    что позволяет контролировать сроки и гарантировать сохранность продукции.
                                </p>

                                <p className="text-gray-600 mb-4">
                                    В наличии специализированная техника различной грузоподъёмности, что даёт
                                    возможность доставлять как небольшие партии, так и крупные строительные объекты.
                                    Доставка осуществляется в удобное для вас время, включая срочные заявки.
                                </p>

                                <p className="text-gray-600 mb-6">
                                    Мы обеспечиваем полный цикл: от производства до доставки на объект.
                                    Это исключает задержки и позволяет вам получить продукцию точно в срок
                                    без лишних затрат и посредников.
                                </p>

                                <div className="flex gap-3">
                                    <a
                                        href="https://wa.me/77089117554"
                                        target="_blank"
                                        className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
                                    >
                                        Заказать доставку
                                    </a>

                                    <Link
                                        href="/catalog"
                                        className="border px-5 py-2 rounded-lg hover:bg-gray-100  transition"
                                    >
                                        Смотреть каталог
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </AboutLayout>
    );
}