import "./PurchasePanel.css";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

import {
    FiShoppingBag,
    FiHeart,
    FiTruck,
    FiShield,
    FiCreditCard,
} from "react-icons/fi";

export default function PurchasePanel({
    product,
    quantity,
}) {

    const { addToCart } = useCart();

    const {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
    } = useWishlist();

    const isWishlisted = wishlistItems.some(
        (item) => item.id === product.id
    );

    const handleWishlist = () => {

        if (isWishlisted) {

            removeFromWishlist(product.id);

            return;
        }

        addToWishlist(product);
    };

    const handleAddToCart = () => {

        addToCart(
            product,
            quantity
        );

    };

    return (

        <div className="purchase-panel">

            <div className="purchase-buttons">

                <button
                    type="button"
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >

                    <FiShoppingBag />

                    Add To Cart

                </button>

                <button
                    type="button"
                    className={
                        isWishlisted
                            ? "wishlist-large active"
                            : "wishlist-large"
                    }
                    onClick={handleWishlist}
                    aria-label={
                        isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                    }
                >

                    <FiHeart
                        fill={
                            isWishlisted
                                ? "currentColor"
                                : "none"
                        }
                    />

                </button>

            </div>

            <div className="purchase-features">

                <div>

                    <FiTruck />

                    <span>
                        Free Shipping
                    </span>

                </div>

                <div>

                    <FiShield />

                    <span>
                        100% Authentic
                    </span>

                </div>

                <div>

                    <FiCreditCard />

                    <span>
                        Secure Payment
                    </span>

                </div>

            </div>

        </div>

    );

}