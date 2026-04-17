"use client";

import Sidebar from "@/components/catalog/Sidebar";

export default function CatalogLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <div className="py-6 md:py-10 bg-white min-h-screen">
            <div className="max-w-[1536px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="lg:col-span-3 w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}