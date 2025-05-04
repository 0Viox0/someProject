import { FC, ReactNode } from 'react';

import './UserPageWrapper.scss';

export type UserPageWrapperProps = {
    children: ReactNode;
};

export const UserPageWrapper: FC<UserPageWrapperProps> = ({ children }) => {
    return <div className={'userPage'}>{children}</div>;
};
