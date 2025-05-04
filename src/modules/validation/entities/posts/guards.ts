import { Post } from '@redux/userPosts/types';

const dummyPost: Post = {
    author: '',
    body: '',
    id: -1,
    title: '',
    userId: -1,
};

export const isPost = (entity: object): entity is Post => {
    const postKeys = Object.keys(dummyPost);
    return postKeys.every((key) => key in entity);
};
