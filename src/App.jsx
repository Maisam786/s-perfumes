import { useEffect, useState } from "react";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/typography.css";
import "./styles/animations.css";
import "./styles/luxury.css";

import Loader from "./components/Common/UI/Loader/Loader";
import AppRoutes from "./routes";

const LOADER_DURATION = 1400;

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [loading]);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setLoading(false);
        }, LOADER_DURATION);

        return () => {
            window.clearTimeout(timer);
        };
    }, []);

    return (
        <div className="app">

            <div
                className="page-texture"
                aria-hidden="true"
            />

            {loading && <Loader />}

            <AppRoutes />

        </div>
    );
}