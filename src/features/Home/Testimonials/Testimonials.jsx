
import "./Testimonials.css";

import testimonials from "../../../data/testimonialsData";

import {
    FiStar,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";

import { useEffect, useState } from "react";

import useReveal from "../../../hooks/useReveal";

export default function Testimonials() {

    const revealRef = useReveal();

    const [current, setCurrent] = useState(0);

    /* =========================================
       AUTO SLIDER
    ========================================= */

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrent((prev) =>
                (prev + 1) % testimonials.length
            );

        }, 5000);

        return () => clearInterval(timer);

    }, []);

    /* =========================================
       NAVIGATION
    ========================================= */

    const previousTestimonial = () => {

        setCurrent((prev) =>
            prev === 0
                ? testimonials.length - 1
                : prev - 1
        );

    };

    const nextTestimonial = () => {

        setCurrent((prev) =>
            (prev + 1) % testimonials.length
        );

    };

    const activeTestimonial = testimonials[current];

    return (

        <section
            ref={revealRef}
            className="testimonials"
            aria-labelledby="testimonials-title"
        >

            <div className="container">

                {/* =========================================
                    SECTION HEADING
                ========================================= */}

                <div className="testimonial-heading reveal">

                    <span>
                        TESTIMONIALS
                    </span>

                    <h2 id="testimonials-title">
                        Loved By Fragrance Enthusiasts
                    </h2>

                    <p>
                        Thousands trust S. to leave unforgettable impressions.
                    </p>

                </div>

                {/* =========================================
                    TESTIMONIAL SLIDER
                ========================================= */}

                <div className="testimonial-slider reveal delay-1">

                    {/* Previous */}

                    <button
                        type="button"
                        className="slider-arrow slider-arrow-left"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <FiChevronLeft />
                    </button>

                    {/* Card */}

                    <article className="testimonial-card">

                        <div className="testimonial-card-glow" />

                        {/* Rating */}

                        <div
                            className="stars"
                            aria-label={`${activeTestimonial.rating} out of 5 stars`}
                        >

                            {Array.from(
                                { length: activeTestimonial.rating },
                                (_, index) => (
                                    <FiStar key={index} />
                                )
                            )}

                        </div>

                        {/* Review */}

                        <p className="review">
                            "{activeTestimonial.review}"
                        </p>

                        {/* Customer */}

                        <div className="customer">

                            <img
                                src={activeTestimonial.image}
                                alt={activeTestimonial.name}
                                loading="lazy"
                            />

                            <div>

                                <h4>
                                    {activeTestimonial.name}
                                </h4>

                                <span>
                                    {activeTestimonial.city}
                                </span>

                            </div>

                        </div>

                    </article>

                    {/* Next */}

                    <button
                        type="button"
                        className="slider-arrow slider-arrow-right"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <FiChevronRight />
                    </button>

                </div>

                {/* =========================================
                    PAGINATION
                ========================================= */}

                <div className="slider-dots">

                    {testimonials.map((testimonial, index) => (

                        <button
                            key={testimonial.id ?? index}
                            type="button"
                            className={
                                current === index
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            aria-current={
                                current === index
                                    ? "true"
                                    : undefined
                            }
                        />

                    ))}

                </div>

            </div>

        </section>

    );
}
