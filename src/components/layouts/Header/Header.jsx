import "./Header.css";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
    FiChevronDown,
    FiHeart,
    FiMenu,
    FiSearch,
    FiShoppingBag,
    FiX,
} from "react-icons/fi";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

import SearchOverlay from "../../Common/SearchOverlay/SearchOverlay";
import CartDrawer from "../../CartDrawer/CartDrawer";
import MegaMenu from "./MegaMenu";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const [megaMenuClosed, setMegaMenuClosed] = useState(false);
    const megaParentRef = useRef(null);
    const navigate = useNavigate();

    const closeMegaMenu = () => {
        setMegaMenuClosed(true);
    };

    const handleMegaParentMouseLeave = () => {
        setMegaMenuClosed(false);
    };

    const { cartItems } = useCart();
    const { wishlistItems } = useWishlist();

    const wishlistCount = wishlistItems.length;

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <div className="container header-container">

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className={`mobile-toggle ${mobileOpen ? "is-open" : ""
                            }`}
                        onClick={() =>
                            setMobileOpen((previous) => !previous)
                        }
                        aria-label={
                            mobileOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={mobileOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="logo"
                        onClick={closeMobileMenu}
                        aria-label="S. Perfumes home"
                    >
                        <img
                            src="/logo.svg"
                            alt="S. Perfumes"
                        />
                    </NavLink>

                    {/* Navigation */}
                    <nav
                        className={`desktop-nav mobile-menu-panel ${mobileOpen ? "active" : ""
                            }`}
                        aria-label="Primary navigation"
                    >
                        <NavLink
                            to="/"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>

                        {/* Collections */}
                        <div
                            ref={megaParentRef}
                            className={`mega-parent ${megaMenuClosed ? "mega-menu-closed" : ""
                                }`}
                            onMouseLeave={handleMegaParentMouseLeave}
                        >
                            <button
                                type="button"
                                className="mega-trigger"
                                aria-label="Open collections"
                            >
                                Collections
                                <FiChevronDown />
                            </button>

                            <MegaMenu
                                onCollectionClick={closeMegaMenu}
                            />
                        </div>

                        <NavLink
                            to="/shop"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Shop
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            About
                        </NavLink>

                        {/* Mobile-only Wishlist */}
                        <NavLink
                            to="/wishlist"
                            className="mobile-only"
                            onClick={closeMobileMenu}
                        >
                            Wishlist
                        </NavLink>

                        {/* Mobile-only Contact */}
                        <NavLink
                            to="/contact"
                            className="mobile-only"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </NavLink>

                        <div className="mobile-menu-footer">
                            <p>
                                Luxury That Leaves A Memory.
                            </p>
                        </div>
                    </nav>

                    {/* Header Actions */}
                    <div className="header-icons">

                        {/* Search */}
                        <button
                            type="button"
                            className="icon-btn"
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                        >
                            <FiSearch />
                        </button>

                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            className="icon-btn cart"
                            aria-label={`Wishlist${wishlistCount
                                ? `, ${wishlistCount} items`
                                : ""
                                }`}
                        >
                            <FiHeart />

                            {wishlistCount > 0 && (
                                <span aria-hidden="true">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* Shopping Bag */}
                        <button
                            type="button"
                            className="icon-btn cart"
                            onClick={() =>
                                setCartDrawerOpen(true)
                            }
                            aria-label={`Shopping bag${cartCount
                                ? `, ${cartCount} items`
                                : ""
                                }`}
                        >
                            <FiShoppingBag />

                            {cartCount > 0 && (
                                <span aria-hidden="true">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <CartDrawer
                open={cartDrawerOpen}
                onClose={() =>
                    setCartDrawerOpen(false)
                }
            />

            <SearchOverlay
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </>
    );
}