"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import {
    PhoneCall,
    Settings,
    BadgeCheck,
    Truck
} from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative z-0 bg-white pt-6 md:pt-12">
            <Container>

                {/* HERO GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

                    {/* LEFT */}
                    <div className="flex flex-col gap-4">
                        <HeroCard
                            title="Фундаментные блоки"
                            tag="ФБС БЛОКИ"
                            image="/img/fbs.png"
                            link="/catalog/fbs"
                        />
                        <HeroCard
                            title="Сваи ЖБИ"
                            tag="ЖБ СВАИ"
                            image="/img/products/svai.png"
                            link="/catalog/svai"
                        />
                    </div>

                    {/* CENTER */}
                    <Link
                        href="/sklad"
                        className="lg:col-span-2 h-[300px] md:h-[420px] relative rounded-xl overflow-hidden group"
                    >
                        <Image
                            src="/img/sklad/main.jpg"
                            alt="ЖБИ склад"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-black/55 flex flex-col justify-center p-5 md:p-8">

                            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-3 max-w-md">
                                ЖБИ Склад
                            </h1>

                            <p className="text-gray-200 text-sm md:text-base mb-4 md:mb-6 max-w-md">
                                Производство и поставка железобетонных конструкций
                                для складов и промышленных объектов
                            </p>

                            <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-xs md:text-sm w-fit">
                                Перейти в раздел
                            </span>

                        </div>
                    </Link>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-4">
                        <HeroCard
                            title="Кольца колодцев"
                            tag="КОЛЬЦА"
                            image="/img/koltsa.png"
                            link="/catalog/koltsa"
                        />
                        <HeroCard
                            title="Доставка ЖБИ"
                            tag="ДОСТАВКА"
                            image="/img/delivery.png"
                            link="/about/delivery"
                        />
                    </div>

                </div>

                {/* FEATURES BLOCK */}
                <div className="mt-6 md:mt-5 relative rounded-2xl overflow-hidden">

                    {/* BACKGROUND IMAGE */}
                    <div className="absolute inset-0">
                        <img
                            src="/img/1.jpg" // 👈 сюда свою картинку
                            alt="background"
                            className="w-full h-full object-cover "
                        />
                    </div>

                    {/* OVERLAY (серый сверху) */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/40"/>

                    {/* CONTENT */}
                    <div className="relative p-4 md:p-6">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">

                            <Feature
                                icon={<PhoneCall className="w-6 h-6 text-orange-500"/>}
                                text="Отгрузка ЖБИ за 24 часа 7 дней в неделю"
                            />

                            <Feature
                                icon={<Settings className="w-6 h-6 text-orange-500"/>}
                                text="Соблюдение технологий производства на 100%"
                            />

                            <Feature
                                icon={<BadgeCheck className="w-6 h-6 text-orange-500"/>}
                                text="Особые условия для строителей и прорабов"
                            />

                            <Feature
                                icon={<Truck className="w-6 h-6 text-orange-500"/>}
                                text="Собственный автопарк для перевозки ЖБИ"
                            />

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
};

function HeroCard({
                      title,
                      tag,
                      image,
                      link,
                  }: {
    title: string;
    tag: string;
    image: string;
    link: string;
}) {
    return (
        <Link
            href={link}
            className="relative h-[140px] md:h-[200px] rounded-xl overflow-hidden group"
        >

            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/55 p-3 md:p-4 flex flex-col justify-end">

                <span className="text-xs md:text-sm lg:text-base bg-orange-500 text-white px-2 py-1 rounded mb-2 w-fit">
    {tag}
</span>

                <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg leading-tight">
                    {title}
                </h3>

            </div>

        </Link>
    );
}

function Feature({
                     icon,
                     text,
                 }: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex flex-col items-center gap-2 md:gap-1">

            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-sm">
                {icon}
            </div>

            <p className="text-xs md:text-sm text-white max-w-[160px]">
                {text}
            </p>

        </div>
    );
}