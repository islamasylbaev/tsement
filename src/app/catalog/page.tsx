import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import CatalogLayout from "@/components/catalog/CatalogLayout";
export const metadata = {
    title: "ЖБИ изделия в Астане | Сваи, ФБС блоки, плиты | Каталог",
    description:
        "Каталог ЖБИ изделий в Астане: сваи, ФБС блоки, плиты перекрытия, перемычки, кольца и другие железобетонные изделия. Производство и доставка.",
};
export default function CatalogPage() {
    return (

        <div className="max-w-[1536px] mx-auto px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: products.map((item, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            name: item.name,
                            url: `https://tsementsnab.kz/catalog/${item.slug}`,
                        })),
                    }),
                }}
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-6 md:mt-10">
                <Link href={`/catalog`}>ЖБИ изделия в Астане — каталог продукции</Link>
            </h1>

            <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">
                Главная — Каталог
            </p>

            <CatalogLayout>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                    {products.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/catalog/${item.slug}`}
                            className="
                                bg-white rounded-xl border
                                p-4 md:p-6
                                flex gap-4
                                hover:shadow-xl transition
                                items-center
                            "
                        >

                            {/* IMAGE */}
                            <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={`${item.name} в Астане`}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* TEXT */}
                            <div>
                                <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">
                                    {item.name}
                                </h2>

                                <p className="text-gray-600 text-xs md:text-sm">
                                    {item.description}
                                </p>
                            </div>

                        </Link>
                    ))}

                </div>

            </CatalogLayout>
            <div className="mt-8 md:mt-12 text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                    Каталог железобетонных изделий (ЖБИ) в Астане от компании Цемент-Снаб НС.
                    В наличии сваи ЖБИ, фундаментные блоки ФБС, плиты перекрытия,
                    перемычки, кольца, лотки и другие изделия.
                </p>

                <p>
                    Мы осуществляем производство ЖБИ продукции с соблюдением стандартов ГОСТ.
                    Вы можете купить ЖБИ изделия в Астане напрямую от производителя
                    с доставкой на объект.
                </p>

                <p>
                    Наша продукция используется в строительстве жилых домов,
                    складов, промышленных объектов и инженерных систем.
                </p>
            </div>
        </div>

    );
}