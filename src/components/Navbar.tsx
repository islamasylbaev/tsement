"use client";

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import {TrackedLink} from "@/components/TrackedLink";

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
                w-full sticky top-0 z-50
                transition-all duration-300
                ${scrolled
                ? "bg-white shadow-md py-2"
                : "bg-white py-4"}
            `}
        >
            <nav className="relative max-w-[1536px] mx-auto flex items-center justify-between px-4">

                {/* LOGO */}
                <Link href="/" className="flex items-center space-x-2 z-10">
                    <Image
                        src="/img/logo.png"
                        width={40}
                        height={40}
                        alt="ЦементСнаб"
                    />
                    <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">
                        ЦементСнаб
                    </span>
                </Link>

                {/* CENTER MENU */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">

                    {[
                        { href: "/", label: "Главная" },
                        { href: "/catalog", label: "Каталог товаров" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative group"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* DROPDOWN */}
                    <div className="relative group">

                        <button className="flex items-center gap-1 relative">
                            О нас
                            <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>

                        <div
                            className="
                                absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-xl p-3
                                opacity-0 invisible translate-y-3
                                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                transition-all duration-300
                            "
                        >
                            <Link href="/about" className="block py-2 px-2 rounded hover:bg-gray-100">
                                О компании
                            </Link>

                            <Link href="/about/licenses" className="block py-2 px-2 rounded hover:bg-gray-100">
                                Лицензии
                            </Link>

                            <Link href="/about/delivery" className="block py-2 px-2 rounded hover:bg-gray-100">
                                Доставка
                            </Link>
                        </div>
                    </div>

                    {[
                        { href: "/sklad", label: "Склад" },
                        { href: "/contacts", label: "Контакты" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative group"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3 ml-auto">

                    <TrackedLink href="tel:+77089117554" className="hidden md:block font-semibold text-sm">
                        +7 708 911 75 54
                    </TrackedLink>

                    <TrackedLink
                        href="https://wa.me/77089117554"
                        className="
                            flex items-center gap-2
                            bg-green-500 hover:bg-green-600
                            text-white px-3 py-1.5 text-sm rounded-lg
                            transition transform hover:scale-105
                        "
                    >
                        <FaWhatsapp className="w-4 h-4" />
                        <span className="">WhatsApp</span>
                    </TrackedLink>
                </div>

                {/* MOBILE */}
                <Disclosure>
                    {({ open, close }) => (
                        <>
                            <Disclosure.Button className="lg:hidden ml-3 z-50">
                                <div className="w-6 h-6 relative">
                                    <span className={`absolute h-[2px] w-full bg-black transition-all ${open ? "rotate-45 top-3" : "top-1"}`}></span>
                                    <span className={`absolute h-[2px] w-full bg-black transition-all ${open ? "opacity-0" : "top-3"}`}></span>
                                    <span className={`absolute h-[2px] w-full bg-black transition-all ${open ? "-rotate-45 top-3" : "top-5"}`}></span>
                                </div>
                            </Disclosure.Button>

                            {/* OVERLAY */}
                            <div
                                className={`
                                    fixed inset-0 bg-black/40 z-40
                                    transition-opacity duration-300
                                    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
                                `}
                                onClick={() => close()}
                            />

                            {/* PANEL */}
                            <Disclosure.Panel
                                className={`
                                    fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl
                                    transform transition-transform duration-300
                                    ${open ? "translate-x-0" : "translate-x-full"}
                                `}
                            >
                                <div className="flex justify-between p-4 border-b">
                                    <span className="font-semibold">Меню</span>
                                    <button onClick={() => close()}>✕</button>
                                </div>

                                <div className="flex flex-col text-sm">

                                    <Link href="/" onClick={() => close()} className="px-4 py-3 border-b hover:bg-gray-100">
                                        Главная
                                    </Link>

                                    <Link href="/catalog" onClick={() => close()} className="px-4 py-3 border-b hover:bg-gray-100">
                                        Каталог
                                    </Link>

                                    <div className="border-b">
                                        <p className="px-4 py-3 text-xs text-gray-500">О нас</p>

                                        <Link href="/about" onClick={() => close()} className="block px-6 py-2 hover:bg-gray-100">
                                            О компании
                                        </Link>

                                        <Link href="/about/licenses" onClick={() => close()} className="block px-6 py-2 hover:bg-gray-100">
                                            Лицензии
                                        </Link>

                                        <Link href="/about/delivery" onClick={() => close()} className="block px-6 py-2 hover:bg-gray-100">
                                            Доставка
                                        </Link>
                                    </div>

                                    <Link href="/sklad" onClick={() => close()} className="px-4 py-3 border-b hover:bg-gray-100">
                                        Склад
                                    </Link>

                                    <Link href="/contacts" onClick={() => close()} className="px-4 py-3 hover:bg-gray-100">
                                        Контакты
                                    </Link>

                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </nav>
        </div>
    );
};