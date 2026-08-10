import { Outlet } from "react-router-dom";

import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";

export default function MainLayout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}