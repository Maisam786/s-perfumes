import "./PerfumeNotes.css";

const noteSections = [
    {
        key: "topNotes",
        title: "Top Notes",
        subtitle: "The first impression",
    },
    {
        key: "middleNotes",
        title: "Heart Notes",
        subtitle: "The character unfolds",
    },
    {
        key: "baseNotes",
        title: "Base Notes",
        subtitle: "The lasting signature",
    },
];

export default function PerfumeNotes({ product }) {
    return (
        <section
            className="perfume-notes"
            aria-labelledby="perfume-notes-title"
        >
            <div className="perfume-notes-heading">
                <span>FRAGRANCE PROFILE</span>

                <h2 id="perfume-notes-title">
                    The Notes
                </h2>

                <p>
                    Discover the layers that shape the character,
                    depth and lasting impression of this fragrance.
                </p>
            </div>

            <div className="perfume-notes-grid">
                {noteSections.map((section, index) => {
                    const notes = Array.isArray(product?.[section.key])
                        ? product[section.key]
                        : [];

                    return (
                        <article
                            key={section.key}
                            className="note-card"
                        >
                            <div className="note-card-top">
                                <span className="note-number">
                                    0{index + 1}
                                </span>

                                <div>
                                    <span className="note-label">
                                        {section.subtitle}
                                    </span>

                                    <h3>
                                        {section.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="note-divider" />

                            {notes.length > 0 ? (
                                <ul className="note-list">
                                    {notes.map((note) => (
                                        <li key={note}>
                                            <span className="note-dot" />
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="note-empty">
                                    Notes not available.
                                </p>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}