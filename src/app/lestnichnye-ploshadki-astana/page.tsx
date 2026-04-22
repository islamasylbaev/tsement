import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Лестничные площадки Астана",
    description: "ЖБИ лестничные площадки в Астане. Производство и доставка.",
};

export default function Page() {
    return <ProductPage params={{ slug: "ploshadki" }} />;
}