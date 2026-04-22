import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Сваи Астана | Купить сваи с доставкой",
    description: "Продажа железобетонных свай в Астане. Производство, доставка, выгодные цены.",
};

export default function Page() {
    return <ProductPage params={{ slug: "svai" }} />;
}