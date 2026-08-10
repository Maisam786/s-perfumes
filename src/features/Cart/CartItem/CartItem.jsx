import "./CartItem.css";

import {
    FiMinus,
    FiPlus,
    FiTrash2,
} from "react-icons/fi";

export default function CartItem({
    item,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
}) {
    return (
        <article className="cart-item">

            {/* PRODUCT IMAGE */}

            <div className="cart-item-image">
                <img
                    src={item.image}
                    alt={item.name}
                />
            </div>


            {/* PRODUCT INFORMATION */}

            <div className="cart-item-info">

                <h3>
                    {item.name}
                </h3>

                <p>
                    {item.category}
                </p>

                <span>
                    PKR {item.price.toLocaleString()}
                </span>

            </div>


            {/* QUANTITY */}

            <div
                className="cart-quantity"
                aria-label={`Quantity for ${item.name}`}
            >

                <button
                    type="button"
                    onClick={() =>
                        decreaseQuantity(item.id)
                    }
                    aria-label={`Decrease quantity of ${item.name}`}
                >
                    <FiMinus />
                </button>

                <strong>
                    {item.quantity}
                </strong>

                <button
                    type="button"
                    onClick={() =>
                        increaseQuantity(item.id)
                    }
                    aria-label={`Increase quantity of ${item.name}`}
                >
                    <FiPlus />
                </button>

            </div>


            {/* REMOVE */}

            <button
                type="button"
                className="remove-btn"
                onClick={() =>
                    removeFromCart(item.id)
                }
                aria-label={`Remove ${item.name} from cart`}
            >
                <FiTrash2 />
            </button>

        </article>
    );
}
