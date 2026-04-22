import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Лестничные марши Астана",
    description: "Купить лестничные марши ЖБИ в Астане. Надежные конструкции для зданий.",
};

export default function Page() {
    return <ProductPage params={{ slug: "marshi" }} />;
}