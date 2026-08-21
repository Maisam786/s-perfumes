import "./About.css";
import { Link } from "react-router-dom";
import {
    FiAward,
    FiCheckCircle,
    FiHeart,
    FiShield,
    FiStar,
    FiTruck,
} from "react-icons/fi";

export default function About() {
    return (
        <main className="about-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="about-hero">

                <div className="about-hero-glow about-hero-glow-1"></div>
                <div className="about-hero-glow about-hero-glow-2"></div>

                <div className="container about-hero-container">

                    <span className="section-label">
                        ABOUT S.
                    </span>

                    <h1>
                        Luxury That
                        <br />
                        Leaves A Memory.
                    </h1>

                    <p>
                        Every fragrance tells a story.
                        <br />
                        At S., we create timeless scents inspired by
                        elegance, confidence, and unforgettable moments.
                    </p>

                    <Link
                        to="/shop"
                        className="about-btn"
                    >
                        Discover Collection
                    </Link>

                </div>

                <div
                    className="about-scroll-indicator"
                    aria-hidden="true"
                >
                    <span></span>
                    <small>SCROLL TO DISCOVER</small>
                </div>

            </section>


            {/* =====================================================
                OUR STORY
                IMAGE LEFT — CONTENT RIGHT
            ===================================================== */}

            <section className="about-story">

                <div className="container about-story-grid">

                    {/* IMAGE — LEFT */}

                    <div className="about-story-image-wrap">

                        <div className="about-story-image-glow"></div>

                        <div className="about-story-image">

                            <img
                                src="/about/story.webp"
                                alt="S. luxury perfume"
                            />

                            <div className="about-story-image-badge">

                                <FiStar />

                                <span>
                                    Crafted For
                                    <strong>Memories</strong>
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* CONTENT — RIGHT */}

                    <div className="about-story-content">

                        <span className="section-label">
                            THE STORY BEHIND S.
                        </span>

                        <h2>
                            Every Great Memory
                            <br />
                            Begins With A Scent.
                        </h2>

                        <p>
                            At S., we believe fragrance is more than a
                            luxury. It is an emotion, a memory, and a
                            silent signature.
                        </p>

                        <p>
                            Every bottle is thoughtfully created to
                            capture confidence, elegance, and timeless
                            sophistication.
                        </p>

                        <p>
                            From carefully selected ingredients to refined
                            presentation, every detail is considered to
                            create an experience worthy of your most
                            meaningful moments.
                        </p>


                        <div className="about-story-stats">

                            <div>
                                <strong>10K+</strong>
                                <span>Happy Customers</span>
                            </div>

                            <div>
                                <strong>50+</strong>
                                <span>Luxury Fragrances</span>
                            </div>

                            <div>
                                <strong>99%</strong>
                                <span>Customer Satisfaction</span>
                            </div>

                        </div>


                        <blockquote>
                            “We don't create perfumes.
                            <br />
                            We create memories.”
                        </blockquote>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PHILOSOPHY
            ===================================================== */}

            <section className="about-philosophy">

                <div className="container">

                    <div className="about-philosophy-heading">

                        <span className="section-label">
                            OUR PHILOSOPHY
                        </span>

                        <h2>
                            Luxury Is Not Seen.
                            <br />
                            It Is Remembered.
                        </h2>

                        <p>
                            True luxury is never loud. It is felt in the
                            confidence you carry, the elegance you express,
                            and the memories you leave behind.
                        </p>

                    </div>


                    <div className="about-philosophy-grid">

                        <article className="about-philosophy-card">

                            <div className="about-philosophy-icon">
                                <FiStar />
                            </div>

                            <span>01</span>

                            <h3>
                                Timeless Elegance
                            </h3>

                            <p>
                                Fragrances designed to remain classic,
                                sophisticated, and unforgettable.
                            </p>

                        </article>


                        <article className="about-philosophy-card">

                            <div className="about-philosophy-icon">
                                <FiAward />
                            </div>

                            <span>02</span>

                            <h3>
                                Exceptional Quality
                            </h3>

                            <p>
                                Carefully selected materials and refined
                                craftsmanship come together in every scent.
                            </p>

                        </article>


                        <article className="about-philosophy-card">

                            <div className="about-philosophy-icon">
                                <FiHeart />
                            </div>

                            <span>03</span>

                            <h3>
                                Lasting Memories
                            </h3>

                            <p>
                                Every fragrance is created to become part
                                of life's most meaningful moments.
                            </p>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY CHOOSE S.
                CENTERED SECTION
            ===================================================== */}

            <section className="about-why">

                <div className="container">

                    <div className="about-why-heading">

                        <span className="section-label">
                            WHY CHOOSE S.
                        </span>

                        <h2>
                            Confidence In
                            <br />
                            Every Detail.
                        </h2>

                        <p>
                            Choosing a fragrance is personal.
                            That's why we focus on the details that
                            make your experience feel trustworthy,
                            effortless, and memorable.
                        </p>

                    </div>


                    <div className="about-why-grid">

                        <article className="about-why-card">

                            <div className="about-why-icon">
                                <FiShield />
                            </div>

                            <div>

                                <span>01</span>

                                <h3>
                                    Authentic Fragrances
                                </h3>

                                <p>
                                    Every fragrance is selected with
                                    authenticity and quality at the heart
                                    of the experience.
                                </p>

                            </div>

                        </article>


                        <article className="about-why-card">

                            <div className="about-why-icon">
                                <FiCheckCircle />
                            </div>

                            <div>

                                <span>02</span>

                                <h3>
                                    Quality You Can Trust
                                </h3>

                                <p>
                                    From fragrance selection to packaging,
                                    every detail is handled with care.
                                </p>

                            </div>

                        </article>


                        <article className="about-why-card">

                            <div className="about-why-icon">
                                <FiTruck />
                            </div>

                            <div>

                                <span>03</span>

                                <h3>
                                    Delivered With Care
                                </h3>

                                <p>
                                    Your order is prepared carefully so
                                    the experience begins before the bottle
                                    is even opened.
                                </p>

                            </div>

                        </article>


                        <article className="about-why-card">

                            <div className="about-why-icon">
                                <FiHeart />
                            </div>

                            <div>

                                <span>04</span>

                                <h3>
                                    Made For Your Story
                                </h3>

                                <p>
                                    Whether it becomes your first fragrance
                                    or your signature scent, S. is designed
                                    to become part of your story.
                                </p>

                            </div>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CRAFTSMANSHIP
            ===================================================== */}

            <section className="about-craftsmanship">

                <div className="container">

                    <div className="about-craft-heading">

                        <span className="section-label">
                            CRAFTSMANSHIP
                        </span>

                        <h2>
                            Crafted With Precision.
                            <br />
                            Inspired By Emotion.
                        </h2>

                        <p>
                            Behind every fragrance is a careful balance
                            of artistry, craftsmanship, and precision.
                            Every detail contributes to the final
                            experience.
                        </p>

                    </div>


                    <div className="about-craft-timeline">

                        <article className="about-craft-step">

                            <div className="about-craft-icon">
                                <span>01</span>
                            </div>

                            <h3>
                                Premium Ingredients
                            </h3>

                            <p>
                                Carefully selected fragrance materials
                                form the foundation of every composition.
                            </p>

                        </article>


                        <div className="about-craft-line"></div>


                        <article className="about-craft-step">

                            <div className="about-craft-icon">
                                <span>02</span>
                            </div>

                            <h3>
                                Expert Blending
                            </h3>

                            <p>
                                Every note is balanced with precision
                                to create a harmonious fragrance profile.
                            </p>

                        </article>


                        <div className="about-craft-line"></div>


                        <article className="about-craft-step">

                            <div className="about-craft-icon">
                                <span>03</span>
                            </div>

                            <h3>
                                Quality Testing
                            </h3>

                            <p>
                                Fragrances are carefully evaluated for
                                consistency and overall performance.
                            </p>

                        </article>


                        <div className="about-craft-line"></div>


                        <article className="about-craft-step">

                            <div className="about-craft-icon">
                                <span>04</span>
                            </div>

                            <h3>
                                Luxury Packaging
                            </h3>

                            <p>
                                Each bottle is presented with the same
                                attention to detail as the fragrance itself.
                            </p>

                        </article>


                        <div className="about-craft-line"></div>


                        <article className="about-craft-step">

                            <div className="about-craft-icon">
                                <span>05</span>
                            </div>

                            <h3>
                                Delivered With Care
                            </h3>

                            <p>
                                Every order is prepared carefully before
                                beginning its journey to you.
                            </p>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROMISE
            ===================================================== */}

            <section className="about-promise">

                <div className="container">

                    <span className="section-label">
                        OUR PROMISE
                    </span>

                    <h2>
                        Every Bottle Carries
                        <br />
                        Our Promise.
                    </h2>

                    <p>
                        We promise to deliver more than exceptional
                        perfumes.
                    </p>

                    <p>
                        Every bottle reflects our dedication to quality,
                        elegance, and authenticity.
                    </p>

                    <p>
                        Whether it's your first fragrance or your
                        signature scent, our commitment remains the same:
                        to create something worthy of becoming part
                        of your story.
                    </p>

                    <div className="about-promise-line"></div>

                    <strong>
                        S.
                    </strong>

                </div>

            </section>


            {/* =====================================================
                LUXURY BANNER
            ===================================================== */}

            <section className="about-luxury-banner">

                <div className="about-luxury-overlay"></div>

                <div className="container about-luxury-content">

                    <span className="section-label">
                        S.
                    </span>

                    <h2>
                        Luxury That
                        <br />
                        Leaves A Memory.
                    </h2>

                    <p>
                        Some fragrances disappear.
                        <br />
                        Great ones become part of your story.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}

            <section className="about-cta">

                <div className="container">

                    <span className="section-label">
                        BEGIN YOUR JOURNEY
                    </span>

                    <h2>
                        Your Signature
                        <br />
                        Scent Awaits.
                    </h2>

                    <p>
                        Discover fragrances crafted to become
                        part of your most unforgettable memories.
                    </p>

                    <Link
                        to="/shop"
                        className="about-cta-btn"
                    >
                        Explore Collection
                    </Link>

                </div>

            </section>

        </main>
    );
}