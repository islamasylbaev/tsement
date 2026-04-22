"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export default function Products() {
    return (
        <section className="py-10 md:py-10 bg-white">
            <Container>

                {/* HEADER */}
                <div className="flex items-center justify-between mb-6 md:mb-8">

                    <h2 className="text-2xl md:text-3xl font-bold">
                        Наша продукция
                    </h2>

                    <Link
                        href="/catalog"
                        className="text-orange-500 text-sm md:text-base hover:underline"
                    >
                        Весь каталог
                    </Link>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 min-h-[160px] md:min-h-[200px]">

                    {products.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/catalog/${item.slug}`}
                            className="
                                group rounded-2xl p-3 md:p-4 flex flex-col items-center text-center
                                transition border border-gray-200
                                hover:shadow-xl hover:-translate-y-1
                            "
                        >

                            {/* IMAGE */}
                            <div className="relative w-full h-[120px] md:h-[160px] mb-2 md:mb-3">

                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    loading="lazy"
                                    className="object-contain group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* TITLE */}
                            <p className="text-[14px] md:text-base font-semibold group-hover:text-orange-500">
                                {item.shortName}
                            </p>
                            <div
                                className="flex items-center gap-1 text-orange-500 text-xs mt-1 opacity-70 group-hover:opacity-100 transition">
                                Подробнее
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition"/>
                            </div>

                        </Link>
                    ))}

                </div>

            </Container>
        </section>
    );
}