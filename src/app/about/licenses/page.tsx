"use client";

import Image from "next/image";
import Link from "next/link";
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
const licenses = [
    {
        title: "Сертификат соответствия (перемычки ЖБИ)",
        desc: "Подтверждает соответствие железобетонных перемычек требованиям ГОСТ 948-2016 и стандартам безопасности.",
        file: "/docs/perrus.pdf",
        img: "/img/cert/sert.png",
    },
    {
        title: "Сертификат соответствия (сваи ЖБИ)",
        desc: "Подтверждает качество железобетонных свай согласно ГОСТ 19804-2012.",
        file: "/docs/svairus.pdf",
        img: "/img/cert/sert.png",
    },
    {
        title: "Сертификат соответствия (лестничные марши)",
        desc: "Соответствие изделий требованиям ГОСТ 9818-2015.",
        file: "/docs/lmrus.pdf",
        img: "/img/cert/sert.png",
    },
];
export default function LicensesPage() {
    return (
        <AboutLayout>

            <div className="flex flex-col gap-6">

                {licenses.map((item, i) => (
                    <div
                        key={i}
                        className="
                            bg-white
                            rounded-xl
                            p-4 md:p-6
                            border
                            flex flex-col md:flex-row
                            gap-4 md:gap-6
                            items-center md:items-start
                        "
                    >

                        {/* IMAGE */}
                        <div className="w-full md:w-[220px] flex-shrink-0 flex justify-center">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={220}
                                height={300}
                                className="rounded-lg border object-contain"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                {item.desc}
                            </p>

                            <a
                                href={item.file}
                                target="_blank"
                                className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                            >
                                Открыть PDF
                            </a>
                        </div>

                    </div>
                ))}

            </div>

        </AboutLayout>
    );
}