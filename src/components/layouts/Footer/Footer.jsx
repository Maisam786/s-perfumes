
import "./Footer.css";

import {
    FiFacebook,
    FiInstagram,
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">

                        <h2 className="footer-logo">
                            S.
                        </h2>

                        <p>
                            Luxury fragrances crafted for unforgettable
                            impressions.
                        </p>

                        <div className="footer-socials">

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                <FiInstagram />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                            >
                                <FiFacebook />
                            </a>

                        </div>

                    </div>

                    {/* Shop */}
                    <div className="footer-column">

                        <h4>Shop</h4>

                        <NavLink to="/collections/men">
                            Men
                        </NavLink>

                        <NavLink to="/collections/women">
                            Women
                        </NavLink>

                        <NavLink to="/collections/arabic">
                            Arabic
                        </NavLink>

                        <NavLink to="/collections/gift">
                            Gift Sets
                        </NavLink>

                    </div>

                    {/* Company */}
                    <div className="footer-column">

                        <h4>Company</h4>

                        <NavLink to="/about">
                            About
                        </NavLink>

                        <NavLink to="/contact">
                            Contact
                        </NavLink>

                        <NavLink to="/faq">
                            FAQ
                        </NavLink>

                        <NavLink to="/privacy">
                            Privacy Policy
                        </NavLink>

                        <NavLink to="/terms">
                            Terms
                        </NavLink>

                        <NavLink to="/shipping">
                            Shipping & Returns
                        </NavLink>

                    </div>

                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h4>Contact</h4>

                        <p>
                            <FiMail />
                            <span>
                                info@sperfumes.com
                            </span>
                        </p>

                        <p>
                            <FiPhone />
                            <span>
                                +92 XXX XXXXXXX
                            </span>
                        </p>

                        <p>
                            <FiMapPin />
                            <span>
                                Pakistan
                            </span>
                        </p>

                    </div>

                </div>

                <div className="footer-bottom">
                    © 2026 S. Perfumes — Crafted with Luxury.
                </div>

            </div>

        </footer>
    );
}

