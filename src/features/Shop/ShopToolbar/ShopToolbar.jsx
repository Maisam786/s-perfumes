import "./ShopToolbar.css";

import { FiGrid, FiList } from "react-icons/fi";

export default function ShopToolbar({
    total,
    originalTotal,
    sortBy,
    setSortBy,
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
                        className="active"
                        aria-label="Grid view"
                        aria-pressed="true"
                    >
                        <FiGrid />
                    </button>

                    <button
                        type="button"
                        className="view-button-disabled"
                        aria-label="List view unavailable"
                        aria-pressed="false"
                        disabled
                    >
                        <FiList />
                    </button>

                </div>

            </div>

        </div>
    );
}