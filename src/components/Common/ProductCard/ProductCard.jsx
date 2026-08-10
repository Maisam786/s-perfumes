import "./ProductCard.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

import {
    FiHeart,
    FiShoppingBag,
    FiStar,
    FiEye,
} from "react-icons/fi";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

export default function ProductCard({
    product,
    onQuickView,
}) {
    const cardRef = useRef(null);

    const {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
    } = useWishlist();

    const { addToCart } = useCart();

    const liked = wishlistItems.some(
        (item) => item.id === product.id
    );

    /* =====================================================
       PRODUCT BADGE
    ===================================================== */

    let badge = null;

    if (product.bestseller) {
        badge = "Best Seller";
    } else if (product.newArrival) {
        badge = "New";
    } else if (product.limitedEdition) {
        badge = "Limited";
    } else if (product.featured) {
        badge = "Featured";
    }

    /* =====================================================
       CARD TILT
    ===================================================== */

    const handleMove = (event) => {
        const card = cardRef.current;

        if (!card) return;

        if (
            window.matchMedia("(hover: none)").matches
        ) {
            return;
        }

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY =
            (x / rect.width - 0.5) * 6;

        const rotateX =
            -(y / rect.height - 0.5) * 6;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;
    };

    const resetCard = () => {
        const card = cardRef.current;

        if (!card) return;

        card.style.transform = "";
    };

    /* =====================================================
       WISHLIST
    ===================================================== */

    const handleWishlist = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (liked) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    /* =====================================================
       QUICK VIEW
    ===================================================== */

    const handleQuickView = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (onQuickView) {
            onQuickView(product);
        }
    };

    /* =====================================================
       ADD TO CART
    ===================================================== */

    const handleAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();

        addToCart(product);
    };

    return (
        <article
            ref={cardRef}
            className="product-card"
            onMouseMove={handleMove}
            onMouseLeave={resetCard}
        >
            <Link
                to={`/product/${product.id}`}
                className="product-card-link"
                aria-label={`View ${product.name}`}
            >
                {/* =================================================
                    VISUAL OVERLAY
                ================================================= */}

                <div
                    className="card-shine"
                    aria-hidden="true"
                />

                <div
                    className="card-glow"
                    aria-hidden="true"
                />

                {/* =================================================
                    BADGES
                ================================================= */}

                {badge && (
                    <span className="product-badge">
                        {badge}
                    </span>
                )}

                {product.discount > 0 && (
                    <span className="product-discount">
                        -{product.discount}%
                    </span>
                )}

                {/* =================================================
                    WISHLIST
                    Positioned beneath the offer badge
                ================================================= */}

                <button
                    type="button"
                    className={`wishlist-btn ${
                        liked ? "liked" : ""
                    }`}
                    onClick={handleWishlist}
                    aria-label={
                        liked
                            ? `Remove ${product.name} from wishlist`
                            : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={liked}
                >
                    <FiHeart
                        fill={
                            liked
                                ? "currentColor"
                                : "none"
                        }
                    />
                </button>

                {/* =================================================
                    PRODUCT IMAGE
                ================================================= */}

                <div className="product-image">

                    <div
                        className="product-image-bg"
                        aria-hidden="true"
                    />

                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                    />

                    {/* =============================================
                        QUICK VIEW
                    ============================================= */}

                    {onQuickView && (
                        <button
                            type="button"
                            className="quick-view-btn"
                            onClick={handleQuickView}
                            aria-label={`Quick view ${product.name}`}
                        >
                            <FiEye />

                            <span>
                                Quick View
                            </span>
                        </button>
                    )}
                </div>

                {/* =================================================
                    PRODUCT INFORMATION
                ================================================= */}

                <div className="product-info">

                    {/* =============================================
                        RATING
                    ============================================= */}

                    <div className="product-rating">

                        <FiStar
                            aria-hidden="true"
                        />

                        <span>
                            {product.rating}
                        </span>

                        <small>
                            ({product.reviews})
                        </small>

                    </div>

                    {/* =============================================
                        META
                    ============================================= */}

                    <div className="product-meta">

                        <span className="product-category">
                            {product.category}
                        </span>

                        {product.volume && (
                            <span className="product-volume">
                                {product.volume}
                            </span>
                        )}

                    </div>

                    {/* =============================================
                        NAME
                    ============================================= */}

                    <h3 className="product-name">
                        {product.name}
                    </h3>

                    {/* =============================================
                        PRICE + CART
                    ============================================= */}

                    <div className="product-bottom">

                        <div className="product-price">

                            <span className="current-price">
                                PKR{" "}
                                {product.price.toLocaleString()}
                            </span>

                            {product.oldPrice && (
                                <span className="old-price">
                                    PKR{" "}
                                    {product.oldPrice.toLocaleString()}
                                </span>
                            )}

                        </div>

                        <button
                            type="button"
                            className="cart-btn"
                            onClick={handleAddToCart}
                            aria-label={`Add ${product.name} to cart`}
                        >
                            <FiShoppingBag />
                        </button>

                    </div>
                </div>
            </Link>
        </article>
    );
}