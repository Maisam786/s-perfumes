import "./Success.css";
import { Check, ArrowRight, Package, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
    const orderId = "S-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    return (
        <main className="success-page">

            {/* Background atmosphere */}
            <div className="success-orb success-orb-1"></div>
            <div className="success-orb success-orb-2"></div>
            <div className="success-grid"></div>

            <section className="success-section">

                <div className="success-container">

                    {/* Success mark */}
                    <div className="success-mark-wrap">

                        <div className="success-ring success-ring-outer"></div>
                        <div className="success-ring success-ring-middle"></div>

                        <div className="success-mark">

                            <div className="success-mark-inner">
                                <Check
                                    size={38}
                                    strokeWidth={2.4}
                                />
                            </div>

                        </div>

                    </div>

                    {/* Main message */}
                    <span className="success-label">
                        ORDER CONFIRMED
                    </span>

                    <h1>
                        Your Fragrance
                        <br />
                        Journey Begins.
                    </h1>

                    <p className="success-description">
                        Thank you for choosing S.
                        <br />
                        Your order has been received and is being prepared
                        with the care it deserves.
                    </p>

                    {/* Confirmation card */}
                    <div className="success-card">

                        <div className="success-card-top">

                            <div>
                                <span className="success-card-label">
                                    ORDER REFERENCE
                                </span>

                                <strong>
                                    {orderId}
                                </strong>
                            </div>

                            <div className="success-card-brand">
                                S.
                            </div>

                        </div>

                        <div className="success-divider"></div>

                        <div className="success-details">

                            <div className="success-detail">

                                <div className="detail-icon">
                                    <Package size={19} />
                                </div>

                                <div>
                                    <span>
                                        ORDER STATUS
                                    </span>

                                    <strong>
                                        Being Prepared
                                    </strong>
                                </div>

                            </div>

                            <div className="success-detail">

                                <div className="detail-icon">
                                    <ArrowRight size={19} />
                                </div>

                                <div>
                                    <span>
                                        ESTIMATED DELIVERY
                                    </span>

                                    <strong>
                                        2–5 Business Days
                                    </strong>
                                </div>

                            </div>

                        </div>

                        <div className="success-trust">

                            <ShieldCheck size={18} />

                            <span>
                                Your order details are securely protected.
                            </span>

                        </div>

                    </div>

                    {/* Actions */}
                    <div className="success-actions">

                        <Link
                            to="/shop"
                            className="success-primary-btn"
                        >
                            Continue Shopping
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            to="/"
                            className="success-secondary-btn"
                        >
                            Return Home
                        </Link>

                    </div>

                    {/* Signature */}
                    <div className="success-signature">

                        <span className="signature-line"></span>

                        <span>
                            Crafted to become a memory.
                        </span>

                        <span className="signature-line"></span>

                    </div>

                </div>

            </section>

        </main>
    );
}