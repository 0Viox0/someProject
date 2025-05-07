import { text } from 'shared/text';

import './PostPageHeader.scss';

export const PostPageHeader = () => {
    return <h2 className="userPostHeader">{text.POST_PAGE.heading}</h2>;
};
