import "./Privacy.css";

import { Link } from "react-router-dom";
import PageHero from "../../components/Common/PageHero/PageHero";
import SectionHeading from "../../components/Common/SectionHeading/SectionHeading";

export default function Privacy() {
    return (
        <main className="privacy-page">

            {/* =========================================
                HERO
            ========================================= */}

            <PageHero
                label="LEGAL"
                title="Privacy Policy"
                description="Your privacy matters to us. Learn how S. collects, uses and protects your information."
            />

            {/* =========================================
                INTRO
            ========================================= */}

            <section className="privacy-intro">

                <div className="container">

                    <div className="privacy-intro-content">

                        <span className="privacy-eyebrow">
                            YOUR TRUST MATTERS
                        </span>

                        <h2>
                            Luxury Should Always
                            <br />
                            Come With Trust.
                        </h2>

                        <p>
                            At S. Perfumes, we believe a premium experience
                            begins with transparency. We respect your privacy
                            and handle your personal information with care,
                            responsibility and purpose.
                        </p>

                        <div className="privacy-meta">
                            <span>Privacy Policy</span>
                            <span className="privacy-meta-line"></span>
                            <span>Last updated: August 2026</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                INFORMATION WE COLLECT
            ========================================= */}

            <section className="privacy-section privacy-information">

                <div className="container">

                    <SectionHeading
                        title="Information We Collect"
                        subtitle="We collect only the information necessary to provide a smooth, secure and personalised shopping experience."
                    />

                    <div className="privacy-grid">

                        <article className="privacy-card">

                            <span className="privacy-card-number">
                                01
                            </span>

                            <div>
                                <h3>
                                    Personal Information
                                </h3>

                                <p>
                                    Your name, email address, phone number
                                    and shipping details may be collected
                                    when you place an order or contact us.
                                </p>
                            </div>

                        </article>

                        <article className="privacy-card">

                            <span className="privacy-card-number">
                                02
                            </span>

                            <div>
                                <h3>
                                    Order Information
                                </h3>

                                <p>
                                    We may collect information about products
                                    you purchase, order history, delivery
                                    details and order status.
                                </p>
                            </div>

                        </article>

                        <article className="privacy-card">

                            <span className="privacy-card-number">
                                03
                            </span>

                            <div>
                                <h3>
                                    Device Information
                                </h3>

                                <p>
                                    Technical information such as browser
                                    type, device information and anonymous
                                    usage data may be collected to improve
                                    website performance.
                                </p>
                            </div>

                        </article>

                        <article className="privacy-card">

                            <span className="privacy-card-number">
                                04
                            </span>

                            <div>
                                <h3>
                                    Communication
                                </h3>

                                <p>
                                    Messages, enquiries and information you
                                    voluntarily provide through our contact
                                    forms or customer support channels may
                                    be retained for assistance.
                                </p>
                            </div>

                        </article>

                    </div>

                </div>

            </section>

            {/* =========================================
                HOW WE USE INFORMATION
            ========================================= */}

            <section className="privacy-section privacy-usage">

                <div className="container">

                    <SectionHeading
                        title="How We Use Your Information"
                        subtitle="Your information is used responsibly and only for purposes connected to your experience with S."
                    />

                    <div className="usage-list">

                        <article className="usage-item">

                            <span className="usage-number">
                                01
                            </span>

                            <div className="usage-content">

                                <h3>
                                    Process Your Orders
                                </h3>

                                <p>
                                    We use the information you provide to
                                    confirm, prepare, process and deliver
                                    your purchases.
                                </p>

                            </div>

                        </article>

                        <article className="usage-item">

                            <span className="usage-number">
                                02
                            </span>

                            <div className="usage-content">

                                <h3>
                                    Provide Customer Support
                                </h3>

                                <p>
                                    Your information allows our team to
                                    respond to enquiries and assist with
                                    orders, delivery or other requests.
                                </p>

                            </div>

                        </article>

                        <article className="usage-item">

                            <span className="usage-number">
                                03
                            </span>

                            <div className="usage-content">

                                <h3>
                                    Improve Our Experience
                                </h3>

                                <p>
                                    Anonymous or aggregated usage information
                                    may help us understand how visitors use
                                    our website and improve its performance.
                                </p>

                            </div>

                        </article>

                        <article className="usage-item">

                            <span className="usage-number">
                                04
                            </span>

                            <div className="usage-content">

                                <h3>
                                    Send Optional Updates
                                </h3>

                                <p>
                                    If you choose to subscribe, we may send
                                    information about new fragrances,
                                    launches and selected offers.
                                </p>

                            </div>

                        </article>

                    </div>

                </div>

            </section>

            {/* =========================================
                DATA PROTECTION
            ========================================= */}

            <section className="privacy-section privacy-security">

                <div className="container">

                    <div className="security-layout">

                        <div className="security-heading">

                            <span className="section-label">
                                SECURITY
                            </span>

                            <h2>
                                Your Information.
                                <br />
                                Treated With Care.
                            </h2>

                            <p>
                                We take reasonable measures to help protect
                                the information entrusted to us and reduce
                                the risk of unauthorised access, misuse or
                                disclosure.
                            </p>

                        </div>

                        <div className="security-box">

                            <div className="security-item">

                                <span className="security-icon">
                                    01
                                </span>

                                <div>
                                    <h3>
                                        Secure Connections
                                    </h3>

                                    <p>
                                        Our website uses HTTPS encryption to
                                        help protect information while it is
                                        transmitted between your browser and
                                        our website.
                                    </p>
                                </div>

                            </div>

                            <div className="security-item">

                                <span className="security-icon">
                                    02
                                </span>

                                <div>
                                    <h3>
                                        Payment Security
                                    </h3>

                                    <p>
                                        Payment information is handled through
                                        the payment methods and providers
                                        available during checkout.
                                    </p>
                                </div>

                            </div>

                            <div className="security-item">

                                <span className="security-icon">
                                    03
                                </span>

                                <div>
                                    <h3>
                                        Limited Access
                                    </h3>

                                    <p>
                                        Access to personal information is
                                        limited to situations where it is
                                        reasonably required to operate our
                                        services or provide support.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================
                YOUR RIGHTS
            ========================================= */}

            <section className="privacy-section privacy-rights">

                <div className="container">

                    <SectionHeading
                        title="Your Privacy Rights"
                        subtitle="You should remain informed and in control of the personal information you share with us."
                    />

                    <div className="rights-grid">

                        <article className="rights-card">

                            <span>01</span>

                            <h3>
                                Access
                            </h3>

                            <p>
                                You may contact us to request information
                                about the personal data we hold about you.
                            </p>

                        </article>

                        <article className="rights-card">

                            <span>02</span>

                            <h3>
                                Update
                            </h3>

                            <p>
                                You may request that inaccurate or outdated
                                personal information be corrected.
                            </p>

                        </article>

                        <article className="rights-card">

                            <span>03</span>

                            <h3>
                                Delete
                            </h3>

                            <p>
                                Where legally applicable, you may request
                                deletion of personal information we hold.
                            </p>

                        </article>

                        <article className="rights-card">

                            <span>04</span>

                            <h3>
                                Contact
                            </h3>

                            <p>
                                If you have questions or concerns about your
                                privacy, our support team is available to help.
                            </p>

                        </article>

                    </div>

                </div>

            </section>

            {/* =========================================
                POLICY NOTE
            ========================================= */}

            <section className="privacy-note">

                <div className="container">

                    <div className="privacy-note-inner">

                        <span className="section-label">
                            A NOTE FROM S.
                        </span>

                        <p>
                            We believe trust should never be hidden behind
                            complicated language. If you ever have a question
                            about how your information is handled, simply ask.
                            We are always happy to provide clarity.
                        </p>

                    </div>

                </div>

            </section>

            {/* =========================================
                CTA
            ========================================= */}

            <section className="privacy-cta">

                <div className="container">

                    <div className="privacy-cta-box">

                        <span className="section-label">
                            NEED HELP?
                        </span>

                        <h2>
                            Questions About
                            <br />
                            Your Privacy?
                        </h2>

                        <p>
                            Our team is here to answer your questions and
                            provide the assistance you need.
                        </p>

                        <Link
                            to="/contact"
                            className="privacy-cta-btn"
                        >
                            Contact Support
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}