"use client";

import Image from "next/image";
import { Container } from "@/components/Container";

type Bullet = {
    title: string;
    desc: string;
    icon: React.ReactNode;
};

type BenefitsProps = {
    title: string;
    desc: string;
    image: string; // ВАЖНО: строка!
    bullets: Bullet[];
    imgPos?: "left" | "right";
};

export function Benefits({
                             title,
                             desc,
                             image,
                             bullets,
                             imgPos = "left",
                         }: BenefitsProps) {
    return (
        <section className="py-20 bg-white ">
            <Container>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* IMAGE */}
                    <div className={imgPos === "right" ? "lg:order-2" : ""}>
                        <Image
                            src={image}
                            alt="benefits"
                            width={700}
                            height={500}
                            loading="lazy"
                            className="w-full h-auto object-cover rounded-xl"
                            priority
                        />
                    </div>

                    {/* TEXT */}
                    <div className={imgPos === "right" ? "lg:order-1" : ""}>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
                            {title}
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {desc}
                        </p>

                        <div className="space-y-6">
                            {bullets.map((item, i) => (
                                <div key={i} className="flex gap-4">

                                    {/* ICON */}
                                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 ">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 ">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}