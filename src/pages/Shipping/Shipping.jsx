import "./Shipping.css";
import {
    Check,
    Clock3,
    PackageCheck,
    RotateCcw,
    ShieldCheck,
    Sparkles,
    Truck,
} from "lucide-react";

import PageHero from "../../components/Common/PageHero/PageHero";
import SectionHeading from "../../components/Common/SectionHeading/SectionHeading";

export default function Shipping() {
    return (
        <main className="shipping-page">

            {/* =========================================
                HERO
            ========================================= */}

            <PageHero
                label="DELIVERY & RETURNS"
                title="Handled With Care."
                description="From the moment your order is placed to the moment it reaches your door, every detail is handled with care."
            />

            {/* =========================================
                TRUST STRIP
            ========================================= */}

            <section className="shipping-trust">
                <div className="container">

                    <div className="trust-grid">

                        <div className="trust-item">
                            <span className="trust-icon">
                                <Truck size={21} />
                            </span>

                            <div>
                                <strong>2–5 Days</strong>
                                <span>Nationwide delivery</span>
                            </div>
                        </div>

                        <div className="trust-item">
                            <span className="trust-icon">
                                <PackageCheck size={21} />
                            </span>

                            <div>
                                <strong>Carefully Packed</strong>
                                <span>Protected for every journey</span>
                            </div>
                        </div>

                        <div className="trust-item">
                            <span className="trust-icon">
                                <RotateCcw size={21} />
                            </span>

                            <div>
                                <strong>7-Day Returns</strong>
                                <span>Simple return process</span>
                            </div>
                        </div>

                        <div className="trust-item">
                            <span className="trust-icon">
                                <ShieldCheck size={21} />
                            </span>

                            <div>
                                <strong>Customer Care</strong>
                                <span>We're here when you need us</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* =========================================
                DELIVERY
            ========================================= */}

            <section className="shipping-process">

                <div className="container">

                    <SectionHeading
                        title="The Journey To Your Door"
                        subtitle="A simple, thoughtful process designed to keep your fragrance protected from checkout to delivery."
                    />

                    <div className="shipping-timeline">

                        <div className="shipping-step">

                            <div className="step-marker">
                                <span>01</span>
                            </div>

                            <div className="step-content">
                                <span className="step-label">
                                    ORDER
                                </span>

                                <h3>
                                    Order Placed
                                </h3>

                                <p>
                                    Once your order is confirmed, our team
                                    carefully prepares it for the next stage.
                                </p>
                            </div>

                        </div>

                        <div className="shipping-step">

                            <div className="step-marker">
                                <span>02</span>
                            </div>

                            <div className="step-content">
                                <span className="step-label">
                                    PREPARATION
                                </span>

                                <h3>
                                    Carefully Prepared
                                </h3>

                                <p>
                                    Your fragrance is inspected and securely
                                    packaged to preserve its condition.
                                </p>
                            </div>

                        </div>

                        <div className="shipping-step">

                            <div className="step-marker">
                                <span>03</span>
                            </div>

                            <div className="step-content">
                                <span className="step-label">
                                    DELIVERY
                                </span>

                                <h3>
                                    On Its Way
                                </h3>

                                <p>
                                    Your package is handed to our delivery
                                    partner and begins its journey to you.
                                </p>
                            </div>

                        </div>

                        <div className="shipping-step">

                            <div className="step-marker">
                                <span>04</span>
                            </div>

                            <div className="step-content">
                                <span className="step-label">
                                    ARRIVAL
                                </span>

                                <h3>
                                    Delivered With Care
                                </h3>

                                <p>
                                    Your fragrance arrives ready to become
                                    part of your next unforgettable moment.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                DELIVERY DETAILS
            ========================================= */}

            <section className="shipping-details">

                <div className="container">

                    <div className="details-layout">

                        <div className="details-intro">

                            <span className="section-label">
                                SHIPPING INFORMATION
                            </span>

                            <h2>
                                Everything You
                                <br />
                                Need To Know.
                            </h2>

                            <p>
                                We believe delivery should feel just as
                                considered as the fragrance inside the box.
                                Here are the essentials you need before
                                placing your order.
                            </p>

                            <div className="details-signature">
                                <Sparkles size={17} />
                                <span>
                                    Luxury, delivered thoughtfully.
                                </span>
                            </div>

                        </div>

                        <div className="details-list">

                            <div className="detail-row">

                                <div className="detail-icon">
                                    <Clock3 size={21} />
                                </div>

                                <div>
                                    <h3>
                                        Processing Time
                                    </h3>

                                    <p>
                                        Orders are typically prepared and
                                        dispatched within 24–48 hours after
                                        confirmation.
                                    </p>
                                </div>

                            </div>

                            <div className="detail-row">

                                <div className="detail-icon">
                                    <Truck size={21} />
                                </div>

                                <div>
                                    <h3>
                                        Delivery Time
                                    </h3>

                                    <p>
                                        Delivery normally takes 2–5 business
                                        days depending on your location.
                                    </p>
                                </div>

                            </div>

                            <div className="detail-row">

                                <div className="detail-icon">
                                    <PackageCheck size={21} />
                                </div>

                                <div>
                                    <h3>
                                        Secure Packaging
                                    </h3>

                                    <p>
                                        Every fragrance is carefully packed
                                        to help protect the bottle during
                                        transportation.
                                    </p>
                                </div>

                            </div>

                            <div className="detail-row">

                                <div className="detail-icon">
                                    <ShieldCheck size={21} />
                                </div>

                                <div>
                                    <h3>
                                        Delivery Delays
                                    </h3>

                                    <p>
                                        Weather, public holidays and courier
                                        conditions may occasionally affect
                                        estimated delivery times.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                RETURNS
            ========================================= */}

            <section className="shipping-returns">

                <div className="container">

                    <SectionHeading
                        title="Returns, Made Simple."
                        subtitle="If something isn't right, we're here to help make the process as straightforward as possible."
                    />

                    <div className="returns-layout">

                        <div className="return-feature">

                            <div className="return-feature-icon">
                                <RotateCcw size={26} />
                            </div>

                            <span className="section-label">
                                OUR RETURN POLICY
                            </span>

                            <h3>
                                7 Days
                            </h3>

                            <p>
                                Eligible products may be returned within
                                7 days of delivery, provided they remain
                                unopened, unused and in their original
                                packaging.
                            </p>

                        </div>

                        <div className="return-points">

                            <div className="return-point">

                                <span>
                                    <Check size={17} />
                                </span>

                                <div>
                                    <h4>
                                        Eligible Returns
                                    </h4>

                                    <p>
                                        Products must remain unopened,
                                        unused and in their original
                                        packaging.
                                    </p>
                                </div>

                            </div>

                            <div className="return-point">

                                <span>
                                    <Check size={17} />
                                </span>

                                <div>
                                    <h4>
                                        Damaged Products
                                    </h4>

                                    <p>
                                        Contact us as soon as possible if
                                        your order arrives damaged.
                                    </p>
                                </div>

                            </div>

                            <div className="return-point">

                                <span>
                                    <Check size={17} />
                                </span>

                                <div>
                                    <h4>
                                        Refunds
                                    </h4>

                                    <p>
                                        Approved refunds are processed after
                                        the returned product is inspected.
                                    </p>
                                </div>

                            </div>

                            <div className="return-point">

                                <span>
                                    <Check size={17} />
                                </span>

                                <div>
                                    <h4>
                                        Non-Returnable Items
                                    </h4>

                                    <p>
                                        Opened or used perfumes cannot be
                                        returned unless they arrived defective.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                PROMISE
            ========================================= */}

            <section className="shipping-promise">

                <div className="container">

                    <div className="promise-box">

                        <span className="section-label">
                            THE S. PROMISE
                        </span>

                        <h2>
                            From Our Hands
                            <br />
                            To Yours.
                        </h2>

                        <p>
                            Every order represents more than a purchase.
                            It represents the beginning of a new memory.
                            That's why we treat every package with the
                            same attention to detail as the fragrance inside.
                        </p>

                        <div className="promise-line"></div>

                        <span className="promise-mark">
                            S.
                        </span>

                    </div>

                </div>

            </section>

            {/* =========================================
                HELP
            ========================================= */}

            <section className="shipping-help">

                <div className="container">

                    <div className="shipping-help-card">

                        <span className="section-label">
                            NEED ASSISTANCE?
                        </span>

                        <h2>
                            We're Here To Help.
                        </h2>

                        <p>
                            Questions about your delivery, return or
                            fragrance? Our team is always happy to assist.
                        </p>

                        <div className="shipping-help-buttons">

                            <a
                                href="/contact"
                                className="btn-primary"
                            >
                                Contact Us
                            </a>

                            <a
                                href="https://wa.me/92XXXXXXXXXX"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                WhatsApp Support
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}