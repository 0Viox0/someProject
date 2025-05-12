import { FC, ReactNode } from 'react';

import './PostPageWrapper.scss';

export type PostPageWrapperProps = {
    children: ReactNode;
};

export const PostPageWrapper: FC<PostPageWrapperProps> = ({ children }) => {
    return <div className="userPostPage">{children}</div>;
};
