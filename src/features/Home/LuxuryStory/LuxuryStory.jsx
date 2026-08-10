import "./LuxuryStory.css";

import { Link } from "react-router-dom";

import story from "../../../data/story";
import useReveal from "../../../hooks/useReveal";

export default function LuxuryStory() {
    const revealRef = useReveal();

    return (
        <section
            ref={revealRef}
            className="luxury-story"
            aria-label="Our Story"
        >
            <div className="container">

                <div className="story-layout">

                    {/* =========================================
                        STORY CONTENT
                    ========================================= */}

                    <div className="story-content reveal">

                        <span className="story-tag">
                            {story.tag}
                        </span>

                        <h2>
                            {story.title
                                .split("\n")
                                .map((line, index, lines) => (
                                    <span key={index}>
                                        {line}

                                        {index < lines.length - 1 && (
                                            <br />
                                        )}
                                    </span>
                                ))}
                        </h2>

                        <p>
                            {story.description}
                        </p>

                        <Link
                            to="/about"
                            className="story-btn"
                        >
                            Discover Our Journey
                        </Link>

                    </div>


                    {/* =========================================
                        STORY IMAGE
                    ========================================= */}

                    <div className="story-image reveal delay-2">

                        <img
                            src={story.image}
                            alt="S. Perfumes story"
                            loading="lazy"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}