"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Phone, Mail, MapPin } from "lucide-react";
import {TrackedLink} from "@/components/TrackedLink";

export function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-300 mt-10">

        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">

            {/* LOGO + DESC */}
            <div>
              <Link href="/" className="flex items-center gap-2 text-white text-xl font-bold">
                <Image src="/img/logo.png" alt="logo" width={32} height={32} />
                Цемент-Снаб
              </Link>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Производство и поставка железобетонных изделий (ЖБИ) в Астане.
                Работаем с частными клиентами и крупными подрядчиками.
              </p>
            </div>

            {/* МЕНЮ */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Навигация
              </h3>

              <div className="flex flex-col gap-2 text-sm">
                <Link href="/catalog" className="hover:text-orange-500">
                  Каталог
                </Link>
                <Link href="/sklad" className="hover:text-orange-500">
                  ЖБИ Склад
                </Link>
                <Link href="/about" className="hover:text-orange-500">
                  О компании
                </Link>
                <Link href="/about/delivery" className="hover:text-orange-500">
                  Доставка
                </Link>
                <Link href="/contacts" className="hover:text-orange-500">
                  Контакты
                </Link>
              </div>
            </div>

            {/* КОНТАКТЫ */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Контакты
              </h3>

              <div className="flex flex-col gap-3 text-sm">

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <TrackedLink href="tel:+77089117554" className="hover:text-white">
                    +7 708 911 75 54
                  </TrackedLink>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a href="mailto:buy@tsementsnab.kz" className="hover:text-white">
                    buy@tsementsnab.kz
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                  <p>
                    г. Астана, 85-я улица, 9/1
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Связаться
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Напишите нам в WhatsApp и получите консультацию
              </p>

              <TrackedLink
                  href="https://wa.me/77089117554"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition text-sm"
              >
                Написать в WhatsApp
              </TrackedLink>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Цемент-Снаб. Все права защищены.
          </div>

        </Container>
      </footer>
  );
}