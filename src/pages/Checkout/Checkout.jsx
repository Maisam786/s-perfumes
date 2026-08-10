import "./Checkout.css";

import { Link, useNavigate } from "react-router-dom";
import {
    Lock,
    ShieldCheck,
    Truck,
    CreditCard,
    MapPin,
    Mail,
    CheckCircle2,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function Checkout() {

    const navigate = useNavigate();

    const { cartItems } = useCart();

    /*
    =========================================
    CART TOTALS
    =========================================
    */

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + Number(item.price || 0) * Number(item.quantity || 0),
        0
    );

    const freeShippingTarget = 5000;

    const shipping =
        subtotal >= freeShippingTarget
            ? 0
            : 250;

    const total = subtotal + shipping;


    /*
    =========================================
    FORM STATE
    =========================================
    */

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        province: "",
        notes: "",
        payment: "cod",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    /*
    =========================================
    FORM HANDLING
    =========================================
    */

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        if (errors[name]) {

            setErrors((previous) => {

                const updated = {
                    ...previous,
                };

                delete updated[name];

                return updated;

            });

        }

    };


    /*
    =========================================
    VALIDATION
    =========================================
    */

    const validateForm = () => {

        const newErrors = {};

        const email = formData.email.trim();
        const phone = formData.phone.trim();
        const firstName = formData.firstName.trim();
        const lastName = formData.lastName.trim();
        const address = formData.address.trim();
        const city = formData.city.trim();


        if (!email) {

            newErrors.email =
                "Email address is required.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {

            newErrors.email =
                "Please enter a valid email address.";

        }


        if (!phone) {

            newErrors.phone =
                "Phone number is required.";

        } else if (
            phone.replace(/\D/g, "").length < 10
        ) {

            newErrors.phone =
                "Please enter a valid phone number.";

        }


        if (!firstName) {

            newErrors.firstName =
                "First name is required.";

        }


        if (!lastName) {

            newErrors.lastName =
                "Last name is required.";

        }


        if (!address) {

            newErrors.address =
                "Delivery address is required.";

        }


        if (!city) {

            newErrors.city =
                "City is required.";

        }


        if (!formData.province) {

            newErrors.province =
                "Please select your province.";

        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };


    /*
    =========================================
    PLACE ORDER
    =========================================
    */

    const handleSubmit = (event) => {

        event.preventDefault();

        if (cartItems.length === 0) {

            navigate("/cart");

            return;

        }


        if (!validateForm()) {

            return;

        }


        setIsSubmitting(true);


        /*
        -----------------------------------------
        ORDER SNAPSHOT
        -----------------------------------------
        */

        const order = {

            id:
                `S-${Date.now()
                    .toString()
                    .slice(-8)}`,

            createdAt:
                new Date().toISOString(),

            customer: {
                ...formData,
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                address: formData.address.trim(),
                city: formData.city.trim(),
            },

            items: cartItems.map((item) => ({

                id: item.id,

                name: item.name,

                image: item.image,

                images: item.images || [],

                price: Number(item.price || 0),

                quantity: Number(item.quantity || 1),

                volume: item.volume || "100ml",

                category:
                    item.category ||
                    "S. COLLECTION",

            })),

            subtotal,

            shipping,

            total,

        };


        /*
        -----------------------------------------
        SAVE ORDER
        -----------------------------------------
        */

        sessionStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );


        /*
        -----------------------------------------
        SUCCESS
        -----------------------------------------
        */

        window.setTimeout(() => {

            navigate("/success");

        }, 650);

    };


    /*
    =========================================
    EMPTY CART
    =========================================
    */

    if (cartItems.length === 0) {

        return (

            <main className="sc-checkout-page sc-checkout-empty">

                <div className="container">

                    <div className="sc-checkout-empty-card">

                        <div className="sc-checkout-empty-icon">

                            <CheckCircle2 size={34} />

                        </div>

                        <span className="sc-checkout-label">
                            CHECKOUT
                        </span>

                        <h1>
                            Your cart is empty.
                        </h1>

                        <p>
                            Add a fragrance to your collection
                            before continuing to checkout.
                        </p>

                        <Link
                            to="/shop"
                            className="sc-checkout-empty-button"
                        >
                            Explore Collection
                        </Link>

                    </div>

                </div>

            </main>

        );

    }


    /*
    =========================================
    MAIN CHECKOUT
    =========================================
    */

    return (

        <main className="sc-checkout-page">


            {/* =========================================
                HERO
            ========================================= */}

            <section className="sc-checkout-hero">

                <div className="container sc-checkout-hero-inner">

                    <span className="sc-checkout-label">
                        SECURE CHECKOUT
                    </span>

                    <h1 className="sc-checkout-title">

                        Complete Your
                        <br />

                        <span>
                            Signature Order.
                        </span>

                    </h1>

                    <p className="sc-checkout-description">

                        A seamless final step before your
                        fragrance begins its journey to you.

                    </p>

                </div>

            </section>


            {/* =========================================
                MAIN
            ========================================= */}

            <section className="sc-checkout-section">

                <div className="container sc-checkout-layout">


                    {/* =====================================
                        CUSTOMER FORM
                    ===================================== */}

                    <div className="sc-checkout-form-wrapper">


                        {/* HEADER */}

                        <div className="sc-checkout-heading">

                            <span className="sc-checkout-step">
                                01
                            </span>

                            <div>

                                <span className="sc-checkout-heading-label">
                                    YOUR DETAILS
                                </span>

                                <h2 className="sc-checkout-heading-title">
                                    Delivery Information
                                </h2>

                            </div>

                        </div>


                        <form
                            className="sc-checkout-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >


                            {/* =================================
                                CONTACT
                            ================================= */}

                            <section className="sc-checkout-form-section">

                                <div className="sc-checkout-section-heading">

                                    <div className="sc-checkout-section-icon">
                                        <Mail size={17} />
                                    </div>

                                    <div>

                                        <h3 className="sc-checkout-section-title">
                                            Contact Information
                                        </h3>

                                        <p className="sc-checkout-section-description">
                                            Where should we send your order confirmation?
                                        </p>

                                    </div>

                                </div>


                                <div className="sc-checkout-field">

                                    <label className="sc-checkout-field-label">
                                        Email Address
                                    </label>

                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={`sc-checkout-input ${
                                            errors.email
                                                ? "sc-checkout-input-error"
                                                : ""
                                        }`}
                                    />

                                    {errors.email && (
                                        <small className="sc-checkout-field-error">
                                            {errors.email}
                                        </small>
                                    )}

                                </div>


                                <div className="sc-checkout-field">

                                    <label className="sc-checkout-field-label">
                                        Phone Number
                                    </label>

                                    <input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+92 XXX XXXXXXX"
                                        className={`sc-checkout-input ${
                                            errors.phone
                                                ? "sc-checkout-input-error"
                                                : ""
                                        }`}
                                    />

                                    {errors.phone && (
                                        <small className="sc-checkout-field-error">
                                            {errors.phone}
                                        </small>
                                    )}

                                </div>

                            </section>


                            {/* =================================
                                ADDRESS
                            ================================= */}

                            <section className="sc-checkout-form-section">

                                <div className="sc-checkout-section-heading">

                                    <div className="sc-checkout-section-icon">
                                        <MapPin size={17} />
                                    </div>

                                    <div>

                                        <h3 className="sc-checkout-section-title">
                                            Shipping Address
                                        </h3>

                                        <p className="sc-checkout-section-description">
                                            Tell us where your fragrance should arrive.
                                        </p>

                                    </div>

                                </div>


                                <div className="sc-checkout-form-row">


                                    <div className="sc-checkout-field">

                                        <label className="sc-checkout-field-label">
                                            First Name
                                        </label>

                                        <input
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First name"
                                            className={`sc-checkout-input ${
                                                errors.firstName
                                                    ? "sc-checkout-input-error"
                                                    : ""
                                            }`}
                                        />

                                        {errors.firstName && (
                                            <small className="sc-checkout-field-error">
                                                {errors.firstName}
                                            </small>
                                        )}

                                    </div>


                                    <div className="sc-checkout-field">

                                        <label className="sc-checkout-field-label">
                                            Last Name
                                        </label>

                                        <input
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last name"
                                            className={`sc-checkout-input ${
                                                errors.lastName
                                                    ? "sc-checkout-input-error"
                                                    : ""
                                            }`}
                                        />

                                        {errors.lastName && (
                                            <small className="sc-checkout-field-error">
                                                {errors.lastName}
                                            </small>
                                        )}

                                    </div>

                                </div>


                                <div className="sc-checkout-field">

                                    <label className="sc-checkout-field-label">
                                        Delivery Address
                                    </label>

                                    <input
                                        name="address"
                                        type="text"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Street address, house number..."
                                        className={`sc-checkout-input ${
                                            errors.address
                                                ? "sc-checkout-input-error"
                                                : ""
                                        }`}
                                    />

                                    {errors.address && (
                                        <small className="sc-checkout-field-error">
                                            {errors.address}
                                        </small>
                                    )}

                                </div>


                                <div className="sc-checkout-form-row">


                                    <div className="sc-checkout-field">

                                        <label className="sc-checkout-field-label">
                                            City
                                        </label>

                                        <input
                                            name="city"
                                            type="text"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Your city"
                                            className={`sc-checkout-input ${
                                                errors.city
                                                    ? "sc-checkout-input-error"
                                                    : ""
                                            }`}
                                        />

                                        {errors.city && (
                                            <small className="sc-checkout-field-error">
                                                {errors.city}
                                            </small>
                                        )}

                                    </div>


                                    <div className="sc-checkout-field">

                                        <label className="sc-checkout-field-label">
                                            Province
                                        </label>

                                        <select
                                            name="province"
                                            value={formData.province}
                                            onChange={handleChange}
                                            className={`sc-checkout-select ${
                                                errors.province
                                                    ? "sc-checkout-input-error"
                                                    : ""
                                            }`}
                                        >

                                            <option value="">
                                                Select province
                                            </option>

                                            <option>
                                                Khyber Pakhtunkhwa
                                            </option>

                                            <option>
                                                Punjab
                                            </option>

                                            <option>
                                                Sindh
                                            </option>

                                            <option>
                                                Balochistan
                                            </option>

                                            <option>
                                                Islamabad Capital Territory
                                            </option>

                                            <option>
                                                Gilgit-Baltistan
                                            </option>

                                            <option>
                                                Azad Kashmir
                                            </option>

                                        </select>

                                        {errors.province && (
                                            <small className="sc-checkout-field-error">
                                                {errors.province}
                                            </small>
                                        )}

                                    </div>

                                </div>


                                <div className="sc-checkout-field">

                                    <label className="sc-checkout-field-label">

                                        Order Notes

                                        <span className="sc-checkout-field-optional">
                                            Optional
                                        </span>

                                    </label>

                                    <textarea
                                        name="notes"
                                        rows="4"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        placeholder="Any special instructions for your order?"
                                        className="sc-checkout-textarea"
                                    />

                                </div>

                            </section>


                            {/* =================================
                                PAYMENT
                            ================================= */}

                            <section className="sc-checkout-form-section">


                                <div className="sc-checkout-payment-header">

                                    <div>

                                        <h3 className="sc-checkout-section-title">
                                            Payment Method
                                        </h3>

                                        <p className="sc-checkout-section-description">
                                            Choose how you'd like to pay.
                                        </p>

                                    </div>

                                    <Lock size={19} />

                                </div>


                                {/* COD */}

                                <button
                                    type="button"
                                    className={`sc-checkout-payment-option ${
                                        formData.payment === "cod"
                                            ? "is-active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setFormData((previous) => ({
                                            ...previous,
                                            payment: "cod",
                                        }))
                                    }
                                >

                                    <span className="sc-checkout-radio">

                                        {formData.payment === "cod" && (
                                            <span className="sc-checkout-radio-dot" />
                                        )}

                                    </span>

                                    <span className="sc-checkout-payment-icon">
                                        <Truck size={20} />
                                    </span>

                                    <span className="sc-checkout-payment-content">

                                        <strong>
                                            Cash on Delivery
                                        </strong>

                                        <small>
                                            Pay securely when your order arrives.
                                        </small>

                                    </span>

                                </button>


                                {/* ONLINE */}

                                <button
                                    type="button"
                                    className={`sc-checkout-payment-option ${
                                        formData.payment === "online"
                                            ? "is-active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setFormData((previous) => ({
                                            ...previous,
                                            payment: "online",
                                        }))
                                    }
                                >

                                    <span className="sc-checkout-radio">

                                        {formData.payment === "online" && (
                                            <span className="sc-checkout-radio-dot" />
                                        )}

                                    </span>

                                    <span className="sc-checkout-payment-icon">
                                        <CreditCard size={20} />
                                    </span>

                                    <span className="sc-checkout-payment-content">

                                        <strong>
                                            Online Payment
                                        </strong>

                                        <small>
                                            Secure payment gateway.
                                        </small>

                                    </span>

                                </button>

                            </section>


                            {/* =================================
                                SUBMIT
                            ================================= */}

                            <div className="sc-checkout-submit-area">

                                <button
                                    type="submit"
                                    className="sc-checkout-place-order"
                                    disabled={isSubmitting}
                                >

                                    <span>
                                        {isSubmitting
                                            ? "Confirming Order..."
                                            : "Place Your Order"}
                                    </span>

                                    <span className="sc-checkout-place-order-arrow">
                                        →
                                    </span>

                                </button>


                                <div className="sc-checkout-security-note">

                                    <ShieldCheck size={15} />

                                    <span>
                                        Your information is protected
                                        with secure encryption.
                                    </span>

                                </div>

                            </div>

                        </form>

                    </div>


                    {/* =====================================
                        ORDER SUMMARY
                    ===================================== */}

                    <aside className="sc-checkout-summary">


                        <div className="sc-checkout-summary-header">

                            <div>

                                <span className="sc-checkout-summary-label">
                                    YOUR ORDER
                                </span>

                                <h2 className="sc-checkout-summary-title">
                                    Order Summary
                                </h2>

                            </div>

                            <span className="sc-checkout-item-count">

                                {cartItems.reduce(
                                    (count, item) =>
                                        count + Number(item.quantity || 0),
                                    0
                                )}{" "}
                                ITEMS

                            </span>

                        </div>


                        {/* PRODUCTS */}

                        <div className="sc-checkout-products">

                            {cartItems.map((item) => (

                                <div
                                    className="sc-checkout-product"
                                    key={item.id}
                                >

                                    <div className="sc-checkout-product-visual">

                                        <img
                                            className="sc-checkout-product-image"
                                            src={item.image}
                                            alt={item.name}
                                        />

                                    </div>


                                    <div className="sc-checkout-product-details">

                                        <span className="sc-checkout-product-category">
                                            {item.category ||
                                                "S. COLLECTION"}
                                        </span>

                                        <h3 className="sc-checkout-product-name">
                                            {item.name}
                                        </h3>

                                        <p className="sc-checkout-product-meta">

                                            {item.volume || "100ml"}
                                            {" × "}
                                            {item.quantity}

                                        </p>

                                        <strong className="sc-checkout-product-price">

                                            PKR{" "}
                                            {(
                                                Number(item.price || 0) *
                                                Number(item.quantity || 0)
                                            ).toLocaleString()}

                                        </strong>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* CALCULATIONS */}

                        <div className="sc-checkout-divider" />


                        <div className="sc-checkout-summary-row">

                            <span>
                                Subtotal
                            </span>

                            <strong>
                                PKR {subtotal.toLocaleString()}
                            </strong>

                        </div>


                        <div className="sc-checkout-summary-row">

                            <span>
                                Shipping
                            </span>

                            <strong
                                className={
                                    shipping === 0
                                        ? "sc-checkout-summary-free"
                                        : ""
                                }
                            >

                                {shipping === 0
                                    ? "Free"
                                    : `PKR ${shipping.toLocaleString()}`}

                            </strong>

                        </div>


                        <div className="sc-checkout-divider" />


                        <div className="sc-checkout-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                PKR {total.toLocaleString()}
                            </strong>

                        </div>


                        {/* TRUST */}

                        <div className="sc-checkout-trust">

                            <div className="sc-checkout-trust-item">

                                <ShieldCheck size={17} />

                                <span>
                                    Secure Checkout
                                </span>

                            </div>


                            <div className="sc-checkout-trust-item">

                                <Truck size={17} />

                                <span>
                                    2–5 Day Delivery
                                </span>

                            </div>

                        </div>


                        {/* BRAND NOTE */}

                        <div className="sc-checkout-brand-note">

                            <span className="sc-checkout-brand-mark">
                                S.
                            </span>

                            <p className="sc-checkout-brand-note-text">

                                Every order is carefully prepared,
                                beautifully packaged and delivered
                                with care.

                            </p>

                        </div>


                        <Link
                            to="/cart"
                            className="sc-checkout-back-cart"
                        >
                            ← Return to Cart
                        </Link>

                    </aside>

                </div>

            </section>

        </main>

    );

}