import "./SizeSelector.css";

import { useState } from "react";

export default function SizeSelector({ sizes }) {
    const [selected, setSelected] = useState(sizes[0]);

    return (
        <div className="size-selector">

            <h4>
                Select Size
            </h4>

            <div className="sizes">

                {sizes.map((size) => (
                    <button
                        key={size}
                        className={
                            selected === size
                                ? "size active"
                                : "size"
                        }
                        onClick={() => setSelected(size)}
                    >
                        {size}
                    </button>
                ))}

            </div>

        </div>
    );
}