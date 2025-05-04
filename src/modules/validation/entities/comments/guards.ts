import { Comment } from 'modules/posts/store/post/types';

const dummyComment: Comment = {
    body: '',
    email: '',
    id: -1,
    name: '',
};

export const isComment = (entity: object): entity is Comment => {
    const commentKeys = Object.keys(dummyComment);
    return commentKeys.every((key) => key in entity);
};
