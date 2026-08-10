import "./MegaMenu.css";

import { NavLink } from "react-router-dom";

const collections = [
    {
        title: "Men",
        subtitle: "Bold • Woody • Signature",
        image: "/collections/men.jpg",
        link: "/collections/men",
    },
    {
        title: "Women",
        subtitle: "Elegant • Floral • Luxury",
        image: "/collections/women.jpg",
        link: "/collections/women",
    },
    {
        title: "Arabic",
        subtitle: "Oud • Oriental • Prestige",
        image: "/collections/arabic.jpg",
        link: "/collections/arabic",
    },
    {
        title: "Gift Sets",
        subtitle: "Luxury Presentation",
        image: "/collections/gift.jpg",
        link: "/collections/gift",
    },
];

export default function MegaMenu() {
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