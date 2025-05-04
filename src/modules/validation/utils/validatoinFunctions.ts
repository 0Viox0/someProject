import { Comment } from '@redux/post/types';
import { ValidateResultComment, ValidateResultPost } from '../types/types';
import { Post } from '@redux/userPosts/types';
import { isComment, validateComment } from '../entities/comments';
import { isPost, validatePost } from '../entities/posts';

export function validateEntity(entity: Comment): ValidateResultComment;
export function validateEntity(entity: Post): ValidateResultPost;
export function validateEntity(
    entity: Comment | Post,
): ValidateResultComment | ValidateResultPost {
    if (isComment(entity)) {
        return validateComment(entity);
    }

    if (isPost(entity)) {
        return validatePost(entity);
    }
}
