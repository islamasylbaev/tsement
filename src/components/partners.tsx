"use client";

import Image from "next/image";
import {Container} from "@/components/Container";

const partners = [
    { name: "BI Group", logo: "/img/partners/logo_bi_group.png" },
    { name: "Galamat", logo: "/img/partners/logo_galamat.png" },
    { name: "SvoyDom", logo: "/img/partners/logo_svoydom.png" },
    { name: "Sana Kurlys", logo: "/img/partners/logo_sana.jpg" },
    { name: "G Park", logo: "/img/partners/logo_g_park.png" },
    { name: "NAK", logo: "/img/partners/logo_nak.jpg" },
];

export default function Partners() {
    return (
        <section className="pt-10 md:pt-20 pb-0 bg-white dark:bg-gray-900 overflow-hidden">
            <Container>

                {/* TEXT BLOCK */}
                <div className="w-full mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Нам доверяют
                    </h2>

                    <p className="text-s text-gray-600 dark:text-gray-300 leading-relaxed">
                        Благодаря высокому качеству продукции (использование бетона собственного производства и
                        качественных инертных материалов), а также соответствию стандартам ГОСТ, наша продукция
                        востребована частными заказчиками, коммерческими строительными компаниями и крупными
                        подрядчиками г. Астана. Отсутствие брака и выполнение заказов в срок делает нашу компанию
                        конкурентоспособной на рынке.
                    </p>
                </div>

                {/* SLIDER */}
                <div className="space-y-6">

                    {/* ROW 1 (влево) */}
                    <div className="overflow-hidden">
                        <div className="flex gap-12 animate-scroll-left">

                            {[...partners, ...partners].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center min-w-[200px] h-16"
                                >
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        width={140}
                                        height={60}
                                        className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* ROW 2 (вправо) */}
                    <div className="overflow-hidden">
                        <div className="flex gap-12 animate-scroll-right">

                            {[...partners, ...partners].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center min-w-[180px] h-16"
                                >
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        width={140}
                                        height={60}
                                        className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </Container>
        </section>
    );
}