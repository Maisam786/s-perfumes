import "./FAQ.css";
import { useEffect, useState } from "react";
import { Plus, Minus, Search } from "lucide-react";

import PageHero from "../../components/Common/PageHero/PageHero";
import faqData from "../../data/faqData";

export default function FAQ() {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleFAQ = (id) => {
        setActiveFAQ((previous) =>
            previous === id ? null : id
        );
    };

    const filteredFAQs = faqData.filter((faq) => {
        const search = searchTerm.toLowerCase().trim();

        return (
            faq.question.toLowerCase().includes(search) ||
            faq.answer.toLowerCase().includes(search)
        );
    });

    useEffect(() => {
        if (
            activeFAQ !== null &&
            !filteredFAQs.some((faq) => faq.id === activeFAQ)
        ) {
            setActiveFAQ(null);
        }
    }, [searchTerm, activeFAQ, filteredFAQs]);

    return (
        <main className="faq-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <PageHero
                label="SUPPORT"
                title="Frequently Asked Questions"
                description="Find answers to the most common questions about our fragrances, orders and delivery."
            />


            {/* =====================================================
                FAQ SECTION
            ===================================================== */}

            <section className="faq-section">

                <div className="container">

                    {/* Search */}

                    <div className="faq-search">

                        <div className="faq-search-box">

                            <Search
                                size={19}
                                aria-hidden="true"
                            />

                            <input
                                type="text"
                                placeholder="Search your question..."
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                aria-label="Search frequently asked questions"
                            />

                            {searchTerm && (
                                <button
                                    type="button"
                                    className="faq-search-clear"
                                    onClick={() => setSearchTerm("")}
                                    aria-label="Clear search"
                                >
                                    ×
                                </button>
                            )}

                        </div>

                        <p className="faq-search-hint">
                            {searchTerm
                                ? `${filteredFAQs.length} ${
                                      filteredFAQs.length === 1
                                          ? "result"
                                          : "results"
                                  } found`
                                : "Search fragrances, delivery, orders, returns and more."
                            }
                        </p>

                    </div>


                    {/* FAQ List */}

                    <div className="faq-list">

                        {filteredFAQs.map((faq, index) => {

                            const isActive =
                                activeFAQ === faq.id;

                            return (
                                <article
                                    key={faq.id}
                                    className={`faq-item ${
                                        isActive ? "active" : ""
                                    }`}
                                >

                                    <button
                                        type="button"
                                        className="faq-question"
                                        onClick={() =>
                                            toggleFAQ(faq.id)
                                        }
                                        aria-expanded={isActive}
                                        aria-controls={`faq-answer-${faq.id}`}
                                    >

                                        <span className="faq-question-content">

                                            <span className="faq-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span>
                                                {faq.question}
                                            </span>

                                        </span>

                                        <span
                                            className="faq-icon"
                                            aria-hidden="true"
                                        >
                                            {isActive ? (
                                                <Minus size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </span>

                                    </button>


                                    <div
                                        id={`faq-answer-${faq.id}`}
                                        className="faq-answer"
                                    >

                                        <div className="faq-answer-inner">

                                            <p>
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                </article>
                            );
                        })}


                        {filteredFAQs.length === 0 && (
                            <div className="faq-empty">

                                <div className="faq-empty-icon">
                                    <Search size={22} />
                                </div>

                                <h3>
                                    No results found
                                </h3>

                                <p>
                                    We couldn't find an answer matching
                                    your search. Try another keyword or
                                    contact our support team.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSearchTerm("")}
                                >
                                    View All Questions
                                </button>

                            </div>
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                SUPPORT CTA
            ===================================================== */}

            <section className="faq-support">

                <div className="container">

                    <div className="faq-support-inner">

                        <span className="section-label">
                            STILL HAVE QUESTIONS?
                        </span>

                        <h2>
                            We're Here To Help.
                        </h2>

                        <p>
                            Can't find what you're looking for?
                            Our team is always happy to assist you.
                        </p>

                        <a
                            href="/contact"
                            className="faq-support-btn"
                        >
                            Contact Our Team
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}