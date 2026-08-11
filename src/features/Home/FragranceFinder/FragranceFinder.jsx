import "./FragranceFinder.css";

import { useState } from "react";
import {
    ArrowRight,
    Check,
    RotateCcw,
    Sparkles,
} from "lucide-react";

import useReveal from "../../../hooks/useReveal";

import products from "../../../data/products";

import {
    getTopFragranceRecommendations,
} from "../../../utils/fragranceFinder";

import { useCart } from "../../../context/CartContext";


/*
=========================================================
OPTIONS
=========================================================
*/

const genderOptions = [
    "Men",
    "Women",
    "Unisex",
];

const occasionOptions = [
    "Daily",
    "Office",
    "Party",
    "Wedding",
];

const fragranceOptions = [
    "Oud",
    "Fresh",
    "Citrus",
    "Woody",
    "Floral",
    "Sweet",
];

const budgetOptions = [
    "Under PKR 5,000",
    "PKR 5,000–10,000",
    "Premium",
];


/*
=========================================================
COMPONENT
=========================================================
*/

export default function FragranceFinder() {

    const revealRef = useReveal();

    const { addToCart } = useCart();


    /*
    -----------------------------------------------------
    STATE
    -----------------------------------------------------
    */

    const [gender, setGender] = useState("");

    const [occasion, setOccasion] =
        useState("");

    const [family, setFamily] =
        useState("");

    const [budget, setBudget] =
        useState("");

    const [recommendations, setRecommendations] =
        useState([]);

    const [hasSearched, setHasSearched] =
        useState(false);


    /*
    -----------------------------------------------------
    COMPLETE CHECK
    -----------------------------------------------------
    */

    const isComplete =
        gender &&
        occasion &&
        family &&
        budget;


    /*
    -----------------------------------------------------
    FIND FRAGRANCE
    -----------------------------------------------------
    */

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!isComplete) {
            return;
        }


        const preferences = {
            gender,
            occasion,
            family,
            budget,
        };


        const results =
            getTopFragranceRecommendations(
                products,
                preferences,
                3
            );


        setRecommendations(results);

        setHasSearched(true);


        /*
        Smoothly move the results into view.
        */

        window.setTimeout(() => {

            document
                .querySelector(
                    ".sc-finder-results"
                )
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

        }, 80);

    };


    /*
    -----------------------------------------------------
    RESET
    -----------------------------------------------------
    */

   const handleReset = () => {

    setHasSearched(false);
    setRecommendations([]);

    setGender("");
    setOccasion("");
    setFamily("");
    setBudget("");

    window.setTimeout(() => {

        document
            .querySelector(".sc-finder-header")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

    }, 50);
};


    /*
    =====================================================
    RENDER
    =====================================================
    */

    return (

        <section
            className="sc-finder"
            ref={revealRef}
        >

            <div className="container">

                <div className="sc-finder-box">


                    {/* =====================================
                        AMBIENT GLOW
                    ===================================== */}

                    <div
                        className="sc-finder-glow sc-finder-glow--top"
                        aria-hidden="true"
                    />

                    <div
                        className="sc-finder-glow sc-finder-glow--bottom"
                        aria-hidden="true"
                    />


                    {/* =====================================
                        HEADER
                    ===================================== */}

                    <div className="sc-finder-header">

                        <span className="sc-finder-eyebrow">
                            FRAGRANCE CONCIERGE
                        </span>

                        <h2>
                            Find Your Signature Fragrance
                        </h2>

                        <p>
                            Tell us about your style,
                            occasion and scent preferences.
                            We'll match you with fragrances
                            from the S. collection.
                        </p>

                    </div>


                    {/* =====================================
                        FORM
                    ===================================== */}

                    <form
                        className="sc-finder-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="sc-finder-grid">


                            {/* GENDER */}

                            <label className="sc-finder-field">

                                <span>
                                    Who is it for?
                                </span>

                                <select
                                    value={gender}
                                    onChange={(event) =>
                                        setGender(
                                            event.target.value
                                        )
                                    }
                                >

                                    <option value="">
                                        Select preference
                                    </option>

                                    {genderOptions.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}

                                </select>

                            </label>


                            {/* OCCASION */}

                            <label className="sc-finder-field">

                                <span>
                                    What's the occasion?
                                </span>

                                <select
                                    value={occasion}
                                    onChange={(event) =>
                                        setOccasion(
                                            event.target.value
                                        )
                                    }
                                >

                                    <option value="">
                                        Select occasion
                                    </option>

                                    {occasionOptions.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}

                                </select>

                            </label>


                            {/* FAMILY */}

                            <label className="sc-finder-field">

                                <span>
                                    Choose your scent family
                                </span>

                                <select
                                    value={family}
                                    onChange={(event) =>
                                        setFamily(
                                            event.target.value
                                        )
                                    }
                                >

                                    <option value="">
                                        Select fragrance family
                                    </option>

                                    {fragranceOptions.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}

                                </select>

                            </label>


                            {/* BUDGET */}

                            <label className="sc-finder-field">

                                <span>
                                    Your fragrance budget
                                </span>

                                <select
                                    value={budget}
                                    onChange={(event) =>
                                        setBudget(
                                            event.target.value
                                        )
                                    }
                                >

                                    <option value="">
                                        Select budget
                                    </option>

                                    {budgetOptions.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}

                                </select>

                            </label>

                        </div>


                        {/* =================================
                            ACTION
                        ================================= */}

                        <button
                            type="submit"
                            className="sc-finder-button"
                            disabled={!isComplete}
                        >

                            <Sparkles size={17} />

                            <span>
                                Find My Fragrance
                            </span>

                            <ArrowRight size={17} />

                        </button>

                    </form>


                    {/* =====================================
                        RESULTS
                    ===================================== */}

                    {hasSearched && (

                        <div className="sc-finder-results">


                            <div className="sc-finder-results-header">

                                <div>

                                    <span>
                                        YOUR MATCHES
                                    </span>

                                    <h3>
                                        Fragrances selected for you
                                    </h3>

                                </div>


                                <button
                                    type="button"
                                    className="sc-finder-reset"
                                    onClick={handleReset}
                                >

                                    <RotateCcw size={14} />

                                    Start Again

                                </button>

                            </div>


                            <div className="sc-finder-results-grid">

                                {recommendations.map(
                                    (
                                        recommendation,
                                        index
                                    ) => {

                                        const product =
                                            recommendation.product;

                                        return (

                                            <article
                                                className={`sc-finder-result ${index === 0
                                                    ? "is-best-match"
                                                    : ""
                                                    }`}
                                                key={product.id}
                                            >


                                                {/* IMAGE */}

                                                <div className="sc-finder-result-image">

                                                    {index === 0 && (

                                                        <span className="sc-finder-best-badge">

                                                            <Check
                                                                size={12}
                                                            />

                                                            BEST MATCH

                                                        </span>

                                                    )}

                                                    <img
                                                        src={
                                                            product.image
                                                        }
                                                        alt={
                                                            product.name
                                                        }
                                                    />

                                                </div>


                                                {/* CONTENT */}

                                                <div className="sc-finder-result-content">

                                                    <span className="sc-finder-result-category">
                                                        {product.category ||
                                                            "S. COLLECTION"}
                                                    </span>

                                                    <h4>
                                                        {product.name}
                                                    </h4>

                                                    <div className="sc-finder-match">

                                                        <span>
                                                            {recommendation.score}%
                                                            Match
                                                        </span>

                                                        <div>
                                                            <span
                                                                style={{
                                                                    width: `${recommendation.score}%`,
                                                                }}
                                                            />
                                                        </div>

                                                    </div>

                                                    <p className="sc-finder-result-reason">

                                                        {recommendation.reason}

                                                    </p>


                                                    <div className="sc-finder-result-bottom">

                                                        <strong>
                                                            PKR{" "}
                                                            {Number(
                                                                product.price
                                                            ).toLocaleString()}
                                                        </strong>


                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                addToCart(
                                                                    product
                                                                )
                                                            }
                                                        >

                                                            Add to Cart

                                                            <ArrowRight
                                                                size={15}
                                                            />

                                                        </button>

                                                    </div>

                                                </div>

                                            </article>

                                        );

                                    }
                                )}

                            </div>


                            {recommendations.length === 0 && (

                                <div className="sc-finder-no-results">

                                    <Sparkles size={22} />

                                    <p>
                                        We couldn't find a strong
                                        match right now. Try
                                        adjusting your preferences.
                                    </p>

                                </div>

                            )}

                        </div>

                    )}

                </div>

            </div>

        </section>
    );
}