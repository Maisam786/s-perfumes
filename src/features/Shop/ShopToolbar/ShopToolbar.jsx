import "./ShopToolbar.css";

import { FiGrid, FiList } from "react-icons/fi";

export default function ShopToolbar({
    total,
    originalTotal,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
}) {
    return (
        <div className="shop-toolbar">

            {/* =========================================
                RESULTS
            ========================================= */}

            <div className="toolbar-results">
                <span className="toolbar-label">
                    COLLECTION
                </span>

                <p>
                    Showing{" "}
                    <strong>{total}</strong>{" "}
                    of{" "}
                    <strong>{originalTotal}</strong>{" "}
                    products
                </p>
            </div>


            {/* =========================================
                CONTROLS
            ========================================= */}

            <div className="toolbar-controls">

                {/* SORT */}

                <label className="toolbar-sort">

                    <span>
                        Sort by
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                        aria-label="Sort products"
                    >
                        <option value="featured">
                            Featured
                        </option>

                        <option value="newest">
                            Newest
                        </option>

                        <option value="low-high">
                            Price: Low → High
                        </option>

                        <option value="high-low">
                            Price: High → Low
                        </option>

                        <option value="rating">
                            Highest Rated
                        </option>
                    </select>

                </label>


                {/* VIEW */}

                <div
                    className="view-buttons"
                    aria-label="Product view"
                >
                    <button
                        type="button"
                        className={
                            viewMode === "grid"
                                ? "active"
                                : ""
                        }
                        aria-label="Grid view"
                        aria-pressed={
                            viewMode === "grid"
                        }
                        onClick={() =>
                            setViewMode("grid")
                        }
                    >
                        <FiGrid />
                    </button>

                    <button
                        type="button"
                        className={
                            viewMode === "list"
                                ? "active"
                                : ""
                        }
                        aria-label="List view"
                        aria-pressed={
                            viewMode === "list"
                        }
                        onClick={() =>
                            setViewMode("list")
                        }
                    >
                        <FiList />
                    </button>

                </div>

            </div>

        </div>
    );
}