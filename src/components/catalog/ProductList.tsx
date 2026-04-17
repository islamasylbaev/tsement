export default function ProductList({ items }: any) {
    return (
        <div className="bg-white  rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">
                Доступные размеры
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {items.map((item: string, i: number) => (
                    <div
                        key={i}
                        className="border rounded-lg px-4 py-3 hover:shadow transition"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}