import { useEffect, useRef, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const timeoutRef = useRef<number>(-1);

    useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [delay, value]);

    return debouncedValue;
};
