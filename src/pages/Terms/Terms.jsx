import "./Terms.css";

import { Link } from "react-router-dom";
import { ShieldCheck, Truck, RotateCcw, Gem, Scale, HelpCircle } from "lucide-react";

import PageHero from "../../components/Common/PageHero/PageHero";
import SectionHeading from "../../components/Common/SectionHeading/SectionHeading";

export default function Terms() {
    return (
        <main className="terms-page">

            {/* =========================================
                HERO
            ========================================= */}

            <PageHero
                label="LEGAL"
                title="Terms & Conditions"
                description="Clear, transparent and thoughtfully written terms designed to make your experience with S. simple and trustworthy."
            />

            {/* =========================================
                INTRO
            ========================================= */}

            <section className="terms-intro">

                <div className="container terms-narrow">

                    <span className="terms-eyebrow">
                        OUR AGREEMENT
                    </span>

                    <h2>
                        A Relationship Built
                        <br />
                        On Trust.
                    </h2>

                    <p className="terms-lead">
                        By accessing S. Perfumes, browsing our collection or
                        placing an order, you agree to use our website and
                        services responsibly and in accordance with these
                        Terms & Conditions.
                    </p>

                    <div className="terms-divider">
                        <span></span>
                    </div>

                    <p className="terms-note">
                        We believe luxury should feel effortless. These terms
                        exist to keep your shopping experience clear,
                        transparent and fair.
                    </p>

                </div>

            </section>

            {/* =========================================
                QUICK OVERVIEW
            ========================================= */}

            <section className="terms-overview">

                <div className="container">

                    <SectionHeading
                        title="Before You Order"
                        subtitle="A quick overview of the principles that guide every purchase."
                    />

                    <div className="terms-overview-grid">

                        <div className="overview-card">
                            <div className="overview-icon">
                                <ShieldCheck size={24} />
                            </div>

                            <h3>
                                Transparent
                            </h3>

                            <p>
                                Clear information about products, pricing,
                                orders and policies.
                            </p>
                        </div>

                        <div className="overview-card">
                            <div className="overview-icon">
                                <Gem size={24} />
                            </div>

                            <h3>
                                Authentic
                            </h3>

                            <p>
                                Every product is represented honestly and
                                presented with care.
                            </p>
                        </div>

                        <div className="overview-card">
                            <div className="overview-icon">
                                <Truck size={24} />
                            </div>

                            <h3>
                                Reliable
                            </h3>

                            <p>
                                We work to process and deliver every order
                                as carefully as possible.
                            </p>
                        </div>

                        <div className="overview-card">
                            <div className="overview-icon">
                                <Scale size={24} />
                            </div>

                            <h3>
                                Fair
                            </h3>

                            <p>
                                Our policies are designed to protect both
                                customers and our business.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                ORDERS & PAYMENTS
            ========================================= */}

            <section className="terms-section terms-orders">

                <div className="container">

                    <SectionHeading
                        title="Orders & Payments"
                        subtitle="Everything you need to know before completing your purchase."
                    />

                    <div className="terms-card-grid">

                        <article className="terms-card">
                            <span className="terms-card-number">
                                01
                            </span>

                            <h3>
                                Order Confirmation
                            </h3>

                            <p>
                                An order is considered confirmed after the
                                required payment or order verification has
                                been successfully completed.
                            </p>
                        </article>

                        <article className="terms-card">
                            <span className="terms-card-number">
                                02
                            </span>

                            <h3>
                                Product Pricing
                            </h3>

                            <p>
                                Prices displayed on our website may change
                                from time to time. Any applicable price at
                                the time of purchase will apply to your order.
                            </p>
                        </article>

                        <article className="terms-card">
                            <span className="terms-card-number">
                                03
                            </span>

                            <h3>
                                Payment Methods
                            </h3>

                            <p>
                                Available payment methods are displayed
                                during checkout. Customers are responsible
                                for providing accurate payment information.
                            </p>
                        </article>

                        <article className="terms-card">
                            <span className="terms-card-number">
                                04
                            </span>

                            <h3>
                                Order Cancellation
                            </h3>

                            <p>
                                Cancellation requests should be made as soon
                                as possible. Once an order has been dispatched,
                                cancellation may no longer be available.
                            </p>
                        </article>

                    </div>

                </div>

            </section>

            {/* =========================================
                SHIPPING
            ========================================= */}

            <section className="terms-section terms-delivery">

                <div className="container">

                    <SectionHeading
                        title="Shipping & Delivery"
                        subtitle="We prepare every order carefully and work with delivery partners to get it to you safely."
                    />

                    <div className="delivery-list">

                        <div className="delivery-item">

                            <span className="delivery-number">
                                01
                            </span>

                            <div className="delivery-content">

                                <h3>
                                    Processing
                                </h3>

                                <p>
                                    Orders are generally prepared and
                                    dispatched within 24–48 hours after
                                    confirmation.
                                </p>

                            </div>

                            <Truck className="delivery-icon" size={24} />

                        </div>

                        <div className="delivery-item">

                            <span className="delivery-number">
                                02
                            </span>

                            <div className="delivery-content">

                                <h3>
                                    Delivery Estimates
                                </h3>

                                <p>
                                    Delivery generally takes approximately
                                    2–5 business days depending on destination
                                    and courier availability.
                                </p>

                            </div>

                            <Truck className="delivery-icon" size={24} />

                        </div>

                        <div className="delivery-item">

                            <span className="delivery-number">
                                03
                            </span>

                            <div className="delivery-content">

                                <h3>
                                    Possible Delays
                                </h3>

                                <p>
                                    Weather, public holidays, courier
                                    disruptions or circumstances outside
                                    our control may occasionally affect
                                    delivery times.
                                </p>

                            </div>

                            <ShieldCheck className="delivery-icon" size={24} />

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                RETURNS
            ========================================= */}

            <section className="terms-section terms-returns">

                <div className="container">

                    <SectionHeading
                        title="Returns & Refunds"
                        subtitle="We want every S. experience to meet your expectations."
                    />

                    <div className="terms-card-grid">

                        <article className="terms-card return-card">

                            <div className="terms-card-icon">
                                <RotateCcw size={22} />
                            </div>

                            <h3>
                                Return Eligibility
                            </h3>

                            <p>
                                Items may be eligible for return within
                                7 days of delivery when unopened, unused
                                and maintained in their original packaging.
                            </p>

                        </article>

                        <article className="terms-card return-card">

                            <div className="terms-card-icon">
                                <ShieldCheck size={22} />
                            </div>

                            <h3>
                                Damaged Products
                            </h3>

                            <p>
                                If your order arrives damaged, contact us
                                as soon as possible and provide appropriate
                                photographs so our team can assist you.
                            </p>

                        </article>

                        <article className="terms-card return-card">

                            <div className="terms-card-icon">
                                <Gem size={22} />
                            </div>

                            <h3>
                                Refund Processing
                            </h3>

                            <p>
                                Approved refunds are processed after the
                                returned product has been received and
                                inspected.
                            </p>

                        </article>

                        <article className="terms-card return-card">

                            <div className="terms-card-icon">
                                <Scale size={22} />
                            </div>

                            <h3>
                                Non-Returnable Items
                            </h3>

                            <p>
                                Opened perfumes or products showing signs
                                of use are generally not eligible for return
                                unless the product was defective upon arrival.
                            </p>

                        </article>

                    </div>

                </div>

            </section>

            {/* =========================================
                INTELLECTUAL PROPERTY
            ========================================= */}

            <section className="terms-section terms-intellectual">

                <div className="container">

                    <SectionHeading
                        title="Intellectual Property"
                        subtitle="The S. identity is carefully created and protected."
                    />

                    <div className="intellectual-box">

                        <div className="intellectual-item">

                            <span>
                                01
                            </span>

                            <div>
                                <h3>
                                    Website Content
                                </h3>

                                <p>
                                    Text, imagery, product photography,
                                    graphics, layouts and other visual
                                    materials displayed on this website
                                    belong to S. Perfumes unless otherwise
                                    stated.
                                </p>
                            </div>

                        </div>

                        <div className="intellectual-item">

                            <span>
                                02
                            </span>

                            <div>
                                <h3>
                                    Brand Identity
                                </h3>

                                <p>
                                    The S. name, logo, visual identity and
                                    associated branding may not be copied,
                                    reproduced or used without appropriate
                                    written permission.
                                </p>
                            </div>

                        </div>

                        <div className="intellectual-item">

                            <span>
                                03
                            </span>

                            <div>
                                <h3>
                                    Prohibited Use
                                </h3>

                                <p>
                                    Website content may not be copied,
                                    distributed, modified or commercially
                                    exploited without prior authorisation.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                LIABILITY
            ========================================= */}

            <section className="terms-section terms-liability">

                <div className="container">

                    <div className="liability-panel">

                        <span className="terms-eyebrow">
                            IMPORTANT
                        </span>

                        <h2>
                            Limitation of Liability
                        </h2>

                        <p>
                            S. Perfumes works carefully to provide accurate
                            product information and reliable service.
                            However, certain circumstances may remain beyond
                            our reasonable control, including courier delays,
                            severe weather, public events or other unexpected
                            disruptions.
                        </p>

                        <p>
                            Product colours, packaging and presentation may
                            vary slightly because of screen settings,
                            manufacturing updates or availability.
                        </p>

                        <p>
                            Where permitted by applicable law, our liability
                            in connection with a purchase is limited to the
                            value of the relevant purchased product.
                        </p>

                    </div>

                </div>

            </section>

            {/* =========================================
                CTA
            ========================================= */}

            <section className="terms-cta">

                <div className="container">

                    <div className="terms-cta-box">

                        <div className="cta-icon">
                            <HelpCircle size={28} />
                        </div>

                        <span className="terms-eyebrow">
                            NEED CLARIFICATION?
                        </span>

                        <h2>
                            Still Have
                            <br />
                            Questions?
                        </h2>

                        <p>
                            If you need clarification about our Terms &
                            Conditions, our team is always ready to assist.
                        </p>

                        <Link
                            to="/contact"
                            className="terms-cta-btn"
                        >
                            Contact S.
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}