import "./BestSellers.css";

import { useRef, useState } from "react";

import QuickView from "../../../components/Common/QuickView/QuickView";
import ProductCard from "../../../components/Common/ProductCard/ProductCard";

import products from "../../../data/products";

import useReveal from "../../../hooks/useReveal";

export default function BestSellers() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quickViewOpen, setQuickViewOpen] = useState(false);


    const revealRef = useReveal();
    const sliderRef = useRef(null);

    const scrollProducts = (direction) => {
        const slider = sliderRef.current;

        if (!slider) return;

        const firstSlide = slider.querySelector(".product-slide");

        if (!firstSlide) return;

        const slideWidth = firstSlide.getBoundingClientRect().width;

        const styles = window.getComputedStyle(slider);
        const gap = parseFloat(styles.columnGap) || 0;

        const amount = slideWidth + gap;

        slider.scrollBy({
            left: direction === "next" ? amount : -amount,
            behavior: "smooth",
        });
    };

    const handleQuickView = (product) => {
        setSelectedProduct(product);
        setQuickViewOpen(true);
    };

    const handleCloseQuickView = () => {
        setQuickViewOpen(false);

        window.setTimeout(() => {
            setSelectedProduct(null);
        }, 300);
    };

    return (
        <>
            <section
                ref={revealRef}
                className="best-sellers"
                aria-labelledby="best-sellers-title"
            >


                <div className="container">
                    {/* =========================================
                    SECTION HEADING
                ========================================= */}

                    <div className="luxury-heading best-heading reveal">
                        <span>BEST SELLERS</span>

                        <h2 id="best-sellers-title">
                            Most Loved Fragrances
                        </h2>

                        <p>
                            Discover the fragrances our customers return to
                            again and again — refined scents crafted to leave
                            an unforgettable impression.
                        </p>
                    </div>

                    {/* =========================================
                    PRODUCT SLIDER
                ========================================= */}

                    <div className="products-slider-wrapper">
                        <button
                            type="button"
                            className="products-arrow products-arrow--left"
                            onClick={() => scrollProducts("prev")}
                            aria-label="Previous fragrances"
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        <div
                            ref={sliderRef}
                            className="products-slider"
                            aria-label="Best selling fragrances"
                        >
                            {products.map((product, index) => (
                                <article
                                    key={product.id}
                                    className={`product-slide reveal delay-${(index % 4) + 1
                                        }`}
                                >
                                    <ProductCard
                                        product={product}
                                        onQuickView={handleQuickView}
                                    />
                                </article>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="products-arrow products-arrow--right"
                            onClick={() => scrollProducts("next")}
                            aria-label="Next fragrances"
                        >
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </section>

            <QuickView
                open={quickViewOpen}
                product={selectedProduct}
                onClose={handleCloseQuickView}
            />
        </>
    );


}
