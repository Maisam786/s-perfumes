import "./QuickView.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    FiX,
    FiPlus,
    FiMinus,
    FiShoppingBag,
    FiFacebook,
    FiMail,
} from "react-icons/fi";

import {
    FaWhatsapp,
    FaTelegram,
    FaXTwitter,
} from "react-icons/fa6";

import { useCart } from "../../../context/CartContext";

export default function QuickView({
    open,
    onClose,
    product,
}) {
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    /*
    =========================================
    RESET QUANTITY
    =========================================
    */

    useEffect(() => {
        if (open) {
            setQuantity(1);
        }
    }, [open, product]);

    /*
    =========================================
    BODY LOCK + ESCAPE
    =========================================
    */

    useEffect(() => {
        if (!open) return;

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow =
                previousOverflow;

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [open, onClose]);

    if (!open || !product) {
        return null;
    }

    /*
    =========================================
    QUANTITY
    =========================================
    */

    const decrease = () => {
        setQuantity((current) =>
            Math.max(1, current - 1)
        );
    };

    const increase = () => {
        setQuantity((current) =>
            Math.min(12, current + 1)
        );
    };

    /*
    =========================================
    ADD TO CART
    =========================================
    */

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }

        onClose();
    };

    /*
    =========================================
    RENDER
    =========================================
    */

    return (
        <div
            className="quickview-overlay"
            onClick={onClose}
            role="presentation"
        >
            <div
                className="quickview-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="quickview-title"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                {/* =========================================
                    CLOSE
                ========================================= */}

                <button
                    type="button"
                    className="quickview-close"
                    onClick={onClose}
                    aria-label="Close quick view"
                >
                    <FiX />
                </button>


                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="quickview-image">
                    <div
                        className="quickview-image-glow"
                        aria-hidden="true"
                    />

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                    {product.badge && (
                        <span className="quickview-badge">
                            {product.badge}
                        </span>
                    )}
                </div>


                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="quickview-content">

                    <span className="quickview-brand">
                        S.
                    </span>


                    {/* TITLE */}

                    <div className="quickview-title-row">
                        <div className="quickview-heading">
                            <span className="quickview-category">
                                {product.category ||
                                    "Premium Fragrance"}
                            </span>

                            <h2 id="quickview-title">
                                {product.name}
                            </h2>
                        </div>

                        <div className="quickview-price">
                            <span className="price">
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
                    </div>


                    {/* DESCRIPTION */}

                    <div className="quickview-description">
                        <p>
                            {product.description ||
                                "Luxury fragrance crafted with premium ingredients for unforgettable impressions."}
                        </p>
                    </div>


                    {/* DETAILS */}

                    <div className="quickview-meta">
                        <div className="quickview-stock">
                            <span className="stock-dot" />
                            <span>
                                Only 12 items left
                            </span>
                        </div>

                        <span className="quickview-shipping">
                            Free shipping over PKR 5,000
                        </span>
                    </div>


                    {/* ACTIONS */}

                    <div className="quickview-actions">

                        <div className="quickview-top-actions">

                            {/* QUANTITY */}

                            <div
                                className="quickview-quantity"
                                aria-label="Quantity"
                            >
                                <button
                                    type="button"
                                    onClick={decrease}
                                    aria-label="Decrease quantity"
                                    disabled={
                                        quantity === 1
                                    }
                                >
                                    <FiMinus />
                                </button>

                                <span>
                                    {quantity}
                                </span>

                                <button
                                    type="button"
                                    onClick={increase}
                                    aria-label="Increase quantity"
                                    disabled={
                                        quantity === 12
                                    }
                                >
                                    <FiPlus />
                                </button>
                            </div>


                            {/* ADD TO CART */}

                            <button
                                type="button"
                                className="quickview-cart"
                                onClick={
                                    handleAddToCart
                                }
                            >
                                <FiShoppingBag />

                                <span>
                                    Add to Cart
                                </span>
                            </button>

                        </div>


                        {/* BUY NOW */}

                        <Link
                            to="/checkout"
                            className="quickview-buy"
                            onClick={handleAddToCart}
                        >
                            Buy It Now
                        </Link>

                    </div>


                    {/* FOOTER */}

                    <div className="quickview-footer">

                        <div className="quickview-share">

                            <span>
                                Share
                            </span>

                            <div className="share-icons">

                                <button
                                    type="button"
                                    aria-label="Share on Facebook"
                                >
                                    <FiFacebook />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Share on X"
                                >
                                    <FaXTwitter />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Share on Telegram"
                                >
                                    <FaTelegram />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Share on WhatsApp"
                                >
                                    <FaWhatsapp />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Share by email"
                                >
                                    <FiMail />
                                </button>

                            </div>
                        </div>


                        <button
                            type="button"
                            className="need-help"
                        >
                            Need Help?
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}