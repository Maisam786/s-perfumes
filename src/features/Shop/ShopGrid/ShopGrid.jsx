import "./ShopGrid.css";

import ProductCard from "../../../components/Common/ProductCard/ProductCard";

export default function ShopGrid({ products }) {
    return (
        <div
            className="shop-grid"
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