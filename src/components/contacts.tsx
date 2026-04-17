"use client";

import { Container } from "@/components/Container";

export default function Contacts() {
    return (
        <section className="pt-10 md:pt-20 pb-0 bg-white  overflow-hidden">
            <Container>

                <div className="bg-gray-200  rounded-2xl shadow overflow-hidden">

                    <div className="grid lg:grid-cols-3">

                        {/* LEFT INFO */}
                        <div className="p-8 space-y-6">

                            <h2 className="text-2xl font-bold text-gray-900 ">
                                Наши адреса
                            </h2>

                            <div>
                                <p className="text-gray-500 text-sm">Телефон</p>
                                <a
                                    href="tel:+77089117554"
                                    className="text-lg font-semibold text-gray-900 "
                                >
                                    +7 708 911 75 54
                                </a>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Email</p>
                                <a
                                    href="mailto:buy@tsementsnab.kz"
                                    className="text-lg text-gray-900 "
                                >
                                    buy@tsementsnab.kz
                                </a>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Адрес цеха</p>
                                <p className="text-gray-900 ">
                                    г. Астана, улица Ойыл, 3/1
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Адрес офиса</p>
                                <p className="text-gray-900 ">
                                    г. Астана, улица Шарль де Голль, 13
                                </p>
                            </div>

                            {/* BUTTON */}
                            <a
                                href="https://wa.me/77089117554"
                                target="_blank"
                                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                            >
                                Написать в WhatsApp
                            </a>

                        </div>

                        {/* MAP */}
                        <div className="lg:col-span-2 h-[400px] lg:h-auto">

                            <iframe
                                src="https://makemap.2gis.ru/widget?data=eJy1j81OwzAQhN9luVqVvbWdH4kTohUgocIFAeohxAu15MSR40qUKO-O3dInQN3jzO7MtxP4YCiQWZPvKAZLI9TvE8TDQFDDipq4DwQMhuAHCvHoT9B650PyrziW4hOTH210-YLfF8-7xxvJX2-vk2xobIMdovV9MpPwc9cb-oZa8PPMDL5O5Ycc_de88baPab_1CdD2TTyCFWIhlcZSMSUWQkrOcZvurYG6UMXM_gP-8PEUzXp1GWhZodQZGjnKSpyhK1XOWwZdM2z8aE-FE7gmQp0fVIhCl1yi1korBi77Oa7QSy3FUhUSMeF53yU4TKEJ3Dv3siNyb0c1hj3Nv4bQkrA"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                className="border-0"
                            />

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}