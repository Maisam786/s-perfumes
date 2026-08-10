import "./WhyChoose.css";

import features from "../../../data/features";
import useReveal from "../../../hooks/useReveal";

export default function WhyChoose() {
const revealRef = useReveal();


return (
    <section
        ref={revealRef}
        className="why-choose"
        aria-labelledby="why-choose-title"
    >
        <div className="container">

            {/* Section Heading */}
            <div className="why-heading reveal">
                <span>WHY CHOOSE S.</span>

                <h2 id="why-choose-title">
                    Crafted Beyond
                    <br />
                    Ordinary Luxury
                </h2>

                <p>
                    Every fragrance is created to become a signature.
                    From premium oils to elegant presentation, luxury
                    lives in every detail.
                </p>
            </div>

            {/* Main Content */}
            <div className="why-layout">

                {/* Left Features */}
                <div className="why-column why-left">

                    <article className="why-card reveal delay-1">
                        <h3>{features[0].title}</h3>
                        <p>{features[0].description}</p>
                    </article>

                    <article className="why-card reveal delay-2">
                        <h3>{features[2].title}</h3>
                        <p>{features[2].description}</p>
                    </article>

                </div>

                {/* Center Product */}
                <div className="why-image reveal delay-2">

                    <div
                        className="why-image-glow"
                        aria-hidden="true"
                    />

                    <img
                        src="/why/perfume.png"
                        alt="S. luxury perfume bottle"
                        loading="lazy"
                    />

                </div>

                {/* Right Features */}
                <div className="why-column why-right">

                    <article className="why-card reveal delay-3">
                        <h3>{features[1].title}</h3>
                        <p>{features[1].description}</p>
                    </article>

                    <article className="why-card reveal delay-4">
                        <h3>{features[3].title}</h3>
                        <p>{features[3].description}</p>
                    </article>

                </div>

            </div>

        </div>
    </section>
);


}
