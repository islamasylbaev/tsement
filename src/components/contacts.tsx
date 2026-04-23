"use client";

import { Container } from "@/components/Container";
import {TrackedLink} from "@/components/TrackedLink";

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
                                <TrackedLink
                                    href="tel:+77089117554"
                                    className="text-lg font-semibold text-gray-900 "
                                >
                                    +7 708 911 75 54
                                </TrackedLink>
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
                                    г. Астана, 85-я улица, 9/1
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm">Адрес офиса</p>
                                <p className="text-gray-900 ">
                                    г. Астана, улица Шарль де Голль, 13
                                </p>
                            </div>

                            {/* BUTTON */}
                            <TrackedLink
                                href="https://wa.me/77089117554"
                                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                            >
                                Написать в WhatsApp
                            </TrackedLink >

                        </div>

                        {/* MAP */}
                        <div className="lg:col-span-2 h-[400px] lg:h-auto">

                            <iframe
                                src="https://makemap.2gis.ru/widget?data=eJy1js1OwzAQhN9luVqV7cQ_jcQJ0QqQUOGCAPUQ4oVacuLIdSVKlHdnkwIvgLqXlWZ2Z74BYnKY0K0xtpiTxz1UrwPkY49QwQrrfEgIDPoUe0x59gdoYoiJ_AsurXiX5Gefw_TB794esluvSHK4b5Lvs48dGSR83XQOP6ES_HdGBh-n4uMU-9O6ib7LdN9EgvNdnWcoIxZlIQxTYiG5ltpu6ds7qJZSjew_yLfmcXd_VfLn68vzYCstrZrARVlyLv_ArRy3DNq638S9PxUOEOoM1XyrhdVqaU1haTMIk09xSkijdFEaTbma-GJsiU5QKpHHEJ52iOFlVnM64PgNj6KSlg"
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