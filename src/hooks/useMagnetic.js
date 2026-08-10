import { useEffect } from "react";

export default function useMagnetic(ref) {

    useEffect(() => {

        const el = ref.current;

        if (!el) return;

        const move = (e) => {

            const rect = el.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) * 0.18;

            const moveY = (y - rect.height / 2) * 0.18;

            el.style.transform =
                `translate(${moveX}px, ${moveY}px) scale(1.03)`;

        };

        const leave = () => {

            el.style.transform =
                "translate(0px,0px) scale(1)";

        };

        el.addEventListener("mousemove", move);

        el.addEventListener("mouseleave", leave);

        return () => {

            el.removeEventListener("mousemove", move);

            el.removeEventListener("mouseleave", leave);

        };

    }, [ref]);

}