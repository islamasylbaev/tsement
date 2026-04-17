import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Products from "@/components/Products";
import Advantages from "@/components/advantages";
import Partners from "@/components/partners";
import {Benefits} from "@/components/Benefits";
import { Truck } from "lucide-react";
import About from "@/components/about";
import Contacts from "@/components/contacts";
export const metadata = {
    title: "Цемент-Снаб НС | ЖБИ изделия в Астане | Сваи, ФБС блоки, плиты",
    description:
        "Производство и продажа ЖБИ изделий в Астане: сваи, фундаментные блоки ФБС, пустотные плиты, перемычки. Доставка по Астане. Завод ЖБИ.",
    keywords:
        "ЖБИ Астана, сваи Астана, ФБС блоки Астана, железобетонные изделия Астана, плиты перекрытия Астана, завод ЖБИ Астана",
};
export default function Home() {
    return (
        <Container>
            <Hero />
            <Products />
            <Advantages />
            <Partners />
            <About />
            <Contacts />
        </Container>
    );
}