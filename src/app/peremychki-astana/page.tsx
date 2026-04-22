import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Перемычки Астана | Купить перемычки",
    description: "Железобетонные перемычки в Астане для окон и дверей. Производство и доставка.",
};

export default function Page() {
    return <ProductPage params={{ slug: "peremychki" }} />;
}