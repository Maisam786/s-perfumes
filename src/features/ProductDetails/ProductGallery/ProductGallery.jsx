import "./ProductGallery.css";

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProductGallery({ product }) {
    const images =
        Array.isArray(product?.images) && product.images.length > 0
            ? product.images
            : [product.image];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const selectedImage = images[selectedIndex];

    const changeImage = (index) => {
        if (index === selectedIndex || !images[index]) return;

        setFade(true);

        window.setTimeout(() => {
            setSelectedIndex(index);
            setFade(false);
        }, 180);
    };

    const previousImage = () => {
        const previousIndex =
            selectedIndex === 0
                ? images.length - 1
                : selectedIndex - 1;

        changeImage(previousIndex);
    };

    const nextImage = () => {
        const nextIndex =
            selectedIndex === images.length - 1
                ? 0
                : selectedIndex + 1;

        changeImage(nextIndex);
    };

    useEffect(() => {
        return () => {
            window.clearTimeout();
        };
    }, []);

    return (
        <div className="product-gallery">

            {/* =================================================
                THUMBNAILS
            ================================================= */}

            <div
                className="gallery-thumbnails"
                aria-label="Product images"
            >
                {images.map((img, index) => (
                    <button
                        key={`${img}-${index}`}
                        type="button"
                        className={`thumb ${
                            selectedIndex === index
                                ? "active"
                                : ""
                        }`}
                        onClick={() => changeImage(index)}
                        aria-label={`View ${product.name} image ${
                            index + 1
                        }`}
                        aria-current={
                            selectedIndex === index
                                ? "true"
                                : undefined
                        }
                    >
                        <img
                            src={img}
                            alt={`${product.name} thumbnail ${
                                index + 1
                            }`}
                        />
                    </button>
                ))}
            </div>

            {/* =================================================
                MAIN PREVIEW
            ================================================= */}

            <div className="gallery-main">

                <div
                    className="gallery-preview"
                    aria-label={`Main image of ${product.name}`}
                >
                    <div className="gallery-glow" />

                    <img
                        src={selectedImage}
                        alt={product.name}
                        className={
                            fade
                                ? "gallery-image fade-out"
                                : "gallery-image fade-in"
                        }
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                className="gallery-nav gallery-nav-prev"
                                onClick={previousImage}
                                aria-label="Previous product image"
                            >
                                <FiChevronLeft />
                            </button>

                            <button
                                type="button"
                                className="gallery-nav gallery-nav-next"
                                onClick={nextImage}
                                aria-label="Next product image"
                            >
                                <FiChevronRight />
                            </button>
                        </>
                    )}

                    {images.length > 1 && (
                        <div className="gallery-counter">
                            <span>
                                {String(selectedIndex + 1).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            <i>/</i>

                            <span>
                                {String(images.length).padStart(
                                    2,
                                    "0"
                                )}
                            </span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}