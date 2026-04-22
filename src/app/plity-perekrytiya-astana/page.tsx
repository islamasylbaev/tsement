import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Плиты перекрытия Астана | Пустотные плиты ЖБИ",
    description: "Купить плиты перекрытия в Астане. Пустотные ЖБИ плиты от производителя с доставкой.",
};

export default function Page() {
    return <ProductPage params={{ slug: "plity" }} />;
}