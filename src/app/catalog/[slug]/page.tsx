import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import CatalogLayout from "@/components/catalog/CatalogLayout";
import Link from "next/link";
import Image from "next/image";
import {TrackedLink} from "@/components/TrackedLink";

export default function Page({ params }: any) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) return notFound();
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: `https://tsementsnab.kz${product.image}`,
        description: product.description,
        brand: {
            "@type": "Brand",
            name: "Цемент-Снаб НС",
        },
        offers: {
            "@type": "Offer",
            priceCurrency: "KZT",
            availability: "https://schema.org/InStock",
            url: `https://tsementsnab.kz/catalog/${product.slug}`,
        },
    };
    return (

        <div className="max-w-[1536px] mx-auto px-4 mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Главная",
                                item: "https://tsementsnab.kz",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Каталог",
                                item: "https://tsementsnab.kz/catalog",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: product.name,
                                item: `https://tsementsnab.kz/catalog/${product.slug}`,
                            },
                        ],
                    }),
                }}
            />
            {/* HEADER */}
            <h1 className="text-2xl md:text-3xl font-bold mt-6 md:mt-10">
                <Link href={`/catalog`}>Каталог</Link>
            </h1>

            <p className="text-gray-500 mt-2 mb-4 md:mb-6 text-sm md:text-base">
                Главная — Каталог
            </p>

            <CatalogLayout>

                {/* 🔥 КНОПКА НАЗАД (ТОЛЬКО МОБИЛКА) */}
                <Link
                    href="/catalog"
                    className="inline-flex items-center gap-2 mb-4 text-sm text-orange-500 md:hidden"
                >
                    ← Назад в каталог
                </Link>

                {/* PRODUCT CARD */}
                <div className="
                    bg-white rounded-xl
                    p-4 md:p-6
                    mb-6
                    flex flex-col md:flex-row
                    gap-4 md:gap-6
                    items-start md:items-center
                    border border-gray-200
                ">

                    {/* IMAGE */}
                    <div className="relative w-full md:w-[220px] h-[160px] md:h-[180px]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            loading="lazy"
                            className="object-contain"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">

                        <h2 className="text-xl md:text-2xl font-bold mb-2">
                            {product.name}
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            {product.description}
                        </p>

                        <div className="flex flex-wrap gap-3">

                            <TrackedLink
                                href={`https://wa.me/77089117554?text=${encodeURIComponent(
                                    `Здравствуйте! Интересует ${product.name}`
                                )}`}
                                className="bg-orange-500 text-white px-4 md:px-5 py-2 rounded-lg text-sm md:text-base"
                            >
                                Написать в WhatsApp
                            </TrackedLink>

                            <TrackedLink
                                href="tel:+77089117554"
                                className="border px-4 md:px-5 py-2 rounded-lg text-sm md:text-base"
                            >
                                Позвонить
                            </TrackedLink>

                        </div>

                    </div>
                </div>

                {/* SIZES */}
                <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">

                    <h3 className="text-lg md:text-xl font-bold mb-4">
                        Доступные размеры
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {product.sizes.map((size, i) => (
                            <div
                                key={i}
                                className="border rounded-lg px-4 py-3 text-sm md:text-base"
                            >
                                {size}
                            </div>
                        ))}
                    </div>

                </div>

            </CatalogLayout>
        </div>
    );
}