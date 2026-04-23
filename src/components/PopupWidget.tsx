"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import {TrackedLink} from "@/components/TrackedLink";

export function PopupWidget() {
  return (
      <div>
        <Disclosure>
          {({ open }) => (
              <>

                {/* КНОПКА */}
                  <Disclosure.Button className="
    fixed z-40 flex items-center justify-center
    bg-orange-500 hover:bg-orange-600 text-white
    rounded-full shadow-lg
    right-5 bottom-5 w-14 h-14

    transition
    hover:scale-110

    before:absolute before:inset-0 before:rounded-full
    before:bg-orange-400 before:opacity-50
    before:animate-ping
">
    <span className="relative z-10">
        {open ? "✕" : "☰"}
    </span>
                  </Disclosure.Button>

                {/* МЕНЮ */}
                <Transition
                    show={open}
                    enter="transition duration-200 transform"
                    enterFrom="opacity-0 translate-y-5"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-200 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-5"
                >
                  <div className="fixed bottom-24 right-5 z-50 flex flex-col gap-3">

                    {/* WHATSAPP */}
                      <TrackedLink
                        href="https://wa.me/77089117554"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl shadow-lg"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      WhatsApp
                    </TrackedLink>

                    {/* PHONE */}
                    <TrackedLink
                        href="tel:+77089117554"
                        className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-3 rounded-xl shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Позвонить
                    </TrackedLink>

                  </div>
                </Transition>

              </>
          )}
        </Disclosure>
      </div>
  );
}