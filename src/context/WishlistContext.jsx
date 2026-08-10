import toast from "react-hot-toast";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const WISHLIST_STORAGE_KEY = "wishlist";

export const WishlistContext = createContext(null);

/* =========================================================
   GET STORED WISHLIST
========================================================= */

function getStoredWishlist() {
    try {
        const savedWishlist =
            localStorage.getItem(
                WISHLIST_STORAGE_KEY
            );

        if (!savedWishlist) {
            return [];
        }

        const parsedWishlist =
            JSON.parse(savedWishlist);

        return Array.isArray(parsedWishlist)
            ? parsedWishlist
            : [];
    } catch {
        return [];
    }
}

/* =========================================================
   WISHLIST PROVIDER
========================================================= */

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] =
        useState(getStoredWishlist);

    /* =====================================================
       SAVE WISHLIST
    ===================================================== */

    useEffect(() => {
        localStorage.setItem(
            WISHLIST_STORAGE_KEY,
            JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);

    /* =====================================================
       ADD TO WISHLIST
    ===================================================== */

    const addToWishlist = (product) => {
        const alreadyExists =
            wishlistItems.some(
                (item) => item.id === product.id
            );

        if (alreadyExists) {
            toast("Already in wishlist", {
                id: `wishlist-exists-${product.id}`,
            });

            return;
        }

        /*
         * State updater contains ONLY state logic.
         * No toast or other side effects here.
         */

        setWishlistItems((previousItems) => [
            ...previousItems,
            product,
        ]);

        /*
         * Notification happens exactly once,
         * outside the state updater.
         */

        toast.success(
            `${product.name} added to wishlist`,
            {
                id: `wishlist-added-${product.id}`,
            }
        );
    };

    /* =====================================================
       REMOVE FROM WISHLIST
    ===================================================== */

    const removeFromWishlist = (id) => {
        setWishlistItems((previousItems) =>
            previousItems.filter(
                (item) => item.id !== id
            )
        );
    };

    /* =====================================================
       CONTEXT VALUE
    ===================================================== */

    const value = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

/* =========================================================
   USE WISHLIST
========================================================= */

export function useWishlist() {
    const context =
        useContext(WishlistContext);

    if (!context) {
        throw new Error(
            "useWishlist must be used inside a WishlistProvider."
        );
    }

    return context;
}