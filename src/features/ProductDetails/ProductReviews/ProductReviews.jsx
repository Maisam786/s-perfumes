import "./ProductReviews.css";

import {
    FiStar,
    FiCheckCircle,
} from "react-icons/fi";

export default function ProductReviews({ product }) {

    return (

        <div className="reviews-wrapper">

            {(product.reviewsData || []).map((review) => (

                <article
                    key={review.id}
                    className="review-card"
                >

                    <div className="review-top">

                        <div>

                            <h4>
                                {review.name}
                            </h4>

                            <span className="verified">

                                <FiCheckCircle />

                                Verified Purchase

                            </span>

                        </div>

                        <small>
                            {review.date}
                        </small>

                    </div>


                    <div className="review-stars">

                        {Array.from({

                            length: review.rating,

                        }).map((_, index) => (

                            <FiStar
                                key={index}
                                fill="currentColor"
                            />

                        ))}

                    </div>


                    <p>
                        {review.comment}
                    </p>

                </article>

            ))}

        </div>

    );

}
