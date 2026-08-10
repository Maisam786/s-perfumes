import "./ShopHero.css";

import { Link } from "react-router-dom";

export default function ShopHero() {
    return (
        <section
            className="shop-hero"
            aria-labelledby="shop-hero-title"
        >
            {/* =================================================
                ATMOSPHERIC GLOW
            ================================================= */}

            <span
                className="shop-hero-glow shop-hero-glow--left"
                aria-hidden="true"
            />

            <span
                className="shop-hero-glow shop-hero-glow--right"
                aria-hidden="true"
            />

            <div className="container">
                <div className="shop-hero-content">

                    {/* =================================================
                        EYEBROW
                    ================================================= */}

                    <span className="shop-hero-eyebrow">
                        LUXURY COLLECTION
                    </span>

                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h1 id="shop-hero-title">
                        Discover
                        <br />
                        <span>Our Fragrances</span>
                    </h1>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="shop-hero-description">
                        Explore our complete collection of premium
                        perfumes crafted for elegance, confidence,
                        and unforgettable impressions.
                    </p>

                    {/* =================================================
                        BREADCRUMB
                    ================================================= */}

                    <nav
                        className="shop-breadcrumb"
                        aria-label="Breadcrumb"
                    >
                        <Link to="/">
                            Home
                        </Link>

                        <span
                            className="shop-breadcrumb-separator"
                            aria-hidden="true"
                        >
                            /
                        </span>

                        <span
                            className="shop-breadcrumb-current"
                            aria-current="page"
                        >
                            Shop
                        </span>
                    </nav>

                </div>
            </div>
        </section>
    );
}