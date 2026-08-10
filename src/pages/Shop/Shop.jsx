import { useEffect, useMemo, useState } from "react";

import ShopHero from "../../features/Shop/ShopHero/ShopHero";
import ShopSidebar from "../../features/Shop/ShopSidebar/ShopSidebar";
import ShopGrid from "../../features/Shop/ShopGrid/ShopGrid";
import ShopToolbar from "../../features/Shop/ShopToolbar/ShopToolbar";
import Pagination from "../../features/Shop/Pagination/Pagination";

import products from "../../data/products";

import "../../features/Shop/shopPage.css";

const PRODUCTS_PER_PAGE = 8;

export default function Shop() {
    /* =========================================================
       FILTER STATE
    ========================================================= */

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [rating, setRating] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    /* =========================================================
       SORT + PAGINATION
    ========================================================= */

    const [sortBy, setSortBy] = useState("featured");
    const [currentPage, setCurrentPage] = useState(1);

    /* =========================================================
       MOBILE FILTER VISIBILITY
    ========================================================= */

    const [filtersOpen, setFiltersOpen] = useState(false);

    /* =========================================================
       FILTER PRODUCTS
    ========================================================= */

    const filteredProducts = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return products.filter((product) => {
            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(normalizedSearch);

            const matchesCategory =
                category === "All" ||
                product.category === category;

            const matchesPrice =
                product.price <= maxPrice;

            const matchesRating =
                rating === 0 ||
                product.rating >= rating;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesPrice &&
                matchesRating
            );
        });
    }, [
        search,
        category,
        rating,
        maxPrice,
    ]);

    /* =========================================================
       SORT PRODUCTS
    ========================================================= */

    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        switch (sortBy) {
            case "low-high":
                sorted.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "high-low":
                sorted.sort(
                    (a, b) => b.price - a.price
                );
                break;

            case "rating":
                sorted.sort(
                    (a, b) => b.rating - a.rating
                );
                break;

            case "newest":
                sorted.sort(
                    (a, b) => b.id - a.id
                );
                break;

            case "featured":
            default:
                sorted.sort(
                    (a, b) =>
                        Number(b.featured) -
                        Number(a.featured)
                );
                break;
        }

        return sorted;
    }, [
        filteredProducts,
        sortBy,
    ]);

    /* =========================================================
       PAGINATION
    ========================================================= */

    const totalPages = Math.ceil(
        sortedProducts.length /
        PRODUCTS_PER_PAGE
    );

    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) *
        PRODUCTS_PER_PAGE,
        currentPage *
        PRODUCTS_PER_PAGE
    );

    /* =========================================================
       RESET PAGE WHEN FILTERS / SORT CHANGE
    ========================================================= */

    useEffect(() => {
        setCurrentPage(1);
    }, [
        search,
        category,
        rating,
        maxPrice,
        sortBy,
    ]);

    /* =========================================================
       CLOSE MOBILE FILTERS AFTER RESIZE
    ========================================================= */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setFiltersOpen(false);
            }
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    /* =========================================================
       RENDER
    ========================================================= */

    return (
        <>
            {/* =================================================
                SHOP HERO
                Navigation / breadcrumb will live here.
            ================================================= */}

            <ShopHero />

            <section className="shop-page">
                <div className="container">

                    {/* =================================================
                        SHOP LAYOUT
                    ================================================= */}

                    <div className="shop-layout">

                        {/* =================================================
                            FILTER SIDEBAR
                        ================================================= */}

                        <aside
                            className={`shop-sidebar-wrapper ${filtersOpen
                                    ? "is-open"
                                    : ""
                                }`}
                        >
                            <ShopSidebar
                                search={search}
                                setSearch={setSearch}
                                category={category}
                                setCategory={setCategory}
                                maxPrice={maxPrice}
                                setMaxPrice={setMaxPrice}
                                rating={rating}
                                setRating={setRating}
                                mobileOpen={filtersOpen}
                                setMobileOpen={setFiltersOpen}
                            />
                        </aside>

                        {/* =================================================
                            PRODUCTS
                        ================================================= */}

                        <main className="shop-products">

                            <ShopToolbar
                                total={
                                    sortedProducts.length
                                }
                                originalTotal={
                                    products.length
                                }
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                onFilterToggle={() =>
                                    setFiltersOpen(
                                        (previous) =>
                                            !previous
                                    )
                                }
                                filtersOpen={
                                    filtersOpen
                                }
                            />

                            {paginatedProducts.length >
                                0 ? (
                                <>
                                    <ShopGrid
                                        products={
                                            paginatedProducts
                                        }
                                    />

                                    {totalPages > 1 && (
                                        <Pagination
                                            currentPage={
                                                currentPage
                                            }
                                            totalPages={
                                                totalPages
                                            }
                                            setCurrentPage={
                                                setCurrentPage
                                            }
                                        />
                                    )}
                                </>
                            ) : (
                                <div
                                    className="no-products"
                                    role="status"
                                >
                                    <h3>
                                        No perfumes found
                                    </h3>

                                    <p>
                                        Try changing your
                                        search or filters.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearch("");
                                            setCategory("All");
                                            setRating(0);
                                            setMaxPrice(10000);
                                        }}
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}

                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}