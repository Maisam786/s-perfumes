import "./ReviewSummary.css";

import { FiStar } from "react-icons/fi";

export default function ReviewSummary({ product }) {

    const reviews = product.reviewsData || [];

    const average = product.rating;

    const total = reviews.length;

    const fiveStar = reviews.filter(r => r.rating === 5).length;
    const fourStar = reviews.filter(r => r.rating === 4).length;
    const threeStar = reviews.filter(r => r.rating === 3).length;
    const twoStar = reviews.filter(r => r.rating === 2).length;
    const oneStar = reviews.filter(r => r.rating === 1).length;

    const percent = (count) =>
        total === 0 ? 0 : (count / total) * 100;

    return (

        <section className="review-summary">

            <div className="summary-score">

                <h2>

                    {average}

                </h2>

                <div className="summary-stars">

                    {Array.from({ length: 5 }).map((_, index) => (

                        <FiStar key={index} />

                    ))}

                </div>

                <p>

                    Based on {product.reviews} reviews

                </p>

            </div>

            <div className="summary-bars">

                {[
                    [5, fiveStar],
                    [4, fourStar],
                    [3, threeStar],
                    [2, twoStar],
                    [1, oneStar],
                ].map(([star, count]) => (

                    <div
                        key={star}
                        className="rating-row"
                    >

                        <span>

                            {star}★

                        </span>

                        <div className="bar">

                            <div
                                className="fill"
                                style={{

                                    width: `${percent(count)}%`

                                }}
                            />

                        </div>

                        <small>

                            {count}

                        </small>

                    </div>

                ))}

            </div>

        </section>

    );

}