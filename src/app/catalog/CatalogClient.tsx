"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {products} from "@/lib/products";
import CatalogLayout from "@/components/catalog/CatalogLayout";
import {X} from "lucide-react";

const popularSearches = ["сваи", "плиты", "фермы", "перемычки"];

export default function CatalogClient() {

    const [search, setSearch] = useState("");
    const [focused, setFocused] = useState(false);

    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.shortName.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    const suggestions = products
        .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 5);

    return (
        <div className="max-w-[1536px] mx-auto px-4">

            <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-6 md:mt-10">
                ЖБИ изделия в Астане — каталог продукции
            </h1>

            <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">
                Главная — Каталог
            </p>
            <div className="flex justify-end">

                <div className="relative w-full max-w-xl">

                    <input
                        type="text"
                        placeholder="Поиск"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setTimeout(() => setFocused(false), 200)}
                        className="
                        w-full
                        px-4 py-2.5
                        pr-10
                        border
                        rounded-lg
                        text-sm
                        outline-none
                        bg-gray-100
                        hover:bg-gray-100
                        focus:bg-white
                        focus:ring-2 focus:ring-orange-500
                        transition
"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                        >
                            ✕
                        </button>
                    )}
                    {focused && (
                        <div className="absolute w-full bg-white border rounded-lg mt-1 shadow z-50">

                            {search ? (
                                suggestions.length > 0 ? (
                                    suggestions.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/catalog/${item.slug}`}
                                            className="block px-3 py-2 text-sm hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </Link>
                                    ))
                                ) : (
                                    <div className="px-3 py-2 text-gray-500 text-sm">
                                        Ничего не найдено
                                    </div>
                                )
                            ) : (
                                <div className="px-3 py-2 text-gray-400 text-s">
                                    Например: сваи, плиты, фермы
                                </div>
                            )}

                        </div>
                    )}

                </div>

            </div>
            <CatalogLayout>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/catalog/${item.slug}`}
                                className="bg-white rounded-xl border p-4 md:p-6 flex gap-4 hover:shadow-xl transition items-center"
                            >

                                <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={`${item.name} в Астане`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-base md:text-lg font-bold mb-1">
                                        {item.name}
                                    </h2>

                                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                            </Link>
                        ))
                    ) : (
                        <div className="col-span-2 text-center text-gray-500 py-10">
                            Ничего не найдено
                        </div>
                    )}

                </div>

            </CatalogLayout>

        </div>
    );
}