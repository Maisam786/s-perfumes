
import "./RelatedProducts.css";

import products from "../../../data/products";
import ProductCard from "../../../components/Common/ProductCard/ProductCard";

export default function RelatedProducts({ currentProduct }) {

    const relatedProducts = products
        .filter(
            (product) =>
                product.id !== currentProduct.id &&
                (
                    product.category === currentProduct.category ||
                    product.gender === currentProduct.gender
                )
        )
        .slice(0, 4);

    return (

        <section className="related-products">

            <div className="related-header">

                <span>
                    YOU MAY ALSO LIKE
                </span>

                <h2>
                    Discover Your Next Fragrance
                </h2>

                <p>
                    Discover more fragrances from our luxury collection.
                </p>

            </div>

            <div className="related-grid">

                {relatedProducts.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

}