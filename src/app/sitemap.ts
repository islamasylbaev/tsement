import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = "https://tsementsnab.kz";

    const staticPages = [
        "",
        "/catalog",
        "/contacts",
        "/sklad",
        "/about",
        "/about/licenses",
        "/about/delivery",
        "/svai-astana",
        "/plity-perekrytiya-astana",
        "/peremychki-astana",
        "/progony-astana",
        "/lestnichnye-marshi-astana",
        "/lestnichnye-ploshadki-astana",
        "/fermy-zhbi-astana",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    const productPages = products.map((product) => ({
        url: `${baseUrl}/catalog/${product.slug}`,
        lastModified: new Date(),
    }));

    return [...staticPages, ...productPages];
}