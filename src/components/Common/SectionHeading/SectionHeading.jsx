import "./SectionHeading.css";

export default function SectionHeading({

    title,

    subtitle,

    align = "center"

}){

    return(

        <div className={`section-heading ${align}`}>

            <h2>

                {title}

            </h2>

            {subtitle && (

                <p>

                    {subtitle}

                </p>

            )}

        </div>

    );

}