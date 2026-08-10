import "./InstagramGallery.css";

import gallery from "../../../data/galleryData";

import { FiInstagram } from "react-icons/fi";

import useReveal from "../../../hooks/useReveal";

export default function InstagramGallery() {

    const revealRef = useReveal();

    return (

        <section
            ref={revealRef}
            className="instagram-gallery"
            aria-labelledby="instagram-gallery-title"
        >

            <div className="container">

                {/* =========================================
                    SECTION HEADING
                ========================================= */}

                <div className="gallery-heading reveal">

                    <span>
                        FOLLOW US
                    </span>

                    <h2 id="instagram-gallery-title">
                        @s.perfumes
                    </h2>

                    <p>
                        Discover our latest fragrance moments,
                        luxury lifestyle and exclusive releases.
                    </p>

                </div>

                {/* =========================================
                    GALLERY
                ========================================= */}

                <div className="gallery-grid">

                    {gallery.map((item, index) => (

                        <article
                            key={item.id}
                            className={`gallery-item reveal delay-${(index % 4) + 1}`}
                        >

                            <img
                                src={item.image}
                                alt="S. perfume collection"
                                loading="lazy"
                            />

                            <a
                                href="https://instagram.com/s.perfumes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gallery-overlay"
                                aria-label={`View S. Perfumes on Instagram — image ${index + 1}`}
                            >

                                <span className="gallery-icon">
                                    <FiInstagram />
                                </span>

                            </a>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}
