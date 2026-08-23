import "./MegaMenu.css";

import { NavLink, useNavigate } from "react-router-dom";

const collections = [
    {
        title: "Men",
        subtitle: "Bold • Woody • Signature",
        image: "/collections/men.jpg",
        link: "/shop?category=men",
    },
    {
        title: "Women",
        subtitle: "Elegant • Floral • Luxury",
        image: "/collections/women.jpg",
        link: "/shop?category=women",
    },
    {
        title: "Arabic",
        subtitle: "Oud • Oriental • Prestige",
        image: "/collections/arabic.jpg",
        link: "/shop?category=arabic",
    },
    {
        title: "Gift Sets",
        subtitle: "Luxury Presentation",
        image: "/collections/gift.jpg",
        link: "/collections/gift",
    },
];

export default function MegaMenu({ onCollectionClick }) {
    const navigate = useNavigate();

    const handleCollectionClick = (event, link) => {
        event.preventDefault();

        // Navigate immediately.
        navigate(link);

        // Remove focus from the clicked card.
        event.currentTarget.blur();
    };

    return (
        <div className="mega-menu">
            <div className="mega-top">
                <span>DISCOVER</span>

                <h2>Luxury Collections</h2>

                <p>
                    Crafted for timeless elegance and unforgettable presence.
                </p>
            </div>

            <div className="mega-grid">
                {collections.map((collection) => (
                    <NavLink
                        key={collection.title}
                        to={collection.link}
                        className="mega-card"
                        onClick={onCollectionClick}
                    >
                        <img
                            src={collection.image}
                            alt={collection.title}
                            loading="lazy"
                        />

                        <div className="mega-overlay">
                            <h3>{collection.title}</h3>

                            <p>{collection.subtitle}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}