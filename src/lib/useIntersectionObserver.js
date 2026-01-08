import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that uses Intersection Observer API to detect when an element is visible in the viewport
 * @param {Object} options - Options for the Intersection Observer
 * @param {number|number[]} options.threshold - Threshold(s) at which to trigger the callback (0.0 to 1.0)
 * @param {string} options.rootMargin - Margin around the root element (e.g., "0px 0px 100px 0px")
 * @param {boolean} options.freezeOnceVisible - If true, once visible, element stays visible (won't toggle back to false)
 * @returns {[React.RefObject, boolean]} - Returns [ref, isIntersecting] tuple
 */
export const useIntersectionObserver = ({
    threshold = 0,
    rootMargin = '0px',
    freezeOnceVisible = false,
} = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);
    const frozenRef = useRef(false);

    useEffect(() => {
        const node = targetRef.current;

        // Handle SSR or missing element
        if (!node) return;

        // If already frozen as visible, skip observer
        if (frozenRef.current) return;

        // Check if Intersection Observer is supported
        if (typeof IntersectionObserver === 'undefined') {
            // Fallback: assume visible for older browsers
            setIsIntersecting(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;

                setIsIntersecting(isElementIntersecting);

                // If element became visible and freezeOnceVisible is true, freeze the state
                if (isElementIntersecting && freezeOnceVisible) {
                    frozenRef.current = true;
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, freezeOnceVisible]);

    return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
