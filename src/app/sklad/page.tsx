"use client";
import Image from "next/image";
import ProjectsBlock from "@/app/sklad/ProjectsBlock";

export default function SkladPage() {
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: "ЖБИ склад в Астане",
                description:
                    "Готовые железобетонные конструкции: фермы, колонны, балки и перекрытия.",
                brand: {
                    "@type": "Brand",
                    name: "Цемент-Снаб НС",
                },
                areaServed: {
                    "@type": "City",
                    name: "Астана",
                },
            }),
        }}
    />
    return (
        <section className="bg-gray-100  py-12">

            <div className="max-w-[1536px] mx-auto px-4">

                <div
                    className="relative bg-white  rounded-2xl overflow-hidden flex flex-col lg:flex-row">

                    {/* LEFT IMAGE */}
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <Image
                            src="/img/sklad/main.jpg"
                            alt="ЖБИ склад"
                            fill
                            className="object-cover"
                        />

                        {/* overlay плавный */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 "></div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">

                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 ">
                            ЖБИ склад в Астане — готовые решения для строительства
                        </h1>
                        <p className="text-gray-700 mb-6 max-w-3xl">
                            ЖБИ склад в Астане от компании Цемент-Снаб НС — это готовые
                            железобетонные конструкции для быстрого строительства.
                            В наличии фермы, колонны, балки, перекрытия и другие элементы.
                            Вы можете купить ЖБИ изделия со склада в Астане с быстрой отгрузкой
                            и доставкой на объект.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            «Всё в одном месте — полный комплект ЖБИ для вашего склада».
                            Мы являемся производителем полного цикла: на нашем заводе
                            выпускаются все основные элементы для строительства складов
                            и производственных зданий — от ферм и прогонов до фасадных плит.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Такой подход экономит время и средства заказчика: не нужно
                            координировать нескольких поставщиков, все компоненты совместимы
                            и соответствуют единым стандартам качества. Мы контролируем весь
                            процесс — от проектирования до отгрузки — и можем быстро адаптировать
                            изделия под требования вашего объекта.
                        </p>

                    </div>

                    {/* ОРАНЖЕВЫЕ ПОЛОСЫ */}
                    <div className="absolute bottom-0 right-0 w-[300px] h-[200px] pointer-events-none">
                        <div
                            className="absolute bottom-0 right-0 w-full h-6 bg-orange-500 rotate-[-30deg] translate-y-10"></div>
                        <div
                            className="absolute bottom-0 right-0 w-full h-6 bg-orange-400 rotate-[-30deg] translate-y-20"></div>
                    </div>

                </div>

            </div>
            <div className="max-w-[1536px] mx-auto px-4 mt-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src="/img/sklad/schema.png"
                            alt="Продукция завода"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* TEXT */}
                    <div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 ">
                            Продукция нашего завода
                        </h2>

                        <div className="space-y-3 text-gray-600 leading-relaxed text-sm">

                            <p><b>1. Балка прогона</b> — продольный горизонтальный элемент крыши, поддерживает
                                стропила и кровлю.</p>
                            <p><b>2. Ферма</b> — несущий каркас, обеспечивает прочность и устойчивость конструкции.
                            </p>
                            <p><b>3. Водосточный желоб</b> — отводит дождевую воду и защищает фасад.</p>
                            <p><b>4. Колонна</b> — вертикальный несущий элемент, передает нагрузку на фундамент.</p>
                            <p><b>5. Плита перекрытия</b> — выдерживает большие нагрузки, перекрывает пролеты до 24
                                м.</p>
                            <p><b>6. Балка перекрытия</b> — распределяет нагрузку между колоннами.</p>
                            <p><b>7. Балка навеса</b> — используется для козырьков и навесов.</p>
                            <p><b>8. Подкрановый ригель</b> — основа для крановых путей.</p>
                            <p><b>9. Световой фонарь</b> — обеспечивает естественное освещение здания.</p>
                            <p><b>10. Фасадная плита</b> — формирует внешний вид и защищает здание.</p>

                        </div>

                    </div>

                </div>
                <div
                    className="bg-orange-500 text-white rounded-xl p-4 flex flex-wrap gap-4 justify-center text-sm font-medium">

                    <span>1 Балка прогона</span>
                    <span>2 Ферма</span>
                    <span>3 Водосточный желоб</span>
                    <span>4 Колонна</span>
                    <span>5 Плита перекрытия</span>
                    <span>6 Балка перекрытия</span>
                    <span>7 Балка навеса</span>
                    <span>8 Подкрановый ригель</span>
                    <span>9 Световой фонарь</span>
                    <span>10 Фасадная плита</span>

                </div>

            </div>
            <div className="max-w-[1536px] mx-auto px-4">

                <div
                    className="bg-white mt-5  rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">

                    {/* TEXT */}
                    <div className="lg:w-1/2">

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 ">
                            Готовые ЖБИ решения
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            Готовые железобетонные решения — собери здание, как конструктор.
                            Фермы, колонны, ригели и перекрытия уже готовы к установке —
                            просто доставьте, соберите и используйте.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            Монтаж занимает считанные дни и максимально надежен.
                            <span className="font-semibold text-gray-900 ">
            {" "}Гарантия до 50 лет
          </span>{" "}
                            — никаких сварочных работ, всё соединяется болтовыми узлами.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Так вы получаете надёжное промышленное помещение без
                            затягивания сроков и лишних расходов.
                        </p>

                    </div>

                    {/* IMAGE */}
                    <div className="lg:w-1/2 relative w-full h-[300px] md:h-[400px]">

                        <Image
                            src="/img/sklad/beam.png"
                            alt="ЖБИ конструкция"
                            fill
                            className="object-contain"
                        />

                    </div>

                </div>

            </div>
            <div className="max-w-[1536px] mx-auto px-4">

                <div
                    className="bg-white mt-5 relative rounded-2xl overflow-hidden flex flex-col lg:flex-row bg-gray-100 ">

                    {/* IMAGE */}
                    <div className="lg:w-1/2 relative min-h-[600px]">
                        <Image
                            src="/img/sklad/ferma.png"
                            alt="Фермы ЖБИ"
                            fill
                            className="object-contain p-6"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 ">
                            Линейка ферм
                            <br/>
                            фермы от 14м до 24м
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Мы разработали 10 видов железобетонных ферм длиной от 14 м до 24 м,
                            чтобы обеспечить оптимальное решение для склада любого масштаба.
                        </p>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Наша технология позволяет перекрывать пролёты до 24 м,
                            создавая конструкцию, способную выдерживать высокие нагрузки
                            при длительном пролёте.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Это значит, что наши фермы позволяют планировать пространство гибко:
                            вы можете уменьшить количество колонн или увеличить полезную площадь.
                        </p>
                    </div>
                </div>

            </div>
            <div className="max-w-[1536px] mx-auto px-4">

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

                    {/* IMAGE */}
                    <div className="relative w-full h-[400px] lg:h-auto rounded-2xl overflow-hidden">
                        <Image
                            src="/img/sklad/inside.jpg"
                            alt="Склад внутри"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* TABLE */}
                    <div className="bg-white  rounded-2xl p-6 lg:p-8">

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 ">
                            Подбор длины фермы
                        </h2>

                        <div className="space-y-6 text-sm text-gray-600 ">

                            {/* 14-15 */}
                            <div>
                                <p className="font-semibold text-gray-900  mb-1">
                                    14–15 м
                                </p>
                                <p>
                                    Небольшие склады, гаражи, складские помещения малой площади, небольшие цехи
                                    Экономичный вариант для лёгких складских и производственных операций.
                                </p>
                            </div>

                            {/* 16-18 */}
                            <div>
                                <p className="font-semibold text-gray-900  mb-1">
                                    16–18 м
                                </p>
                                <p>
                                    Магазины, небольшие логистические центры, малые цеха, сборочные линии Даёт
                                    пространство для стеллажей и лёгкого подъёмного транспорта; Подходит для
                                    оборудования средней высоты; Хороший компромисс между длиной и нагрузкой;
                                </p>
                            </div>

                            {/* 19-20 */}
                            <div>
                                <p className="font-semibold text-gray-900  mb-1">
                                    19–20 м
                                </p>
                                <p>
                                    Производственные цехи, складские ангары, распределительные терминалы Увеличенный
                                    пролёт; возможно размещение мостовых кранов и тяжёлого оборудования. Большая длина и
                                    несущая способность; сокращает количество колонн и улучшает планировку..
                                </p>
                            </div>

                            {/* 21-24 */}
                            <div>
                                <p className="font-semibold text-gray-900  mb-1">
                                    21–24 м
                                </p>
                                <p>
                                    Заводы и склады с высокими стеллажами . Крупные промышленные комплексы и
                                    производственные здания, производственные площадки с кранбалками. Позволяет
                                    создавать широкие пролёты без колонн с высокой нагрузкой; отлично подходит для
                                    крановых систем. Расчитана на тяжёлые нагрузки; уменьшает количество колонн,
                                    позволяя использовать простор под оборудование и транспорт. Помещение имеет пролёты
                                    до 24 м, создавая свободное пространство для логистики и тяжёлого оборудования.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <ProjectsBlock/>
            <div className="max-w-[1536px] mx-auto px-4 mt-10 space-y-10">

                {/* ===================== БАЛКА ПРОГОНА ===================== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

                    {/* IMAGE */}
                    <div className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src="/img/sklad/balka.jpg"
                            alt="Балка прогона"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="relative bg-gray-100  rounded-2xl p-6 lg:p-10 overflow-hidden">

                        {/* декоративные линии */}
                        <div
                            className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400/80 rotate-45 translate-x-10 translate-y-10"></div>
                        <div
                            className="absolute bottom-0 right-0 w-40 h-6 bg-orange-300 rotate-45 translate-x-16 translate-y-6"></div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 ">
                            Балка прогона 6м, 8м
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Балка прогона - продольный горизонтальный элемент крыши, который поддерживает стропила и
                            закрепляет кровельную обрешётку.
                            Сверху можно закрыть проф настилом, сэндвич панелями.
                            <br/><br/>
                            На нашем заводе такие балки выпускаются двух стандартных размеров - 6 м и 8 м, что
                            соответствует наиболее распространённым шагам между рамами и колоннами.
                            В проектировании отмечается, что такие элементы обычно перекрывают пролёты 6–8 м.
                            <br/><br/>
                            Все элементы производятся у нас на заводе, что гарантирует их совместимость и высокое
                            качество,
                            а вам не придётся подбирать компоненты у разных производителей.
                        </p>

                    </div>
                </div>

                {/* ===================== РИГЕЛЬ ===================== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

                    {/* IMAGE */}
                    <div className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src="/img/sklad/rigel.png"
                            alt="Подкрановый ригель"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="relative bg-gray-100  rounded-2xl p-6 lg:p-10 overflow-hidden">

                        {/* декоративные линии */}
                        <div
                            className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400/80 rotate-45 translate-x-10 translate-y-10"></div>
                        <div
                            className="absolute bottom-0 right-0 w-40 h-6 bg-orange-300 rotate-45 translate-x-16 translate-y-6"></div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 ">
                            Подкрановый ригель 6м, 8м
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Подкрановый ригель — специально спроектированный горизонтальный элемент, образующий путь для
                            мостового или подвесного крана.
                            Это балка, на которую устанавливается «рельс», она несёт вес крана и груза и выдерживает
                            значительные динамические нагрузки.
                            <br/><br/>
                            Каждый ригель рассчитывается под конкретную грузоподъёмность кран-балки.
                            <br/><br/>
                            Мы выпускаем 6 типоразмеров ригелей:
                            <br/>
                            • Для кран-балок грузоподъёмностью 10 т, 15 т и 20 т
                            <br/>
                            • Каждый тип доступен в вариантах 6 м и 8 м длиной
                        </p>

                    </div>
                </div>

            </div>
            <div className="max-w-[1536px] mx-auto px-4 mt-16">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 ">
                    Преимущества
                </h2>

                {/* LIST */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-gray-600 ">

                    <div className="space-y-4">
                        <p><b>1.</b> Гарантия на десятилетия. Каждое изделие покрыто 50-летней гарантией.</p>
                        <p><b>2.</b> Собственное производство без посредников. Прозрачная цена без наценок.</p>
                        <p><b>3.</b> Полный комплект для вашего склада — всё в одном месте.</p>
                        <p><b>4.</b> Контроль качества на каждом этапе и собственная лаборатория.</p>
                        <p><b>5.</b> Точная логистика и быстрый монтаж без задержек.</p>
                    </div>

                    <div className="space-y-4">
                        <p><b>6.</b> Индивидуальные решения под ваши задачи.</p>
                        <p><b>7.</b> Прозрачные условия — без скрытых доплат.</p>
                        <p><b>8.</b> Экологичные материалы и современные технологии.</p>
                        <p><b>9.</b> Опытные инженеры и реализация проектов любой сложности.</p>
                        <p><b>10.</b> Уникальный поставщик ЖБИ-складов в Астане.</p>
                    </div>

                </div>

                {/* ORANGE LINE */}
                <div className="w-full h-3 bg-orange-500 mt-10 rounded"></div>

                {/* IMAGES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                        <Image
                            src="/img/sklad/adv1.jpg"
                            alt="Склад"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                        <Image
                            src="/img/sklad/adv2.jpg"
                            alt="Стройка"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>
            <div className="mt-10 text-gray-700 text-sm md:text-base leading-relaxed space-y-4">

                <p>
                    Склад ЖБИ в Астане позволяет значительно сократить сроки строительства.
                    Все основные железобетонные конструкции уже готовы к монтажу:
                    фермы, колонны, ригели и плиты перекрытия.
                </p>

                <p>
                    Благодаря использованию готовых ЖБИ решений вы можете собрать здание
                    как конструктор — быстро, надежно и без дополнительных затрат.
                    Это особенно актуально для складов, производственных помещений
                    и логистических комплексов.
                </p>

                <p>
                    Купить ЖБИ со склада в Астане — это выгодное решение для бизнеса.
                    Мы обеспечиваем высокое качество продукции, соответствие стандартам ГОСТ
                    и быструю доставку на объект.
                </p>

            </div>
        </section>
    );
}