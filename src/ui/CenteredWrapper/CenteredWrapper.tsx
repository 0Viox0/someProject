import { FC, ReactNode } from 'react';

import './CenteredWrapper.scss';

export type CenteredWrapperProps = {
    children: ReactNode;
};

export const CenteredWrapper: FC<CenteredWrapperProps> = ({ children }) => {
    return <div className="centeredWrapper">{children}</div>;
};
