import { FC, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RootPortalProps } from '../types';

export const RootPortal: FC<RootPortalProps> = ({
    children,
    wrapperId = 'root-react-portal',
}) => {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        const createAndAppendToBody = () => {
            const wrapEl = document.createElement('div');
            wrapEl.setAttribute('id', wrapperId);
            document.body.append(wrapEl);
            return wrapEl;
        };

        let element = document.getElementById(wrapperId);

        if (!element) {
            element = createAndAppendToBody();
        }

        setWrapperElement(element);
    }, [wrapperId]);

    if (wrapperElement === null) return;

    return createPortal(children, wrapperElement);
};
