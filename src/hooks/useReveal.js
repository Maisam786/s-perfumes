import { useEffect, useRef } from "react";

export default function useReveal() {

    const ref = useRef(null);

    useEffect(() => {

        if (!ref.current) return;

        const section = ref.current;

        const reveals = section.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                    }

                });

            },

            {
                threshold: 0.15,
            }

        );

        reveals.forEach((item) => observer.observe(item));

        return () => {

            reveals.forEach((item) => observer.unobserve(item));

        };

    }, []);

    return ref;

}