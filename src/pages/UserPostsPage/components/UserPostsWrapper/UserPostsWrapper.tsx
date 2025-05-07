import { FC, ReactNode } from 'react';

import './UserPostsWrapper.scss';

export type UserPostsWrapperProps = {
    children: ReactNode;
};

export const UserPostsWrapper: FC<UserPostsWrapperProps> = ({ children }) => {
    return <div className="userPostPage">{children}</div>;
};
