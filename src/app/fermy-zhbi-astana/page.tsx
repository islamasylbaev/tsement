import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Фермы Астана | Фермы до 24 метров",
    description: "Железобетонные фермы в Астане для складов и ангаров. Пролёты до 24 м.",
};

export default function Page() {
    return <ProductPage params={{ slug: "fermy" }} />;
}