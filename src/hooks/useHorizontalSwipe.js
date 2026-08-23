import { useEffect, useRef } from "react";

export default function useHorizontalSwipe() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        let startX = 0;
        let startY = 0;
        let isHorizontal = false;

        const handleTouchStart = (event) => {
            const touch = event.touches[0];

            startX = touch.clientX;
            startY = touch.clientY;
            isHorizontal = false;
        };

        const handleTouchMove = (event) => {
            if (!event.touches.length) return;

            const touch = event.touches[0];

            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            /*
             * Wait until the gesture has a clear direction.
             */
            if (
                Math.abs(deltaX) < 8 &&
                Math.abs(deltaY) < 8
            ) {
                return;
            }

            /*
             * Horizontal gesture.
             */
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                isHorizontal = true;

                /*
                 * Only stop the browser's native handling
                 * when the gesture is actually horizontal.
                 */
                event.preventDefault();

                slider.scrollLeft -= deltaX;

                startX = touch.clientX;
            }

            /*
             * If vertical movement is greater,
             * DO NOTHING.
             *
             * This allows the browser/page to scroll normally.
             */
        };

        const handleTouchEnd = () => {
            isHorizontal = false;
        };

        slider.addEventListener(
            "touchstart",
            handleTouchStart,
            { passive: true }
        );

        slider.addEventListener(
            "touchmove",
            handleTouchMove,
            { passive: false }
        );

        slider.addEventListener(
            "touchend",
            handleTouchEnd,
            { passive: true }
        );

        return () => {
            slider.removeEventListener(
                "touchstart",
                handleTouchStart
            );

            slider.removeEventListener(
                "touchmove",
                handleTouchMove
            );

            slider.removeEventListener(
                "touchend",
                handleTouchEnd
            );
        };
    }, []);

    return sliderRef;
}