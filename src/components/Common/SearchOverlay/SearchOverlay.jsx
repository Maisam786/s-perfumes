import "./SearchOverlay.css";

import {
    FiSearch,
    FiX,
    FiArrowUpRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import {
    useState,
    useRef,
    useEffect,
} from "react";

import products from "../../../data/products";


export default function SearchOverlay({
    open,
    onClose,
}) {

    const [query, setQuery] = useState("");

    const inputRef = useRef(null);


    const trendingSearches = [
        "Royal Oud",
        "Velvet Rose",
        "Amber Noir",
        "White Musk",
        "Oud Elite",
    ];


    const popularCategories = [
        "Oud",
        "Fresh",
        "Luxury",
        "Gift Sets",
    ];


    /* =====================================================
       LOCK BODY + FOCUS INPUT
    ===================================================== */

    useEffect(() => {

        if (!open) return;

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        requestAnimationFrame(() => {

            inputRef.current?.focus();

        });

        return () => {

            document.body.style.overflow =
                previousOverflow;

        };

    }, [open]);


    /* =====================================================
       RESET SEARCH WHEN CLOSED
    ===================================================== */

    useEffect(() => {

        if (!open) {

            setQuery("");

        }

    }, [open]);


    /* =====================================================
       KEYBOARD
    ===================================================== */

    useEffect(() => {

        if (!open) return;

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [open, onClose]);


    /* =====================================================
       SEARCH
    ===================================================== */

    const normalizedQuery =
        query.trim().toLowerCase();


    const filteredProducts =
        normalizedQuery.length === 0
            ? []
            : products.filter((product) => {

                const name =
                    product.name?.toLowerCase() || "";

                const brand =
                    product.brand?.toLowerCase() || "";

                const category =
                    product.category?.toLowerCase() || "";

                return (
                    name.includes(normalizedQuery) ||
                    brand.includes(normalizedQuery) ||
                    category.includes(normalizedQuery)
                );

            });


    const handleSuggestion = (value) => {

        setQuery(value);

        requestAnimationFrame(() => {

            inputRef.current?.focus();

        });

    };


    if (!open) return null;


    return (

        <div
            className="search-layer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
        >

            {/* =========================================
                BACKDROP
            ========================================= */}

            <div
                className="search-overlay"
                onClick={onClose}
                aria-hidden="true"
            />


            {/* =========================================
                MODAL
            ========================================= */}

            <div className="search-modal">


                {/* =====================================
                    HEADER
                ===================================== */}

                <div className="search-header">

                    <div className="search-heading">

                        <span>
                            S.
                        </span>

                        <h2 id="search-title">
                            Search
                        </h2>

                    </div>


                    <button
                        type="button"
                        className="search-close"
                        onClick={onClose}
                        aria-label="Close search"
                    >

                        <FiX />

                    </button>

                </div>


                {/* =====================================
                    INPUT
                ===================================== */}

                <div className="search-input-wrapper">

                    <FiSearch
                        className="search-input-icon"
                        aria-hidden="true"
                    />


                    <input
                        ref={inputRef}
                        type="search"
                        value={query}
                        placeholder="Search fragrances, collections..."
                        onChange={(event) =>
                            setQuery(event.target.value)
                        }
                        aria-label="Search fragrances"
                        autoComplete="off"
                    />


                    {query && (

                        <button
                            type="button"
                            className="search-input-clear"
                            onClick={() => {

                                setQuery("");

                                inputRef.current?.focus();

                            }}
                            aria-label="Clear search"
                        >

                            <FiX />

                        </button>

                    )}

                </div>


                {/* =====================================
                    RESULTS
                ===================================== */}

                <div className="search-results">


                    {query.trim().length > 0 ? (

                        filteredProducts.length > 0 ? (

                            <div className="search-result-list">

                                <div className="search-result-heading">

                                    <span>
                                        Results
                                    </span>

                                    <small>
                                        {filteredProducts.length}{" "}
                                        {filteredProducts.length === 1
                                            ? "product"
                                            : "products"}
                                    </small>

                                </div>


                                {filteredProducts.map(
                                    (product) => (

                                        <Link
                                            key={product.id}
                                            to={`/product/${product.id}`}
                                            className="search-item"
                                            onClick={onClose}
                                        >

                                            <div className="search-item-image">

                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                />

                                            </div>


                                            <div className="search-item-content">

                                                <span className="search-item-brand">

                                                    {product.brand || "S."}

                                                </span>


                                                <h4>
                                                    {product.name}
                                                </h4>


                                                <div className="search-item-meta">

                                                    <span>
                                                        PKR{" "}
                                                        {product.price.toLocaleString()}
                                                    </span>

                                                    {product.volume && (

                                                        <small>
                                                            {product.volume}
                                                        </small>

                                                    )}

                                                </div>

                                            </div>


                                            <FiArrowUpRight
                                                className="search-item-arrow"
                                                aria-hidden="true"
                                            />

                                        </Link>

                                    )
                                )}

                            </div>

                        ) : (

                            <div className="search-empty">

                                <div className="search-empty-icon">

                                    <FiSearch />

                                </div>

                                <h3>
                                    No fragrances found
                                </h3>

                                <p>
                                    Try another perfume,
                                    collection, or keyword.
                                </p>

                            </div>

                        )

                    ) : (

                        <div className="search-suggestions">


                            {/* =================================
                                TRENDING
                            ================================= */}

                            <section>

                                <div className="suggestion-heading">

                                    <span>
                                        01
                                    </span>

                                    <h3>
                                        Trending Searches
                                    </h3>

                                </div>


                                <div className="suggestion-tags">

                                    {trendingSearches.map(
                                        (item) => (

                                            <button
                                                key={item}
                                                type="button"
                                                onClick={() =>
                                                    handleSuggestion(item)
                                                }
                                            >

                                                {item}

                                            </button>

                                        )
                                    )}

                                </div>

                            </section>


                            {/* =================================
                                CATEGORIES
                            ================================= */}

                            <section>

                                <div className="suggestion-heading">

                                    <span>
                                        02
                                    </span>

                                    <h3>
                                        Popular Categories
                                    </h3>

                                </div>


                                <div className="suggestion-tags">

                                    {popularCategories.map(
                                        (item) => (

                                            <button
                                                key={item}
                                                type="button"
                                                onClick={() =>
                                                    handleSuggestion(item)
                                                }
                                            >

                                                {item}

                                            </button>

                                        )
                                    )}

                                </div>

                            </section>


                            <div className="search-hint">

                                <span>
                                    Start typing to explore the collection
                                </span>

                                <span className="search-key">

                                    ESC

                                </span>

                            </div>


                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}