import "./ProductInfo.css";

import { useState } from "react";

import SizeSelector from "../SizeSelector/SizeSelector";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import PurchasePanel from "../PurchasePanel/PurchasePanel";

import { FiStar } from "react-icons/fi";

export default function ProductInfo({ product }) {

    const [quantity, setQuantity] = useState(1);

    return (

        <div className="product-info-panel">

            <p className="product-brand">
                {product.brand}
            </p>

            <h1>
                {product.name}
            </h1>

            <div className="product-rating-large">

                <FiStar />

                <span>
                    {product.rating}
                </span>

                <small>
                    ({product.reviews} Reviews)
                </small>

            </div>

            <div className="price-wrapper">

                <span className="current-price">
                    PKR {product.price.toLocaleString()}
                </span>

                <span className="old-price">
                    PKR {product.oldPrice.toLocaleString()}
                </span>

            </div>

            <p className="product-description">
                {product.description}
            </p>

            <SizeSelector
                sizes={product.sizes}
            />

            <QuantitySelector
                onChange={setQuantity}
            />

            <PurchasePanel
                product={product}
                quantity={quantity}
            />

            <div className="stock">

                In Stock

                <strong>
                    {" "}
                    {product.stock}
                </strong>

            </div>

        </div>

    );

}