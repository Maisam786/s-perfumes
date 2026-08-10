import "./ProductTabs.css";

import { useState } from "react";

import ProductReviews from "../ProductReviews/ProductReviews";
import ReviewSummary from "../ReviewSummary/ReviewSummary";

export default function ProductTabs({ product }) {

    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        {
            id: "description",
            label: "Description",
        },
        {
            id: "notes",
            label: "Fragrance Notes",
        },
        {
            id: "reviews",
            label: "Reviews",
        },
    ];

    const topNotes = product.topNotes || [];
    const middleNotes = product.middleNotes || [];
    const baseNotes = product.baseNotes || [];

    return (
        <section className="product-tabs">

            {/* =================================================
                TABS HEADER
            ================================================= */}

            <div
                className="tabs-header"
                role="tablist"
                aria-label="Product information"
            >

                {tabs.map((tab) => (

                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={
                            activeTab === tab.id
                        }
                        className={
                            activeTab === tab.id
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActiveTab(tab.id)
                        }
                    >
                        {tab.label}
                    </button>

                ))}

            </div>


            {/* =================================================
                TAB CONTENT
            ================================================= */}

            <div
                className="tabs-content"
                key={activeTab}
            >

                {/* =============================================
                    DESCRIPTION
                ============================================= */}

                {activeTab === "description" && (

                    <div className="tab-description">

                        <span className="tab-eyebrow">
                            THE EXPERIENCE
                        </span>

                        <h3>
                            Crafted to leave an impression.
                        </h3>

                        <p>
                            {product.description}
                        </p>

                    </div>

                )}


                {/* =============================================
                    FRAGRANCE NOTES
                ============================================= */}

                {activeTab === "notes" && (

                    <div className="fragrance-notes-tab">

                        <div className="notes-intro">

                            <span className="tab-eyebrow">
                                FRAGRANCE PROFILE
                            </span>

                            <h3>
                                A fragrance that unfolds in layers.
                            </h3>

                        </div>


                        <div className="notes-grid">

                            <div className="tab-note-group">

                                <span className="note-number">
                                    01
                                </span>

                                <h4>
                                    Top Notes
                                </h4>

                                <p>
                                    {topNotes.length
                                        ? topNotes.join(", ")
                                        : "Not specified"}
                                </p>

                            </div>


                            <div className="tab-note-group">

                                <span className="note-number">
                                    02
                                </span>

                                <h4>
                                    Middle Notes
                                </h4>

                                <p>
                                    {middleNotes.length
                                        ? middleNotes.join(", ")
                                        : "Not specified"}
                                </p>

                            </div>


                            <div className="tab-note-group">

                                <span className="note-number">
                                    03
                                </span>

                                <h4>
                                    Base Notes
                                </h4>

                                <p>
                                    {baseNotes.length
                                        ? baseNotes.join(", ")
                                        : "Not specified"}
                                </p>

                            </div>

                        </div>

                    </div>

                )}


                {/* =============================================
                    REVIEWS
                ============================================= */}

                {activeTab === "reviews" && (

                    <div className="reviews-tab">

                        <ReviewSummary
                            product={product}
                        />

                        <ProductReviews
                            product={product}
                        />

                    </div>

                )}

            </div>

        </section>
    );
}