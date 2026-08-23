import "./ShopGrid.css";

import ProductCard from "../../../components/Common/ProductCard/ProductCard";

export default function ShopGrid({ products, viewMode,}) {
    return (
        <div
            className={`shop-grid ${viewMode}`}
            aria-label="Product collection"
        >
            {products.map((product) => (
                <article
                    key={product.id}
                    className="shop-grid-item"
                >
                    <ProductCard
                        product={product}
                    />
                </article>
            ))}
        </div>
    );
}