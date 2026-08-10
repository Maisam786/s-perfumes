import "./Cart.css";

import { useCart } from "../../context/CartContext";

import EmptyCart from "../../features/Cart/EmptyCart/EmptyCart";
import CartItem from "../../features/Cart/CartItem/CartItem";
import CartSummary from "../../features/Cart/CartSummary/CartSummary";

export default function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    return (
        <section
            className="cart-page"
            aria-labelledby="cart-title"
        >
            {/* =========================================
                ATMOSPHERIC BACKGROUND
            ========================================= */}

            <span
                className="cart-page-glow cart-page-glow--top"
                aria-hidden="true"
            />

            <span
                className="cart-page-glow cart-page-glow--bottom"
                aria-hidden="true"
            />


            <div className="container">

                {/* =====================================
                    PAGE HEADER
                ===================================== */}

                <header className="cart-header">

                    <span className="cart-eyebrow">
                        YOUR SELECTION
                    </span>

                    <h1
                        id="cart-title"
                        className="cart-title"
                    >
                        Shopping Cart
                    </h1>

                    <p className="cart-description">
                        Review your selected fragrances before
                        continuing to checkout.
                    </p>

                </header>


                {/* =====================================
                    CART CONTENT
                ===================================== */}

                <div className="cart-layout">

                    {/* =================================
                        ITEMS
                    ================================= */}

                    <div className="cart-items">

                        <div className="cart-items-header">

                            <span>
                                YOUR ITEMS
                            </span>

                            <span>
                                {cartItems.length}{" "}
                                {cartItems.length === 1
                                    ? "ITEM"
                                    : "ITEMS"}
                            </span>

                        </div>


                        <div className="cart-items-list">

                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    increaseQuantity={
                                        increaseQuantity
                                    }
                                    decreaseQuantity={
                                        decreaseQuantity
                                    }
                                    removeFromCart={
                                        removeFromCart
                                    }
                                />
                            ))}

                        </div>

                    </div>


                    {/* =================================
                        SUMMARY
                    ================================= */}

                    <aside className="cart-summary-wrapper">
                        <CartSummary />
                    </aside>

                </div>

            </div>
        </section>
    );
}