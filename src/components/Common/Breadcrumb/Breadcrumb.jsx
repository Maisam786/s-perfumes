import "./Breadcrumb.css";

import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

export default function Breadcrumb({ product }) {

    return (

        <nav
            className="breadcrumb"
            aria-label="Breadcrumb"
        >

            <Link
                to="/"
                className="breadcrumb-link breadcrumb-home"
            >

                <FiHome />

                <span>
                    Home
                </span>

            </Link>


            <FiChevronRight
                className="breadcrumb-separator"
                aria-hidden="true"
            />


            <Link
                to="/shop"
                className="breadcrumb-link"
            >

                Shop

            </Link>


            <FiChevronRight
                className="breadcrumb-separator"
                aria-hidden="true"
            />


            <span
                className="breadcrumb-current"
                title={product?.name}
            >

                {product?.name}

            </span>

        </nav>

    );

}