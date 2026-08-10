import "./Newsletter.css";
import useReveal from "../../../hooks/useReveal";

export default function Newsletter() {

    const revealRef = useReveal();

    return (

        <section
            ref={revealRef}
            className="newsletter"
        >

            <div className="container">

                <div className="newsletter-box reveal">

                    <span>
                        EXCLUSIVE ACCESS
                    </span>

                    <h2>

                        Stay In The World
                        <br />
                        Of Luxury

                    </h2>

                    <p>

                        Be the first to discover new fragrances,
                        exclusive launches, private offers,
                        and limited editions.

                    </p>

                    <form className="newsletter-form">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                        />

                        <button type="submit">

                            Join Now

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}