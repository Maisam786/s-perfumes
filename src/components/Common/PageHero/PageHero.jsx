import "./PageHero.css";

export default function PageHero({
    label,
    title,
    description,
}) {

    return (

        <section
            className="page-hero"
            aria-labelledby="page-hero-title"
        >

            <div className="container">

                {label && (
                    <span className="page-hero-label">
                        {label}
                    </span>
                )}


                <h1 id="page-hero-title">
                    {title}
                </h1>


                {description && (
                    <p>
                        {description}
                    </p>
                )}

            </div>

        </section>

    );

}