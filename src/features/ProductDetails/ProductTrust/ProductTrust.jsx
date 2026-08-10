
import "./ProductTrust.css";

import {
    FiTruck,
    FiShield,
    FiGift,
} from "react-icons/fi";

export default function ProductTrust() {
    return (
        <section
            className="product-trust"
            aria-label="Shopping benefits"
        >
            {/* =========================================
                FREE DELIVERY
            ========================================= */}
            <article className="trust-card">

                <div className="trust-icon">
                    <FiTruck />
                </div>

                <div className="trust-content">

                    <span className="trust-label">
                        DELIVERY
                    </span>

                    <h4>
                        Free Delivery
                    </h4>

                    <p>
                        Across Pakistan
                    </p>

                </div>

            </article>


            {/* =========================================
                AUTHENTICITY
            ========================================= */}
            <article className="trust-card">

                <div className="trust-icon">
                    <FiShield />
                </div>

                <div className="trust-content">

                    <span className="trust-label">
                        AUTHENTICITY
                    </span>

                    <h4>
                        100% Original
                    </h4>

                    <p>
                        Authentic Fragrances
                    </p>

                </div>

            </article>


            {/* =========================================
                GIFT PACKAGING
            ========================================= */}
            <article className="trust-card">

                <div className="trust-icon">
                    <FiGift />
                </div>

                <div className="trust-content">

                    <span className="trust-label">
                        PACKAGING
                    </span>

                    <h4>
                        Luxury Gift Box
                    </h4>

                    <p>
                        Premium Packaging
                    </p>

                </div>

            </article>

        </section>
    );
}