"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="bg-white rounded-xl border overflow-hidden">
            {products.map((item) => {
                const active = pathname.includes(item.slug);

                return (
                    <Link
                        key={item.slug}
                        href={`/catalog/${item.slug}`}
                        className={`block px-4 py-3 border-b transition
              ${active ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                    >
                        {item.shortName}
                    </Link>
                );
            })}
        </div>
    );
}