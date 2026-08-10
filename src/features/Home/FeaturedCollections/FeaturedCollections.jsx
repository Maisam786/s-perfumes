import "./FeaturedCollections.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiArrowLeft,
    FiArrowRight,
    FiArrowUpRight,
} from "react-icons/fi";

import useReveal from "../../../hooks/useReveal";

/* =========================================================
   COLLECTION DATA
========================================================= */

const collections = [
    {
        id: 1,
        title: "Men",
        subtitle: "Bold • Woody • Signature",
        image: "/collections/men.jpg",
        path: "/shop?category=men",
    },
    {
        id: 2,
        title: "Women",
        subtitle: "Elegant • Floral • Luxury",
        image: "/collections/women.jpg",
        path: "/shop?category=women",
    },
    {
        id: 3,
        title: "Arabic",
        subtitle: "Oud • Oriental • Prestige",
        image: "/collections/arabic.jpg",
        path: "/shop?category=arabic",
    },
    {
        id: 4,
        title: "Gift Sets",
        subtitle: "Luxury Presentation",
        image: "/collections/gift.jpg",
        path: "/shop?category=gift-sets",
    },
];

/* =========================================================
   FEATURED COLLECTIONS
========================================================= */

export default function FeaturedCollections() {
    const revealRef = useReveal();
    const sliderRef = useRef(null);

    const navigate = useNavigate();

    /*
    =========================================
    SLIDER CONTROL
    =========================================
    */

    const scrollSlider = (direction) => {
        if (!sliderRef.current) return;

        const amount =
            sliderRef.current.clientWidth * 0.72;

        sliderRef.current.scrollBy({
            left:
                direction === "next"
                    ? amount
                    : -amount,
            behavior: "smooth",
        });
    };


    /*
    =========================================
    OPEN COLLECTION
    =========================================
    */

    const openCollection = (path) => {
        navigate(path);
    };


    /*
    =========================================
    KEYBOARD ACCESS
    =========================================
    */

    const handleCardKeyDown = (event, path) => {
        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();

            openCollection(path);
        }
    };


    /*
    =========================================
    RENDER
    =========================================
    */

    return (
        <section
            ref={revealRef}
            className="featured luxury-section"
            aria-labelledby="featured-title"
        >

            {/* =========================================
                ATMOSPHERIC LIGHT
            ========================================= */}

            <span
                className="luxury-glow luxury-glow--top-left"
                aria-hidden="true"
            />


            <div className="container">

                {/* =========================================
                    SECTION HEADING
                ========================================= */}

                <div className="featured-heading luxury-heading reveal">

                    <span>
                        FEATURED COLLECTIONS
                    </span>

                    <h2 id="featured-title">
                        Crafted For Every Personality
                    </h2>

                    <p>
                        Explore premium fragrance
                        collections designed to leave
                        unforgettable impressions.
                    </p>

                </div>


                {/* =========================================
                    COLLECTION SLIDER
                ========================================= */}

                <div className="featured-slider-wrapper">

                    {/* =====================================
                        PREVIOUS
                    ===================================== */}

                    <button
                        type="button"
                        className="featured-arrow featured-arrow--left"
                        onClick={() =>
                            scrollSlider("previous")
                        }
                        aria-label="Previous collections"
                    >
                        <FiArrowLeft />
                    </button>


                    {/* =====================================
                        SLIDER
                    ===================================== */}

                    <div
                        ref={sliderRef}
                        className="featured-slider"
                        aria-label="Featured fragrance collections"
                    >

                        {collections.map((item, index) => (

                            <article
                                key={item.id}
                                className={`featured-card reveal delay-${
                                    (index % 4) + 1
                                }`}
                                role="link"
                                tabIndex={0}
                                onClick={() =>
                                    openCollection(item.path)
                                }
                                onKeyDown={(event) =>
                                    handleCardKeyDown(
                                        event,
                                        item.path
                                    )
                                }
                                aria-label={`Explore ${item.title} collection`}
                            >

                                {/* =================================
                                    IMAGE
                                ================================= */}

                                <img
                                    src={item.image}
                                    alt={`${item.title} fragrance collection`}
                                    loading={
                                        index === 0
                                            ? "eager"
                                            : "lazy"
                                    }
                                />


                                {/* =================================
                                    IMAGE VIGNETTE
                                ================================= */}

                                <div
                                    className="featured-card-vignette"
                                    aria-hidden="true"
                                />


                                {/* =================================
                                    CONTENT
                                ================================= */}

                                <div className="featured-overlay">

                                    <span className="featured-number">
                                        0{index + 1}
                                    </span>


                                    <div className="featured-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.subtitle}
                                        </p>


                                        {/* =================================
                                            EXPLORE LINK
                                        ================================= */}

                                        <button
                                            type="button"
                                            className="featured-explore"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                openCollection(item.path);
                                            }}
                                            aria-label={`Explore ${item.title} collection`}
                                        >
                                            <span>
                                                Explore Collection
                                            </span>

                                            <FiArrowUpRight />
                                        </button>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>


                    {/* =====================================
                        NEXT
                    ===================================== */}

                    <button
                        type="button"
                        className="featured-arrow featured-arrow--right"
                        onClick={() =>
                            scrollSlider("next")
                        }
                        aria-label="Next collections"
                    >
                        <FiArrowRight />
                    </button>

                </div>

            </div>

        </section>
    );
}