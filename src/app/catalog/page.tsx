import CatalogClient from "./CatalogClient";

export const metadata = {
    title: "ЖБИ изделия в Астане | Сваи, плиты, перемычки | Каталог",
    description:
        "Каталог ЖБИ изделий в Астане: сваи, плиты перекрытия, перемычки, прогоны, фермы и другие изделия с доставкой.",
};

export default function Page() {
    return <CatalogClient />;
}