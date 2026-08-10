import "./ShopSidebar.css";

import {
    FiSearch,
    FiSliders,
    FiChevronDown,
    FiX,
    FiRotateCcw,
} from "react-icons/fi";

export default function ShopSidebar({
    search,
    setSearch,

    category,
    setCategory,

    maxPrice,
    setMaxPrice,

    rating,
    setRating,

    mobileOpen,
    setMobileOpen,
}) {
    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setMaxPrice(10000);
        setRating(0);
    };

    const hasActiveFilters =
        search !== "" ||
        category !== "All" ||
        maxPrice !== 10000 ||
        rating !== 0;

    return (
        <aside
            className={`shop-sidebar ${mobileOpen ? "shop-sidebar--open" : ""
                }`}
        >

            {/* =========================================
                MOBILE FILTER HEADER
            ========================================= */}

            <div className="mobile-filter-header">

                <div className="mobile-filter-title">
                    <FiSliders />

                    <span>
                        Filters
                    </span>
                </div>

                <button
                    type="button"
                    className="mobile-filter-close"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close filters"
                >
                    <FiX />
                </button>

            </div>


            {/* =========================================
                FILTER CARD
            ========================================= */}

            <div className="filter-card">

                {/* HEADER */}

                <div className="filter-header">

                    <div className="filter-heading">

                        <span>
                            REFINE
                        </span>

                        <h3>
                            Filters
                        </h3>

                    </div>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            className="clear-filters"
                            onClick={clearFilters}
                        >
                            <FiRotateCcw />

                            Clear
                        </button>
                    )}

                </div>


                {/* =====================================
                    SEARCH
                ===================================== */}

                <div className="filter-group">

                    <label
                        className="filter-label"
                        htmlFor="shop-search"
                    >
                        Search
                    </label>

                    <div className="filter-search">

                        <FiSearch />

                        <input
                            id="shop-search"
                            type="text"
                            placeholder="Search fragrances..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                        {search && (
                            <button
                                type="button"
                                className="search-clear"
                                onClick={() => setSearch("")}
                                aria-label="Clear search"
                            >
                                <FiX />
                            </button>
                        )}

                    </div>

                </div>


                {/* =====================================
                    CATEGORY
                ===================================== */}

                <div className="filter-group">

                    <div className="filter-section-title">
                        <span>
                            Categories
                        </span>

                        <FiChevronDown />
                    </div>

                    <div className="filter-options">

                        <label className="filter-option">

                            <input
                                type="radio"
                                name="category"
                                checked={category === "All"}
                                onChange={() =>
                                    setCategory("All")
                                }
                            />

                            <span className="custom-radio"></span>

                            <span className="option-text">
                                All Fragrances
                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="category"
                                checked={
                                    category ===
                                    "Arabic Collection"
                                }
                                onChange={() =>
                                    setCategory(
                                        "Arabic Collection"
                                    )
                                }
                            />

                            <span className="custom-radio"></span>

                            <span className="option-text">
                                Arabic
                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="category"
                                checked={
                                    category ===
                                    "Men Collection"
                                }
                                onChange={() =>
                                    setCategory(
                                        "Men Collection"
                                    )
                                }
                            />

                            <span className="custom-radio"></span>

                            <span className="option-text">
                                Men
                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="category"
                                checked={
                                    category ===
                                    "Women Collection"
                                }
                                onChange={() =>
                                    setCategory(
                                        "Women Collection"
                                    )
                                }
                            />

                            <span className="custom-radio"></span>

                            <span className="option-text">
                                Women
                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="category"
                                checked={
                                    category ===
                                    "Signature Collection"
                                }
                                onChange={() =>
                                    setCategory(
                                        "Signature Collection"
                                    )
                                }
                            />

                            <span className="custom-radio"></span>

                            <span className="option-text">
                                Signature
                            </span>

                        </label>

                    </div>

                </div>


                {/* =====================================
                    PRICE
                ===================================== */}

                <div className="filter-group">

                    <div className="filter-section-title">

                        <span>
                            Maximum Price
                        </span>

                        <strong>
                            PKR {maxPrice.toLocaleString()}
                        </strong>

                    </div>

                    <div className="price-slider">

                        <input
                            type="range"
                            min="1000"
                            max="10000"
                            step="100"
                            value={maxPrice}
                            onChange={(e) =>
                                setMaxPrice(
                                    Number(e.target.value)
                                )
                            }
                            style={{
                                "--range-progress": `${((maxPrice - 1000) /
                                    (10000 - 1000)) *
                                    100
                                    }%`,
                            }}
                            aria-label="Maximum price"
                        />

                    </div>

                    <div className="price-range-labels">

                        <span>
                            PKR 1,000
                        </span>

                        <span>
                            PKR 10,000
                        </span>

                    </div>

                </div>

                {/* =====================================
                                    RATING
                 ===================================== */}

                <div className="filter-group">

                    <div className="filter-section-title">

                        <span>
                            Rating
                        </span>

                        <FiChevronDown />

                    </div>

                    <div className="filter-options">

                        <label className="filter-option">

                            <input
                                type="radio"
                                name="rating"
                                checked={rating === 0}
                                onChange={() => setRating(0)}
                            />

                            <span className="custom-radio"></span>

                            <span className="option-text">
                                All Ratings
                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="rating"
                                checked={rating === 5}
                                onChange={() => setRating(5)}
                            />

                            <span className="custom-radio"></span>

                            <span className="rating-option">

                                <span className="rating-stars">
                                    ★★★★★
                                </span>

                                <span className="rating-label">
                                    5.0
                                </span>

                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="rating"
                                checked={rating === 4}
                                onChange={() => setRating(4)}
                            />

                            <span className="custom-radio"></span>

                            <span className="rating-option">

                                <span className="rating-stars">
                                    ★★★★<span className="empty-star">★</span>
                                </span>

                                <span className="rating-label">
                                    4.0 & above
                                </span>

                            </span>

                        </label>


                        <label className="filter-option">

                            <input
                                type="radio"
                                name="rating"
                                checked={rating === 3}
                                onChange={() => setRating(3)}
                            />

                            <span className="custom-radio"></span>

                            <span className="rating-option">

                                <span className="rating-stars">
                                    ★★★<span className="empty-star">★★</span>
                                </span>

                                <span className="rating-label">
                                    3.0 & above
                                </span>

                            </span>

                        </label>

                    </div>

                </div>



                {/* =====================================
                    MOBILE APPLY
                ===================================== */}

                <button
                    type="button"
                    className="mobile-filter-apply"
                    onClick={() => setMobileOpen(false)}
                >
                    Show Results
                </button>

            </div>

        </aside>
    );
}