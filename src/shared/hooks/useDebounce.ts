import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = <T extends (...args: unknown[]) => void>(
    callback: T,
    delay: number,
) => {
    const timeoutRef = useRef<number | null>(null);

    const debouncedFunction = useCallback(
        (...args: Parameters<T>) => {
            clearTimeout(timeoutRef.current);

            timeoutRef.current = window.setTimeout(
                () => callback(...args),
                delay,
            );
        },
        [delay],
    );

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return debouncedFunction;
};
