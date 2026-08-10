import "./Loader.css";

export default function Loader() {
    return (
        <div
            className="loader"
            role="status"
            aria-label="Loading"
        >
            <div className="loader-logo-wrap">
                <img
                    src="/logo.svg"
                    alt="S. Luxury Perfumes"
                    className="loader-logo"
                />
            </div>
        </div>
    );
}