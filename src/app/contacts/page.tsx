export default function ContactsPage() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">

            {/* MAP */}
            <div className="w-full h-[400px] lg:h-[500px]">
                <iframe
                    src="https://makemap.2gis.ru/widget?data=eJy1j81OwzAQhN9luVqVvbWdH4kTohUgocIFAeohxAu15MSR40qUKO-O3dInQN3jzO7MtxP4YCiQWZPvKAZLI9TvE8TDQFDDipq4DwQMhuAHCvHoT9B650PyrziW4hOTH210-YLfF8-7xxvJX2-vk2xobIMdovV9MpPwc9cb-oZa8PPMDL5O5Ycc_de88baPab_1CdD2TTyCFWIhlcZSMSUWQkrOcZvurYG6UMXM_gP-8PEUzXp1GWhZodQZGjnKSpyhK1XOWwZdM2z8aE-FE7gmQp0fVIhCl1yi1korBi77Oa7QSy3FUhUSMeF53yU4TKEJ3Dv3siNyb0c1hj3Nv4bQkrA"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0"
                />
            </div>

            {/* CONTENT */}
            <div className="max-w-[1536px] mx-auto px-4 py-12">

                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Контакты
                </h1>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">

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
                        <strong>Адрес цеха:</strong> г. Астана, улица Ойыл, 3/1
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