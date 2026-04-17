"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
    { name: "О компании", href: "/about" },
    { name: "Лицензии", href: "/about/licenses" },
    { name: "Доставка", href: "/about/delivery" },
];

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* HEADER */}
            <div className="max-w-[1536px] mx-auto px-4 py-6 md:py-8">
                <h1 className="text-2xl md:text-3xl font-bold">
                    О компании
                </h1>
                <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
                    Главная — О компании
                </p>
            </div>

            <div className="max-w-[1536px] mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-6">

                {/* 🔥 MOBILE TABS */}
                <div className="md:hidden">
                    <div className="flex bg-white rounded-xl border overflow-hidden text-sm">

                        {menu.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex-1 text-center py-2 transition ${
                                        active
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* DESKTOP SIDEBAR */}
                <div className="hidden md:block w-[260px]">
                    <div className="bg-white rounded-xl border overflow-hidden">

                        {menu.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-4 py-3 border-b transition ${
                                        active
                                            ? "bg-orange-500 text-white"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                    {children}
                </div>

            </div>
        </div>
    );
}