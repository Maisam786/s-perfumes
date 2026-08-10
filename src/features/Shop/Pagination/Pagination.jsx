import "./Pagination.css";

export default function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
}) {
    if (totalPages <= 1) return null;

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);
    };

    return (
        <nav
            className="pagination"
            aria-label="Product pagination"
        >
            <button
                type="button"
                className="pagination-btn pagination-prev"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                aria-label="Go to previous page"
            >
                <span aria-hidden="true">←</span>
                <span>Previous</span>
            </button>

            <div className="pagination-pages">
                {Array.from(
                    { length: totalPages },
                    (_, index) => {
                        const page = index + 1;

                        return (
                            <button
                                type="button"
                                key={page}
                                className={`pagination-btn pagination-number ${
                                    currentPage === page
                                        ? "active"
                                        : ""
                                }`}
                                aria-label={`Go to page ${page}`}
                                aria-current={
                                    currentPage === page
                                        ? "page"
                                        : undefined
                                }
                                onClick={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        );
                    }
                )}
            </div>

            <button
                type="button"
                className="pagination-btn pagination-next"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                aria-label="Go to next page"
            >
                <span>Next</span>
                <span aria-hidden="true">→</span>
            </button>
        </nav>
    );
}