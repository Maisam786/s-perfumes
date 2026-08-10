import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (

        <main className="notfound-page">

            <div className="container">

                <span className="notfound-code">

                    404

                </span>

                <h1>

                    Page Not Found

                </h1>

                <p>

                    The page you're looking for doesn't exist,
                    may have been moved,
                    or is temporarily unavailable.

                </p>

                <Link
                    to="/"
                    className="btn-primary"
                >

                    Back To Home

                </Link>

            </div>

        </main>

    );

}