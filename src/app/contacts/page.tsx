export default function ContactsPage() {
    return (
        <div className="bg-gray-100  min-h-screen">

            {/* MAP */}
            <div className="w-full h-[400px] lg:h-[500px]">
                <iframe
                    src="https://makemap.2gis.ru/widget?data=eJy1js1OwzAQhN9luVqV7cQ_jcQJ0QqQUOGCAPUQ4oVacuLIdSVKlHdnkwIvgLqXlWZ2Z74BYnKY0K0xtpiTxz1UrwPkY49QwQrrfEgIDPoUe0x59gdoYoiJ_AsurXiX5Gefw_TB794esluvSHK4b5Lvs48dGSR83XQOP6ES_HdGBh-n4uMU-9O6ib7LdN9EgvNdnWcoIxZlIQxTYiG5ltpu6ds7qJZSjew_yLfmcXd_VfLn68vzYCstrZrARVlyLv_ArRy3DNq638S9PxUOEOoM1XyrhdVqaU1haTMIk09xSkijdFEaTbma-GJsiU5QKpHHEJ52iOFlVnM64PgNj6KSlg"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0"
                />
            </div>

            {/* CONTENT */}
            <div className="max-w-[1536px] mx-auto px-4 py-12">

                <h1 className="text-3xl font-bold mb-8 text-gray-900 ">
                    Контакты
                </h1>

                <div className="space-y-4 text-gray-700 leading-relaxed">

                    <p>
                        <strong>Компания:</strong> ТОО «Цемент-Снаб НС»
                    </p>

                    <p>
                        <strong>Телефон:</strong>{" "}
                        <a href="tel:+77089117554" className="text-orange-500">
                            +7 708 911 75 54
                        </a>
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:buy@tsementsnab.kz" className="text-orange-500">
                            buy@tsementsnab.kz
                        </a>
                    </p>

                    <p>
                        <strong>Адрес цеха:</strong> г. Астана, 85-я улица, 9/1
                    </p>

                    <p>
                        <strong>Адрес офиса:</strong> г. Астана, улица Шарль де Голль, 13
                    </p>

                    <p>
                        <strong>Режим работы:</strong> Пн–Пт: 09:00–18:00
                    </p>
                    <a
                        href="https://wa.me/77089117554"
                        className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg"
                    >
                        Написать в WhatsApp
                    </a>
                </div>

            </div>

        </div>
    );
}