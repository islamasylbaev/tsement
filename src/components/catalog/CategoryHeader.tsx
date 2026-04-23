import Image from "next/image";
import {TrackedLink} from "@/components/TrackedLink";

export default function CategoryHeader({ category }: any) {
    return (
        <div className="bg-white  rounded-xl p-6 flex gap-6 mb-6">

            {/* IMAGE */}
            <div className="relative w-32 h-32">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    loading="lazy"
                    className="object-contain"
                />
            </div>

            {/* TEXT */}
            <div className="flex-1">

                <h1 className="text-2xl font-bold mb-2">
                    {category.name}
                </h1>

                <p className="text-gray-600 mb-4">
                    {category.description}
                </p>

                {/* 🔥 КНОПКИ ТУТ */}
                <div className="flex gap-4 flex-wrap">

                    <TrackedLink
                        href="https://wa.me/77089117554"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                    >
                        Написать в WhatsApp
                    </TrackedLink>

                    <TrackedLink
                        href="tel:+77089117554"
                        className="border px-6 py-3 rounded-lg hover:bg-gray-100 "
                    >
                        Позвонить
                    </TrackedLink>

                </div>

            </div>

        </div>
    );
}