import "./CartDrawer.css";

import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiTrash2,
    FiX,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

export default function CartDrawer({
    open,
    onClose,
}) {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <>
            {/* =========================================
                OVERLAY
            ========================================= */}

            <div
                className={`drawer-overlay ${
                    open ? "show" : ""
                }`}
                onClick={onClose}
                aria-hidden={!open}
            />


            {/* =========================================
                CART DRAWER
            ========================================= */}

            <aside
                className={`cart-drawer ${
                    open ? "open" : ""
                }`}
                aria-label="Shopping cart"
                aria-hidden={!open}
            >

                {/* =====================================
                    HEADER
                ===================================== */}

                <div className="drawer-header">

                    <div className="drawer-heading">

                        <span className="drawer-eyebrow">
                            YOUR SELECTION
                        </span>

                        <h2>
                            Shopping Bag
                        </h2>

                        {cartItems.length > 0 && (
                            <span className="drawer-count">
                                {cartItems.length}{" "}
                                {cartItems.length === 1
                                    ? "item"
                                    : "items"}
                            </span>
                        )}

                    </div>

                    <button
                        type="button"
                        className="drawer-close"
                        onClick={onClose}
                        aria-label="Close shopping cart"
                    >
                        <FiX />
                    </button>

                </div>


                {/* =====================================
                    BODY
                ===================================== */}

                <div className="drawer-body">

                    {cartItems.length === 0 ? (

                        /* =================================
                           EMPTY CART
                        ================================= */

                        <div className="drawer-empty">

                            <div className="drawer-empty-icon">
                                <FiShoppingBag />
                            </div>

                            <span className="drawer-empty-eyebrow">
                                YOUR BAG AWAITS
                            </span>

                            <h3>
                                Nothing here yet.
                            </h3>

                            <p>
                                Discover a signature fragrance
                                and make it yours.
                            </p>

                            <Link
                                to="/shop"
                                className="drawer-empty-btn"
                                onClick={onClose}
                            >
                                Explore Collection
                                <FiArrowRight />
                            </Link>

                        </div>

                    ) : (

                        <div className="drawer-items">

                            {cartItems.map((item) => (

                                <article
                                    key={item.id}
                                    className="drawer-item"
                                >

                                    {/* PRODUCT IMAGE */}

                                    <div className="drawer-image-wrap">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                    </div>


                                    {/* PRODUCT INFO */}

                                    <div className="drawer-info">

                                        <div className="drawer-item-top">

                                            <div>

                                                <span className="drawer-item-label">
                                                    FRAGRANCE
                                                </span>

                                                <h4>
                                                    {item.name}
                                                </h4>

                                            </div>

                                            <button
                                                type="button"
                                                className="drawer-remove"
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                aria-label={`Remove ${item.name} from cart`}
                                            >
                                                <FiTrash2 />
                                            </button>

                                        </div>


                                        <span className="drawer-price">
                                            PKR{" "}
                                            {item.price.toLocaleString()}
                                        </span>


                                        {/* QUANTITY */}

                                        <div className="drawer-item-bottom">

                                            <div className="drawer-quantity">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                    aria-label={`Decrease ${item.name} quantity`}
                                                >
                                                    <FiMinus />
                                                </button>

                                                <span>
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                    aria-label={`Increase ${item.name} quantity`}
                                                >
                                                    <FiPlus />
                                                </button>

                                            </div>

                                            <strong className="drawer-item-total">
                                                PKR{" "}
                                                {(
                                                    item.price *
                                                    item.quantity
                                                ).toLocaleString()}
                                            </strong>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                </div>


                {/* =====================================
                    FOOTER
                ===================================== */}

                {cartItems.length > 0 && (

                    <div className="drawer-footer">

                        <div className="drawer-total">

                            <div>
                                <span>
                                    Subtotal
                                </span>

                                <small>
                                    Shipping calculated at checkout
                                </small>
                            </div>

                            <strong>
                                PKR{" "}
                                {subtotal.toLocaleString()}
                            </strong>

                        </div>


                        <Link
                            to="/cart"
                            className="drawer-btn drawer-btn-secondary"
                            onClick={onClose}
                        >
                            View Cart
                            <FiArrowRight />
                        </Link>


                        <Link
                            to="/checkout"
                            className="drawer-btn drawer-btn-primary"
                            onClick={onClose}
                        >
                            Proceed to Checkout
                            <FiArrowRight />
                        </Link>

                    </div>

                )}

            </aside>
        </>
    );
}