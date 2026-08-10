import toast from "react-hot-toast";
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const CART_STORAGE_KEY = "cart";

export const CartContext = createContext(null);

function getStoredCart() {
    try {
        const savedCart = localStorage.getItem(
            CART_STORAGE_KEY
        );

        if (!savedCart) {
            return [];
        }

        const parsedCart = JSON.parse(savedCart);

        return Array.isArray(parsedCart)
            ? parsedCart
            : [];
    } catch {
        return [];
    }
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] =
        useState(getStoredCart);

    useEffect(() => {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    /* =====================================================
       ADD TO CART
    ===================================================== */

    const addToCart = (product, quantity = 1) => {
        setCartItems((previousItems) => {
            const existingItem = previousItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return previousItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity +
                                  quantity,
                          }
                        : item
                );
            }

            return [
                ...previousItems,
                {
                    ...product,
                    quantity,
                },
            ];
        });

        /*
         * Stable toast ID.
         *
         * If the same toast is triggered twice,
         * react-hot-toast updates/reuses this toast
         * instead of rendering two identical popups.
         */
        toast.success(
            `${quantity} × ${product.name} added to cart`,
            {
                id: `cart-added-${product.id}`,
            }
        );
    };

    /* =====================================================
       INCREASE QUANTITY
    ===================================================== */

    const increaseQuantity = (id) => {
        setCartItems((previousItems) =>
            previousItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              item.quantity + 1,
                      }
                    : item
            )
        );
    };

    /* =====================================================
       DECREASE QUANTITY
    ===================================================== */

    const decreaseQuantity = (id) => {
        setCartItems((previousItems) =>
            previousItems
                .map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity - 1,
                          }
                        : item
                )
                .filter(
                    (item) => item.quantity > 0
                )
        );
    };

    /* =====================================================
       REMOVE FROM CART
    ===================================================== */

    const removeFromCart = (id) => {
        setCartItems((previousItems) =>
            previousItems.filter(
                (item) => item.id !== id
            )
        );
    };

    /* =====================================================
       CART TOTALS
    ===================================================== */

    const subtotal = cartItems.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );

    const freeShippingTarget = 5000;

    const shipping =
        subtotal >= freeShippingTarget
            ? 0
            : 250;

    const total = subtotal + shipping;

    /* =====================================================
       CONTEXT VALUE
    ===================================================== */

    const value = {
        cartItems,

        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,

        subtotal,
        shipping,
        total,
        freeShippingTarget,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside a CartProvider."
        );
    }

    return context;
}