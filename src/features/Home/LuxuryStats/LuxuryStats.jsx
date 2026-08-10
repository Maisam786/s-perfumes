import "./LuxuryStats.css";

import stats from "../../../data/stats";
import useReveal from "../../../hooks/useReveal";

export default function LuxuryStats() {
const revealRef = useReveal();


return (
    <section
        ref={revealRef}
        className="luxury-stats"
        aria-labelledby="stats-title"
    >
        <div className="container">

            {/* Section Heading */}
            <div className="stats-heading reveal">
                <span>OUR LEGACY</span>

                <h2 id="stats-title">
                    Numbers That
                    <br />
                    Define Luxury
                </h2>
            </div>

            {/* Statistics */}
            <div className="stats-grid">
                {stats.map((item, index) => (
                    <article
                        key={item.id}
                        className={`stat-card reveal delay-${index + 1}`}
                    >
                        <div
                            className="stat-accent"
                            aria-hidden="true"
                        />

                        <h3>
                            {item.number}
                            <span>{item.suffix}</span>
                        </h3>

                        <p>{item.title}</p>
                    </article>
                ))}
            </div>

        </div>
    </section>
);


}
