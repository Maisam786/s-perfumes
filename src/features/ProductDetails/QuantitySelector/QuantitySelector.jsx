import "./QuantitySelector.css";

import { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

export default function QuantitySelector({ onChange }) {

    const [quantity, setQuantity] = useState(1);

    const increase = () => {

        setQuantity((previousQuantity) => {

            const newQuantity = previousQuantity + 1;

            onChange?.(newQuantity);

            return newQuantity;

        });

    };

    const decrease = () => {

        setQuantity((previousQuantity) => {

            if (previousQuantity <= 1) {
                return previousQuantity;
            }

            const newQuantity = previousQuantity - 1;

            onChange?.(newQuantity);

            return newQuantity;

        });

    };

    return (

        <div className="quantity-selector">

            <h4>
                Quantity
            </h4>

            <div className="quantity-box">

                <button
                    type="button"
                    onClick={decrease}
                    aria-label="Decrease quantity"
                >
                    <FiMinus />
                </button>

                <span>
                    {quantity}
                </span>

                <button
                    type="button"
                    onClick={increase}
                    aria-label="Increase quantity"
                >
                    <FiPlus />
                </button>

            </div>

        </div>

    );

}