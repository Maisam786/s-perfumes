import "./Contact.css";
import { FiMapPin, FiMail, FiPhone, FiClock, FiCheck } from "react-icons/fi";

export default function Contact() {
    return (
        <main className="contact-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="contact-hero">

                <div className="contact-hero-glow contact-hero-glow-1"></div>
                <div className="contact-hero-glow contact-hero-glow-2"></div>
                <div className="contact-hero-grid"></div>

                <div className="container contact-hero-content">

                    <span className="section-label">
                        CONTACT S.
                    </span>

                    <h1>
                        We'd Love To Hear
                        <br />
                        From You.
                    </h1>

                    <p>
                        Whether you have a question, need fragrance advice,
                        or simply want to say hello, our team is here to help.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}

            <section className="contact-cards">

                <div className="container">

                    <div className="contact-grid">

                        <article className="contact-card">

                            <div className="contact-icon">
                                <FiMapPin />
                            </div>

                            <span className="contact-card-label">
                                FIND US
                            </span>

                            <h3>
                                Visit Us
                            </h3>

                            <p>
                                Kohat, Khyber Pakhtunkhwa
                                <br />
                                Pakistan
                            </p>

                        </article>


                        <article className="contact-card">

                            <div className="contact-icon">
                                <FiMail />
                            </div>

                            <span className="contact-card-label">
                                WRITE TO US
                            </span>

                            <h3>
                                Email
                            </h3>

                            <p>
                                support@sfragrances.com
                            </p>

                        </article>


                        <article className="contact-card">

                            <div className="contact-icon">
                                <FiPhone />
                            </div>

                            <span className="contact-card-label">
                                SPEAK WITH US
                            </span>

                            <h3>
                                Phone
                            </h3>

                            <p>
                                +92 XXX XXXXXXX
                            </p>

                        </article>


                        <article className="contact-card">

                            <div className="contact-icon">
                                <FiClock />
                            </div>

                            <span className="contact-card-label">
                                CUSTOMER CARE
                            </span>

                            <h3>
                                Working Hours
                            </h3>

                            <p>
                                Monday – Saturday
                                <br />
                                10:00 AM – 8:00 PM
                            </p>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PERSONAL ASSISTANCE + FORM
            ===================================================== */}

            <section className="contact-form-section">

                <div className="container form-grid">

                    {/* LEFT */}

                    <div className="form-info">

                        <span className="section-label">
                            PERSONAL ASSISTANCE
                        </span>

                        <h2>
                            Let's Find
                            <br />
                            Your Signature.
                        </h2>

                        <p>
                            Choosing a fragrance should feel personal.
                            Whether you're searching for your first scent,
                            looking for a meaningful gift, or need help with
                            an order, we're here to guide you.
                        </p>

                        <ul>

                            <li>
                                <FiCheck />
                                Personal fragrance recommendations
                            </li>

                            <li>
                                <FiCheck />
                                Order & delivery assistance
                            </li>

                            <li>
                                <FiCheck />
                                Luxury customer care
                            </li>

                        </ul>

                        <blockquote>
                            “Every conversation begins with a memory.”
                        </blockquote>

                    </div>


                    {/* RIGHT */}

                    <div className="contact-form-wrapper">

                        <div className="form-header">

                            <span>
                                SEND US A MESSAGE
                            </span>

                            <p>
                                We'll get back to you as soon as possible.
                            </p>

                        </div>

                        <form className="contact-form">

                            <div className="form-row">

                                <div className="form-field">

                                    <label htmlFor="contact-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="Your name"
                                    />

                                </div>


                                <div className="form-field">

                                    <label htmlFor="contact-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />

                                </div>

                            </div>


                            <div className="form-field">

                                <label htmlFor="contact-subject">
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="How can we help?"
                                />

                            </div>


                            <div className="form-field">

                                <label htmlFor="contact-message">
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    rows="6"
                                    placeholder="Tell us how we can help..."
                                ></textarea>

                            </div>


                            <button
                                type="submit"
                                className="contact-submit"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TRUST MESSAGE
            ===================================================== */}

            <section className="contact-trust">

                <div className="container">

                    <div className="contact-trust-inner">

                        <span className="section-label">
                            S.
                        </span>

                        <h2>
                            Luxury Customer Care,
                            <br />
                            With A Personal Touch.
                        </h2>

                        <p>
                            From choosing your signature scent to receiving
                            your order, every interaction should feel as
                            thoughtful as the fragrance itself.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}