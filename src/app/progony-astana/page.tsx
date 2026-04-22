import ProductPage from "@/app/catalog/[slug]/page";

export const metadata = {
    title: "Прогоны Астана | Купить прогоны | Прогоны в Астане",
    description: "ЖБИ прогоны для складов и промышленных зданий в Астане. Прямые поставки с завода.",
};

export default function Page() {
    return <ProductPage params={{ slug: "progony" }} />;
}