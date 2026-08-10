import "./CartSummary.css";

import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiCheck,
    FiTruck,
} from "react-icons/fi";

import { useCart } from "../../../context/CartContext";

export default function CartSummary() {
    const {
        cartItems,
        subtotal,
        shipping,
        total,
        freeShippingTarget,
    } = useCart();

    const progress = Math.min(
        (subtotal / freeShippingTarget) * 100,
        100
    );

    const remaining = Math.max(
        freeShippingTarget - subtotal,
        0
    );

    return (
        <aside className="cart-summary">

            <div className="summary-header">

                <span className="summary-eyebrow">
                    YOUR ORDER
                </span>

                <h2>
                    Order Summary
                </h2>

            </div>


            {/* FREE SHIPPING */}

            <div className="shipping-box">

                <div className="shipping-icon">

                    {remaining > 0 ? (
                        <FiTruck />
                    ) : (
                        <FiCheck />
                    )}

                </div>

                <div className="shipping-content">

                    {remaining > 0 ? (
                        <p>
                            Spend{" "}
                            <strong>
                                PKR {remaining.toLocaleString()}
                            </strong>{" "}
                            more for free shipping.
                        </p>
                    ) : (
                        <p className="shipping-success">
                            Free shipping unlocked.
                        </p>
                    )}

                    <div
                        className="progress-track"
                        aria-label={`Free shipping progress: ${Math.round(progress)}%`}
                    >
                        <div
                            className="progress-fill"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                </div>

            </div>


            {/* PRICE BREAKDOWN */}

            <div className="summary-details">

                <div className="summary-row">

                    <span>
                        Subtotal
                    </span>

                    <strong>
                        PKR {subtotal.toLocaleString()}
                    </strong>

                </div>


                <div className="summary-row">

                    <span>
                        Shipping
                    </span>

                    <strong
                        className={
                            shipping === 0
                                ? "free-shipping"
                                : ""
                        }
                    >
                        {shipping === 0
                            ? "Free"
                            : `PKR ${shipping.toLocaleString()}`}
                    </strong>

                </div>

            </div>


            <div className="summary-divider" />


            {/* TOTAL */}

            <div className="summary-total">

                <span>
                    Total
                </span>

                <strong>
                    PKR {total.toLocaleString()}
                </strong>

            </div>


            {/* CHECKOUT */}

            <Link
                to="/checkout"
                className="checkout-btn"
                state={{ fromCart: true }}
            >

                <span>
                    Proceed to Checkout
                </span>

                <FiArrowRight />

            </Link>


            <p className="secure-note">
                Secure checkout • Fast delivery across Pakistan
            </p>

        </aside>
    );
}