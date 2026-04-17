"use client";

import Link from "next/link";
import Image from "next/image";
import {Disclosure} from "@headlessui/react";
import {FaWhatsapp} from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="w-full bg-white  border-b">
            <nav className="relative z-50 max-w-[1536px] mx-auto flex items-center justify-between p-6">

                {/* LOGO */}
                <Link href="/" className="flex items-center space-x-2 z-10">
                    <Image
                        src="/img/logo.png"
                        width={40}
                        height={40}
                        alt="ЦементСнаб"
                    />
                    <span className="text-sm sm:text-base md:text-xl font-bold text-gray-800 ">
    ЦементСнаб
</span>
                </Link>

                {/* CENTER MENU */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 z-40">
                    <Link href="/" className="hover:text-orange-500 transition">
                        Главная
                    </Link>
                    <Link href="/catalog" className="hover:text-orange-500 transition">
                        Каталог товаров
                    </Link>

                    {/* DROPDOWN */}
                    <div className="relative group">

                        <button className="flex items-center gap-1 hover:text-orange-500 transition">
                            О нас
                            <span className="text-xs transition group-hover:rotate-180">
                                ▼
                            </span>
                        </button>

                        <div className="absolute top-full left-0 mt-2 w-52 bg-white  shadow-xl rounded-lg p-3
                                        opacity-0 invisible translate-y-2
                                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                        transition-all duration-200 z-50">

                            <Link href="/about" className="block py-2 hover:text-orange-500">
                                О компании
                            </Link>

                            <Link href="/about/licenses" className="block py-2 hover:text-orange-500">
                                Лицензии
                            </Link>
                            <Link href="/about/delivery" className="block py-2 hover:text-orange-500">
                                Доставка
                            </Link>

                        </div>
                    </div>

                    <Link href="/sklad" className="hover:text-orange-500 transition">
                        Склад
                    </Link>

                    <Link href="/contacts" className="hover:text-orange-500 transition">
                        Контакты
                    </Link>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4 ml-auto z-10">

                    <a href="tel:+77089117554" className="hidden md:block font-semibold">
                        +7 708 911 75 54
                    </a>

                    <a
                        href="https://wa.me/77089117554"
                        target="_blank"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 text-sm rounded-lg"
                    >
                        <FaWhatsapp className="w-5 h-5 shrink-0"/>
                        <span>WhatsApp</span>
                    </a>
                </div>

                {/* MOBILE MENU */}
                <Disclosure>
                    {({open, close}) => (
                        <>
                            {/* BUTTON */}
                            <Disclosure.Button className="lg:hidden ml-4 z-50 relative">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {open ? (
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    ) : (
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    )}
                                </svg>
                            </Disclosure.Button>

                            {/* OVERLAY */}
                            {open && (
                                <div
                                    className="fixed inset-0 bg-black/40 z-40"
                                    onClick={() => close()}
                                />
                            )}

                            {/* SIDEBAR */}
                            <Disclosure.Panel
                                className={`fixed top-0 right-0 h-full w-[280px] bg-white  z-50 shadow-xl
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
                            >
                                {/* HEADER */}
                                <div className="flex items-center justify-between p-4 border-b">
                                    <span className="font-semibold text-sm">Меню</span>
                                    <button onClick={() => close()}>✕</button>
                                </div>

                                {/* LINKS */}
                                <div className="flex flex-col text-sm">
                                    <Link href="/" onClick={() => close()} className="px-4 py-3 border-b hover:bg-gray-100">
                                        Главная
                                    </Link>

                                    <Link href="/catalog" onClick={() => close()}
                                          className="px-4 py-3 border-b hover:bg-gray-100">
                                        Каталог
                                    </Link>

                                    <div className="border-b">
                                        <p className="px-4 py-3 font-semibold text-xs text-gray-500">
                                            О нас
                                        </p>

                                        <Link href="/about" onClick={() => close()}
                                              className="block px-6 py-2 text-sm hover:bg-gray-100">
                                            О компании
                                        </Link>

                                        <Link href="/about/licenses" onClick={() => close()}
                                              className="block px-6 py-2 text-sm hover:bg-gray-100">
                                            Лицензии
                                        </Link>

                                        <Link href="/about/delivery" onClick={() => close()}
                                              className="block px-6 py-2 text-sm hover:bg-gray-100">
                                            Доставка
                                        </Link>
                                    </div>

                                    <Link href="/sklad" onClick={() => close()}
                                          className="px-4 py-3 border-b hover:bg-gray-100">
                                        Склад
                                    </Link>

                                    <Link href="/contacts" onClick={() => close()}
                                          className="px-4 py-3 border-b hover:bg-gray-100">
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