import "./Wishlist.css";

import { Link } from "react-router-dom";

import {
    FiArrowRight,
    FiHeart,
    FiShoppingBag,
    FiTrash2,
} from "react-icons/fi";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export default function Wishlist() {

    const {
        wishlistItems,
        removeFromWishlist,
    } = useWishlist();

    const {
        addToCart,
    } = useCart();


    /* =========================================
       MOVE TO CART
    ========================================= */

    const handleMoveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
    };


    /* =========================================
       EMPTY STATE
    ========================================= */

    if (wishlistItems.length === 0) {

        return (
            <section className="wishlist-page wishlist-page--empty">

                <span
                    className="wishlist-glow wishlist-glow--top"
                    aria-hidden="true"
                />

                <span
                    className="wishlist-glow wishlist-glow--bottom"
                    aria-hidden="true"
                />

                <div className="container">

                    <div className="wishlist-empty">

                        <span className="wishlist-eyebrow">
                            YOUR WISHLIST
                        </span>

                        <div className="wishlist-empty-icon">
                            <FiHeart />
                        </div>

                        <h1>
                            Nothing Saved Yet
                        </h1>

                        <p>
                            Keep the fragrances you love close.
                            Save your favourites here and return
                            whenever you're ready.
                        </p>

                        <Link
                            to="/shop"
                            className="wishlist-shop-btn"
                        >
                            <span>
                                Explore Collection
                            </span>

                            <FiArrowRight />
                        </Link>

                    </div>

                </div>

            </section>
        );
    }


    /* =========================================
       WISHLIST
    ========================================= */

    return (
        <section className="wishlist-page">

            <span
                className="wishlist-glow wishlist-glow--top"
                aria-hidden="true"
            />

            <span
                className="wishlist-glow wishlist-glow--bottom"
                aria-hidden="true"
            />

            <div className="container">

                {/* PAGE HEADER */}

                <header className="wishlist-header">

                    <div>

                        <span className="wishlist-eyebrow">
                            YOUR COLLECTION
                        </span>

                        <h1>
                            Wishlist
                        </h1>

                        <p>
                            Fragrances you've chosen to keep
                            close.
                        </p>

                    </div>

                    <span className="wishlist-count">
                        {wishlistItems.length}
                        {" "}
                        {wishlistItems.length === 1
                            ? "Item"
                            : "Items"}
                    </span>

                </header>


                {/* PRODUCTS */}

                <div className="wishlist-grid">

                    {wishlistItems.map((product) => (

                        <article
                            key={product.id}
                            className="wishlist-card"
                        >

                            {/* IMAGE */}

                            <div className="wishlist-image-wrap">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <button
                                    type="button"
                                    className="wishlist-remove"
                                    onClick={() =>
                                        removeFromWishlist(product.id)
                                    }
                                    aria-label={`Remove ${product.name} from wishlist`}
                                >
                                    <FiTrash2 />
                                </button>

                            </div>


                            {/* PRODUCT INFO */}

                            <div className="wishlist-info">

                                <span className="wishlist-category">
                                    {product.category}
                                </span>

                                <h2>
                                    {product.name}
                                </h2>

                                <p className="wishlist-price">
                                    PKR{" "}
                                    {product.price.toLocaleString()}
                                </p>

                            </div>


                            {/* ACTION */}

                            <button
                                type="button"
                                className="wishlist-cart-btn"
                                onClick={() =>
                                    handleMoveToCart(product)
                                }
                            >
                                <FiShoppingBag />

                                <span>
                                    Move to Cart
                                </span>
                            </button>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}