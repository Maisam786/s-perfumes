import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <CartProvider>
            <WishlistProvider>

                <App />

                <Toaster
                    position="top-right"
                    toastOptions={{
                        duration: 2500,

                        style: {
                            background: "#161311",
                            color: "#F7F3EE",
                            border: "1px solid rgba(201, 170, 113, .25)",
                            borderRadius: "16px",
                            padding: "14px 18px",
                            fontSize: "14px",
                            fontWeight: 500,
                            boxShadow: "0 12px 35px rgba(0, 0, 0, .35)",
                        },

                        success: {
                            iconTheme: {
                                primary: "#C9AA71",
                                secondary: "#161311",
                            },
                        },
                    }}
                />

            </WishlistProvider>
        </CartProvider>

    </React.StrictMode>
);