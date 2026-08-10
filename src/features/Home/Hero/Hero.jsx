import "./Hero.css";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import useReveal from "../../../hooks/useReveal";
import useMagnetic from "../../../hooks/useMagnetic";

import heroSlides from "../../../data/heroData";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const revealRef = useReveal();
    const buttonRef = useRef(null);

    useMagnetic(buttonRef);

    /*
    =========================================
    AUTO SLIDER
    =========================================
    */

    useEffect(() => {
        if (heroSlides.length <= 1) return;

        const interval = window.setInterval(() => {
            setCurrentSlide((previousSlide) => (
                (previousSlide + 1) % heroSlides.length
            ));
        }, 6000);

        return () => window.clearInterval(interval);
    }, []);

    /*
    =========================================
    CURRENT SLIDE
    =========================================
    */

    const currentHero = heroSlides[currentSlide];

    /*
    =========================================
    SLIDE NAVIGATION
    =========================================
    */

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section
            ref={revealRef}
            className="hero"
            aria-label="S. Perfumes"
        >

            {/* =========================================
                BACKGROUND IMAGES
            ========================================= */}

            <div
                className="hero-media"
                aria-hidden="true"
            >
                {heroSlides.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.image}
                        alt=""
                        className={`hero-image ${
                            index === currentSlide ? "active" : ""
                        }`}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                ))}
            </div>


            {/* =========================================
                CINEMATIC OVERLAY
            ========================================= */}

            <div
                className="hero-overlay"
                aria-hidden="true"
            />


            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="container">

                <div className="hero-content">

                    {/* =================================
                        CHANGING CONTENT
                    ================================= */}

                    <div
                        key={currentHero.id}
                        className="hero-changing-content"
                    >

                        <span className="hero-tag">
                            {currentHero.subtitle}
                        </span>


                        <h1>
                            {currentHero.title
                                .split("\n")
                                .map((line, index, lines) => (
                                    <span key={index}>
                                        {line}

                                        {index < lines.length - 1 && (
                                            <br />
                                        )}
                                    </span>
                                ))}
                        </h1>


                        <p className="hero-description">
                            {currentHero.description}
                        </p>

                    </div>


                    {/* =================================
                        FIXED BUTTON
                    ================================= */}

                    <Link
                        ref={buttonRef}
                        to="/shop"
                        className="hero-btn luxury-button"
                    >
                        Explore Collection
                    </Link>


                    {/* =================================
                        SLIDE PAGINATION
                    ================================= */}

                    {heroSlides.length > 1 && (
                        <div
                            className="hero-pagination"
                            aria-label="Hero slides"
                        >
                            {heroSlides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    className={`hero-dot ${
                                        currentSlide === index
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={
                                        currentSlide === index
                                            ? "true"
                                            : undefined
                                    }
                                />
                            ))}
                        </div>
                    )}

                </div>

            </div>

        </section>
    );
}