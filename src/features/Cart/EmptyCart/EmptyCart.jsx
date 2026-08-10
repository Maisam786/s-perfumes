import "./EmptyCart.css";

import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiShoppingBag,
} from "react-icons/fi";

export default function EmptyCart() {
    return (
        <section className="empty-cart">

            {/* ATMOSPHERIC BACKGROUND */}

            <span
                className="empty-cart-glow empty-cart-glow--top"
                aria-hidden="true"
            />

            <span
                className="empty-cart-glow empty-cart-glow--bottom"
                aria-hidden="true"
            />


            {/* CONTENT */}

            <div className="empty-cart-content">

                <span className="empty-cart-eyebrow">
                    YOUR CART
                </span>


                {/* ICON */}

                <div className="empty-icon">

                    <div className="empty-icon-inner">
                        <FiShoppingBag />
                    </div>

                </div>


                {/* TEXT */}

                <h1>
                    Your Cart Is Empty
                </h1>

                <p>
                    Your next signature fragrance is waiting.
                    Explore our curated collection and discover
                    something worth remembering.
                </p>


                {/* CTA */}

                <Link
                    to="/shop"
                    className="continue-shopping"
                >
                    <span>
                        Continue Shopping
                    </span>

                    <FiArrowRight />
                </Link>

            </div>

        </section>
    );
}